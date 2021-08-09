import React from "react";
import { Spinner } from "@ui-kitten/components";
import { Dimensions, View } from "react-native";

export default function Loading({ display = false }) {
    if (!display) return null;

    return (
        <View
            style={{
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height,
                position: "absolute",
                backgroundColor: "#00000099",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Spinner size="giant" status="basic" />
        </View>
    );
}
