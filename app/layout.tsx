import "./globals.css"
import { GeistSans } from "geist/font/sans"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "montaser harfoush - Full Stack Developer",
  description:
    "Portfolio of montaser harfoush, a Full Stack Developer specializing in modern web applications and AI integration.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative z-50">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}