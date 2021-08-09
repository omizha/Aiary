import React from "react";
import { View, Text, StyleSheet } from "react-native";

// @ts-ignore
import MainDiaryPreviousIcon from "../../assets/main/MainDiaryPrevious.svg";

export default function MainFrontPreviousCard() {
    return (
        <>
            <View style={styles.container}>
                <MainDiaryPreviousIcon width={40} height={40} />
                <Text style={styles.mainText}>감정일기 돌아보기</Text>
            </View>
            <Text style={styles.subText}>
                자신의 감정을 돌아보는 것만으로도 안정을 얻을 수 있습니다.
            </Text>
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
    subText: { fontSize: 12, color: "#707070" },
});
