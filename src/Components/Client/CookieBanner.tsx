"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the cookie consent is already set
        const consent = Cookies.get('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        // Set a cookie to store consent (expires in 365 days)
        Cookies.set('cookieConsent', 'true', { expires: 365 });
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-5 left-0 right-0 bg-dark rounded-3xl text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 mx-auto lg:max-w-6xl md:max-w-2xl max-w-xs">
            <p className="mb-2 md:mb-0">
                I use cookies to improve your experience. By using my site, you agree to my{' '}
                <Link href="/privacy" className="text-primary no-underline">
                    Privacy Policy
                </Link> and <Link href="/terms" className="text-primary no-underline">Terms and Conditions</Link>.
            </p>
            <button
                onClick={handleAccept}
                className="p-5 bg-primary flex justify-center uppercase items-center gap-3 w-fit leading-0 h-fit text-black font-bold rounded-xl hover:scale-90 transition-all ease-in-out duration-300 cursor-pointer"
            >
                Accept
            </button>
        </div>
    );
};

export default CookieBanner;
