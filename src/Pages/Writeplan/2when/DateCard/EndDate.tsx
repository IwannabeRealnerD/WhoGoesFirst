import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@Redux/Hooks";
import { writeEndDate } from "@Redux/Reducers/PlanReducer/Actions";
import { FadeInOutVariants } from "@Components/UIRelated/MotionVariants";
import { MenuIndicator } from "@Components/Pages";
import { Calender } from "../Calender";

export const EndDate: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const [isCalenderOpen, setIsCalenderOpen] = useState(false);
    const [calenderMsg, setCalenderMsg] = useState<null | string>(null);

    const startDate = useAppSelector(
        (state) => state.PlanReducer.startDate as Date
    );
    const endDate = useAppSelector((state) => state.PlanReducer.endDate);

    const [endDateMsg, setEndDateMsg] = useState("");

    const isDateLaterThanStart = (selectedData: Date): boolean =>
        selectedData < startDate;

    const endHandleChange = (selectedData: Date): void => {
        if (isDateLaterThanStart(selectedData)) {
            setCalenderMsg(
                `오늘(${new Date().getDate()}) 이후 날짜로 설정해주세요`
            );
            dispatch(writeEndDate(null));
            return;
        }
        setCalenderMsg(null);
        setIsCalenderOpen(false);
        dispatch(writeEndDate(selectedData));
    };

    // endDate SideEffect code
    useEffect(() => {
        if (endDate === null) {
            setEndDateMsg("클릭 - 날짜를 선택해주세요");
            return;
        }
        setEndDateMsg(
            () =>
                `${endDate?.getFullYear()}년${
                    (endDate?.getMonth() as number) + 1
                }월 ${endDate?.getDate()}일`
        );
    }, [dispatch, endDate]);

    return (
        <motion.div {...FadeInOutVariants}>
            <MenuIndicator menuName="도착일" />
            <button
                type="button"
                className="whiteHover w-full h-16 bg-white rounded-lg shadow-lg"
                onClick={() => {
                    setIsCalenderOpen(true);
                }}
            >
                {endDateMsg}
            </button>
            <AnimatePresence exitBeforeEnter>
                {isCalenderOpen && (
                    <Calender
                        date={endDate === null ? (startDate as Date) : endDate}
                        handleChange={endHandleChange}
                        setIsCalenderOpen={setIsCalenderOpen}
                        setCalenderMsg={setCalenderMsg}
                        calenderMsg={calenderMsg}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};
