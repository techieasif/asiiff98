"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Animated SVG Sketches */}
            <motion.svg
                className="absolute top-[10%] left-[5%] w-32 h-32 text-secondary/5"
                viewBox="0 0 100 100"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.5, pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <motion.path
                    d="M10 10 L90 10 L50 90 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </motion.svg>

            <motion.svg
                className="absolute top-[40%] right-[10%] w-48 h-48 text-secondary/5"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.svg>

            <motion.svg
                className="absolute bottom-[15%] left-[20%] w-40 h-40 text-secondary/5"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <motion.path
                    d="M10 50 Q 25 25, 50 50 T 90 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ d: ["M10 50 Q 25 25, 50 50 T 90 50", "M10 50 Q 25 75, 50 50 T 90 50", "M10 50 Q 25 25, 50 50 T 90 50"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.svg>
        </div>
    );
}
