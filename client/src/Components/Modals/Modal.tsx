import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface ModalProps {
    modal: {
        active: boolean;
        index: number;
    };
    projects: {
        src: string;
        color: string;
    }[];
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

const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
    const { active, index } = modal;
    const modalContainer = useRef<HTMLDivElement>(null);
    const cursor = useRef<HTMLDivElement>(null);
    const cursorLabel = useRef<HTMLDivElement>(null);

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
        // Move cursor
        const xMoveCursor = gsap.quickTo(
            cursor.current,
            "left",
            { duration: 0.5, ease: "power3" }
        );
        const yMoveCursor = gsap.quickTo(
            cursor.current,
            "top",
            { duration: 0.5, ease: "power3" }
        );
        // Move cursor label
        const xMoveCursorLabel = gsap.quickTo(
            cursorLabel.current,
            "left",
            { duration: 0.45, ease: "power3" }
        );
        const yMoveCursorLabel = gsap.quickTo(
            cursorLabel.current,
            "top",
            { duration: 0.45, ease: "power3" }
        );

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
            xMoveCursor(pageX);
            yMoveCursor(pageY);
            xMoveCursorLabel(pageX);
            yMoveCursorLabel(pageY);
        });
    }, []);

    return (
        <>
            <motion.div
                ref={modalContainer}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
                // style={{
                //     height: '350px',
                //     width: '400px',
                //     position: 'absolute',
                //     backgroundColor: 'white',
                //     overflow: 'hidden',
                //     pointerEvents: 'none',
                //     display: 'flex',
                //     alignItems: 'center',
                //     justifyContent: 'center',
                // }}
            >
                {/* <div
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
                        top: index * -100 + '%',
                    }}
                >
                    {projects.map((project, index) => {
                        const { src, color } = project;
                        return (
                            <div
                                key={`modal_${index}`}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: color,
                                }}
                            >
                                <img
                                    src={`/images/${src}`}
                                    width={300}
                                    height={0}
                                    alt="image"
                                />
                            </div>
                        );
                    })}
                </div> */}
            </motion.div>
            <motion.div
                ref={cursor}
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#455CE9',
                    color: 'white',
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
            ></motion.div>
            <motion.div
                ref={cursorLabel}
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    color: 'white',
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
                View
            </motion.div>
        </>
    );
};

export default Modal;
