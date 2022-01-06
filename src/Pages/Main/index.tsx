import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@Redux/Hooks";

import { CatchPhrase } from "@Pages/Main/CatchPhrase";
import { FadeInOutVariants } from "@Components/MotionVariants";
import { Link } from "react-router-dom";
import { ExplainModal } from "./ExplainModal";

export const Main: FunctionComponent = () => {
    const isCatchphraseOn = useAppSelector(
        (state) => state.SettingReducer.isCatchphraseOn
    );
    const isExplainOn = useAppSelector(
        (state) => state.SettingReducer.isExplainOn
    );
    return (
        <motion.div {...FadeInOutVariants}>
            {isCatchphraseOn && <CatchPhrase />}
            {isExplainOn && <ExplainModal />}
            <Link to="/writeplan/1where">
                <button
                    type="button"
                    className="whiteHover p-3 mt-10 rounded-lg shadow-lg relative left-1/2 transform -translate-x-1/2 text-md"
                >
                    투어 계획 작성하기!
                </button>
            </Link>
        </motion.div>
    );
};
