import { motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router";

import { useAppDispatch } from "@Redux/Hooks";
import { slideVariants } from "@Components/MotionVariants";
import { writeRiderInfo } from "@Redux/Reducers/PlanReducer/Actions";
import { NavButton } from "@Components/Pages/WritePlan";
import { MenuIndicator } from "@Components/Pages";
import { useRiderInfo } from "@Components/CustomHook/useRinderInfo";
import { SubmitWhoInterface } from "./Interface";
import { WriteInfo } from "./WriteInfo";
import { InfoCard } from "./InfoCard";

export const Who: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();

    const [isBack, setIsBack] = useState<boolean | null>(null);
    const riderInfoArr = useRiderInfo();

    const submitRiderInfo = ({
        name,
        tel,
        bikeClass,
    }: SubmitWhoInterface): void => {
        const bikeClassArr: number[] = [
            Number(bikeClass[0]),
            Number(bikeClass[1]),
        ];
        dispatch(writeRiderInfo(name, tel, bikeClassArr));
    };

    useEffect(() => {
        if (isBack === null) return;
        if (isBack) {
            history.push({ pathname: "2when", state: true });
            return;
        }
        if (!isBack) {
            history.push("/result");
        }
    }, [isBack, history]);

    return (
        <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit={isBack ? "slideBackExit" : "slideExit"}
            className="w-64 sm:w-80 mx-auto"
        >
            <NavButton
                placeholderBefore="날짜"
                placeholderAfter="결과페이지"
                setIsBack={setIsBack}
            />
            <MenuIndicator menuName="인원정보" />
            <div className="mb-5">
                <WriteInfo submitFunc={submitRiderInfo} />
            </div>
            {riderInfoArr.map((riderInfo, index) => {
                const infoCardVal = `${index}-${riderInfo.name}`;
                return (
                    <InfoCard
                        key={infoCardVal}
                        riderInfo={riderInfo}
                        riderIndex={index + 1}
                    />
                );
            })}
        </motion.div>
    );
};
