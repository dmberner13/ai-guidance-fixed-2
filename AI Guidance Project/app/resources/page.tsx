import SectionLayout from "@/components/section-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Shield, Users, Gavel } from "lucide-react"

export default function Resources() {
  const resourceCategories = [
    {
      title: "Legal & Compliance",
      icon: Gavel,
      resources: [
        {
          title: "Minnesota Data Privacy Statutes",
          url: "https://www.mncsa.org/mdedata",
          description: "Official Minnesota data privacy laws and regulations",
        },
        {
          title: "FERPA Guidelines",
          url: "#",
          description: "Federal educational privacy requirements",
        },
      ],
    },
    {
      title: "AI Ethics & Safety",
      icon: Shield,
      resources: [
        {
          title: "UNESCO AI Ethics Recommendation",
          url: "#",
          description: "Global framework for ethical AI development",
        },
        {
          title: "Partnership on AI Guidelines",
          url: "#",
          description: "Industry best practices for responsible AI",
        },
      ],
    },
    {
      title: "Educational Resources",
      icon: BookOpen,
      resources: [
        {
          title: "AI for Education Toolkit",
          url: "#",
          description: "Comprehensive guide for educators",
        },
        {
          title: "Student Digital Citizenship",
          url: "#",
          description: "Teaching responsible technology use",
        },
      ],
    },
    {
      title: "Community Engagement",
      icon: Users,
      resources: [
        {
          title: "Stakeholder Engagement Templates",
          url: "#",
          description: "Ready-to-use materials for community outreach",
        },
        {
          title: "Parent Communication Guides",
          url: "#",
          description: "Explaining AI in education to families",
        },
      ],
    },
  ]

  return (
    <SectionLayout>
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Resources Library</h1>
          <p className="text-muted-foreground">Curated resources to support your AI guidance development process.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resourceCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.resources.map((resource) => (
                      <div key={resource.title} className="border-l-4 border-primary/20 pl-4">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between group"
                        >
                          <div>
                            <h3 className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </SectionLayout>
  )
}
