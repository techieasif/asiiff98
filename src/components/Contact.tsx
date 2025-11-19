"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
    return (
        <section id="contact" className="w-full py-20 px-4 bg-[#030014] relative z-[20]">
            <div className="max-w-[800px] mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-8"
                >
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-lg mb-12"
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a href="mailto:techieasif@gmail.com">
                        <Button variant="premium" size="lg" className="min-w-[200px]">
                            <Mail className="mr-2 w-5 h-5" />
                            Say Hello
                        </Button>
                    </a>

                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/techieasif" target="_blank" rel="noopener noreferrer">
                            <Button variant="glass" size="icon" className="rounded-full w-12 h-12">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="glass" size="icon" className="rounded-full w-12 h-12">
                                <Github className="w-5 h-5" />
                            </Button>
                        </a>
                    </div>
                </motion.div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 text-gray-500 text-sm"
                >
                    <p>© {new Date().getFullYear()} Mohammad Asif. All rights reserved.</p>
                </motion.footer>
            </div>
        </section>
    );
}
