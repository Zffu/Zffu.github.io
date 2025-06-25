import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, years: "4+ years", description: "Advanced component architecture & hooks" },
        { name: "Next.js", level: 90, years: "3+ years", description: "SSR, SSG, API routes & optimization" },
        { name: "TypeScript", level: 88, years: "3+ years", description: "Type-safe development & advanced types" },
        { name: "JavaScript", level: 92, years: "5+ years", description: "ES6+, async/await, modern patterns" },
        { name: "Tailwind CSS", level: 85, years: "2+ years", description: "Utility-first styling & custom designs" },
        { name: "HTML5/CSS3", level: 90, years: "5+ years", description: "Semantic markup & responsive design" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 87, years: "4+ years", description: "Server-side JavaScript & microservices" },
        { name: "Express.js", level: 85, years: "3+ years", description: "RESTful APIs & middleware development" },
        { name: "PostgreSQL", level: 80, years: "3+ years", description: "Complex queries & database optimization" },
        { name: "MongoDB", level: 75, years: "2+ years", description: "NoSQL design & aggregation pipelines" },
        { name: "GraphQL", level: 70, years: "2+ years", description: "Schema design & query optimization" },
        { name: "Python", level: 78, years: "3+ years", description: "Django, FastAPI & data processing" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90, years: "5+ years", description: "Version control & collaborative workflows" },
        { name: "Docker", level: 75, years: "2+ years", description: "Containerization & deployment" },
        { name: "AWS", level: 70, years: "2+ years", description: "EC2, S3, Lambda & cloud architecture" },
        { name: "Vercel", level: 85, years: "2+ years", description: "Deployment & serverless functions" },
        { name: "Jest", level: 80, years: "3+ years", description: "Unit testing & test-driven development" },
        { name: "Webpack/Vite", level: 75, years: "2+ years", description: "Build tools & optimization" },
      ],
    },
    {
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 82, years: "3+ years", description: "UI/UX design & prototyping" },
        {
          name: "Responsive Design",
          level: 90,
          years: "4+ years",
          description: "Mobile-first & cross-browser compatibility",
        },
        { name: "Accessibility", level: 85, years: "3+ years", description: "WCAG compliance & inclusive design" },
        { name: "User Experience", level: 80, years: "3+ years", description: "User research & interaction design" },
        { name: "Design Systems", level: 78, years: "2+ years", description: "Component libraries & style guides" },
      ],
    },
  ]

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500"
    if (level >= 80) return "bg-blue-500"
    if (level >= 70) return "bg-yellow-500"
    return "bg-gray-500"
  }

  const getSkillLevel = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 80) return "Advanced"
    if (level >= 70) return "Intermediate"
    return "Beginner"
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills & Expertise</h2>

          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Here's a detailed breakdown of my technical skills and proficiency levels. I'm constantly learning and
            improving to stay current with the latest technologies and best practices.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    {category.title}
                    <span className="ml-2 text-sm font-normal text-gray-500">({category.skills.length} skills)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              skill.level >= 90
                                ? "bg-green-100 text-green-800"
                                : skill.level >= 80
                                  ? "bg-blue-100 text-blue-800"
                                  : skill.level >= 70
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {getSkillLevel(skill.level)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{skill.years}</span>
                          <span className="text-sm font-medium text-gray-900">{skill.level}%</span>
                        </div>
                      </div>

                      <Progress value={skill.level} className="h-2" />

                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-900 font-semibold mb-1">Years Experience</div>
                <div className="text-sm text-gray-600">In web development</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-900 font-semibold mb-1">Technologies</div>
                <div className="text-sm text-gray-600">Actively working with</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-900 font-semibold mb-1">Projects Completed</div>
                <div className="text-sm text-gray-600">Across various industries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
