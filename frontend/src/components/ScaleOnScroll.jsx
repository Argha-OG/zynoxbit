import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScaleOnScroll = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Simple scale up effect
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
    const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                opacity,
                scale,
                y
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScaleOnScroll;
