"use client"

import { useState } from "react"
import SectionLayout from "@/components/section-layout"
import SectionHub from "@/components/section-hub"
import ChecklistItem from "@/components/checklist-item"
import ExampleToggle from "@/components/example-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContinuousImprovement() {
  const [evaluationPlan, setEvaluationPlan] = useState(false)
  const [professionalDevelopment, setProfessionalDevelopment] = useState(false)
  const [reviewCycle, setReviewCycle] = useState(false)

  return (
    <SectionLayout>
      <SectionHub title="Continuous Improvement" sectionKey="continuousImprovement" prevSection="/ethics">
        <div className="space-y-6">
          <p className="text-lg font-medium text-muted-foreground">
            Plan for ongoing evaluation and improvement of AI implementation.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Improvement Framework</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ChecklistItem
                label="Develop evaluation and assessment plan"
                checked={evaluationPlan}
                onChange={setEvaluationPlan}
              />

              <ChecklistItem
                label="Plan ongoing professional development"
                checked={professionalDevelopment}
                onChange={setProfessionalDevelopment}
              />

              <ChecklistItem
                label="Establish regular review and update cycle"
                checked={reviewCycle}
                onChange={setReviewCycle}
              />

              <ExampleToggle>
                <div className="space-y-3">
                  <p>
                    <strong>Continuous Improvement Elements:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Quarterly stakeholder feedback collection</li>
                    <li>Annual policy and procedure review</li>
                    <li>Regular AI tool effectiveness assessment</li>
                    <li>Ongoing staff training and certification</li>
                    <li>Student outcome tracking and analysis</li>
                    <li>Technology trend monitoring and adaptation</li>
                  </ul>
                </div>
              </ExampleToggle>
            </CardContent>
          </Card>
        </div>
      </SectionHub>
    </SectionLayout>
  )
}
