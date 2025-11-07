"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { Language } from "@/lib/translations"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-white">AI Photo Coach</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-[#FF6B6B] transition-colors"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white hover:text-[#52C234] transition-colors"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-white hover:text-[#FF6B9D] transition-colors"
            >
              {t("nav.community")}
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-white hover:text-[#0099FF] transition-colors"
            >
              {t("nav.download")}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/10">
                  <Globe className="w-4 h-4" />
                  <span>{languages.find((l) => l.code === language)?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className="cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button onClick={() => scrollToSection("cta")} className="gradient-cta text-white hover:opacity-90">
              {t("nav.joinWaitlist")}
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-white hover:text-[#FF6B6B] transition-colors py-2"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-white hover:text-[#52C234] transition-colors py-2"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="block w-full text-left text-white hover:text-[#FF6B9D] transition-colors py-2"
            >
              {t("nav.community")}
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="block w-full text-left text-white hover:text-[#0099FF] transition-colors py-2"
            >
              {t("nav.download")}
            </button>
            <Button onClick={() => scrollToSection("cta")} className="w-full gradient-cta text-white">
              {t("nav.joinWaitlist")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
