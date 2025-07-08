import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Robotronics Fest 2025 | University of Dhaka",
  description:
    "The flagship inter-university tech event featuring robotics, AI, and data science competitions. August 09-10, 2025 at University of Dhaka.",
    generator: 'Syed Nazmus Sakib'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
