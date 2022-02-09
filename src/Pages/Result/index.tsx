import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { chkParamComplete, paramGetter } from "@Components/Functions";
import { FadeInOutVariants } from "@Components/UIRelated/MotionVariants";
import { useAppDispatch } from "@Redux/Hooks";
import {
    writeDestination,
    writeEndDate,
    writeRiderInfo,
    writeStartDate,
    writeUrl,
} from "@Redux/Reducers/PlanReducer/Actions";
import { ResultCards } from "./ResultCards";
import { IncompleteParam } from "./IncomplemetParam";

export const Result: FunctionComponent = () => {
    const { search } = useLocation();
    const dispatch = useAppDispatch();

    const [isCompleteParam, setIsCompleteParam] = useState(true);

    const urlParsingFunc = useCallback((): void => {
        const paramList = ["d1", "u2", "sd3", "ed4", "ri5"];
        const paramsObj = new URLSearchParams(search);
        const isParamComplete = chkParamComplete(paramList, paramsObj);
        if (search === "") {
            return;
        }
        if (isParamComplete === false) {
            setIsCompleteParam(false);
            return;
        }
        if (search !== "") {
            try {
                const decodedParamArr = paramGetter(paramList, paramsObj);
                if (decodedParamArr[0] !== "")
                    dispatch(writeDestination(decodedParamArr[0]));
                if (decodedParamArr[1] !== "")
                    dispatch(writeUrl(decodedParamArr[1]));
                if (decodedParamArr[2] !== "") {
                    const startDate = new Date(Number(decodedParamArr[2]));
                    dispatch(writeStartDate(startDate));
                }
                if (decodedParamArr[3] !== "") {
                    const endDate = new Date(Number(decodedParamArr[3]));
                    dispatch(writeEndDate(endDate));
                }
                if (decodedParamArr[4] !== "") {
                    // to solve "one more element issue" -> filter
                    const riderInfoArr = decodedParamArr[4]
                        .split("-")
                        .filter((element) => element.length !== 0);

                    // rider's array
                    const riderInfo = riderInfoArr.map((element) =>
                        element.split("/")
                    );
                    riderInfo.forEach((element) => {
                        dispatch(
                            writeRiderInfo(element[0], Number(element[1]), [
                                Number(element[2][0]),
                                Number(element[2][1]),
                            ])
                        );
                    });
                }
            } catch {
                setIsCompleteParam(false);
            }
        }
    }, [dispatch, search]);

    useEffect(() => {
        urlParsingFunc();
    }, [urlParsingFunc]);

    return (
        <motion.div {...FadeInOutVariants} className="browserSize mx-auto">
            {isCompleteParam === true ? <ResultCards /> : <IncompleteParam />}
        </motion.div>
    );
};
