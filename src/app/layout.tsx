import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";
import Background from "@/components/Background";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick",
});

export const metadata: Metadata = {
  title: "Mohammad Asif | Software Engineer",
  description: "Portfolio of Mohammad Asif, a Software Engineer specializing in Web3, DeFi, and Scalable Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          patrickHand.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll />
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
