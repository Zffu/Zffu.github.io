import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer | React, Next.js, Node.js",
  description:
    "Experienced full stack developer specializing in React, Next.js, and Node.js. Creating modern web applications with clean code and exceptional user experiences.",
  keywords:
    "full stack developer, react developer, next.js, node.js, javascript, typescript, web development, frontend, backend",
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  publisher: "John Doe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "John Doe - Full Stack Developer",
    description: "Experienced full stack developer specializing in React, Next.js, and Node.js.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer",
    description: "Experienced full stack developer specializing in React, Next.js, and Node.js.",
    creator: "@johndoe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Doe",
  jobTitle: "Full Stack Developer",
  description: "Experienced full stack developer specializing in React, Next.js, and Node.js",
  url: "https://johndoe.dev",
  sameAs: ["https://github.com/johndoe", "https://linkedin.com/in/johndoe", "https://twitter.com/johndoe"],
  knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Full Stack Development", "Web Development"],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
