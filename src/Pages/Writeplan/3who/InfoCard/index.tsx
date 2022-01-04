import { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideBackAnimation } from "@Components/MotionVariants";
import { arrToBikeClass } from "@Components/Functions/BikeClassRelated";
import { EditInfo } from "../EditInfo";

interface InfoCardInterface {
    riderInfo: {
        name: string;
        tel: number;
        bikeClass: number[];
    };
    riderIndex: number;
}

export const InfoCard: FunctionComponent<InfoCardInterface> = ({
    riderInfo,
    riderIndex,
}) => {
    const { name, tel, bikeClass } = riderInfo;
    const [isEditingInfo, setIsEditingInfo] = useState(false);

    const bikeInfo = arrToBikeClass(bikeClass);
    const infoOnClick = (): void => {
        setIsEditingInfo((prev) => !prev);
    };

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <motion.div {...slideBackAnimation} onClick={infoOnClick}>
                    <div className="whiteHover my-2 px-4 py-2 rounded-lg shadow-lg relative cursor-pointer w-64 sm:w-80 mx-auto">
                        <div className="block sm:flex sm:justify-between">
                            <span className="font-semibold block sm:inline">
                                {name}
                            </span>
                            <span className="text-gray-500">{bikeInfo}</span>
                        </div>
                        <p>{tel}</p>
                    </div>
                </motion.div>

                {/* display edit modal window */}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                {isEditingInfo && (
                    <EditInfo
                        setIsEditingInfo={setIsEditingInfo}
                        riderIndex={riderIndex}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
