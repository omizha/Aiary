import React, { useEffect, useState } from "react";

import Screen from "../../components/layout/Screen";
import { Dimensions, Text, View, StyleSheet, ScrollView } from "react-native";
import { getDiary } from "../../lib/reduxDispatch/emotionDiary";
import { DiaryEntity } from "../../lib/reduxStore/store/emotionDiary";
import { Radio } from "native-base";
import MainFrontRoutingCardWrapper from "../../components/main/MainFrontRoutingCardWrapper";
import DiaryAnalyticCard from "../../components/diary/DiaryAnalyticCard";
import { Avatar } from "@ui-kitten/components";

export default function MainFrontDiaryAnalyticContainer({ route = null }) {
    const { title } = route.params;

    const [date, setDate] = useState(
        title ||
            `${new Date().getMonth() + 1}월 ${new Date().getDate()}일 감정일기`
    );
    const [emotion, setEmotion] = useState(3);
    const [currentDiary, setCurrentDiary] = useState<DiaryEntity>(null);
    const diary = getDiary();

    useEffect(() => {
        for (let i = 0; i < diary.length; i++) {
            if (diary[i].title === title) {
                setEmotion(diary[i].emotionMine);
                setCurrentDiary(diary[i]);
            }
        }
    }, []);

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
                decoratedBackground={true}
                backgroundColor="#F4EEEA"
            >
                <ScrollView
                    style={{
                        flex: 1,
                        marginTop: 20,
                        flexDirection: "column",
                        alignContent: "flex-start",
                    }}
                >
                    {currentDiary &&
                        currentDiary.body.map((element, bodyIndex) => (
                            <>
                                <MainFrontRoutingCardWrapper
                                    height={
                                        Dimensions.get("screen").height * 0.1
                                    }
                                >
                                    <DiaryAnalyticCard text={element} />
                                </MainFrontRoutingCardWrapper>
                                <View
                                    style={{
                                        margin: 30,
                                    }}
                                >
                                    {currentDiary.emotionAI.map(
                                        (emotionRes) =>
                                            emotionRes.index == bodyIndex && (
                                                <>
                                                    {emotionRes.data.response.replies.map(
                                                        (res) => (
                                                            <>
                                                                <View
                                                                    style={{
                                                                        flexDirection:
                                                                            "row",
                                                                    }}
                                                                >
                                                                    {res.text &&
                                                                        !res.text.includes(
                                                                            "https://"
                                                                        ) && (
                                                                            <>
                                                                                <Avatar
                                                                                    size="medium"
                                                                                    source={require("../../assets/images/human.jpg")}
                                                                                />
                                                                                <Text
                                                                                    style={{
                                                                                        fontSize: 18,
                                                                                        margin: 6,
                                                                                        paddingRight: 44,
                                                                                        paddingLeft: 4,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        res.text
                                                                                    }
                                                                                </Text>
                                                                            </>
                                                                        )}
                                                                </View>
                                                            </>
                                                        )
                                                    )}
                                                </>
                                            )
                                    )}
                                </View>
                            </>
                        ))}
                    <View
                        style={{
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
                </ScrollView>
            </Screen>
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
    },
});
