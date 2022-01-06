import { slideVariants } from "@Components/MotionVariants";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppSelector } from "@Redux/Hooks";
import { NavButton } from "@Components/Pages/WritePlan";

import { TourLength } from "./TourLength";
import { EndDate, StartDate } from "./DateCard";

export const When: FunctionComponent = () => {
    const history = useHistory();
    const location = useLocation();

    const endDate = useAppSelector((state) => state.PlanReducer.endDate);
    const [isOneDay, setIsOneDay] = useState(true);

    const [isBack, setIsBack] = useState<boolean | null>(null);

    useEffect(() => {
        if (endDate !== null) {
            setIsOneDay(false);
        }
    }, [endDate]);

    // Back and forth animation control code
    useEffect(() => {
        if (isBack === null) return;
        if (isBack) {
            history.push({ pathname: "1where", state: true });
            return;
        }
        if (!isBack) {
            history.push("3who");
        }
    }, [isBack, history]);

    return (
        <motion.div
            variants={slideVariants}
            initial={location.state === true ? "hiddenFromBack" : "hidden"}
            animate="visible"
            exit={isBack ? "slideBackExit" : "slideExit"}
            className="browserSize mx-auto"
        >
            <NavButton
                placeholderBefore="장소"
                placeholderAfter="인원정보"
                setIsBack={setIsBack}
            />
            <TourLength setIsOneDay={setIsOneDay} isOneDay={isOneDay} />
            <StartDate />

            <AnimatePresence exitBeforeEnter>
                {!isOneDay && <EndDate />}
            </AnimatePresence>
        </motion.div>
    );
};
