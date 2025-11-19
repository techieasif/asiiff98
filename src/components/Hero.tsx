"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import ResumeDocument from "./ResumePDF";

const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => (
            <Button variant="glass" size="lg" className="group">
                Loading PDF...
                <Download className="ml-2 w-4 h-4" />
            </Button>
        ),
    }
);

export default function Hero() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-[#030014]">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full z-[0]">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-[10] flex flex-col items-center justify-center w-full max-w-[1200px] px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <span className="py-2 px-4 rounded-full border border-[#7042f8]/50 bg-[#7042f8]/10 text-[#7042f8] text-sm font-medium">
                        Welcome to my portfolio
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Mohammad Asif</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 max-w-[800px]"
                >
                    Software Engineer specializing in <span className="text-purple-400">Web3</span>, <span className="text-cyan-400">DeFi</span>, and <span className="text-pink-400">Blockchain</span>.
                    <br />
                    Building <a href="https://0xppl.com" target="_blank" className="underline decoration-purple-500 hover:text-purple-400 transition-colors">0xppl.com</a> | Ex-Niyo
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a href="#projects">
                        <Button variant="premium" size="lg" className="group">
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>

                    {isClient && (
                        <PDFDownloadLink document={<ResumeDocument />} fileName="Mohammad_Asif_Resume.pdf">
                            {/* @ts-ignore */}
                            {({ blob, url, loading, error }) => (
                                <Button variant="glass" size="lg" className="group">
                                    {loading ? "Preparing PDF..." : "Download CV"}
                                    <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </Button>
                            )}
                        </PDFDownloadLink>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 flex gap-6"
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/techieasif" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:techieasif@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
