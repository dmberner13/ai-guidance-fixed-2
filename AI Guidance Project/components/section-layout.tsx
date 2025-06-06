"use client"

import type React from "react"
import LearningSidebar from "./learning-sidebar"

interface SectionLayoutProps {
  children: React.ReactNode
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <LearningSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
