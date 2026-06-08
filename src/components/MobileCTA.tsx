import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const MobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white border-t border-border shadow-lg p-4">
        <a
          href={siteContent.hero.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-success text-white px-6 py-4 rounded-lg text-base font-medium hover:bg-success-dark transition-colors shadow-sm w-full"
        >
          <MessageCircle size={20} />
          Book Appointment via WhatsApp
        </a>
      </div>
    </div>
  );
};
