"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setConsentGiven(true);
    setIsVisible(false);
  };

  useEffect(() => {
    if (consentGiven && typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  }, [consentGiven]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-0 right-0 bg-dark text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 mx-auto lg:max-w-6xl md:max-w-2xl max-w-xs rounded-3xl shadow-lg">
      <p className="mb-2 md:mb-0 text-center md:text-left">
        I use cookies to improve your experience. By using my site, you agree to my{" "}
        <Link href="/privacy-policy" className="text-primary no-underline hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-primary no-underline hover:underline">
          Terms and Conditions
        </Link>
        .
      </p>
      <button
        onClick={handleAccept}
        className="px-5 py-3 bg-primary text-black font-bold rounded-xl hover:scale-95 transition-transform duration-200 cursor-pointer"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
