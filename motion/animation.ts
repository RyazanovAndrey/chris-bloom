import { Variants } from "motion";

export const containerStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
}

export const fadeIn: Variants = {
    hidden: {
        opacity: 0, y: 20, filter: 'blur(5px)'
    },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)', transition: {
            duration: 0.6, ease: 'easeInOut'
        }
    }
}

export const fadeInOpacity: Variants = {
    hidden: {
        opacity: 0, filter: 'blur(5px)'
    },
    visible: {
        opacity: 1, filter: 'blur(0px)', transition: {
            duration: 0.6, ease: 'easeInOut'
        }
    }
}