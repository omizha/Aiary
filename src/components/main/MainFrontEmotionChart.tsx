import moment from "moment";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

export default function MainFrontEmotionChart({ diary }) {
    const [datasets, setDatasets] = useState<any>();

    useEffect(() => {
        calc();
    }, [diary]);

    const calc = async () => {
        let diarysets = diary.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        );

        const sets: {
            labels: string[];
            datasets: {
                data: number[];
                color?;
            }[];
        } = {
            labels: [],
            datasets: [
                {
                    data: [],
                },
            ],
        };

        let count = 0;

        for (let i = 0; i < diarysets.length; i++) {
            const current = diarysets[i];
            if (count === 7) break;
            if (new Date() < new Date(current.createdAt)) continue;

            const label = moment(current.createdAt).format("DD");
            const data = current.emotionMine;

            sets.labels = [label, ...sets.labels];
            sets.datasets[0].data = [data - 1, ...sets.datasets[0].data];
            count = count + 1;
        }

        console.log(sets);

        if (sets.labels.length > 0) {
            sets.datasets = [
                ...sets.datasets,
                {
                    data: [4],
                    color: () => "transparent",
                },
            ];

            console.log(sets);

            setDatasets(sets);
        }
    };

    return datasets ? (
        <>
            <View style={styles.container}>
                <Text style={styles.mainText}>감정 그래프</Text>
                <LineChart
                    data={datasets}
                    width={Dimensions.get("window").width * 0.98}
                    height={220}
                    chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        backgroundColor: "#FFFFFF",
                        decimalPlaces: 0,
                        // barPercentage: 1,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) =>
                            `rgba(0, 0, 0, ${opacity})`,
                        horizontalOffset: 20,
                    }}
                    bezier
                    style={{
                        width: Dimensions.get("window").width * 0.88,
                        overflow: "hidden",
                    }}
                    fromZero={true}
                    withVerticalLines={false}
                    withDots={false}
                    formatYLabel={() => ""}
                />
            </View>
        </>
    ) : null;
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        flexDirection: "column",
        marginBottom: 12,
        marginLeft: -Dimensions.get("window").width * 0.13,
    },
    mainText: {
        fontWeight: "700",
        fontSize: 28,
        marginLeft: Dimensions.get("window").width * 0.13,
    },
    subText: { fontSize: 12, color: "#707070" },
});
