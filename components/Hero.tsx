'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/lawyer-hero.jpg')", // Ensure this image exists in public/images/
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 text-center px-6 max-w-4xl text-[var(--foreground)]"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Practical Legal Solutions. <br />
          <span style={{ color: 'var(--primary)' }}>
            Trusted Representation.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-[var(--muted-foreground)]">
          I’m John Doe, a dedicated legal professional with over 10 years of
          experience in civil litigation, family law, and corporate matters.
          Let me help you navigate your legal challenges with confidence and
          clarity.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            className="text-lg px-6 py-3 animate-pulse-scale"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
            }}
          >
            Book a Consultation
          </Button>
          <Button
            variant="outline"
            className="text-lg px-6 py-3 border animate-pulse-scale"
            style={{
              borderColor: 'var(--primary)',
              color: 'var(--primary)',
            }}
          >
            Get Legal Help
          </Button>
        </div>
      </div>
    </section>
  );
}
