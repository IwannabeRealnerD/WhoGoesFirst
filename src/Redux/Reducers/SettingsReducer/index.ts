import { ActionType, SettingsAction } from "./Actions";

interface SettingInfo {
    isAnimationOn: boolean;
    isCatchphraseOn: boolean;
    isExplainOn: boolean;
}

const initialState: SettingInfo = {
    isAnimationOn: false,
    isCatchphraseOn: true,
    isExplainOn: true,
};

const SettingReducer = (
    state: SettingInfo = initialState,
    action: SettingsAction
): SettingInfo => {
    switch (action.type) {
        case ActionType.ANIMATION_ON:
            return { ...state, isAnimationOn: true };
        case ActionType.ANIMATION_OFF:
            return { ...state, isAnimationOn: false };
        case ActionType.CATCHPHRASE_ON:
            return { ...state, isCatchphraseOn: true };
        case ActionType.CATCHPHRASE_OFF:
            return { ...state, isCatchphraseOn: false };
        case ActionType.EXPLAIN_ON:
            return { ...state, isExplainOn: true };
        case ActionType.EXPLAIN_OFF:
            return { ...state, isExplainOn: false };
        default:
            return state;
    }
};

export { SettingReducer };
export type { SettingInfo };
