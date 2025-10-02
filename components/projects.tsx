import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "ZAC (Third Generation)", 
      description: "A latency compensated, efficient prediction anticheat for Minecraft: Java & Bedrock (Soon) with 2.22E-16 (maximum) precision with a perfect reimplementation of the Minecraft movement engine",
      image: "",
      technologies: ["Java", "Spigot", "NMS", "Netty", "MCP Legacy", "New MPC"], 
      githubUrl: "https://zac.zffu.dev",
      featured: true
    },
    {
      title: "Cavernfall",
      description: "Cavernfall is an upcoming video game made by Cavernfall Interactives",
      image: "",
      technologies: ["Godot", "GDScript", "C#", "C++", "C"],
      githubUrl: "https://github.com/CavernfallDev",
      featured: true
    },
    {
      title: "Quickfall",
      description: "A fast, uncomplete programming language that I made while learning C",
      image: "/qf.png",
      technologies: ["C", "Assembly", "x86"],
      githubUrl: "https://github.com/Quickfall/quickfall",
      featured: true
    },
    {
      title: "Mirage",
      description: "Mirage is an attempt at making an Kernel while me learning C",
      image: "https://images.prismic.io/whyzz/08b56996-8efd-468a-b474-1f6583261919_mirage.jpg?auto=compress%2Cformat&w=900",
      technologies: ["C", "Assembly", "BootLoading"],
      githubUrl: "https://github.com/Zffu/mirage",
      featured: true
    },
    {
      title: "Sprint Assembly",
      description: "Sprint Assembly is a custom assembler that aims to be multi platform",
      image: "",
      technologies: ["C", "Assembly", "x86", "Machine Code"],
      githubUrl: "https://github.com/SprintLanguage/asm",
      featured: true
    },
    {
      title: "Sprint",
      description: "Sprint is an upcomming, optimized and efficient programming language. Allowing you to not trade speed for ease of code",
      image: "",
      technologies: ["C", "SprintASM", "Assembly", "x86", "Machine Code"],
      githubUrl: "https://github.com/SprintLanguage",
      featured: true
    },
    {
      title: "Hexastrike",
      description: "Hexastrike is a simplicity and efficiency driven Socket server framework written in C. It was able to handle over 100k CPS (Client per Second) with minimum latency",
      image: "",
      technologies: ["C", "Sockets"],
      githubUrl: "https://github.com/Zffu/Hexastrike",
      featured: true
    },
    {
      title: "ZSTD",
      description: "C library allowing you to write entire data structures (with functions) in just one line",
      image: "",
      technologies: ["C"],
      githubUrl: "https://github.com/Zffu/zstd",
      featured: false
    },
    {
      title: "JDump",
      description: "A little Github CI script allowing you to generate a static maven repository interface for your projects",
      image: "",
      technologies: ["Github CI", "HTML", "Javascript", "Shell"],
      githubUrl: "https://github.com/Zffu/JDump"
    },
    {
      title: "WorldManager",
      description: "Plugin allowing to manage worlds that get automatically reset.",
      image: "",
      technologies: ["Java", "Spigot"],
      githubUrl: "https://github.com/Zffu/WorldManager",
      featured: false
    },
    {
      title: "Thunderstrike",
      description: "Thunderstrike is a custom Minecraft server software",
      image: "",
      technologies: ["Java", "NIO", "Sockets"],
      githubUrl: "https://github.com/Zffu/Thunderstrike",
      featured: false
    },
    {
      title: "Commons",
      description: "Library of common Java code",
      image: "",
      technologies: ["Java"],
      githubUrl: "https://github.com/Zffu/Commons",
      featured: false
    },
    {
      title: "EzNPCs",
      description: "EzNPCs is a minecraft plugin aiming to be a optimized and customizable npc plugin",
      image: "",
      technologies: ["Java"],
      githubUrl: "https://github.com/Zffu/EzNPCs",
      featured: false
    },
    {
      title: "CrimsonDB",
      description: "An attempt at making an optimized and easy to use database for Minecraft plugins (and more).",
      image: "",
      technologies: ["Java"],
      githubUrl: "https://github.com/Zffu/CrimsonDB",
      featured: false
    },
    {
      title: "BuildTickets",
      description: "An attempt at making an optimized and easy to use database for Minecraft plugins (and more).",
      image: "",
      technologies: ["Java", "Spigot", "NMS"],
      githubUrl: "https://github.com/Zffu/BuildTickets",
      featured: false
    },
    {
      title: "Crystal",
      description: "Crystal is a cross-software minecraft advanced animation lib.",
      image: "",
      technologies: ["Java", "Spigot", "Minestom", "NMS"],
      githubUrl: "https://github.com/Zffu/Crystal",
      featured: false
    },
    {
      title: "Blossom",
      description: "Attempt to code a language in C++ while learning it",
      image: "",
      technologies: ["C++", "C"],
      githubUrl: "https://github.com/Zffu/Blossom",
      featured: false,
    }, 
    {
      title: "DeathTax",
      description: "A Small plugin to make players pay a fee when they die (for a spigot thread)",
      image: "",
      technologies: ["Java", "Spigot"],
      githubUrl: "https://github.com/Zffu/DeathTax",
      featured: false
    },
    {
      title: "CartographyEvent",
      description: "A Small example plugin for a spigot forum thread to add events for the cartography table",
      image: "",
      technologies: ["Java", "Spigot"],
      githubUrl: "https://github.com/Zffu/CartographyEvent",
      featured: false
    },
    {
      title: "InvisibleDeaths",
      description: "A Plugin to change player's death messages when killed by an invisible player. (Spigot forum request)",
      image: "",
      technologies: ["Java", "Spigot"],
      githubUrl: "https://github.com/Zffu/InvisibleDeaths",
      featured: false
    },
    {
      title: "SimpleNPCs", 
      description: "A Simple way to add npcs into Spigot Plugins and Minecraft!",
      image: "",
      technologies: ["Java", "Spigot", "NMS"],
      githubUrl: "https://github.com/Zffu/SimpleNPCs",
      featured: false
    },
    {
      title: "SkyblockEssentials", 
      description: "SkyblockEssentials is a 1.8.9 forge mod to add essentials features to your skyblock experience",
      image: "",
      technologies: ["Java", "Spigot", "NMS"],
      githubUrl: "https://github.com/Zffu/SkyblockEssentials",
      featured: false
    },
    {
      title: "SimpleHolograms", 
      description: "SimpleHolorams is a simple way to make great holograms with the plugin or the api.",
      image: "",
      technologies: ["Java", "Spigot", "NMS"],
      githubUrl: "https://github.com/Zffu/SkyblockEssentials",
      featured: false
    },
    {
      title: "NoKick", 
      description: "Allows you to send a title to the player instead of kicking it",
      image: "",
      technologies: ["Java", "Spigot"],
      githubUrl: "https://github.com/Zffu/NoKick",
      featured: false
    }
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>

          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in backend-development and low-level
          </p>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "placeholder.webp"}
                    alt={`${project.title} screenshot`}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" asChild>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white text-black hover:bg-gray-100" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="nofollow noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-gray-900">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">{project.description}</CardDescription>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
