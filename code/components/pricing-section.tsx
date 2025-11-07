"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PricingSection() {
  const { t } = useLanguage()

  const benefits = [
    t("pricing.benefit1"),
    t("pricing.benefit2"),
    t("pricing.benefit3"),
    t("pricing.benefit4"),
    t("pricing.benefit5"),
    t("pricing.benefit6"),
    t("pricing.benefit7"),
    t("pricing.benefit8"),
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-[#0ea5e9] fill-[#0ea5e9]" />
            <span className="text-sm font-semibold text-[#0ea5e9]">{t("pricing.limited")}</span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">{t("pricing.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-[#0ea5e9]">
            <div className="absolute top-0 right-0 gradient-primary text-white px-6 py-2 text-sm font-semibold">
              MOST POPULAR
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-serif font-bold text-3xl text-foreground mb-4">Founding Member</h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-foreground">{t("pricing.price")}</span>
                      <span className="text-muted-foreground line-through text-2xl">No annual $249</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{t("pricing.oneTime")}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                      <span className="text-muted-foreground">Only 500 {t("pricing.spots")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                      <span className="text-muted-foreground">Lifetime unlimited access</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                      <span className="text-muted-foreground">No recurring fees, ever</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-accent-orange hover:bg-[#ea580c] text-white text-lg py-6"
                    onClick={() => {
                      alert(t("pricing.upgradeMessage"))
                    }}
                  >
                    {t("pricing.joinNow")}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Secure payment powered by Lemon Squeezy
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-2xl text-foreground mb-6">What's Included:</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-[#0ea5e9]" />
                        </div>
                        <p className="text-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
