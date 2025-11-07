"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Camera, Lightbulb, ArrowRight } from "lucide-react"

const testimonials = [
  {
    author: "Alex R.",
    avatar: "👨‍💻",
    text: "I was always the awkward one in photos. The AR overlay finally made posing click for me. It's like a mirror that shows you how to be photogenic!",
  },
  {
    author: "Chloe T.",
    avatar: "👩‍💼",
    text: "As a freelancer, I use this for my own headshots. The 'professional' pose pack gave me the confident look I was going for without the studio price tag.",
  },
  {
    author: "David L.",
    avatar: "👨‍🎨",
    text: "I'm obsessed with the 'Coffee Shop' poses. For the first time, my Instagram feed doesn't look all the same. My friends are asking who's taking my pictures!",
  },
]

export function CommunitySection() {
  const { t } = useLanguage()

  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">
            {t("community.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("community.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            <p className="text-xl font-bold text-foreground mb-2">{t("community.value1")}</p>
            <p className="text-muted-foreground">{t("community.value1Desc")}</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center mx-auto mb-4">
              <Camera className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            <p className="text-xl font-bold text-foreground mb-2">{t("community.value2")}</p>
            <p className="text-muted-foreground">{t("community.value2Desc")}</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            <p className="text-xl font-bold text-foreground mb-2">{t("community.value3")}</p>
            <p className="text-muted-foreground">{t("community.value3Desc")}</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">Community Member</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent-orange hover:bg-[#ea580c] text-white text-lg px-8 py-6 gap-2"
            onClick={() => {
              window.open("https://www.besthammer.club", "_blank")
            }}
          >
            {t("community.exploreButton")}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">{t("community.poweredBy")}</p>
        </div>
      </div>
    </section>
  )
}
