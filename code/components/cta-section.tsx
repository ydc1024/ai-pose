"use client"

import { useLanguage } from "@/lib/language-context"
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Mail } from "lucide-react"

export function
  const { t } = useLanguage()

  return (
    <>
  return ( CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Email submitted:", email)

    setIsSubmitted(true)
    setEmail("")

    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
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
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Ready to Transform Your Photography?
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join the waitlist now to get notified on launch day and receive exclusive early-bird offers!
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-14 text-lg bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent-orange hover:bg-[#ea580c] text-white h-14 px-8 text-lg font-semibold"
                >
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">No spam, ever. Unsubscribe anytime.</p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#0ea5e9]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-white/90">Check your email for confirmation. We'll notify you as soon as we launch!</p>
            </div>
          )}

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">2,500+</p>
              <p className="text-sm text-white/70">On Waitlist</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">4.9★</p>
              <p className="text-sm text-white/70">Beta Rating</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">$20</p>
              <p className="text-sm text-white/70">Founding Price</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-1">∞</p>
              <p className="text-sm text-white/70">Lifetime Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
