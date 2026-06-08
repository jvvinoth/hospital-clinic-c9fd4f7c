import React from 'react';
import { Check, Building2 } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const AboutSection: React.FC = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Placeholder - Left Column */}
          <div className="order-2 lg:order-1">
            <div className="bg-border rounded-xl aspect-[4/3] flex flex-col items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
                alt="Hospital building exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              {about.heading}
            </h2>
            
            {/* Body Copy */}
            <div className="space-y-4 mb-8">
              {about.bodyCopy.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credentials List */}
            <div className="space-y-3">
              {about.credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="text-success" size={16} />
                  </div>
                  <p className="text-text-primary leading-relaxed">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
