import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"
import { ProgressProvider } from "@/contexts/progress-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Regional AI Guidance Builder",
  description:
    "A guided, five-step process for district teams to craft a board-ready AI plan aligned with MDE principles.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProgressProvider>{children}</ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
