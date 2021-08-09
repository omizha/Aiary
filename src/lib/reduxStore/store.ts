import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import DiaryReducer from "./store/emotionDiary";

const rootPersistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const combinedReducer = combineReducers({
    diary: DiaryReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, combinedReducer);
export const store = createStore(persistedReducer);
export const persist = persistStore(store);
