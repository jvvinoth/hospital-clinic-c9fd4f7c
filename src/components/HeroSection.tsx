import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const { hero } = siteContent;

  return (
    <section id="hero" className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-surface rounded-full -translate-y-1/3 translate-x-1/3 opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight mb-6">
              {hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
              {hero.subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={hero.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-success text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-success-dark transition-colors shadow-sm hover:shadow-md"
              >
                <MessageCircle size={24} />
                {hero.ctaPrimary}
              </a>
            </div>
            
            <p className="text-base text-text-muted mt-4">
              {hero.ctaSecondary}
            </p>
          </div>

          {/* Right Column - Hours Card */}
          <div className="lg:col-span-5">
            <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">{hero.hoursCard.title}</h3>
              </div>
              
              <div className="space-y-4">
                {hero.hoursCard.schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="font-medium text-text-primary">{item.days}</span>
                    <span className="text-text-muted text-right">{item.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-text-muted">{hero.hoursCard.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
