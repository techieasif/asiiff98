"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend & Mobile",
        items: ["React.js (JS/TS)", "Flutter", "Android (Native)", "iOS (Native)", "Next.js", "Tailwind CSS"]
    },
    {
        category: "Backend",
        items: ["Node.js", "NestJS", "Golang (Go)", "GraphQL", "REST APIs"]
    },
    {
        category: "Web3 & Blockchain",
        items: ["DeFi Protocols", "dApps", "Smart Contract Integration", "Web3.js/Ethers.js"]
    },
    {
        category: "Cloud & Architecture",
        items: ["AWS", "System Design", "Microservices", "Scalable Architecture", "CI/CD"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-20 px-4 bg-[#030014] relative z-[20]">
            <div className="max-w-[1000px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-default"
                                    >
                                        {item}
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
