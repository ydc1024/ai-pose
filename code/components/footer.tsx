"use client"

import { useLanguage } from "@/lib/language-context"
import { Camera, Mail, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="download" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif font-bold text-xl">AI Photo Coach</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              {t("footer.description")}
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="bg-transparent border-background/30 text-background hover:bg-white hover:text-foreground hover:border-white transition-all"
                onClick={() => {
                  // Google Play link would go here
                  alert("Coming soon to Google Play!")
                }}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                {t("footer.googlePlay")}
              </Button>

              <Button
                variant="outline"
                className="bg-transparent border-background/30 text-background hover:bg-white hover:text-foreground hover:border-white transition-all"
                onClick={() => {
                  // App Store link would go here
                  alert("Coming soon to App Store!")
                }}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                {t("footer.appStore")}
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-background transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#features" className="text-background/70 hover:text-background transition-colors">
                  {t("nav.features")}
                </a>
              </li>
              <li>
                <a href="#community" className="text-background/70 hover:text-background transition-colors">
                  {t("nav.community")}
                </a>
              </li>
              <li>
                <a href="#cta" className="text-background/70 hover:text-background transition-colors">
                  {t("nav.joinWaitlist")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-background/70 hover:text-background transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-background/70 hover:text-background transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-background/70 hover:text-background transition-colors">
                  {t("footer.refund")}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-background/70 hover:text-background transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">{t("footer.copyright")}</p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@aiphotocoach.com"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
