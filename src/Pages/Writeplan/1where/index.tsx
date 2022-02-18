import { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { slideVariants } from "@Components/UIRelated/MotionVariants";
import { NavButton } from "@Components/Pages/WritePlan";
import { useDestination, useURL } from "@Components/CustomHook/usePlanRedux";
import { useHistory, useLocation } from "react-router";
import { DestinationCard } from "./InputCards/DestinationCard";
import { URLCard } from "./InputCards/URLCard";
import { ErrorModal } from "./ErrorModal";
import { ErrorInfo } from "./Interface";

interface submitWhereInterface {
    destination: string;
    url: string;
}

export const Where: FunctionComponent = () => {
    const history = useHistory();
    const location = useLocation();
    const { destinationRedux, setDestinationRedux } = useDestination();
    const { urlRedux, setURLRedux } = useURL();

    const [errObj, setErrObj] = useState<null | ErrorInfo>(null);
    const [isBack, setIsBack] = useState<boolean | null>(null);
    const { register, handleSubmit, formState, clearErrors } = useForm({
        reValidateMode: "onSubmit",
    });

    const submitWhere = ({ destination, url }: submitWhereInterface): void => {
        if (destination !== "") {
            setDestinationRedux(destination);
        }
        if (url !== "") {
            setURLRedux(url);
        }
        if (destination === "") {
            setDestinationRedux(null);
        }
        if (url === "") {
            setURLRedux(null);
        }
    };

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

    // user input handling - pattern
    useEffect(() => {
        if (formState.errors.destination?.type === "pattern") {
            setErrObj({ input: "도착지", msg: "2글자 이상 입력해주세요 :)" });
            clearErrors();
            return;
        }
        if (formState.errors.url?.type === "pattern") {
            setErrObj({
                input: "네비 주소",
                msg: "https:// 시작하는 주소를 입력해주세요",
            });
            clearErrors();
            return;
        }
        if (formState.isSubmitSuccessful) {
            setIsBack(false);
        }
    }, [formState]);
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
            <form onSubmit={handleSubmit(submitWhere)}>
                <NavButton
                    placeholderBefore="홈으로"
                    placeholderAfter="날짜"
                    setIsBack={setIsBack}
                    isSubmit
                />
                <DestinationCard
                    defaultValue={destinationRedux}
                    register={register}
                />
                <URLCard defaultValue={urlRedux} register={register} />
            </form>
            {errObj && <ErrorModal setErrMsg={setErrObj} errObj={errObj} />}
        </motion.div>
    );
};
