"use client"

import { useProgress } from "@/contexts/progress-context"
import { useAuth } from "@/contexts/auth-context"
import SectionLayout from "@/components/section-layout"
import ProgressBar from "@/components/progress-bar"
import CompletionBadge from "@/components/completion-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, CheckCircle, Circle, Trophy, Award, User, Cloud, HardDrive } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const { progress, percentage } = useProgress()
  const { user } = useAuth()

  const sections = [
    { key: "visionValues", title: "Vision & Values", href: "/vision-values" },
    { key: "centerPeople", title: "Center People", href: "/center-people" },
    { key: "advanceEquity", title: "Advance Equity", href: "/advance-equity" },
    { key: "ethics", title: "Ethics, Safety & Effectiveness", href: "/ethics" },
    { key: "continuousImprovement", title: "Continuous Improvement", href: "/continuous-improvement" },
  ]

  const completedCount = Object.values(progress).filter(Boolean).length
  const totalSections = Object.keys(progress).length

  const handleExportPDF = () => {
    // This would integrate with jsPDF for actual PDF generation
    const progressData = Object.entries(progress)
      .map(([key, value]) => `${key}: ${value ? "Complete" : "Incomplete"}`)
      .join("\n")

    alert(`PDF export would include:\n\nDistrict AI Plan\n${progressData}`)
  }

  const getBadgeVariant = (index: number) => {
    const variants = ["default", "star", "award", "trophy"] as const
    return variants[index % variants.length]
  }

  return (
    <SectionLayout>
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Progress Dashboard</h1>
          </div>
          <p className="text-muted-foreground mb-6">
            Track your progress through the AI guidance process and export your completed plan.
          </p>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2 text-sm">
              {user ? (
                <>
                  <Cloud className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">Synced to cloud</span>
                </>
              ) : (
                <>
                  <HardDrive className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-600">Saved locally</span>
                </>
              )}
            </div>
            {user && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
            )}
          </div>

          <ProgressBar />

          {completedCount === totalSections && (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Trophy className="h-8 w-8 text-yellow-600" />
                <div>
                  <h3 className="text-lg font-bold text-green-800">Congratulations!</h3>
                  <p className="text-green-700">You've completed all sections of the AI Guidance Builder!</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Section Progress</span>
                </span>
                <span className="text-sm font-normal text-muted-foreground">
                  {completedCount} of {totalSections} completed
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sections.map((section, index) => {
                  const isComplete = progress[section.key as keyof typeof progress]
                  return (
                    <div key={section.key} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center space-x-4">
                        {isComplete ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : (
                          <Circle className="h-6 w-6 text-muted-foreground" />
                        )}
                        <div className="flex items-center space-x-3">
                          <span className={isComplete ? "font-medium" : "text-muted-foreground"}>{section.title}</span>
                          <CompletionBadge isCompleted={isComplete} variant={getBadgeVariant(index)} />
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={section.href}>{isComplete ? "Review" : "Start"}</Link>
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-primary" />
                <span>Export Your Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Generate a comprehensive PDF report of your AI guidance plan to share with stakeholders and board
                members.
              </p>
              <Button onClick={handleExportPDF} className="flex items-center space-x-2" disabled={completedCount === 0}>
                <Download className="h-4 w-4" />
                <span>Export PDF Report</span>
              </Button>
              {completedCount === 0 && (
                <p className="text-sm text-muted-foreground mt-2">
                  Complete at least one section to enable PDF export.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionLayout>
  )
}
