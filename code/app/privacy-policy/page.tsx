"use client"

import { useLanguage } from "@/lib/language-context"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-foreground hover:text-[#0ea5e9]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="space-y-12">
          <div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">
              {t("legal.privacyPolicy.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("legal.privacyPolicy.effectiveDate")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-foreground leading-relaxed">
                {t("legal.privacyPolicy.intro")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                {t("legal.privacyPolicy.collection")}
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                {t("legal.privacyPolicy.collectionText")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                {t("legal.privacyPolicy.specialNote")}
              </h2>
              <p className="text-foreground leading-relaxed">
                {t("legal.privacyPolicy.specialNoteText")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                {t("legal.privacyPolicy.rights")}
              </h2>
              <p className="text-foreground leading-relaxed">
                {t("legal.privacyPolicy.rightsText")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                {t("legal.privacyPolicy.retention")}
              </h2>
              <p className="text-foreground leading-relaxed">
                {t("legal.privacyPolicy.retentionText")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                {t("legal.privacyPolicy.minors")}
              </h2>
              <p className="text-foreground leading-relaxed">
                {t("legal.privacyPolicy.minorsText")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
