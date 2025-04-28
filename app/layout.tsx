import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Nav from "./ui/nav";
import { CommandMenu } from "./ui/command";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Abdulrahman",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-base leading-relaxed tracking-wide`}
      >
        <Analytics />
        <Nav />
        <CommandMenu />
        <main className="main-content font-sans px-96 max-md:px-0 max-[1275px]:px-64 max-[1000px]:px-36 py-8 flex flex-wrap justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
