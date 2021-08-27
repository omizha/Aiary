import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Screen from "../../components/layout/Screen";
import styles from "../../components/profile/ProfileStyle";
import {
    Alert,
    Dimensions,
    Text,
    TextInput,
    View,
    StyleSheet,
} from "react-native";
import BorderedTextButton from "../../components/primitives/button/BorderedTextButton";
import { setDiaryWrite } from "../../lib/reduxDispatch/emotionDiary";
import { DiaryEntity } from "../../lib/reduxStore/store/emotionDiary";
import { CommonActions } from "@react-navigation/native";
import { Radio } from "native-base";

export default function MainFrontDiaryWriteContainer({
    navigation,
    route,
    hint = "감정일기의 내용을 입력해주세요",
}) {
    const { title } = route.params;

    const [date, setDate] = useState(
        title ||
            `${new Date().getMonth() + 1}월 ${new Date().getDate()}일 감정일기`
    );
    const [textbody, setTextbody] = useState("");
    const [emotion, setEmotion] = useState(3);

    const onWritePress = () => {
        const result = textbody.split("\n").filter((text) => text !== "");
        if (!result.length) {
            return;
        }

        const data: string = date;
        const month = data.split("월", 1)[0];
        const dateed = data.split(" ", 2)[1].replace("일", "");

        const diary: DiaryEntity = {
            ...new DiaryEntity(),
            body: result,
            emotionMine: emotion,
            createdAt: new Date(2021, +month - 1, +dateed),
            title: date,
        };
        setDiaryWrite(diary);

        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    {
                        name: "main",
                        params: {
                            routeParam: "read",
                            title: diary.title,
                        },
                    },
                ],
            })
        );
        Alert.alert(
            "감정일기 작성",
            "감정일기가 정상적으로 작성되었습니다.",
            [{ text: "OK" }],
            { cancelable: false }
        );
    };

    const getEmoticonText = () => {
        switch (emotion) {
            case 1:
                return ["나빠요", "#FED342"];

            case 2:
                return ["별로예요", "#FEC63D"];

            case 3:
                return ["보통이에요", "#FEBA38"];

            case 4:
                return ["좋아요", "#FEAF33"];

            case 5:
                return ["최고예요", "#FEA52F"];

            default:
                return ["모르겠어요", "#FEBA38"];
        }
    };

    return (
        <Screen
            title={date}
            transparent={true}
            leftButton={"back"}
            decoratedBackground={true}
            backgroundColor="#F4EEEA"
        >
            <KeyboardAwareScrollView>
                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                    }}
                >
                    <TextInput
                        style={[
                            styles.routingButtonWrapper,
                            {
                                backgroundColor: "#E9E9E9",
                                padding: 15,
                                borderRadius: 5,
                                height: Dimensions.get("screen").height * 0.3,
                            },
                        ]}
                        textAlignVertical="top"
                        multiline={true}
                        placeholder={hint}
                        value={textbody}
                        onChangeText={(text) => {
                            setTextbody(text);
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: 50,
                        }}
                    >
                        <Text style={diaryStyle.emotionTitleText}>
                            오늘의 내 기분은
                        </Text>

                        <Radio.Group
                            style={{ flexDirection: "row" }}
                            name="emotion"
                            defaultValue="3"
                            onChange={(value) => {
                                setEmotion(+value);
                            }}
                            // @ts-ignore
                            size={""}
                        >
                            <Radio
                                style={diaryStyle.radio}
                                value="1"
                                accessibilityLabel="btn"
                            />
                            <Radio
                                style={diaryStyle.radio}
                                value="2"
                                accessibilityLabel="btn"
                            />
                            <Radio
                                style={diaryStyle.radio}
                                value="3"
                                accessibilityLabel="btn"
                            />
                            <Radio
                                style={diaryStyle.radio}
                                value="4"
                                accessibilityLabel="btn"
                            />
                            <Radio
                                style={diaryStyle.radio}
                                value="5"
                                accessibilityLabel="btn"
                            />
                        </Radio.Group>
                        <Text
                            style={{
                                ...diaryStyle.emotionResultText,
                                color: getEmoticonText()[1],
                            }}
                        >
                            {getEmoticonText()[0]}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignContent: "flex-end",
                            justifyContent: "flex-end",
                            marginBottom: 20,
                        }}
                    >
                        <BorderedTextButton
                            width={Math.round(
                                Dimensions.get("screen").width * 0.9
                            )}
                            color={textbody.length > 0 ? "#000000" : "#BBBBBB"}
                            onPress={onWritePress}
                            text="저장하기"
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </Screen>
    );
}

const diaryStyle = StyleSheet.create({
    radio: {
        margin: 5,
    },
    emotionTitleText: {
        fontSize: 24,
        fontWeight: "700",
    },
    emotionResultText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#F8804F",
    },
});
