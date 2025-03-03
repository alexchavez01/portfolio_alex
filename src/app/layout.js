import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google"
import React from "react";

const inter = Inter({ subsets: ["latin"] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Alex Chavez",
  description: "Portfolio website of Alex Chavez, a software engineer specializing in AI, game development, and full-stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
