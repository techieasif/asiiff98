"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = {
    "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    "Mobile": ["Flutter", "React Native", "Android (Native)", "iOS (Native)", "Dart"],
    "Backend": ["Node.js", "NestJS", "Golang", "Express", "GraphQL", "REST APIs"],
    "Database & Cloud": ["PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "Firebase"],
    "Web3 & Blockchain": ["Solidity", "Ethers.js", "Hardhat", "Wagmi", "DeFi Protocols", "Smart Contracts"]
};

export default function Skills() {
    return (
        <section id="skills" className="w-full py-20 px-4 relative z-[20]">
            <div className="max-w-[1000px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
                >
                    Technical <span className="text-highlight px-2">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="sketch-border p-6 hover:bg-secondary/5"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-4 border-b-2 border-border pb-2 inline-block">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 rounded-full border border-border/30"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
