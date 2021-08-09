// To see documentation about option, see the repo below
// https://github.com/expo/react-native-action-sheet
import { Alert } from "react-native";
import { getDiary, setDiaryDelete } from "../reduxDispatch/emotionDiary";
import { DiaryEntity } from "../reduxStore/store/emotionDiary";

export const actionSheetOption = {
    options: ["작성하기", "삭제하기", "취소"],
    cancelButtonIndex: 2,
    destructiveButtonIndex: 1,
};

export const actionSheetFunction = (
    index = null,
    title = null,
    navigation = null
) => {
    switch (index) {
        case 0:
            const diary = getDiary();
            for (let i = 0; i < diary.length; i++) {
                const current: DiaryEntity = diary[i];

                if (current.title === title) {
                    Alert.alert(
                        "감정일기 작성",
                        "이미 해당 날짜에 작성한 감정일기가 존재합니다.",
                        [{ text: "OK" }],
                        { cancelable: false }
                    );
                    return;
                }
            }
            navigation.push("diary", {
                routeParam: "write",
                title: title,
            });
            break;

        case 1:
            Alert.alert(
                "감정일기 삭제하기",
                `${title}를 정말 삭제하시겠습니까?`,
                [
                    {
                        text: "예",
                        onPress: () => {
                            console.log(title);
                            setDiaryDelete({
                                title: title,
                                body: null,
                                emotionMine: null,
                            });
                        },
                    },
                    {
                        text: "아니요",
                    },
                ],
                { cancelable: false }
            );
            break;
        default:
            break;
    }
};
