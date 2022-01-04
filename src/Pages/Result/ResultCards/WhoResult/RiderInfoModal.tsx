import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { ModalBlurBg } from "@Components/ModalBlurBg";
import { useAppSelector } from "@Redux/Hooks";
import { InfoCard } from "@Pages/Writeplan/3who/InfoCard";
import { motion } from "framer-motion";
import { slideBackAnimation } from "@Components/MotionVariants/SlideVariants";
import { arrToBikeClass } from "@Components/Functions";

interface RiderInfoModalInterface {
    setIsRiderModal: Dispatch<SetStateAction<boolean>>;
}

export const RiderInfoModal: FunctionComponent<RiderInfoModalInterface> = ({
    setIsRiderModal,
}) => {
    const riderInfoArr = useAppSelector((state) => state.PlanReducer.userInfo);
    const Arr = riderInfoArr.slice(1, riderInfoArr.length);

    const closeRiderInfo = (): void => {
        setIsRiderModal(false);
    };
    return createPortal(
        <ModalBlurBg closeFunc={closeRiderInfo}>
            <div className="relative top-1/4">
                {Arr.map((riderInfo) => {
                    return (
                        <motion.div {...slideBackAnimation}>
                            <div className="bg-white my-2 px-4 py-2 rounded-lg shadow-lg relative w-64 sm:w-80 mx-auto">
                                <div className="block sm:flex sm:justify-between">
                                    <span className="font-semibold block sm:inline">
                                        {riderInfo.name}
                                    </span>
                                    <span className="text-gray-500">
                                        {arrToBikeClass(riderInfo.bikeClass)}
                                    </span>
                                </div>
                                <p>{riderInfo.tel}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
