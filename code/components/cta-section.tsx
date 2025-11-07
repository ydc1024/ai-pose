"use client"

import { useLanguage } from "@/lib/language-context"
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Mail } from "lucide-react"

export function CTASection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email })
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setEmail("")
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setError(result.error || t("cta.error"))
      }
    } catch (err) {
      setError(t("cta.error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTryAgain = () => {
    setError("")
  }

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary" />

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">{t("hero.badge")}</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            {t("cta.title")}
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder={t("cta.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    required
                    className="pl-12 h-14 text-lg bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-accent-orange hover:bg-[#ea580c] text-white h-14 px-8 text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? t("cta.submitting") : t("cta.joinButton")}
                </Button>
              </div>
              {error && (
                <div className="mt-4 p-3 bg-red-500/20 backdrop-blur-sm rounded-lg">
                  <p className="text-white text-sm">{error}</p>
                  <Button
                    type="button"
                    variant="link"
                    onClick={handleTryAgain}
                    className="text-white text-sm p-0 h-auto underline mt-1"
                  >
                    {t("cta.tryAgain")}
                  </Button>
                </div>
              )}
              <p className="text-sm text-white/70 mt-2">{t("cta.noSpam")}</p>
              <p className="text-base font-semibold text-white mt-3">{t("cta.founderMessage")}</p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#0ea5e9]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t("cta.success")}</h3>
              <p className="text-white/90">{t("cta.successMessage")}</p>
            </div>
          )}

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">2,500+</p>
              <p className="text-sm text-white/70">{t("cta.trust1")}</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">4.9★</p>
              <p className="text-sm text-white/70">{t("cta.trust2")}</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">$99</p>
              <p className="text-sm text-white/70">{t("pricing.oneTime")}</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">∞</p>
              <p className="text-sm text-white/70">{t("cta.trust3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
