import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ModalBlurBg } from "@Components/UIRelated/ModalBlurBg";
import { slideBackAnimation } from "@Components/UIRelated/MotionVariants/SlideVariants";
import { arrToBikeClass } from "@Components/Functions";
import { useRiderInfo } from "@Components/CustomHook/usePlanRedux";

interface RiderInfoModalInterface {
    setIsRiderModal: Dispatch<SetStateAction<boolean>>;
}

export const RiderInfoModal: FunctionComponent<RiderInfoModalInterface> = ({
    setIsRiderModal,
}) => {
    const { riderInfoArr } = useRiderInfo();

    const closeRiderInfo = (): void => {
        setIsRiderModal(false);
    };
    return createPortal(
        <ModalBlurBg closeFunc={closeRiderInfo}>
            <div className="relative top-1/4">
                {riderInfoArr.map((riderInfo) => {
                    return (
                        <motion.div
                            {...slideBackAnimation}
                            key={`${riderInfo.name} ${riderInfo.tel}`}
                        >
                            <div className="browserSize bg-white my-2 px-4 py-2 rounded-lg shadow-lg relative mx-auto">
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
