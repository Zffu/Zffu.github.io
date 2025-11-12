import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/logo.jpeg"
              alt="Zffu - Backend Developer"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 shadow-lg"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zffu</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Backend Developer in low-level
          </h2>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional, optimized digital projects, ranging from programming languages to kernels and even custom Assemblers!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="https://github.com/Zffu"
              rel="nofollow noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:zffu@zffu.dev"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          <Link
            href="#about"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
