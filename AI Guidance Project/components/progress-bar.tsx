"use client"

import { useProgress } from "@/contexts/progress-context"

export default function ProgressBar() {
  const { percentage } = useProgress()

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 my-4">
      <div className="bg-primary h-4 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
      <div className="text-sm text-muted-foreground mt-2 text-center">{Math.round(percentage)}% Complete</div>
    </div>
  )
}
