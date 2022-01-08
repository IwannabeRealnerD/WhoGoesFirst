import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { ModalBlurBg } from "@Components/UIRelated/ModalBlurBg";
import { slideBackAnimation } from "@Components/UIRelated/MotionVariants";

interface CalenderInterface {
    handleChange(selectedData: Date): void;
    date: Date;
    setIsCalenderOpen: Dispatch<SetStateAction<boolean>>;
    setCalenderMsg: Dispatch<SetStateAction<string | null>>;
    calenderMsg: string | null;
}

export const Calender: FunctionComponent<CalenderInterface> = ({
    handleChange,
    date,
    setIsCalenderOpen,
    calenderMsg,
    setCalenderMsg,
}) => {
    const closeFunc = (): void => {
        setIsCalenderOpen(false);
        setCalenderMsg(null);
    };
    return createPortal(
        <ModalBlurBg closeFunc={closeFunc}>
            <div className="relative top-1/4 left-1/2 w-min transform -translate-x-1/2">
                <DatePicker selected={date} onChange={handleChange} inline />
                <AnimatePresence exitBeforeEnter>
                    {calenderMsg && (
                        <motion.div
                            {...slideBackAnimation}
                            className="bg-gray-200 rounded-lg flex justify-center"
                        >
                            <span className="text-red-500">{calenderMsg}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
