import { FadeInOutVariants } from "@Components/UIRelated/MotionVariants";
import { motion } from "framer-motion";
import { FunctionComponent, useEffect, MouseEvent, useCallback } from "react";

interface ModalBlurBgInterface {
    closeFunc?(): void;
}

export const ModalBlurBg: FunctionComponent<ModalBlurBgInterface> = ({
    closeFunc,
    children,
}) => {
    const closeModal = useCallback(
        (event?: MouseEvent<HTMLElement>): void => {
            if (event?.target === event?.currentTarget) {
                closeFunc?.();
            }
        },
        [closeFunc]
    );
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent): void => {
            if (event.key === "Escape") {
                closeModal();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [closeModal]);

    return (
        <motion.div
            {...FadeInOutVariants}
            className="fixed right-0 top-0 w-full h-full bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-sm z-20 cursor-default"
            onClick={closeModal}
            role="button"
            tabIndex={-1}
            onKeyDown={() => null}
        >
            {children}
        </motion.div>
    );
};
const defaultProps = {
    closeFunc: () => {
        ("");
    },
};
ModalBlurBg.defaultProps = defaultProps;
