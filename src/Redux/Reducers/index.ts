import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { SettingReducer } from "./SettingsReducer";
import { PlanReducer } from "./PlanReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["SettingReducer"],
};

const rootReducer = combineReducers({ SettingReducer, PlanReducer });
export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeWithDevTools()
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
