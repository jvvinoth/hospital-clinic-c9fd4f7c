import React from 'react';
import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactSection: React.FC = () => {
  const { contact } = siteContent;

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {contact.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div>
              <a
                href={contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-success hover:bg-success-dark px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-sm hover:shadow-md"
              >
                <MessageCircle size={24} />
                {contact.whatsapp.text}
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="text-accent" size={20} />
                <span className="text-sm uppercase tracking-wide text-accent font-medium">
                  {contact.phone.label}
                </span>
              </div>
              <a
                href={`tel:${contact.phone.number.replace(/\D/g, '')}`}
                className="text-2xl md:text-3xl font-semibold hover:text-accent transition-colors"
              >
                {contact.phone.number}
              </a>
              <p className="text-white/70 mt-1">{contact.phone.subtext}</p>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-accent" size={20} />
                <span className="text-sm uppercase tracking-wide text-accent font-medium">
                  {contact.location.title}
                </span>
              </div>
              <address className="not-italic text-white/90 leading-relaxed">
                {contact.location.address.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </address>
            </div>
          </div>

          {/* Right Column - Hours & Map */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="text-accent" size={20} />
                <h3 className="text-xl font-semibold">{contact.hours.title}</h3>
              </div>
              <div className="space-y-2">
                {contact.hours.schedule.map((item, index) => (
                  <p key={index} className="text-white/90">{item}</p>
                ))}
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps?q=12.932014459999994,80.04743956999997&hl=en&z=15&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Clinic Location"
                className="w-full h-[400px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
