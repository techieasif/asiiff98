"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, Users, Shield } from "lucide-react";

const philosophies = [
    {
        icon: <Users className="w-8 h-8 text-[#2d2d2d]" />,
        title: "User-Centric Design",
        description: "I build with the end-user in mind. Every pixel and interaction is crafted to provide a seamless and delightful experience."
    },
    {
        icon: <Brain className="w-8 h-8 text-[#2d2d2d]" />,
        title: "Problem Solving",
        description: "I don't just write code; I solve problems. I approach challenges with a first-principles mindset to find the most effective solution."
    },
    {
        icon: <Rocket className="w-8 h-8 text-[#2d2d2d]" />,
        title: "Scalable Architecture",
        description: "I design systems that can grow. From modular codebases to cloud infrastructure, I ensure long-term maintainability and performance."
    },
    {
        icon: <Shield className="w-8 h-8 text-[#2d2d2d]" />,
        title: "Clean Code",
        description: "I believe in writing code that is easy to read, test, and debug. Simplicity is the ultimate sophistication."
    }
];

export default function Philosophy() {
    return (
        <section className="w-full py-20 px-4 relative z-[20]">
            <div className="max-w-[1000px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-16 text-center"
                >
                    My <span className="text-highlight px-2">Approach</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="sketch-border p-8"
                        >
                            <div className="mb-6 p-4 rounded-full bg-[#f0f0f0] w-fit border-2 border-[#2d2d2d]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#2d2d2d] mb-4">{item.title}</h3>
                            <p className="text-[#4a4a4a] leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
