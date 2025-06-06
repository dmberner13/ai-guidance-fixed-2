"use client"

import { useState } from "react"
import SectionLayout from "@/components/section-layout"
import SectionHub from "@/components/section-hub"
import ChecklistItem from "@/components/checklist-item"
import ExampleToggle from "@/components/example-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Ethics() {
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [safetyProtocols, setSafetyProtocols] = useState(false)
  const [ethicsGuidelines, setEthicsGuidelines] = useState(false)

  return (
    <SectionLayout>
      <SectionHub
        title="Ethics, Safety & Effectiveness"
        sectionKey="ethics"
        prevSection="/advance-equity"
        nextSection="/continuous-improvement"
      >
        <div className="space-y-6">
          <p className="text-lg font-medium text-muted-foreground">
            Address safety, ethics, transparency, and effectiveness in AI implementation.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Safety & Ethics Framework</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ChecklistItem
                label="Develop comprehensive privacy and data protection policy"
                checked={privacyPolicy}
                onChange={setPrivacyPolicy}
              />

              <ChecklistItem
                label="Establish AI safety protocols and risk management"
                checked={safetyProtocols}
                onChange={setSafetyProtocols}
              />

              <ChecklistItem
                label="Create ethical AI use guidelines"
                checked={ethicsGuidelines}
                onChange={setEthicsGuidelines}
              />

              <ExampleToggle>
                <div className="space-y-3">
                  <p>
                    <strong>Key Safety & Ethics Areas:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Student data privacy and FERPA compliance</li>
                    <li>Algorithmic transparency and explainability</li>
                    <li>Human oversight and intervention protocols</li>
                    <li>Age-appropriate AI interactions</li>
                    <li>Intellectual property and academic integrity</li>
                    <li>Vendor security and data handling standards</li>
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
