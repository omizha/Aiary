import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function CustomStatusBar({ display = true }) {
    switch (Platform.OS) {
        case "android":
            return <IOSStatusBar display={display} />;
        case "ios":
            return <AndroidStatusBar />;
        default:
            return null;
    }
}

function IOSStatusBar({ display }) {
    return (
        <View
            style={{
                height: getStatusBarHeight(),
                backgroundColor: display ? "#ffffff" : "#00000000",
            }}
        />
    );
}

function AndroidStatusBar() {
    // If Android version is lower then 28,
    // Then never display statusbar
    if (Platform.OS === "android" && Platform.Version < 28) {
        return null;
    }

    return <StatusBar translucent={true} backgroundColor="transparent" />;
}
