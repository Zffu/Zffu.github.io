import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://zffu.dev"),
  title: {
    default: "Zffu - Low-Level Backend Developer | C, Assembly",
    template: "%s | Zffu - Low-Level Backend Developer | C",
  },
  description:
    "Experienced backend developer specializing in low-level programming such as C, Assembly and Machine code! I also do Java and Spigot projects and a lot of Minecraft related ones as well.",
  keywords: [
    "backend developer",
    "low-level developer",
    "experienced developer",
    "C developer",
    "Assembly developer",
    "kernel developer",
    "kernel development",
    "machine Code developer",
    "backend developer"
  ],
  authors: [{ name: "Zffu", url: "https://zffu.dev" }],
  creator: "Zffu",
  publisher: "Zffu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zffu.dev",
    title: "Zffu - Low-Level Backend Developper",
    description: "Experienced backend developer specializing in low-level programming such as C, Assembly and Machine code! I also do Java and Spigot projects and a lot of Minecraft related ones as well.",
    siteName: "Zffu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zffu - Low-Level Backend Developper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zffu - Low-Level Backend Developper",
    description: "Experienced backend developer specializing in low-level programming such as C, Assembly and Machine code! I also do Java and Spigot projects and a lot of Minecraft related ones as well.",
    creator: "@zffumc",
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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://zffu.dev" />
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
