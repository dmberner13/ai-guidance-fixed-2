"use client"

import Link from "next/link"
import SectionLayout from "@/components/section-layout"
import ProgressBar from "@/components/progress-bar"
import { useAuth } from "@/contexts/auth-context"
import { useProgress } from "@/contexts/progress-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Shield, Target, TrendingUp, Award, User } from "lucide-react"

export default function Home() {
  const { user } = useAuth()
  const { percentage } = useProgress()

  const steps = [
    {
      icon: Target,
      title: "Vision & Values",
      description: "Define your district's AI vision and guiding principles",
      href: "/vision-values",
    },
    {
      icon: Users,
      title: "Center People",
      description: "Put students, educators, and families at the center of decisions",
      href: "/center-people",
    },
    {
      icon: Shield,
      title: "Advance Equity",
      description: "Ensure equitable access and mitigate bias in AI systems",
      href: "/advance-equity",
    },
    {
      icon: BookOpen,
      title: "Ethics & Safety",
      description: "Address safety, ethics, transparency, and effectiveness",
      href: "/ethics",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Plan for ongoing evaluation and improvement",
      href: "/continuous-improvement",
    },
  ]

  return (
    <SectionLayout>
      <section className="min-h-screen relative">
        <div
          className="absolute top-40 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url(/images/ai-guidance-background.png)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="h-12 w-12 text-primary" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Regional AI Guidance Builder
              </h1>
            </div>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-muted-foreground">
              A guided, five-step process for district teams to craft a board-ready AI plan aligned with MDE principles.
            </p>
            <div className="max-w-md mx-auto">
              <ProgressBar />
              <p className="text-sm text-muted-foreground mt-2">Progress: {Math.round(percentage)}%</p>
            </div>

            {!user && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-md mx-auto">
                <div className="flex items-center space-x-2 text-blue-800 mb-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">Save Your Progress</span>
                </div>
                <p className="text-sm text-blue-700 mb-3">
                  Sign in to save your progress in the cloud and access it from any device.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Link
                  key={step.href}
                  href={step.href}
                  className="group bg-card rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/vision-values">
                Start the Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SectionLayout>
  )
}
