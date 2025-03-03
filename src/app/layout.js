import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alex Chavez | Software Engineer",
  description:
    "Portfolio website of Alex Chavez, a software engineer specializing in AI, game development, and full-stack development.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

