"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";

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
        tags: ["Flutter", "NestJS", "Golang", "AWS", "UPI"],
        link: "https://goniyo.com"
    },
    {
        title: "Yellow Class (Now Speakx)",
        description: "Edtech app features including YC Shorts and gamification system leading to 30% organic growth.",
        tags: ["Flutter", "Node.js", "Gamification"],
        link: "https://speakx.ai/"
    },
    {
        title: "Gyanshetra",
        description: "Education app developed from scratch to production in 4 months. Managed a team of 4 engineers.",
        tags: ["Mobile Dev", "Team Lead", "Product Launch"],
        link: "https://www.gyanshetra.com/index.php"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 px-4 relative z-[20]">
            <div className="max-w-[1200px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-12 text-center"
                >
                    Featured <span className="text-highlight px-2">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={1000}
                                className="h-full"
                            >
                                <div className="sketch-border p-6 h-full flex flex-col group">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-[#2d2d2d] group-hover:text-[#4a4a4a] transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2">
                                            {project.link !== "#" && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#4a4a4a] hover:text-[#2d2d2d] hover:scale-110 transition-all">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-[#4a4a4a] mb-6 text-sm leading-relaxed flex-grow font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded-md border-2 border-[#2d2d2d] text-[#2d2d2d] font-bold bg-transparent">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
