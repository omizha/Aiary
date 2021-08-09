import React from "react";
import MainFrontDiaryAnalyticContainer from "../../container/main/MainFrontDiaryAnalyticContainer";
import MainFrontDiaryReadContainer from "../../container/main/MainFrontDiaryReadContainer";
import MainFrontDiaryWriteContainer from "../../container/main/MainFrontDiaryWriteContainer";

export default function DiaryIndex({ navigation, route }) {
    const routeParam = route?.params?.routeParam || null;

    switch (routeParam) {
        case "write":
            return (
                <MainFrontDiaryWriteContainer
                    navigation={navigation}
                    route={route}
                />
            );

        case "read":
            return (
                <MainFrontDiaryReadContainer
                    navigation={navigation}
                    route={route}
                />
            );

        case "analytic":
            return <MainFrontDiaryAnalyticContainer route={route} />;

        default:
            return null;
    }
}
