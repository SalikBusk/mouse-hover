import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface ModalProps {
    active: boolean; // Define the type of the 'active' prop
}

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        scale: 0,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
};

const Modal: React.FC<ModalProps> = ({ active }) => {
    const modalContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Move Container
        const xMoveContainer = gsap.quickTo(
            modalContainer.current,
            "left",
            { duration: 0.8, ease: "power3" }
        );
        const yMoveContainer = gsap.quickTo(
            modalContainer.current,
            "top",
            { duration: 0.8, ease: "power3" }
        );

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
        });
    }, []);

    return (
        <motion.div
            ref={modalContainer}
            className="px-[20px] py-[10px] rounded-full bg-[#e879f9] text-[18px]"
            style={{
                position: 'absolute',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 300,
                pointerEvents: 'none',
            }}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
        >
            GrowBusk
        </motion.div>
    );
};

export default Modal;
