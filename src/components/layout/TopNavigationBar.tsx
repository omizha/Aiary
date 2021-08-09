import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { TopNavigation } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import TopNavigationIcon from "./TopNavigationIcons";

export default function ({
    title = "",
    transparent = false,
    renderLeftButton = true,
    renderRightButton = false,
    leftButtonType = "back",
    rightButtonType = "more",
    onRightButtonPress = null,
    navigationBarAssetColor,
}) {
    const navigation = useNavigation();

    const actionPress = {
        back: () => {
            navigation.goBack();
        },
        close: () => {
            navigation.goBack();
        },
        complete: () => {
            onRightButtonPress();
        },
        more: () => {
            onRightButtonPress();
        },
        save: () => {
            onRightButtonPress();
        },
        profile: () => {},
    };

    const LeftButton = () => {
        return (
            <TouchableOpacity onPress={actionPress[leftButtonType]}>
                <TopNavigationIcon
                    icon={leftButtonType}
                    color={navigationBarAssetColor}
                />
            </TouchableOpacity>
        );
    };

    const RightButton = () => {
        return (
            <TouchableOpacity onPress={actionPress[rightButtonType]}>
                <TopNavigationIcon
                    icon={rightButtonType}
                    color={navigationBarAssetColor}
                />
            </TouchableOpacity>
        );
    };

    const styles = StyleSheet.create({
        titleText: {
            fontSize: 18,
            fontWeight: "500",
            color: navigationBarAssetColor,
        },

        background: {
            backgroundColor: transparent ? "#00000000" : "#ffffff",
        },
    });

    return (
        <TopNavigation
            title={() => <Text style={styles.titleText}>{title}</Text>}
            alignment="center"
            accessoryLeft={renderLeftButton && LeftButton}
            accessoryRight={renderRightButton && RightButton}
            style={styles.background}
        />
    );
}
