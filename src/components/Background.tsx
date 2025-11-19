"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
            {/* Paper Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.4] z-[0] pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Pencil Sketches */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                {/* Triangle */}
                <motion.path
                    d="M100,200 L200,400 L0,400 Z"
                    fill="none"
                    stroke="#2d2d2d"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute top-20 left-20"
                    style={{ transform: "translate(10%, 10%) rotate(15deg)" }}
                />

                {/* Circle */}
                <motion.circle
                    cx="80%"
                    cy="20%"
                    r="100"
                    fill="none"
                    stroke="#2d2d2d"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Squiggle */}
                <motion.path
                    d="M0,50 Q50,0 100,50 T200,50 T300,50"
                    fill="none"
                    stroke="#2d2d2d"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
                    style={{ transform: "translate(50%, 50%) scale(2)" }}
                />

                {/* Grid */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2d2d2d" strokeWidth="0.5" opacity="0.3" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1" />
            </svg>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-[15%] left-[10%] w-16 h-16 border-2 border-dashed border-gray-400 rounded-full"
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-[20%] right-[15%] w-24 h-24 border-2 border-gray-400 transform rotate-45"
                animate={{ y: [0, 20, 0], rotate: [45, 60, 30, 45] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}
