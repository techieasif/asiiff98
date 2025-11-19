"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-white/90 border-b-2 border-[#2d2d2d]" : "bg-transparent"
            )}
        >
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-[#2d2d2d] tracking-tighter">
                    Asif<span className="text-highlight">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-[#2d2d2d] hover:text-[#4a4a4a] font-medium text-lg relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2d2d2d] transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#2d2d2d]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white border-b-2 border-[#2d2d2d] p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[#2d2d2d] text-xl font-medium py-2 border-b border-dashed border-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
