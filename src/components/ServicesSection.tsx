import React from 'react';
import { Stethoscope, ClipboardCheck, FileText, Users, Briefcase, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  ClipboardCheck,
  FileText,
  Users,
  Briefcase,
};

export const ServicesSection: React.FC = () => {
  const { services } = siteContent;

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            {services.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            {services.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  {Icon && <Icon className="text-accent" size={32} />}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
