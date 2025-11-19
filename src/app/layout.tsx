import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Background from "@/components/Background";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Mohammad Asif | Portfolio",
  description: "Software Engineer specializing in Web3, DeFi, and Scalable Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} font-sans antialiased bg-[#030014] text-white overflow-y-scroll overflow-x-hidden`}
      >
        <SmoothScroll />
        <Background />
        {children}
      </body>
    </html>
  );
}
