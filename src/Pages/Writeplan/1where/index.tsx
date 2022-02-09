import { FunctionComponent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideVariants } from "@Components/UIRelated/MotionVariants";
import { NavButton } from "@Components/Pages/WritePlan";
import { useHistory, useLocation } from "react-router";
import { DestinationCard } from "./InputCards/DestinationCard";
import { URLCard } from "./InputCards/URLCard";
import { ModalExplain } from "./ModalExplain";

export const Where: FunctionComponent = () => {
    const history = useHistory();
    const location = useLocation();

    const [isExplain, setIsExplain] = useState(false);
    const [isDestination, setIsDestination] = useState(false);
    const [isBack, setIsBack] = useState<boolean | null>(null);

    // Animation related code
    useEffect(() => {
        if (isBack === null) return;
        if (isBack) {
            history.push("");
            return;
        }
        if (!isBack) {
            history.push("2when");
        }
    }, [isBack, history]);

    return (
        <motion.div
            variants={slideVariants}
            initial={location.state === true ? "hiddenFromBack" : "hidden"}
            exit={
                isBack !== null && isBack !== true
                    ? "slideExit"
                    : "slideBackExit"
            }
            animate="visible"
            className="w-64 sm:w-80 mx-auto"
        >
            {isExplain && <ModalExplain setIsExplain={setIsExplain} />}
            <NavButton
                placeholderBefore="홈으로"
                placeholderAfter="날짜"
                setIsBack={setIsBack}
            />
            <DestinationCard
                key="destinationKey"
                setIsDestination={setIsDestination}
            />
            <AnimatePresence exitBeforeEnter>
                {isDestination && (
                    <motion.div
                        variants={slideVariants}
                        initial={
                            location.state !== null
                                ? "hiddenFromBack"
                                : "hidden"
                        }
                        exit="slideBackExit"
                        animate="visible"
                        key="urlkey"
                        className="mt-5"
                    >
                        <URLCard />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
