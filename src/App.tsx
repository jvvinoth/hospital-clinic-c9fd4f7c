import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { HowToBookSection } from './components/HowToBookSection';
import { AboutSection } from './components/AboutSection';
import { PatientInfoSection } from './components/PatientInfoSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';

function App() {
  useEffect(() => {
    // Add scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowToBookSection />
        <AboutSection />
        <PatientInfoSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
