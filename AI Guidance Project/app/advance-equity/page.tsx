"use client"

import { useState } from "react"
import SectionLayout from "@/components/section-layout"
import SectionHub from "@/components/section-hub"
import ChecklistItem from "@/components/checklist-item"
import ExampleToggle from "@/components/example-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdvanceEquity() {
  const [accessAudit, setAccessAudit] = useState(false)
  const [biasAssessment, setBiasAssessment] = useState(false)
  const [inclusiveDesign, setInclusiveDesign] = useState(false)

  return (
    <SectionLayout>
      <SectionHub title="Advance Equity" sectionKey="advanceEquity" prevSection="/center-people" nextSection="/ethics">
        <div className="space-y-6">
          <p className="text-lg font-medium text-muted-foreground">
            Ensure equitable access and mitigate bias in AI systems to promote fairness for all students.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Equity Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ChecklistItem
                label="Conduct digital access and equity audit"
                checked={accessAudit}
                onChange={setAccessAudit}
              />

              <ChecklistItem
                label="Assess AI tools for potential bias"
                checked={biasAssessment}
                onChange={setBiasAssessment}
              />

              <ChecklistItem
                label="Implement inclusive design principles"
                checked={inclusiveDesign}
                onChange={setInclusiveDesign}
              />

              <ExampleToggle>
                <div className="space-y-3">
                  <p>
                    <strong>Equity Considerations:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Device and internet access disparities</li>
                    <li>Language and cultural representation in AI tools</li>
                    <li>Accessibility for students with disabilities</li>
                    <li>Socioeconomic factors affecting AI access</li>
                    <li>Gender and racial bias in AI algorithms</li>
                    <li>Rural vs. urban technology infrastructure</li>
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
