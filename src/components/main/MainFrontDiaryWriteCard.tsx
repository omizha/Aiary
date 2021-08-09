import React from "react";
import { View, Text, StyleSheet } from "react-native";

//@ts-ignore
import MainDiaryIcon from "../../assets/main/MainDiary.svg";

export default function MainFrontDiaryWriteCard() {
    return (
        <>
            <View style={styles.container}>
                <MainDiaryIcon width={40} height={40} />
                <Text style={styles.mainText}>{`감정일기 작성하기`}</Text>
            </View>
            <Text
                style={styles.subText}
            >{`감정일기를 통해 오늘의 감정을 기록해보세요!`}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    mainText: { fontWeight: "700", fontSize: 28, marginLeft: 6 },
    subText: { fontSize: 12, color: "#707070" },
    topText: { fontSize: 12, color: "#1D1D1D" },
});
