"use client"

import { CheckCircle, Star, Award, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CompletionBadgeProps {
  isCompleted: boolean
  variant?: "default" | "star" | "award" | "trophy"
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export default function CompletionBadge({
  isCompleted,
  variant = "default",
  size = "md",
  showText = false,
}: CompletionBadgeProps) {
  const icons = {
    default: CheckCircle,
    star: Star,
    award: Award,
    trophy: Trophy,
  }

  const sizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const Icon = icons[variant]

  if (!isCompleted) {
    return null
  }

  return (
    <div className={cn("flex items-center space-x-1", isCompleted && "text-green-600")}>
      <Icon className={cn(sizes[size], "fill-current")} />
      {showText && <span className="text-sm font-medium">Completed</span>}
    </div>
  )
}
