export const slideVariants = {
    hidden: { opacity: 0, x: "10vw" },
    hiddenFromBack: { opacity: 0, x: "-10vw" },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
    slideExit: { x: "-10vw", opacity: 0, transition: { ease: "easeInOut" } },
    slideBackExit: {
        x: "10vw",
        opacity: 0,
        transition: { ease: "easeInOut" },
    },
};

export const slideBackAnimation = {
    variants: slideVariants,
    initial: "hidden",
    exit: "slideBackExit",
    animate: "visible",
};
