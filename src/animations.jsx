// animations.js
export const slideInLeft = {
    initial: { transform: "translateX(-40%)", opacity: 0, transition: { duration: 0.5 } },
    animate: { transform: "translateX(0%)", opacity: 1, transition: { duration: 0.5, delay: 1 } },
    exit: { transform: "translateX(-40%)", opacity: 0, transition: { duration: 0.5 } },
};

export const slideInRight = {
    initial: { transform: "translateX(40%)", opacity: 0, transition: { duration: 0.5 } },
    animate: { transform: "translateX(0%)", opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
    exit: { transform: "translateX(40%)", opacity: 0, transition: { duration: 0.5 } },
};

export const slideInUp = {
    initial: { transform: "translateY(40%)", opacity: 0, transition: { duration: 0.5 } },
    animate: { transform: "translateY(0%)", opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
    exit: { transform: "translateY(40%)", opacity: 0, transition: { duration: 0.5 } },
};

export const slideInDown = {
    initial: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.5 } },
    animate: { transform: "translateY(0%)", opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
    exit: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.5 } },
};

export const slideInDown1 = {
    initial: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.5, delay: 0.2 } },
    animate: { transform: "translateY(0%)", opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
    exit: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.1, delay: 0.1 } },
};
export const slideInDown2 = {
    initial: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.5, delay: 0.4 } },
    animate: { transform: "translateY(0%)", opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
    exit: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.1, delay: 0.2 } },
};
export const slideInDown3 = {
    initial: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.5, delay: 0.6 } },
    animate: { transform: "translateY(0%)", opacity: 1, transition: { duration: 0.5, delay: 0.6 } },
    exit: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.1, delay: 0.3 } },
};
export const slideInDown4 = {
    initial: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.5, delay: 0.8 } },
    animate: { transform: "translateY(0%)", opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
    exit: { transform: "translateY(-40%)", opacity: 0, transition: { duration: 0.1, delay: 0.4 } },
};

export const textFadeInDelay1 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, delay: 1 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
};
export const textFadeInDelay12 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, delay: 1.2 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
};
export const textFadeInDelay14 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, delay: 1.4 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
};
export const textFadeInDelay16 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, delay: 1.6 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const textFadeInDelay18 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.6, delay: 1.8 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const textFadeInDelay2 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.8, delay: 2 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const textFadeInDelay24 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.4 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
};
export const textFadeInDelay26 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.6 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};
export const textFadeInDelay265 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.65 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const textFadeInDelay27 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.7 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};
export const textFadeInDelay275 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.75 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const textFadeInDelay28 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};
export const textFadeInDelay285 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.85 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const textFadeInDelay29 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.9 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};
export const textFadeInDelay295 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 2.95 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const textFadeInDelay3 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, delay: 3 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const textColorFade = {
    initial: { color: "white" },
    animate: { color: "black", transition: { duration: 0.5 } },
    exit: { color: "white" },
    transition: { delay: 1.5 },
};
export const textSize = {
    initial: { fontSize: "2rem" },
    animate: { fontSize: "35vh", },
    exit: { fontSize: "2rem" },
    transition: { delay: .2, duration: .5 },
};
export const textSize1 = {
    initial: { fontSize: "2rem" },
    animate: { fontSize: "33vh", },
    exit: { fontSize: "2rem" },
    transition: { delay: .2, duration: .75 },
};
export const textSize2 = {
    initial: { fontSize: "2rem" },
    animate: { fontSize: "33vh", },
    exit: { fontSize: "2rem" },
    transition: { delay: .2, duration: 1 },
};

export const fadeOut = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 1, delay: 1.8 } },
    transition: { delay: 1, duration: 5 },
};
export const fadeScaleIn = {
    initial: { opacity: 0, transform: 'scale(.1)' },
    animate: { opacity: 1, transform: 'scale(1)', transition: { duration: 1, delay: 1.8 } },
    transition: { delay: 4, duration: 1 },
};
export const growX = {
    initial: { width: 0 },
    animate: { width: '40vw', transition: { duration: 1, delay: 1.8 } },
};
export const growXmob = {
    initial: { width: 0 },
    animate: { width: '80vw', transition: { duration: 1, delay: 1.8 } },
};

export const textFadeVariants02 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const textFadeVariants04 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.4,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};
export const textFadeVariants06 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.6,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const textFadeVariants08 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.8,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const textFadeVariants1 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const textFadeVariants12 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 1.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

