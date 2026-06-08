import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HowToBookSection: React.FC = () => {
  const { howToBook } = siteContent;

  return (
    <section id="how-to-book" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            {howToBook.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            {howToBook.subtext}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {howToBook.steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              {/* Number Badge */}
              <div className="inline-flex w-16 h-16 bg-accent text-white rounded-full items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                {step.number}
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href={siteContent.hero.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-success-dark transition-colors shadow-sm hover:shadow-md"
          >
            <MessageCircle size={24} />
            {howToBook.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};
