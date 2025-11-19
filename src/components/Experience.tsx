"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "0xPPL",
        role: "Software Engineer (Frontend Lead)",
        period: "Dec 2024 – Present",
        location: "Bengaluru, Karnataka, India",
        description: [
            "Leading frontend development for a crypto-native social network using Flutter and React (JS/TS)",
            "Building Web3/DeFi features and decentralized application experiences"
        ]
    },
    {
        company: "Niyo Solutions Inc.",
        role: "Senior Software Engineer",
        period: "Jun 2022 – Dec 2024",
        location: "Bengaluru, Karnataka, India",
        description: [
            "Spearheaded development of in-house UPI payment system handling ₹50+ crore monthly transactions",
            "Built and contributed to UPI backend using NestJS, Go, and AWS",
            "Designed and shipped Niyo Forex user-facing application (major boost in customer engagement)",
            "Optimized multiple modules in Niyo Global card product line (performance + feature improvements)"
        ]
    },
    {
        company: "Yellow Class",
        role: "Software Engineer 2",
        period: "Sep 2021 – May 2022",
        location: "Gurugram, Haryana, India",
        description: [
            "Built and improved core features of the Yellow Class edtech app",
            "Implemented YC Shorts (short-video format similar to YouTube/Reels)",
            "Designed and rolled out gamification system → 30% increase in organic growth",
            "Built paywall and payment system with Razorpay integration"
        ]
    },
    {
        company: "CBO Infotech – India",
        role: "Software Engineer",
        period: "Dec 2020 – Sep 2021",
        location: "New Delhi, Delhi, India",
        description: [
            "Migrated legacy native iOS & Android apps to Flutter in 3 months",
            "Solved complex engineering and UI/UX challenges",
            "Created server-configurable UI components for dynamic feature toggles",
            "Implemented geo-fencing, offline caching, advanced dashboard"
        ]
    },
    {
        company: "Web IT Experts Pvt Ltd.",
        role: "Software Engineer",
        period: "Aug 2020 – Dec 2020",
        location: "Noida, Uttar Pradesh, India",
        description: [
            "Developed and maintained features for a social media application",
            "Increased user engagement by ~30% through new functionality"
        ]
    },
    {
        company: "Webloop Infotech",
        role: "Software Engineer – Mobile",
        period: "Sep 2019 – Aug 2020",
        location: "Gurgaon, India",
        description: [
            "Led development of Gyanshetra education app from scratch to production in 4 months",
            "Managed a team of 4 engineers",
            "Delivered full product cycle (design → development, launch) ahead of schedule"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="w-full py-20 px-4 bg-[#030014]">
            <div className="max-w-[1000px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Experience</span>
                </motion.h2>

                <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border border-[#030014]" />

                            <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <h4 className="text-purple-400 font-medium">{exp.company}</h4>
                                    </div>
                                    <div className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-sm md:text-base">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
