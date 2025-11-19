"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="w-full py-20 px-4 relative z-[20]">
            <div className="max-w-[1000px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="sketch-border p-8 md:p-12 relative"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8 text-center">
                        About <span className="text-highlight px-2">Me</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-[#4a4a4a] leading-relaxed font-medium">
                        <p>
                            I&apos;m a software engineer with 5+ years of experience turning ideas into products used by millions.
                            My expertise spans cross-platform mobile (Flutter, Android, iOS), modern web (React JS/TS),
                            and backend development (Node.js, Golang, JS/TS).
                        </p>
                        <p>
                            Currently, I&apos;m leading frontend development at <span className="font-bold text-[#2d2d2d]">0xPPL</span>,
                            building crypto-native social networks. Previously, I built scalable payment systems at <span className="font-bold text-[#2d2d2d]">Niyo </span>
                            handling ₹50+ crore monthly transactions.
                        </p>
                        <p>
                            I focus on scalable architecture, intuitive UX, and high-performance systems.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
