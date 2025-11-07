"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProblemSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const handleMouseDown = () => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = moveEvent.clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, percentage)))
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">
            {t("problem.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("problem.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div ref={containerRef} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img
                  src="/awkward-photo-pose-before.jpg"
                  alt="Before - Awkward Pose"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent-orange text-white px-4 py-2 rounded-full font-semibold">
                  {t("problem.beforeTitle")}
                </div>
              </div>

              <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
                <img
                  src="/professional-photo-pose-after.jpg"
                  alt="After - Professional Pose"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 gradient-primary text-white px-4 py-2 rounded-full font-semibold">
                  {t("problem.afterTitle")}
                </div>
              </div>

              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-6 bg-foreground" />
                    <div className="w-0.5 h-6 bg-foreground" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">Drag the slider to see the difference</p>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif font-bold text-3xl text-foreground mb-8">Common Photo Problems:</h3>
            {[
              t("problem.pain1"),
              t("problem.pain2"),
              t("problem.pain3"),
              t("problem.pain4"),
              t("problem.pain5"),
            ].map((problem, index) => (
              <Card key={index} className="p-6 border-2 hover:border-[#0ea5e9] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-accent-orange" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{problem}</p>
                </div>
              </Card>
            ))}

            <div className="pt-6">
              <p className="text-xl text-foreground font-semibold">Sound familiar? You're not alone.</p>
              <p className="text-muted-foreground mt-2">
                Over 80% of people feel uncomfortable when being photographed. But it doesn't have to be this way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
