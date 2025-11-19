"use client";

import React from "react";

export default function Background() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
            {/* Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] z-[20] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Gradient Orbs */}
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[100px] animate-pulse delay-1000" />
            <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px]" />
        </div>
    );
}
