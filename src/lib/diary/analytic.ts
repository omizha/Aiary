import { Alert } from "react-native";
import axiosInstance from "../axiosInstance/axiosInstance";
import { DiaryEntity } from "../reduxStore/store/emotionDiary";
import Constants from "expo-constants";

export class PingpongResType {
    response: {
        replies: {
            from: {
                score: number;
                name: string;
                link: string;
                from: string;
                reaction?: string;
            };
            type: string;
            text?: string;
            image?: {
                url: string;
            };
        }[];
    };
    version;
}

export default async function DiaryAnalytic(setLoading, diary: DiaryEntity) {
    const initialDiary = { ...diary };

    for (let i = 0; i < diary.body.length; i++) {
        try {
            const instance = axiosInstance();
            const result = await instance({
                baseURL: `${Constants.manifest.extra.pingpong.URL}/${diary.title}`,
                method: "POST",
                data: {
                    request: {
                        query: diary.body[i],
                    },
                },
                headers: {
                    Authorization:
                        Constants.manifest.extra.pingpong.Authorization,
                    "Content-Type": "application/json",
                },
            });

            const data: PingpongResType = result.data;

            diary.emotionAI = [...diary.emotionAI, { data, index: i }];
        } catch (err) {
            console.log(err);
            Alert.alert("실패", "뭔가 문제 생김", [{ text: "OK" }], {
                cancelable: false,
            });
            diary = initialDiary;
            setLoading(false);
            throw err;
        }
    }

    setLoading(false);
    return diary;
}
