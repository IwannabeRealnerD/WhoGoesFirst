import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { FiDelete } from "react-icons/fi";

interface ResetButtonInterface {
    resetFunc(): void;
}

export const ResetButton: FunctionComponent<ResetButtonInterface> = ({
    resetFunc,
}) => {
    return (
        <motion.button
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            type="button"
            onClick={resetFunc}
            className="absolute hover-hover:hover:bg-red-400  bg-red-300 rounded-lg p-1 -right-2 -top-2"
        >
            <FiDelete size={20} />
        </motion.button>
    );
};
