"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => <Button variant="sketch-outline">Loading PDF...</Button>,
    }
);

import ResumePDF from "./ResumePDF";

export default function Hero() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden">
            {/* Background Effects - Moved to global Background component */}

            <div className="relative z-[10] flex flex-col items-center justify-center w-full max-w-[1200px] px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <span className="py-2 px-4 border-2 border-border rounded-[255px_15px_225px_15px/15px_225px_15px_255px] text-foreground font-bold text-sm tracking-wider uppercase bg-background">
                        Software Engineer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
                >
                    Hi, I&apos;m <span className="text-highlight px-2">Mohammad Asif</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-secondary max-w-[600px] mb-10 leading-relaxed font-medium"
                >
                    Building scalable Web3 & DeFi solutions.
                    <br />
                    Turning complex problems into simple, elegant code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12"
                >
                    <Button
                        variant="sketch"
                        size="lg"
                        className="group"
                        onClick={scrollToProjects}
                    >
                        View Projects
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {isClient && (
                        <PDFDownloadLink
                            document={<ResumePDF />}
                            fileName="Mohammad_Asif_Resume.pdf"
                            className="w-full sm:w-auto"
                        >
                            {({ loading }) => (
                                <Button variant="sketch-outline" size="lg" disabled={loading}>
                                    <Download className="mr-2 w-4 h-4" />
                                    {loading ? "Generating..." : "Download CV"}
                                </Button>
                            )}
                        </PDFDownloadLink>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex gap-6"
                >
                    <a href="https://github.com/techieasif" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-secondary hover:scale-110 transition-all">
                        <Github className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/techieasif" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-secondary hover:scale-110 transition-all">
                        <Linkedin className="w-8 h-8" />
                    </a>
                    <a href="mailto:techieasif@gmail.com" className="text-foreground hover:text-secondary hover:scale-110 transition-all">
                        <Mail className="w-8 h-8" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
