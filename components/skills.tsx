import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Low-Level Development",
      skills: [
        { name: "C", level: 95, years: "1+ year", description: "Advanced knowledge of C, it's concepts and how to write optimized code with it" },
        { name: "Assembly", level: 65, years: "5+ months", description: "Understanding of the instruction sets, registers and general Assembly code" },
        { name: "x86 Machine Code", level: 45, years: "2+ months", description: "Writing of an custom Assembler for the x86 architecture, understanding of registers, ModRM bytes, REX prefixes, and instructions" },
      ]
    },
    {
      title: "Other Backend Development",
      skills: [
        { name: "Java", level: 100, years: "6+ years", description: "Advanced Java ASM manipulation and JVM tricks." },
        { name: "Python", level: 75, years: "1+ year", description: "Used Python to write toolchains for various amounts of my projects." },
        { name: "NodeJS / Typescript", level: 35, years: "1+ year (Not Actively coding)", description: "Usage of NodeJS to write APIs for my various projects" },     
        { name: "Express.js", level: 85, years: "1+ years", description: "Usage of Express to write APIs for my various projects." }
      ],
    },
    {
      title: "Minecraft Development", 
      skills: [
        { name: "Spigot & Bukkit", level: 100, years: "6+ years", description: "Full understanding of the Spigot and Bukkit API for all versions" },
        { name: "NMS (Minecraft Server)", level: 100, years: "4+ years", description: "Deep knowledge of NMS, created a custom NMS fork, packet handling, pathfinding, ..." },
        { name: "Netty", level: 85, years: "3+ years", description: "Fast packet interception for an anticheat" },
        { name: "MCP Legacy (1.7-1.12.2)", level: 95, years: "3+ years", description: "Coded multiple clients interacting with MCP, fully replicated the movement engine with 2.22E-16 accuracy" },
        { name: "MCP Post (1.13-current)", level: 70, years: "2+ years", description: "Made a client interacting with all versions of MCP trough patches and ASM" },
        { name: "Minestom", level: 85, years: "1+ year", description: "Multiple advanced projects using Minestom" },
        { name: "Bungeecord & Proxies", level: 75, years: "3+ years", description: "Multiple plugins and forks of Minecraft server proxies" }, 
        { name: "Minecraft Java Protocol", level: 85, years: "3+ years", description: "Great experience with the Mojang protocol for anticheats, projects and also custom server softwares" }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 100, years: "5+ years", description: "Version control & collaborative workflows" },
        { name: "Vercel", level: 85, years: "2+ years", description: "Deployment & serverless functions" }
      ],
    }
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
                          <h4 className="font-semibold noselect text-gray-900">{skill.name}</h4>
                          <span
                            className={`px-2 py-1 noselect rounded-full text-xs font-medium ${
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
                          <span className="text-sm noselect text-gray-500">{skill.years}</span>
                          <span className="text-sm noselect font-medium text-gray-900">{skill.level}%</span>
                        </div>
                      </div>

                      <Progress value={skill.level} className="h-2" />

                      <p className="text-sm noselect text-gray-600">{skill.description}</p>
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
                <div className="text-3xl font-bold noselect text-blue-600 mb-2">6+</div>
                <div className="text-gray-900 noselect font-semibold mb-1">Years Experience</div>
                <div className="text-sm noselect text-gray-600">In backend development</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold noselect text-green-600 mb-2">10+</div>
                <div className="text-gray-900 noselect font-semibold mb-1">Technologies</div>
                <div className="text-sm noselect text-gray-600">Actively working with</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl noselect font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-900 noselect font-semibold mb-1">Projects Completed</div>
                <div className="text-sm noselect text-gray-600">Across various industries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
