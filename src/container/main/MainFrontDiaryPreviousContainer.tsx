import React, { useCallback, useEffect, useState } from "react";

import Screen from "../../components/layout/Screen";
import { Text, View, TouchableOpacity } from "react-native";
import { getDiary } from "../../lib/reduxDispatch/emotionDiary";
import { DiaryEntity } from "../../lib/reduxStore/store/emotionDiary";
import { Agenda } from "react-native-calendars";
import Moment from "moment";
import { useActionSheet } from "@expo/react-native-action-sheet";
import {
    actionSheetFunction,
    actionSheetOption,
} from "../../lib/diary/DiaryPreviousActionSheet";
import { store } from "../../lib/reduxStore/store";
import MainFrontRoutingCardWrapper from "../../components/main/MainFrontRoutingCardWrapper";

export default function MainFrontDiaryPreviousContainer({ navigation }) {
    const { showActionSheetWithOptions } = useActionSheet();

    const onRightButtonPress = () => {
        showActionSheetWithOptions(actionSheetOption, (index) =>
            actionSheetFunction(
                index,
                Moment(selectedDate).format("M월 D일 감정일기"),
                navigation
            )
        );
    };

    const [diary, setDiary] = useState<DiaryEntity[]>();
    const [monthData, setMonthData] = useState<any>();
    const [selectedDate, setSelectedDate] = useState(
        Moment(new Date()).format("YYYY-MM-DD")
    );

    useEffect(() => {
        const sub = store.subscribe(() => {
            setDiary(getDiary());
        });

        return sub;
    }, []);

    useEffect(() => {
        const diary = getDiary();
        let data = {};

        for (let i = 0; i < diary.length; i++) {
            const date = new Date(diary[i].createdAt);
            const year = date.getFullYear();
            let month = `${date.getMonth() + 1}`;
            month = +month > 9 ? month : `0${month}`;
            let day = `${date.getDate()}`;
            day = +day > 9 ? day : `0${day}`;

            const result = `${year}-${month}-${day}`;
            if (!data[result]) data[result] = [];
            data[result] = [...data[result], diary[i]];
        }

        console.log(data);

        setMonthData(data);
    }, [diary]);

    const ondataPress = useCallback((title) => {
        navigation.push("diary", { routeParam: "read", title });
    }, []);

    const renderItem = useCallback((item: DiaryEntity, firstItemInDay) => {
        let text = `${item.body[0]} ${item.body[1] ? item.body[1] : ""}`;
        text = text.length > 40 ? `${text.slice(0, 40)}...` : text;

        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        ondataPress(item.title);
                    }}
                >
                    <MainFrontRoutingCardWrapper
                    // style={styles.wrapper}
                    >
                        <Text>{text}</Text>
                    </MainFrontRoutingCardWrapper>
                </TouchableOpacity>
            </View>
        );
    }, []);

    if (!monthData) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }

    return (
        <Screen
            title={"지난 감정일기 돌아보기"}
            transparent={true}
            leftButton={"back"}
            rightButton={"more"}
            onRightButtonPress={onRightButtonPress}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: 20,
                    backgroundColor: "#AAAAAA",
                }}
            >
                <Agenda
                    items={monthData}
                    renderItem={(item, firstItemInDay) => {
                        return renderItem(item, firstItemInDay);
                    }}
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString);
                    }}
                    selected={selectedDate}
                    minDate={"2021-07-01"}
                    maxDate={"2021-08-31"}
                />
            </View>
        </Screen>
    );
}
