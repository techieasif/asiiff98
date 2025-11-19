"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="w-full py-20 px-4 bg-[#030014] relative z-[20]">
            <div className="max-w-[1000px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-2xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Me</span>
                    </h2>

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            I’m a software engineer with <span className="text-white font-semibold">5+ years of experience</span> turning ideas into products used by millions. My expertise spans cross-platform mobile (Flutter, Android, iOS), modern web (React JS/TS), and backend development (Node.js, Golang, JS/TS), with a focus on scalable architecture, intuitive UX, and high-performance systems.
                        </p>
                        <p>
                            I’ve worked end-to-end — from product design and architecture to development, team leadership, and scaling for large user bases. Key projects include <span className="text-purple-400">0xPPL</span>, <span className="text-cyan-400">Niyo</span> (NiyoPay UPI platform), Yellow Class, and CBO.
                        </p>
                        <p>
                            At Niyo, I helped build and scale the NiyoPay UPI platform from the ground up, reaching <span className="text-white font-semibold">₹50+ crore</span> in monthly transaction volume.
                        </p>
                        <p>
                            Currently leading the frontend team at <span className="text-purple-400">0xPPL</span>, building a crypto-native social network using Flutter and React (JS/TS), while deepening expertise in Web3, DeFi, blockchain, and decentralized applications.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
