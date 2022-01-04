export enum ActionType {
    ANIMATION_ON = "ANITMATION_ON",
    ANIMATION_OFF = "ANIMATION_OFF",
    CATCHPHRASE_ON = "CATCHPHRASE_ON",
    CATCHPHRASE_OFF = "CATCHPHRASE_OFF",
    EXPLAIN_ON = "EXPLAIN_ON",
    EXPLAIN_OFF = "EXPLAIN_OFF",
}

interface AnimationOn {
    type: ActionType.ANIMATION_ON;
}
interface AnimationOff {
    type: ActionType.ANIMATION_OFF;
}
interface CatchphraseOn {
    type: ActionType.CATCHPHRASE_ON;
}
interface CatchphraseOff {
    type: ActionType.CATCHPHRASE_OFF;
}
interface ExplainOn {
    type: ActionType.EXPLAIN_ON;
}
interface ExplainOff {
    type: ActionType.EXPLAIN_OFF;
}

export type SettingsAction =
    | CatchphraseOn
    | CatchphraseOff
    | AnimationOn
    | AnimationOff
    | ExplainOn
    | ExplainOff;

export const animationOn = (): AnimationOn => {
    return { type: ActionType.ANIMATION_ON };
};
export const animationOff = (): AnimationOff => {
    return { type: ActionType.ANIMATION_OFF };
};

export const catchphraseOn = (): CatchphraseOn => {
    return { type: ActionType.CATCHPHRASE_ON };
};

export const catchphraseOff = (): CatchphraseOff => {
    return { type: ActionType.CATCHPHRASE_OFF };
};

export const explainOn = (): ExplainOn => {
    return { type: ActionType.EXPLAIN_ON };
};
export const explainOff = (): ExplainOff => {
    return { type: ActionType.EXPLAIN_OFF };
};
