"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
    "Node.js", "NestJS", "GraphQL", "PostgreSQL", "MongoDB",
    "Flutter", "Dart", "React Native", "Android", "iOS",
    "AWS", "Docker", "Kubernetes", "CI/CD", "Git",
    "Web3", "Ethers.js", "Solidity", "Hardhat", "Wagmi"
];

export default function TechStack() {
    return (
        <section className="w-full py-20 overflow-hidden relative z-[20]">
            <div className="max-w-[1200px] mx-auto px-4 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white"
                >
                    Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Arsenal</span>
                </motion.h2>
            </div>

            <div className="flex relative">
                <div className="flex animate-marquee whitespace-nowrap">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="mx-8 text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors duration-300 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
                    {technologies.map((tech, index) => (
                        <span
                            key={`clone-${index}`}
                            className="mx-8 text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors duration-300 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
