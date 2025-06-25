import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://johndoe.dev"),
  title: {
    default: "John Doe - Full Stack Developer | React, Next.js, Node.js",
    template: "%s | John Doe - Full Stack Developer",
  },
  description:
    "Experienced full stack developer specializing in React, Next.js, and Node.js. Creating modern web applications with clean code and exceptional user experiences.",
  keywords: [
    "full stack developer",
    "react developer",
    "next.js developer",
    "node.js developer",
    "javascript developer",
    "typescript developer",
    "web development",
    "frontend developer",
    "backend developer",
    "UI/UX developer",
    "San Francisco developer",
    "freelance developer",
  ],
  authors: [{ name: "John Doe", url: "https://johndoe.dev" }],
  creator: "John Doe",
  publisher: "John Doe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "John Doe - Full Stack Developer",
    description: "Experienced full stack developer specializing in React, Next.js, and Node.js.",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer",
    description: "Experienced full stack developer specializing in React, Next.js, and Node.js.",
    creator: "@johndoe",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://johndoe.dev" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
