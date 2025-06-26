import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Zffu | Backend Low-Level Developer",
  description:
    "Experienced backend developer specializing in low-level programming such as C, Assembly and Machine code!",
  keywords:
    "backend developer, C, assembly, machine code, C developer, machine code developer, Assembly developer",
  authors: [{ name: "Zffu" }],
  creator: "Zffu",
  publisher: "Zffu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zffu.dev",
    title: "Zffu - Low-Level Backend Developer",
    description: "Experienced backend developer specializing in low-level programming such as C, Assembly and Machine code!",
    siteName: "Zffu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zffu - Low-Level Backend Developer",
    description: "Experienced backend developer specializing in low-level programming such as C, Assembly and Machine code!",
    creator: "@zffumc",
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
  name: "Zffu",
  jobTitle: "Backend & Low-Level Developer",
  description: "Experienced backend developer specializing in low-level programming such as C, Assembly and Machine code!",
  url: "https://zffu.dev",
  sameAs: ["https://github.com/Zffu"],
  knowsAbout: ["JavaScript", "TypeScript", "Backend Developpment", "C", "Assembly", "x86", "Machine Code", "Python", "Java"],
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
