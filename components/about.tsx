import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and industry standards.",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engine visibility.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams using modern development workflows and tools.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Passionate Developer with 5+ Years Experience
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a full stack developer who loves creating digital solutions that make a difference. With expertise
                in modern JavaScript frameworks and a keen eye for design, I bridge the gap between technical
                functionality and user experience.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
                sharing knowledge with the developer community through blog posts and mentoring.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in writing code that not only works but is also maintainable, scalable, and accessible to
                everyone.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-700">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-700">5+ Years in Web Development</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                <p className="text-gray-700">Open to new opportunities</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-700">English (Native), Spanish (Conversational)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <highlight.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
