import { AnimatePresence } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@Redux/Hooks";
import { writeStartDate } from "@Redux/Reducers/PlanReducer/Actions";
import { MenuIndicator } from "@Components/Pages";
import { Calender } from "../Calender";

export const StartDate: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const [isCalenderOpen, setIsCalenderOpen] = useState(false);
    const [calenderMsg, setCalenderMsg] = useState<null | string>(null);

    const startDate = useAppSelector((state) => state.PlanReducer.startDate);
    const [startDateMsg, setStartDateMsg] = useState("");

    // 날짜가 오늘보다 더 후면 부정
    // 선택한 날짜가 오늘보다 빠르면 긍정
    const isDateEarlier = (selectedData: Date): boolean => {
        console.log(selectedData.getDate() <= new Date().getDate());
        return (
            selectedData.getDate() < new Date().getDate() &&
            selectedData.getMonth() <= new Date().getMonth() &&
            selectedData.getFullYear() <= new Date().getFullYear()
        );
    };
    const startHandleChange = (selectedData: Date): void => {
        if (isDateEarlier(selectedData)) {
            setCalenderMsg(
                `오늘(${new Date().getDate()}) 이후 날짜로 설정해주세요`
            );
            dispatch(writeStartDate(null));
            return;
        }
        setCalenderMsg(null);
        setIsCalenderOpen(false);
        dispatch(writeStartDate(selectedData));
    };

    useEffect(() => {
        if (startDate === null) {
            setStartDateMsg("클릭 - 날짜를 선택해주세요");
            return;
        }
        setStartDateMsg(
            () =>
                `${startDate?.getFullYear()}년${
                    (startDate?.getMonth() as number) + 1
                }월 ${startDate?.getDate()}일`
        );
    }, [dispatch, startDate]);

    return (
        <div className="mb-6">
            <MenuIndicator menuName="출발일" />
            <button
                type="button"
                className="w-full h-16 bg-white hover-hover:hover:bg-gray-300 transition duration-300 rounded-lg shadow-lg"
                onClick={() => {
                    setIsCalenderOpen(true);
                }}
            >
                {startDateMsg}
            </button>
            <AnimatePresence exitBeforeEnter>
                {isCalenderOpen && (
                    <Calender
                        date={startDate === null ? new Date() : startDate}
                        handleChange={startHandleChange}
                        setIsCalenderOpen={setIsCalenderOpen}
                        setCalenderMsg={setCalenderMsg}
                        calenderMsg={calenderMsg}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
