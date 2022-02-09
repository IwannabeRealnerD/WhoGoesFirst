import { CardWrapper } from "@Components/Pages/Result";
import { AnimatePresence } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { RiderInfoModal } from "./RiderInfoModal";

interface UserInfoArrInterface {
    name: string;
    tel: number;
    bikeClass: number[];
}
interface WhoResultInterface {
    userInfoArr: UserInfoArrInterface[];
}
export const WhoResult: FunctionComponent<WhoResultInterface> = ({
    userInfoArr,
}) => {
    const [isRiderModal, setIsRiderModal] = useState(false);

    const showRiderInfo = (): void => {
        setIsRiderModal(true);
    };

    return (
        <CardWrapper>
            <p className="text-blue-700">인원</p>
            <p className="text-xl text-gray-700 font-bold text-center mb-12">
                {userInfoArr.length}명
            </p>
            <button
                type="button"
                className="absolute grayBtn rounded-t-none w-full left-0 bottom-0"
                onClick={showRiderInfo}
            >
                더보기
            </button>
            <AnimatePresence exitBeforeEnter>
                {isRiderModal && (
                    <RiderInfoModal setIsRiderModal={setIsRiderModal} />
                )}
            </AnimatePresence>
        </CardWrapper>
    );
};
