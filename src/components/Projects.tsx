"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "0xPPL",
        description: "Crypto-native social network. Building Web3/DeFi features and decentralized application experiences using Flutter and React.",
        tags: ["React", "Flutter", "Web3", "DeFi"],
        link: "https://0xppl.com"
    },
    {
        title: "NiyoPay UPI",
        description: "In-house UPI payment system handling ₹50+ crore monthly transactions. Built using NestJS, Go, and AWS.",
        tags: ["NestJS", "Golang", "AWS", "UPI"],
        link: "https://niyo.com"
    },
    {
        title: "Yellow Class",
        description: "Edtech app features including YC Shorts and gamification system leading to 30% organic growth.",
        tags: ["React Native", "Node.js", "Gamification"],
        link: "#"
    },
    {
        title: "Gyanshetra",
        description: "Education app developed from scratch to production in 4 months. Managed a team of 4 engineers.",
        tags: ["Mobile Dev", "Team Lead", "Product Launch"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 px-4 bg-[#030014]">
            <div className="max-w-[1200px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl group hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                        {tag}
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
