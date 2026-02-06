"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "0xPPL",
        role: "Software Engineer (Frontend Lead)",
        period: "Dec 2024 – Present",
        location: "Bengaluru, Karnataka, India",
        description: [
            "Leading frontend development for a crypto-native social network using Flutter and React (JS/TS).",
            "Building Web3/DeFi features and decentralized application experiences."
        ]
    },
    {
        company: "Niyo Solutions Inc.",
        role: "Senior Software Engineer",
        period: "Jun 2022 – Dec 2024",
        location: "Bengaluru, Karnataka, India",
        description: [
            "Spearheaded development of in-house UPI payment system handling ₹50+ crore monthly transactions.",
            "Built and contributed to UPI backend using NestJS, Go, and AWS.",
            "Designed and shipped Niyo Forex user-facing application (major boost in customer engagement).",
            "Optimized multiple modules in Niyo Global card product line (performance + feature improvements)."
        ]
    },
    {
        company: "Yellow Class",
        role: "Software Engineer 2",
        period: "Sep 2021 – May 2022",
        location: "Gurugram, Haryana, India",
        description: [
            "Built and improved core features of the Yellow Class edtech app.",
            "Implemented YC Shorts (short-video format similar to YouTube/Reels).",
            "Designed and rolled out gamification system → 30% increase in organic growth.",
            "Built paywall and payment system with Razorpay integration."
        ]
    },
    {
        company: "CBO Infotech",
        role: "Software Engineer",
        period: "Dec 2020 – Sep 2021",
        location: "New Delhi, Delhi, India",
        description: [
            "Migrated legacy native iOS & Android apps to Flutter in 3 months.",
            "Solved complex engineering and UI/UX challenges.",
            "Created server-configurable UI components for dynamic feature toggles (client & employee levels).",
            "Implemented geo-fencing, offline caching, advanced dashboard, and other high-impact features."
        ]
    },
    {
        company: "Web IT Experts Pvt Ltd.",
        role: "Software Engineer",
        period: "Aug 2020 – Dec 2020",
        location: "Noida, Uttar Pradesh, India",
        description: [
            "Developed and maintained features for a social media application.",
            "Increased user engagement by ~30% through new functionality."
        ]
    },
    {
        company: "Webloop Infotech",
        role: "Software Engineer – Mobile",
        period: "Sep 2019 – Aug 2020",
        location: "Gurgaon, India",
        description: [
            "Led development of Gyanshetra education app from scratch to production in 4 months.",
            "Managed a team of 4 engineers.",
            "Delivered full product cycle (design → development, launch) ahead of schedule."
        ]
    },
    {
        company: "Webloop Infotech",
        role: "Software Engineer Intern",
        period: "Jul 2019 – Sep 2019",
        location: "Gurgaon, Haryana, India",
        description: []
    }
];

export default function Experience() {
    return (
        <section id="experience" className="w-full py-20 px-4 relative z-[20]">
            <div className="max-w-[1000px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
                >
                    Professional <span className="text-highlight px-2">Experience</span>
                </motion.h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-border/20 dashed-line" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-foreground rounded-full border-4 border-background z-10 mt-6" />

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                                    <div className={`sketch-border p-6 md:p-8 relative ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                        }`}>
                                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                                        <h4 className="text-lg font-semibold text-secondary mb-4">{exp.company}</h4>

                                        <div className="flex flex-col gap-2 mb-4 text-sm text-secondary/80 font-medium">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <ul className="list-disc list-outside ml-4 space-y-2 text-secondary">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="leading-relaxed">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
