"use client"

import { useState } from "react"
import SectionLayout from "@/components/section-layout"
import SectionHub from "@/components/section-hub"
import ChecklistItem from "@/components/checklist-item"
import ExampleToggle from "@/components/example-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CenterPeople() {
  const [engagementPlan, setEngagementPlan] = useState(false)
  const [feedbackSystems, setFeedbackSystems] = useState(false)
  const [transparencyMeasures, setTransparencyMeasures] = useState(false)

  return (
    <SectionLayout>
      <SectionHub
        title="Center People"
        sectionKey="centerPeople"
        prevSection="/vision-values"
        nextSection="/advance-equity"
      >
        <div className="space-y-6">
          <p className="text-lg font-medium text-muted-foreground">
            Center students, educators, and families in decision-making processes to ensure AI serves human needs.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Engagement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ChecklistItem
                label="Develop stakeholder engagement plan"
                checked={engagementPlan}
                onChange={setEngagementPlan}
              />

              <ChecklistItem
                label="Establish feedback collection systems"
                checked={feedbackSystems}
                onChange={setFeedbackSystems}
              />

              <ChecklistItem
                label="Create transparency and communication measures"
                checked={transparencyMeasures}
                onChange={setTransparencyMeasures}
              />

              <ExampleToggle>
                <div className="space-y-3">
                  <p>
                    <strong>Engagement Strategies:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Regular town halls and community forums</li>
                    <li>Student voice committees and surveys</li>
                    <li>Teacher focus groups and professional learning communities</li>
                    <li>Parent advisory councils with AI representation</li>
                    <li>Multilingual communication materials</li>
                    <li>Accessible formats for diverse learning needs</li>
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
