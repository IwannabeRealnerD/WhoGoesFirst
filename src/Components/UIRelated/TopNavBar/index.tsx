import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import MotorCycle from "@Images/Motorcycle.png";
import { Menu } from "./Menu";

const topNavVariants = {
    hidden: { y: "-10vh" },
    visible: {
        y: "0",
        transition: { duration: 0.3 },
    },
};

export const TopNav: FunctionComponent = () => {
    return (
        <motion.div
            variants={topNavVariants}
            initial="hidden"
            animate="visible"
            className=" bg-blue-600 fixed max-w-none mx-auto inset-x-0 top-0 shadow-md px-3 z-10"
        >
            <div className=" flex items-center justify-between">
                <div className="flex items-end ">
                    <Link to="/">
                        <motion.img
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            initial={{ x: 100, opacity: 0 }}
                            className="h-16 w-16 mr-2 translate-y-10"
                            src={MotorCycle}
                            alt="motocycle logo"
                        />
                    </Link>
                    <Link to="/">
                        <motion.h1
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            initial={{ x: 100, opacity: 0 }}
                            className="text-xl sm:text-2xl text-gray-200 mb-2"
                        >
                            Who Goes First?
                        </motion.h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Menu />
                </div>
            </div>
        </motion.div>
    );
};
