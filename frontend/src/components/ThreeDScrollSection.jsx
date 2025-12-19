import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ThreeDScrollSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // 3D Entry Effect: Tilts backward and fades in as it scrolls into view
    const rotateX = useTransform(scrollYProgress, [0, 0.35], [25, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.35], [0.85, 1]);
    const y = useTransform(scrollYProgress, [0, 0.35], [60, 0]);

    return (
        <div style={{ perspective: '1200px' }} className={className}>
            <motion.div
                ref={ref}
                style={{
                    rotateX,
                    opacity,
                    scale,
                    y,
                    transformStyle: 'preserve-3d'
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ThreeDScrollSection;
