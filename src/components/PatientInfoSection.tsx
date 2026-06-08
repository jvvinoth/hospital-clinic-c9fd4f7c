import React from 'react';
import { CreditCard, MapPin, Clipboard, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  CreditCard,
  MapPin,
  Clipboard,
};

export const PatientInfoSection: React.FC = () => {
  const { patientInfo } = siteContent;

  return (
    <section id="patient-info" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            {patientInfo.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            {patientInfo.subtext}
          </p>
        </div>

        {/* Info Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientInfo.blocks.map((block, index) => {
            const Icon = iconMap[block.icon];
            return (
              <div key={index} className="bg-surface rounded-xl p-8 border border-border">
                {/* Icon */}
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  {Icon && <Icon className="text-accent" size={28} />}
                </div>
                
                {/* Heading */}
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {block.title}
                </h3>
                
                {/* Items List */}
                <ul className="space-y-3">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-text-muted leading-relaxed">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
