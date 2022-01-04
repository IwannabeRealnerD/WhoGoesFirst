import { FadeInOutVariants } from "@Components/MotionVariants";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useLocation } from "react-router";

export const NoMatch: FunctionComponent = () => {
    const location = useLocation();
    return (
        <motion.div {...FadeInOutVariants}>
            <h3>This is not available pages! {location.pathname}</h3>
        </motion.div>
    );
};
