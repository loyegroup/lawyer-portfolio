'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const qualifications = [
    {
      title: 'LL.B. – University of Lagos',
      date: '2010 – 2014',
      detail: 'Graduated with honors, focused on corporate and property law.',
    },
    {
      title: 'Nigerian Law School (BL)',
      date: '2014 – 2015',
      detail: 'Admitted to the Nigerian Bar after completing professional training.',
    },
    {
      title: 'Senior Associate – LegalBridge Chambers',
      date: '2017 – 2022',
      detail: 'Handled over 150 civil litigation cases and corporate agreements.',
    },
    {
      title: 'Principal Partner – JD Law Firm',
      date: '2022 – Present',
      detail: 'Founded firm with focus on commercial, real estate, and family law.',
    },
  ];

  return (
    <section className="py-20 bg-[var(--background)] text-[var(--foreground)] px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">Resume</h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            A summary of my professional journey, qualifications, and experience in legal practice.
          </p>

          <a
            href="/cv/john-doe-cv.pdf"
            download
            className="mt-6 inline-block"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Button className="text-lg px-6 py-3 bg-[var(--primary)] text-white hover:bg-[var(--primary-foreground)]">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </a>
        </div>

        {/* Work History */}
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
          {qualifications.map((item, index) => (
            <div key={index} className="border-l-4 pl-5 border-[var(--primary)]">
              <h3 className="text-xl font-semibold text-[var(--primary)]">{item.title}</h3>
              <span className="text-sm text-[var(--muted-foreground)]">{item.date}</span>
              <p className="mt-2 text-[var(--muted-foreground)] text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
