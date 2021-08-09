import React from "react";
import MainFrontDiaryPreviousContainer from "../../container/main/MainFrontDiaryPreviousContainer";
import MainFront from "./MainFront";

export default function MainIndex({ navigation, route }) {
    const routeParam = route?.params?.routeParam || null;

    switch (routeParam) {
        case "previous":
            return <MainFrontDiaryPreviousContainer navigation={navigation} />;

        default:
            return <MainFront navigation={navigation} />;
    }
}
