"use client"

import type React from "react"

import ProgressBar from "./progress-bar"
import CompletionBadge from "./completion-badge"
import { useProgress } from "@/contexts/progress-context"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface SectionHubProps {
  title: string
  children: React.ReactNode
  sectionKey: keyof typeof import("@/contexts/progress-context")["defaultState"]
  nextSection?: string
  prevSection?: string
}

export default function SectionHub({ title, children, sectionKey, nextSection, prevSection }: SectionHubProps) {
  const { updateSection, progress } = useProgress()
  const isComplete = progress[sectionKey]

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <CompletionBadge isCompleted={isComplete} variant="award" size="lg" showText />
        </div>
        <ProgressBar />
      </div>

      <div className="bg-card rounded-lg border p-8 shadow-sm mb-8">{children}</div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {prevSection && (
            <Button variant="outline" asChild>
              <Link href={prevSection}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Link>
            </Button>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            onClick={() => updateSection(sectionKey, !isComplete)}
            variant={isComplete ? "secondary" : "default"}
            size="lg"
            className="flex items-center space-x-2"
          >
            <Check className="h-4 w-4" />
            <span>{isComplete ? "Mark incomplete" : "Mark section complete"}</span>
          </Button>

          {nextSection && isComplete && (
            <Button asChild>
              <Link href={nextSection}>
                Next Section
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {isComplete && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 text-green-800">
            <CompletionBadge isCompleted={true} variant="star" />
            <span className="font-medium">Great job! You've completed this section.</span>
          </div>
        </div>
      )}
    </div>
  )
}
