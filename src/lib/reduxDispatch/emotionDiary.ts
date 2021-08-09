import { store } from "../reduxStore/store";
import {
    diaryDelete,
    DiaryEntity,
    diaryReset,
    diaryUpdate,
    diaryWrite,
} from "../reduxStore/store/emotionDiary";

export function setDiaryWrite(data: DiaryEntity) {
    store.dispatch(diaryWrite(data));
}

export function setDiaryUpdate(data: DiaryEntity) {
    store.dispatch(diaryUpdate(data));
}

export function setDiaryDelete(data: DiaryEntity) {
    store.dispatch(diaryDelete(data));
}

export function setDiaryReset() {
    store.dispatch(diaryReset());
}

export function getDiary() {
    return store.getState().diary;
}
