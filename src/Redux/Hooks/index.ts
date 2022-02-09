import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@Redux/Reducers";
import { Dispatch } from "redux";
import { SettingsAction } from "@Redux/Reducers/SettingsReducer/Actions";
import { PlanAction } from "@Redux/Reducers/PlanReducer/Actions";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): Dispatch<SettingsAction | PlanAction> =>
    useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
