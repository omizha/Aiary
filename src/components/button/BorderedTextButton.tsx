import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";

export default function BorderedTextButton({
    text = "",
    color = "#000000",
    onPress = null,
    width = Math.round(Dimensions.get("screen").width * 0.6),
    height = 46,
}) {
    const styles = StyleSheet.create({
        button: {
            width: width,
            height: height,
            borderRadius: 23,
            borderColor: color,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        text: {
            color: color,
        },
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
