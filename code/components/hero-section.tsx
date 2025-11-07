"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 gradient-primary opacity-95" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{t("hero.badge")}</span>
            </div>

            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-balance">
              {t("hero.title")}
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-accent-orange hover:bg-[#ea580c] text-white text-lg px-8 py-6 gap-2">
                    <Play className="w-5 h-5" />
                    {t("hero.watchMagic")}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <div className="aspect-video bg-black">
                    <video controls autoPlay className="w-full h-full" poster="/ai-photography-app-interface.jpg">
                      <source
                        src="/vidu-video.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0ea5e9] text-lg px-8 py-6"
                onClick={() => {
                  const element = document.getElementById("cta")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("hero.joinWaitlist")}
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-primary" />
                ))}
              </div>
              <div className="text-white/90">
                <p className="font-semibold">{t("hero.earlyAdopters")}</p>
                <p className="text-sm text-white/70">{t("hero.joinToday")}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-[3rem] border border-white/30 shadow-2xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/10 rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/ai-photography-app-ar-pose-guidance-interface.jpg"
                    alt="AI Photo Coach App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] animate-float">
                <p className="text-sm font-semibold text-foreground">{t("solution.feature1Title")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("solution.feature1Desc")}</p>
              </div>

              <div
                className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-sm font-semibold text-foreground">{t("solution.feature3Title")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("solution.feature3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
