import { Card, CardContent } from "@/components/ui/card"
import { Code, Binary, Zap, Github } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and industry standards.",
    },
    {
      icon: Binary,
      title: "Low-Level",
      description: "Experienced with writing extremly low-level code such as Assembly, Kernels and even Machine Code",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Writing optimized code capable of beating industry-grade code performance.",
    },
    {
      icon: Github,
      title: "Experience",
      description: "Despite me being only 16, I started programming long ago and thus have an depthed experience with coding in general!",
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
                Passionate Developer with 6+ Years Experience
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a backend developper who loves creating fast, efficient and amazing things. With expertise ranging from Python to C and even Binary, I would consider me being experienced.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring the world, thinking about life and even contemplating society.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I write code to also understand the world around me better.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-700">France, Lyon</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-700">8+ Years in Computers/Technology</p>
                <p className="text-gray-700">6+ Years in Development</p>
                <p className="text-gray-700">6+ Years in Java</p>
                <p className="text-gray-700">1+ Year in C, Assembly and low-level</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                <p className="text-gray-700">Open to new opportunities</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-700">French (Native), English (C2+)</p>
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
