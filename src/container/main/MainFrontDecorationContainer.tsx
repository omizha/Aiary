import React, { useEffect, useState } from "react";
import Screen from "../../components/layout/Screen";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import MainFrontRoutingCardWrapper from "../../components/main/MainFrontRoutingCardWrapper";
import MainFrontDiaryWriteCard from "../../components/main/MainFrontDiaryWriteCard";
import MainFrontPreviousCard from "../../components/main/MainFrontPreviousCard";
import MainFrontEmotionChart from "../../components/main/MainFrontEmotionChart";
import {
    getDiary,
    setDiaryReset,
    setDiaryWrite,
} from "../../lib/reduxDispatch/emotionDiary";
import { DiaryEntity } from "../../lib/reduxStore/store/emotionDiary";
import { store } from "../../lib/reduxStore/store";

export const DiaryInitialData = [
    {
        body: `드디어 이번 학기 마지막 과제를 끝냈다!
만세 종강이다!!
교수님 대체 저희가 뭘 잘못했길래 이렇게 늦게 끝내주시나요...
아이디어가 너무 늦게 나와서 결국 오늘 벼락치기가 돼버렸다.
과제는 너무 일찍 시도해도 진도가 안 나간다는 걸 배웠다.
당장이라도 펑펑 놀고 싶지만 졸리니까 내일 일어나서 생각해보자.`,
        emotionMine: 5,
        emotionAI: [],
        date: "2021-07-10",
    },
    {
        body: `사회적 거리두기 4단계가 설마 진짜 시행될 줄은 몰랐다.
다음 주로 잡은 약속을 취소할 수밖에 없게 됐다 ㅠㅠㅠ
물론 다음 학기에도 비대면 절평 하면 좋겠지만, 지금은 방학이 한창인데ㅠㅠ
빨리 마음 높고 놀이공원도 가고 술자리도 가질 수 있게 되면 좋겠다.
집에서도 무기력하게만 있지 말고 적극적으로 할 일을 찾아야겠다.`,
        emotionMine: 3,
        emotionAI: [],
        date: "2021-07-12",
    },
    {
        body: `저녁에 강아지를 산책시키다가 오늘은 평소랑 조금 다른 길을 걸었다.
익히 알던 거리이건만, 시선을 올리면 기억과 다른 간판이 절반이나 되는 게 느낌이 묘했다.
십 년이 지나고 여길 다시 찾으면 과연 알아볼 수나 있을까.
오늘날에는 비단 가게뿐만 아니라 온갖 것들이 점점 더 짧은 시간 머물고 스쳐가는 것 같다.
미래에 이 추세가 더 심해지더라도, 힘들 때 안주할 수 있는 과거 정도는 남겨둘 수 있었으면 좋겠다.`,
        emotionMine: 2,
        emotionAI: [],
        date: "2021-07-20",
    },
    {
        body: `오늘 날씨가 너무 좋아서 어쩔 수 없이 나들이를 갔다.
바람이 부니까 햇볕은 뜨거워도 걸어다닐 만 했다.
이왕 나온 김에 새로 생긴 이삭버거에 가봤다.
보기에도 그렇지만 먹어보니까 수제버거 느낌인데 정말 맛있었다.
생각난 김에 내일 점심은 이삭 토스트에서 먹어야겠다 ㅎㅎ`,
        emotionMine: 5,
        emotionAI: [
            {
                data: {
                    response: {
                        replies: [
                            {
                                from: {
                                    from: "자동 답변 / 리액션 답변",
                                    link:
                                        "/bot/5e257343e4b010b663d42bc5/reply/reaction?scriptId=5e257343e4b010b663d42d8e",
                                    name: "replyReaction",
                                    reaction: "잘했어요",
                                    score: 0.14490404725074768,
                                },
                                text: "잘했어요. 슈퍼 그뤠잇 칭찬을 드릴게요🤗",
                                type: "text",
                            },
                            {
                                from: {
                                    from: "이미지셋 / 최고",
                                    link:
                                        "/bot/5e257343e4b010b663d42bc5/image_set?scriptId=5e257343e4b010b663d42bcd",
                                    name: "imageSet",
                                    score: 1,
                                },
                                image: {
                                    url:
                                        "https://media.tenor.com/images/e54f107c0486c276fa006dcb65479481/tenor.gif",
                                },
                                type: "image",
                            },
                        ],
                    },
                    version: "1.0.0",
                },
                index: 0,
            },
            {
                data: {
                    response: {
                        replies: [
                            {
                                from: {
                                    from: "자동 답변 / 리액션 답변",
                                    link:
                                        "/bot/5e257343e4b010b663d42bc5/reply/reaction?scriptId=5e257343e4b010b663d430f9",
                                    name: "replyReaction",
                                    reaction: "휴 다행이네요",
                                    score: 0.2956240177154541,
                                },
                                text: "다행이네요!",
                                type: "text",
                            },
                        ],
                    },
                    version: "1.0.0",
                },
                index: 1,
            },
            {
                data: {
                    response: {
                        replies: [
                            {
                                from: {
                                    from: "자동 답변 / 리액션 답변",
                                    link:
                                        "/bot/5e257343e4b010b663d42bc5/reply/reaction?scriptId=5e257343e4b010b663d42f4f",
                                    name: "replyReaction",
                                    reaction: "어땠어요?",
                                    score: 0.21926827728748322,
                                },
                                text: "어땠어요? 괜찮았어요?",
                                type: "text",
                            },
                            {
                                from: {
                                    from: "이미지셋 / 궁금",
                                    link:
                                        "/bot/5e257343e4b010b663d42bc5/image_set?scriptId=5e257343e4b010b663d42bf3",
                                    name: "imageSet",
                                    score: 1,
                                },
                                image: {
                                    url:
                                        "https://media.tenor.com/images/71e0a727e6627adba9bf845a104e548f/tenor.gif",
                                },
                                type: "image",
                            },
                        ],
                    },
                    version: "1.0.0",
                },
                index: 2,
            },
            {
                data: {
                    response: {
                        replies: [
                            {
                                from: {
                                    from: "자동 답변 / 리액션 답변",
                                    link:
                                        "/bot/5e257343e4b010b663d42bc5/reply/reaction?scriptId=5e257343e4b010b663d430f9",
                                    name: "replyReaction",
                                    reaction: "휴 다행이네요",
                                    score: 0.5334538817405701,
                                },
                                text: "다행이네요. 하마터면 걱정할 뻔했어요.",
                                type: "text",
                            },
                        ],
                    },
                    version: "1.0.0",
                },
                index: 3,
            },
            {
                data: {
                    response: {
                        replies: [
                            {
                                from: {
                                    from: "자동 답변 / 리액션 답변",
                                    link:
                                        "/bot/5e257343e4b010b663d42bc5/reply/reaction?scriptId=5e257343e4b010b663d42fae",
                                    name: "replyReaction",
                                    reaction: "우와 맛있겠네요",
                                    score: 0.24873338639736176,
                                },
                                text: "우와 진짜 맛있겠네요😋",
                                type: "text",
                            },
                        ],
                    },
                    version: "1.0.0",
                },
                index: 4,
            },
        ],
        date: "2021-07-25",
    },
    {
        body: `아무것도 안 했는데 벌써 7월이 끝나간다...
오늘은 하루종일 집에만 틀어박혀 있었다.
점심으로는 엄청 오랜만에 피자를 먹었는데 역시 가격값을 하더라.
아무것도 안 하고 사치만 부리는 날도 필요한거야, 그렇고 말고.
하지만 이렇게 며칠만 더 살면 삶에 회의가 들 것 같다.
내일은 저번에 읽다 만 책이라도 다시 봐야겠다.`,
        emotionMine: 4,
        emotionAI: [],
        date: "2021-07-29",
    },
    {
        body: `벌써 8월이라니 ㅠㅠㅠㅠㅠ
팀플 벼락치기하느라 7시 넘어서 잤더니 죽을갓 같다..
12시부터 7시간 넘게 줌하면서 했는데 나름 좋은 경험이었음~
결과도 뭐 나름 괜찮은것 같구ㅎㅎ
이제 교수님이 성적만 잘 주시면 됨 ㅠㅠ`,
        emotionMine: 3,
        emotionAI: [],
        date: "2021-07-30",
    },
    {
        body: `코로나는 도대체 언제 끝날까.
종종 나가던 헬스장이 영업정지를 당해 쇠질도 못하고 힘들다...
사라져 주지 않는 코로나도 협조하지 않는 사람들도 야속하다.
내일 일어나면 모두 예전처럼 돌아가있으면 좋겠다.`,
        emotionMine: 1,
        emotionAI: [],
        date: "2021-07-31",
    },
    {
        body: `집에 있자면 시도때도 없이 무기력이 밀어닥친다.
작심삼일이라더니, 옛말 틀린 거 하나도 없다.
그렇다고 해서 죄책감을 가지는 건 좋을 게 없다고 한다.
어떻게 하면 더 스스로 만족할 수 있는 하루를 보낼 수 있을지 하루씩 시도해보자.`,
        emotionMine: 3,
        emotionAI: [],
        date: "2021-08-01",
    },
    {
        body: `간만에 친구들과 밖에서 만났다!
집에만 틀어박혀 있으니 시간이 정말 빨리 가는 듯.
노래방에서 그동안 못 부른 만큼 다 부르니 속이 시원했다.
저녁까지 술 마셨으면 좋았을 텐데 그러지 못해서 아쉽다.
이 놈의 코로나는 대체 언제 끝날까...
그래도 낮에라도 밖에서 노니 살 것 같다.`,
        emotionMine: 4,
        emotionAI: [],
        date: "2021-08-02",
    },
    {
        body: `오늘은 중앙도서관에서 눌러앉아 있었다.
도서관에 종일 있으면서 시험공부가 아니라 책을 읽은 건 처음이었다.
<물은 답을 알고 있다>라는 책 표지에 딱 꽃혀서 읽기 시작했는데 정말 흥미롭더라.
<게임 뇌의 공포>도 재밌어 보이던데 다음에 와서 읽어봐야겠다.
책을 읽으면서 하루를 보내니까 교양인이 된 느낌이다 ㅎㅎㅎ`,
        emotionMine: 4,
        emotionAI: [],
        date: "2021-08-03",
    },
    {
        body: `여름이니까 공포영화를 보자는 슝슝이에게 영화관으로 끌려갔다.
공포영화를 잘 안 보는 편이라 걱정했는데, 생각보다 훨씬 무서웠다.
영화가 끝나고서 슝슝이가 엄청 재밌지 않았냐고 했는데 아무래도 이상한 친구 같다.
영화관에서 나와 근처 카페에 갔는데 분위기가 너무 좋았다.
다음에는 영화는 생략하고 카페만 따라가야겠네.`,
        emotionMine: 4,
        emotionAI: [],
        date: "2021-08-07",
    },
    {
        body: `택배로 주문했던 키보드가 드디어 오늘 도착했다!
말로만 듣던 무접점 키보드를 직접 타건해보니까 완전 신세계였다.
덕분에 내 지갑은 얇아졌지만ㅠㅠ
새 키보드로 코딩하면 분명 행복 코딩 가능하겠지!`,
        emotionMine: 5,
        emotionAI: [],
        date: "2021-08-09",
    },
];

export function DiaryInitialMocking() {
    for (let i = 0; i < DiaryInitialData.length; i++) {
        const diaryData = DiaryInitialData[i];
        const date = diaryData.date.split("-");

        const diary: DiaryEntity = {
            ...new DiaryEntity(),
            body: diaryData.body.split("\n"),
            emotionMine: diaryData.emotionMine,
            emotionAI: diaryData.emotionAI,
            createdAt: new Date(+date[0], +date[1] - 1, +date[2]),
            title: `${+date[1]}월 ${+date[2]}일 감정일기`,
        };
        setDiaryWrite(diary);
    }
}

export default function MainFrontDecorationContainer({ navigation }) {
    const [diary, setDiary] = useState<DiaryEntity[]>();

    useEffect(() => {
        const sub = store.subscribe(() => {
            setDiary(getDiary());
        });

        return sub;
    }, []);

    const onChartPress = () => {
        Alert.alert(
            "감정일기 샘플 받기",
            `현재까지 작성하신 감정일기를 초기화하고, 감정일기 샘플을 받으시겠습니까?`,
            [
                {
                    text: "예",
                    onPress: () => {
                        setDiaryReset();
                        Alert.alert(
                            "감정일기 샘플 받기",
                            "감정일기 데이터를 초기화하고, 샘플을 정상적으로 받았습니다.",
                            [{ text: "OK" }],
                            { cancelable: false }
                        );
                        DiaryInitialMocking();
                    },
                },
                {
                    text: "아니요",
                },
            ],
            { cancelable: false }
        );
    };

    const onDiaryPress = () => {
        const diary = getDiary();

        for (let i = 0; i < diary.length; i++) {
            const date = `${
                new Date().getMonth() + 1
            }월 ${new Date().getDate()}일 감정일기`;
            if (diary[i].title === date) {
                navigation.push("diary", { routeParam: "read", title: date });
                return;
            }
        }

        navigation.push("diary", { routeParam: "write" });
    };

    const onPreviousPress = () => {
        navigation.push("main", { routeParam: "previous" });
    };

    return (
        <Screen
            horizontalPadding={false}
            transparent={true}
            leftButton={"profile"}
            onLeftButtonPress={null}
            decoratedBackground={true}
            backgroundColor="#F4EEEA"
        >
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "flex-start",
                    }}
                >
                    <MainFrontRoutingCardWrapper
                        onPress={onChartPress}
                        style={styles.wrapper}
                    >
                        {diary ? (
                            <MainFrontEmotionChart diary={diary} />
                        ) : (
                            <Text>
                                다이어리 데이터베이스 연결에 실패하여 감정
                                그래프를 표시할 수 없습니다. 어플을 재시작
                                바랍니다.
                            </Text>
                        )}
                    </MainFrontRoutingCardWrapper>
                    <MainFrontRoutingCardWrapper
                        onPress={onDiaryPress}
                        style={styles.wrapper}
                    >
                        <MainFrontDiaryWriteCard />
                    </MainFrontRoutingCardWrapper>
                    <MainFrontRoutingCardWrapper
                        onPress={onPreviousPress}
                        style={styles.wrapper}
                    >
                        <MainFrontPreviousCard />
                    </MainFrontRoutingCardWrapper>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: Dimensions.get("screen").height * 0.2,
    },
});
