"use client"

import { useState } from "react"
import SectionLayout from "@/components/section-layout"
import SectionHub from "@/components/section-hub"
import ChecklistItem from "@/components/checklist-item"
import ExampleToggle from "@/components/example-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function VisionValues() {
  const [missionDone, setMissionDone] = useState(false)
  const [stakeholdersDone, setStakeholdersDone] = useState(false)
  const [missionText, setMissionText] = useState("")

  return (
    <SectionLayout>
      <SectionHub title="Vision & Values" sectionKey="visionValues" nextSection="/center-people">
        <div className="space-y-6">
          <p className="text-lg font-medium text-muted-foreground">
            Define your district's AI vision and guiding values to establish a foundation for responsible AI
            implementation.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Mission Statement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ChecklistItem
                label="Write or update AI mission statement"
                checked={missionDone}
                onChange={setMissionDone}
              />

              <div className="space-y-2">
                <Label htmlFor="mission">Your AI Mission Statement</Label>
                <Textarea
                  id="mission"
                  placeholder="Enter your district's AI mission statement..."
                  value={missionText}
                  onChange={(e) => setMissionText(e.target.value)}
                  rows={4}
                />
              </div>

              <ExampleToggle>
                <div className="space-y-3">
                  <p>
                    <strong>Sample Mission:</strong> "Leverage AI responsibly to personalize learning while protecting
                    student privacy and promoting digital equity."
                  </p>
                  <p>
                    <strong>Alternative Example:</strong> "Harness artificial intelligence to enhance educational
                    outcomes, support educator effectiveness, and ensure equitable access to learning opportunities for
                    all students."
                  </p>
                </div>
              </ExampleToggle>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <ChecklistItem
                label="Identify stakeholder groups to involve"
                checked={stakeholdersDone}
                onChange={setStakeholdersDone}
              />

              <ExampleToggle>
                <div className="space-y-2">
                  <p>
                    <strong>Key Stakeholder Groups:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Students and families</li>
                    <li>Teachers and educational staff</li>
                    <li>School administrators</li>
                    <li>IT and technology staff</li>
                    <li>School board members</li>
                    <li>Community representatives</li>
                    <li>Special education coordinators</li>
                    <li>English Language Learner specialists</li>
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
