"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

interface ExampleToggleProps {
  children: React.ReactNode
}

export default function ExampleToggle({ children }: ExampleToggleProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="my-4">
      <button
        className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        <span>{open ? "Hide examples" : "Show examples"}</span>
      </button>
      {open && <div className="bg-muted p-4 rounded-lg mt-3 text-sm border-l-4 border-primary">{children}</div>}
    </div>
  )
}
