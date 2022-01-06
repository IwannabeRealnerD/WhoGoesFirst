import { ChangeEvent, FunctionComponent } from "react";
import { motion } from "framer-motion";

import { FadeInOutVariants } from "@Components/MotionVariants";
import { NOTION_ADDR } from "@Components/Strings";
import { useAppDispatch, useAppSelector } from "@Redux/Hooks";
import {
    catchphraseOff,
    catchphraseOn,
} from "@Redux/Reducers/SettingsReducer/Actions";
import { IndividualSetting } from "./IndividualSetting";

interface SettingListInterface {
    settingName: string;
    settingDescription: string;
    isActive: boolean;
}

const CATCHPHRASE = "catchphrase";

export const Settings: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const isCatchphraseOn = useAppSelector(
        (state) => state.SettingReducer.isCatchphraseOn
    );
    const toNotion = (): void => {
        window.open(NOTION_ADDR);
    };
    // onChange Function
    const onChangeRoot = (evt: ChangeEvent<HTMLInputElement>): void => {
        const evtName = evt.target.name as "catchphrase";
        const evtChkd = evt.target.checked as boolean;
        if (evtName === CATCHPHRASE && evtChkd === true) {
            dispatch(catchphraseOn());
            return;
        }
        if (evtName === CATCHPHRASE && evtChkd === false) {
            dispatch(catchphraseOff());
        }
    };

    const settingsArr: SettingListInterface[] = [
        {
            settingName: CATCHPHRASE,
            settingDescription: "메인 페이지 캐치프레이즈 보기",
            isActive: isCatchphraseOn,
        },
    ];

    return (
        <motion.div {...FadeInOutVariants} className="browserSize mx-auto">
            <button
                type="button"
                className="whiteHover rounded-lg p-2 w-full mb-10"
                onClick={toNotion}
            >
                설명서로 이동!
            </button>
            {settingsArr.map((propsObj) => (
                <IndividualSetting
                    key={propsObj.settingDescription}
                    onChangeRoot={onChangeRoot}
                    isSettingOn={propsObj.isActive}
                    settingName={propsObj.settingName}
                    settingDescription={propsObj.settingDescription}
                />
            ))}
        </motion.div>
    );
};
