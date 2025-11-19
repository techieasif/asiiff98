import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Background from "@/components/Background";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick",
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
    <html lang="en">
      <body
        className={`${patrickHand.variable} font-sans antialiased bg-[#ffffff] text-[#2d2d2d] overflow-y-scroll overflow-x-hidden`}
      >
        <SmoothScroll />
        <Background />
        {children}
      </body>
    </html>
  );
}
