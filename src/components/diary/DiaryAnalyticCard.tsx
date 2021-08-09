import React from "react";
import { Text, StyleSheet } from "react-native";

export default function DiaryAnalyticCard({ text = "" }) {
    return (
        <>
            <Text style={styles.subText}>{text}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        flexDirection: "row",
        marginBottom: 12,
    },
    mainText: { fontWeight: "700", fontSize: 28, marginLeft: 6 },
    subText: { fontSize: 14, color: "#707070" },
});
