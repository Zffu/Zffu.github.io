import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Zffu</h3>
              <p className="text-gray-400 mb-4">
                Backend Developer passionate about creating exceptional and efficient projects
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/Zffu"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:zffu@zffu.dev"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Bakckend Development</li>
                <li>Low-Level Development</li>
                <li>Kernel Development</li>
                <li>Assembly Development</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Zffu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
