"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full py-20 px-4 relative z-[20]">
            <div className="max-w-[800px] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="sketch-border p-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Let&apos;s <span className="text-highlight px-2">Connect</span>
                    </h2>

                    <p className="text-lg text-secondary mb-10 font-medium">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex justify-center gap-8">
                        <a
                            href="mailto:techieasif@gmail.com"
                            className="flex flex-col items-center gap-2 text-foreground hover:text-secondary hover:scale-110 transition-all group"
                        >
                            <div className="p-4 rounded-full bg-secondary/10 border-2 border-border group-hover:bg-foreground group-hover:text-background transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold">Email</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/techieasif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-foreground hover:text-secondary hover:scale-110 transition-all group"
                        >
                            <div className="p-4 rounded-full bg-secondary/10 border-2 border-border group-hover:bg-foreground group-hover:text-background transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold">LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/techieasif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-foreground hover:text-secondary hover:scale-110 transition-all group"
                        >
                            <div className="p-4 rounded-full bg-secondary/10 border-2 border-border group-hover:bg-foreground group-hover:text-background transition-colors">
                                <Github className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold">GitHub</span>
                        </a>
                    </div>
                </motion.div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 text-secondary text-sm font-medium"
                >
                    <p>© {new Date().getFullYear()} Mohammad Asif. All rights reserved.</p>
                </motion.footer>
            </div>
        </section>
    );
}
