"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useProgress } from "@/contexts/progress-context"
import { useAuth } from "@/contexts/auth-context"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Circle,
  Lock,
  BookOpen,
  Users,
  Shield,
  Target,
  TrendingUp,
  Home,
  BarChart3,
  FileText,
  Phone,
  LogOut,
  User,
} from "lucide-react"

const navigationItems = [
  {
    href: "/",
    label: "Home",
    icon: Home,
    type: "navigation",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: BarChart3,
    type: "navigation",
  },
  {
    type: "divider",
    label: "Learning Path",
  },
  {
    href: "/vision-values",
    label: "Vision & Values",
    icon: Target,
    sectionKey: "visionValues",
    step: 1,
    type: "section",
  },
  {
    href: "/center-people",
    label: "Center People",
    icon: Users,
    sectionKey: "centerPeople",
    step: 2,
    type: "section",
  },
  {
    href: "/advance-equity",
    label: "Advance Equity",
    icon: Shield,
    sectionKey: "advanceEquity",
    step: 3,
    type: "section",
  },
  {
    href: "/ethics",
    label: "Ethics & Safety",
    icon: BookOpen,
    sectionKey: "ethics",
    step: 4,
    type: "section",
  },
  {
    href: "/continuous-improvement",
    label: "Continuous Improvement",
    icon: TrendingUp,
    sectionKey: "continuousImprovement",
    step: 5,
    type: "section",
  },
  {
    type: "divider",
    label: "Resources",
  },
  {
    href: "/resources",
    label: "Resources",
    icon: FileText,
    type: "navigation",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Phone,
    type: "navigation",
  },
]

export default function LearningSidebar() {
  const pathname = usePathname()
  const { progress } = useProgress()
  const { user, logout } = useAuth()

  const isStepUnlocked = (step: number) => {
    if (step === 1) return true
    const previousSteps = navigationItems
      .filter((item) => item.type === "section" && item.step && item.step < step)
      .map((item) => item.sectionKey)

    return previousSteps.every((key) => key && progress[key as keyof typeof progress])
  }

  const getCompletedCount = () => {
    return Object.values(progress).filter(Boolean).length
  }

  const getTotalSections = () => {
    return Object.keys(progress).length
  }

  return (
    <div className="w-80 bg-card border-r h-screen overflow-y-auto sticky top-0 flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold mb-2">AI Guidance Builder</h2>
        <div className="text-sm text-muted-foreground">
          {getCompletedCount()} of {getTotalSections()} sections completed
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(getCompletedCount() / getTotalSections()) * 100}%` }}
          />
        </div>
      </div>

      <nav className="p-4 flex-1">
        <div className="space-y-1">
          {navigationItems.map((item, index) => {
            if (item.type === "divider") {
              return (
                <div key={index} className="py-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
                    {item.label}
                  </div>
                </div>
              )
            }

            const Icon = item.icon!
            const isActive = pathname === item.href
            const isCompleted = item.sectionKey && progress[item.sectionKey as keyof typeof progress]
            const isUnlocked = item.type === "navigation" || !item.step || isStepUnlocked(item.step)

            return (
              <Link
                key={item.href}
                href={isUnlocked ? item.href! : "#"}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive && "bg-primary text-primary-foreground",
                  !isActive && isUnlocked && "hover:bg-muted",
                  !isUnlocked && "opacity-50 cursor-not-allowed",
                )}
              >
                <div className="flex items-center space-x-3 flex-1">
                  {item.type === "section" && (
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : isUnlocked ? (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  )}
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.step && (
                  <div
                    className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                      isCompleted && "bg-green-600 text-white",
                      !isCompleted && isUnlocked && "bg-primary text-primary-foreground",
                      !isUnlocked && "bg-muted text-muted-foreground",
                    )}
                  >
                    {item.step}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="p-4 border-t">
        {user ? (
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <User className="h-4 w-4" />
              <span className="truncate">{user.email}</span>
            </div>
            <Button variant="outline" size="sm" onClick={logout} className="w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </div>
        ) : (
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="/login">
              <User className="h-4 w-4 mr-2" />
              Log In to Save Progress
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
