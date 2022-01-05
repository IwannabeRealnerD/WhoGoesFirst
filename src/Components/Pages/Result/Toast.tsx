import { FadeInOutVariants } from "@Components/MotionVariants";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { createPortal } from "react-dom";

interface ToastInterface {
    toastMessage: string;
}

export const Toast: FunctionComponent<ToastInterface> = ({ toastMessage }) => {
    return createPortal(
        <motion.div
            {...FadeInOutVariants}
            className="fixed bottom-0 right-0 h-1/4 w-full bg-gradient-to-t from-gray-500 to-transparent"
        >
            <p className="w-64 sm:w-80 text-center absolute bottom-1/4 bg-white shadow-lg py-2 px-3 rounded-lg left-1/2 transform -translate-x-1/2">
                {toastMessage}
            </p>
        </motion.div>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
