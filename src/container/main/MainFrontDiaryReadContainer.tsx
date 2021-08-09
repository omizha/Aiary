import React, { useEffect, useState } from "react";
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
import BorderedTextButton from "../../components/button/BorderedTextButton";
import {
    getDiary,
    setDiaryDelete,
    setDiaryUpdate,
} from "../../lib/reduxDispatch/emotionDiary";
import { DiaryEntity } from "../../lib/reduxStore/store/emotionDiary";
import { CommonActions } from "@react-navigation/native";
import { Radio } from "native-base";
import Loading from "../../components/loading/Loading";
import DiaryAnalytic from "../../lib/diary/analytic";

export default function MainFrontDiaryReadContainer({
    navigation,
    route = null,
    hint = "감정일기의 내용을 입력해주세요",
}) {
    const { title } = route.params;

    const [date, setDate] = useState(
        title ||
            `${new Date().getMonth() + 1}월 ${new Date().getDate()}일 감정일기`
    );
    const [textbody, setTextbody] = useState("");
    const [emotion, setEmotion] = useState(3);
    const [currentDiary, setCurrentDiary] = useState<DiaryEntity>(null);
    const [loading, setLoading] = useState(false);
    const diary = getDiary();

    useEffect(() => {
        for (let i = 0; i < diary.length; i++) {
            if (diary[i].title === title) {
                setTextbody(diary[i].body.join("\n"));
                setEmotion(diary[i].emotionMine);
                setCurrentDiary(diary[i]);
            }
        }
    }, []);

    const onRightButtonPress = () => {
        Alert.alert(
            "감정일기 삭제하기",
            `${title}를 정말 삭제하시겠습니까?`,
            [
                {
                    text: "예",
                    onPress: () => {
                        console.log(title);
                        setDiaryDelete({
                            title: title,
                            body: null,
                            emotionMine: null,
                        });
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [
                                    {
                                        name: "main",
                                        params: {
                                            routeParam: "",
                                        },
                                    },
                                ],
                            })
                        );
                    },
                },
                {
                    text: "아니요",
                },
            ],
            { cancelable: false }
        );
    };

    const onAnlyticPress = () => {
        if (!currentDiary.emotionAI.length) {
            setLoading(true);
            DiaryAnalytic(setLoading, currentDiary)
                .then((value) => {
                    console.log(value);
                    setDiaryUpdate(value);
                    navigation.push("diary", {
                        routeParam: "analytic",
                        title: date,
                    });
                })
                .catch();
        } else {
            navigation.push("diary", { routeParam: "analytic", title: date });
        }
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
        <>
            <Screen
                title={date}
                transparent={true}
                leftButton={"back"}
                rightButton={"more"}
                onRightButtonPress={onRightButtonPress}
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
                                    height:
                                        Dimensions.get("screen").height * 0.3,
                                },
                            ]}
                            textAlignVertical="top"
                            multiline={true}
                            placeholder={hint}
                            value={textbody}
                            editable={false}
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
                                value={`${emotion}`}
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
                                color={
                                    textbody.length > 0 ? "#000000" : "#BBBBBB"
                                }
                                onPress={onAnlyticPress}
                                text="분석하기"
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Screen>
            <Loading display={loading} />
        </>
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
