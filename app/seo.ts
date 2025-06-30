import type { Metadata } from "next";

export const pageTitle: string = "Zffu | Low-Level Code and Projects"
export const description: string = "A backend/low-level developer that has years of experience and skills in development, focusing in Assembly and C projects and sometimes Java and Spigot projects"

/**
 * The base metadata to export on all pages
 */
export const metadataBase: Metadata = {
  metadataBase: new URL("https://zffu.dev"),
  title: {
    default: pageTitle,
    template: "%s | " + pageTitle,
  },
  description: description,
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
    title: pageTitle,
    description: description,
    siteName: "Zffu Portfolio",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: description,
    creator: "@zffumc",
    images: ["/logo.webp"],
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

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zffu",
  jobTitle: "Backend & Low-Level Developer",
  description: description,
  url: "https://zffu.dev",
  sameAs: ["https://github.com/Zffu"],
  knowsAbout: ["JavaScript", "TypeScript", "Backend Developpment", "C", "Assembly", "x86", "Machine Code", "Python", "Java"],
}
