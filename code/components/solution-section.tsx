"use client"

import { Card } from "@/components/ui/card"
import { Camera, Library, Mic } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SolutionSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Camera,
      title: t("solution.feature1Title"),
      description: t("solution.feature1Desc"),
    },
    {
      icon: Library,
      title: t("solution.feature2Title"),
      description: t("solution.feature2Desc"),
    },
    {
      icon: Mic,
      title: t("solution.feature3Title"),
      description: t("solution.feature3Desc"),
    },
  ]
  return (
    <section id="features" className="py-24 gradient-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">
            {t("solution.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("solution.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#0ea5e9]"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">{feature.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="font-serif font-bold text-3xl text-foreground mb-6">See It In Action</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Watch as our AI analyzes your position in real-time and provides instant feedback. The AR overlay
                  shows you exactly where to move, while the voice coach encourages you every step of the way.
                </p>
                <ul className="space-y-3">
                  {["Instant pose detection", "Real-time corrections", "Confidence building"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gradient-primary p-8 flex items-center justify-center">
                <img
                  src="/ai-ar-pose-guidance-demonstration.jpg"
                  alt="Feature Demonstration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
