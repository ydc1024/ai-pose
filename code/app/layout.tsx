import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AI Photo Coach - Your Real-Time AI Posing Guide for Perfect Pictures",
  description:
    "Tired of awkward photos? AI Photo Coach uses real-time AR and AI to guide your poses. Become a founding member and transform your photography today!",
  generator: "v0.app",
  keywords: ["AI photography", "pose guide", "how to pose", "photo tips", "AR camera", "photography coach"],
  openGraph: {
    title: "AI Photo Coach - Never Be Awkward in Photos Again",
    description: "Your AI-powered photography coach guides you to pose like a pro, in real-time.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
