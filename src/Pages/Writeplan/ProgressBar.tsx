import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import {
    useDate,
    useDestination,
    useRiderInfo,
    useUrl,
} from "@Components/CustomHook/usePlanRedux";
import { FadeInOutVariants } from "@Components/UIRelated/MotionVariants";

export const ProgressBar: FunctionComponent = () => {
    const { isRiderInfoExist } = useRiderInfo();
    const { isDestinationReduxExist } = useDestination();
    const { isUrlReduxExist } = useUrl();
    const { isDateReduxExist } = useDate();

    const planArr = [
        {
            planName: "도착지",
            to: "/writeplan/1where",
            isExist: isDestinationReduxExist,
        },
        { planName: "URL", to: "/writeplan/1where", isExist: isUrlReduxExist },
        { planName: "날짜", to: "/writeplan/2when", isExist: isDateReduxExist },
        { planName: "인원", to: "/writeplan/3who", isExist: isRiderInfoExist },
    ];

    return (
        <motion.div
            {...FadeInOutVariants}
            className="fixed right-0 mr-8 rounded-md shadow-lg z-10 overflow-hidden invisible lg:visible mt-24"
        >
            {planArr.map((planElement) => (
                <Link
                    key={planElement.planName}
                    to={planElement.to}
                    className={`relative block px-4 py-2  whiteHover text-center w-36 ${
                        planElement.isExist ? "text-gray-700" : "text-gray-400"
                    }`}
                >
                    {planElement.isExist && (
                        <AiOutlineCheck className="absolute right-3" />
                    )}
                    {planElement.planName}
                </Link>
            ))}
        </motion.div>
    );
};
