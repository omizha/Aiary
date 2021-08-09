import { PingpongResType } from "../../diary/analytic";

// Declare Action
const WRITE = "diary/WRITE";
const UPDATE = "diary/UPDATE";
const DELETE = "diary/DELETE";
const RESET = "diary/RESET";

export const diaryWrite = (data) => {
    return { type: WRITE, payload: data };
};

export const diaryUpdate = (data) => {
    return { type: UPDATE, payload: data };
};

export const diaryDelete = (data) => {
    return { type: DELETE, payload: data };
};

export const diaryReset = () => {
    return { type: RESET };
};

export class DiaryVisible {
    status: boolean = false;
    rangeID: number[] = [];
}

export class DiaryEmotionAI {
    index: number;
    data: PingpongResType;
}

class DiaryAction {
    payload: DiaryEntity;
    type: string;
}

export class DiaryEntity {
    id?: number;
    title?: string = `${
        new Date().getMonth() + 1
    }월 ${new Date().getDate()}일 감정일기`;
    createdAt?: Date = new Date();
    body: string[] = [];
    emotionAI?: DiaryEmotionAI[] = [];
    emotionMine: number;
    comment?: string[] = [];
    visible?: DiaryVisible = new DiaryVisible();
    photo?: string = null;
}

// Declare Initial State
const initialState: DiaryEntity[] = [];

export default function DiaryReducer(
    state = initialState,
    action: DiaryAction
) {
    switch (action.type) {
        case WRITE:
            action.payload.id = state.length;
            const payload = action.payload;

            return [...state, payload];

        case UPDATE:
            return state.map((element) =>
                element.title === action.payload.title
                    ? action.payload
                    : element
            );

        case DELETE:
            return state.filter(
                (element) => element.title !== action.payload.title
            );

        case RESET:
            return [];

        default:
            return state;
    }
}
