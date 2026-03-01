"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      // Delay visibility slightly for a smoother entry
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setConsentGiven(true);
    setIsVisible(false);
  };

  useEffect(() => {
    if (consentGiven && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  }, [consentGiven]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-7xl z-[100]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-4 md:p-6 shadow-2xl">
        {/* Background Accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-sm md:text-base text-neutral-300 text-center md:text-left leading-relaxed">
            {/* Using a key like 'Cookies.message' - make sure to add this to your JSON */}
            I use cookies to improve your experience. By using my site, you
            agree to my{" "}
            <Link
              href="/privacy-policy"
              className="text-white font-bold underline decoration-primary/50 hover:decoration-primary transition-all"
            >
              {t("nonindesxList.privacy")}
            </Link>{" "}
            &{" "}
            <Link
              href="/terms"
              className="text-white font-bold underline decoration-primary/50 hover:decoration-primary transition-all"
            >
              {t("nonindesxList.terms")}
            </Link>
            .
          </p>

          <button
            onClick={handleAccept}
            className="relative overflow-hidden
          px-8 py-2 cursor-pointer hover:scale-110
          bg-primary text-black 
          flex justify-center items-center gap-3 
          w-fit h-fit 
          font-arabicBold uppercase tracking-widest text-sm
          rounded-2xl 
          shadow-[0_10px_20px_-10px_rgba(229,254,0,0.3)]
          hover:shadow-[0_15px_30px_-10px_rgba(229,254,0,0.5)]
          transition-all duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
