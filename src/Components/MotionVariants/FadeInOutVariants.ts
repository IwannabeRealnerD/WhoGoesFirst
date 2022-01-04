const variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4 },
    },
    exit: { opacity: 0 },
};

export const FadeInOutVariants = {
    variants,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
};
