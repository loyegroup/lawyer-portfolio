'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 px-6 bg-[var(--card)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-4xl font-bold text-[var(--primary)]">About Me</h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
            With over a decade of experience in civil litigation, corporate law, and family law, I provide practical and client-centered legal solutions backed by integrity, diligence, and transparency.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          {/* Background */}
          <Card className="bg-[var(--card)] border-border shadow-sm">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Background & Experience</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                I’ve worked with firms ranging from boutique practices to multi-partner legal groups, representing clients in both high-profile and day-to-day matters. My practice spans negotiation, litigation, corporate compliance, and dispute resolution.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-[var(--card)] border-border shadow-sm">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Education & Certifications</h3>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1">
                <li>LL.B, University of Lagos, Nigeria</li>
                <li>Called to the Nigerian Bar – BL (Nigerian Law School)</li>
                <li>Certified in Alternative Dispute Resolution (ADR)</li>
                <li>Member, Nigerian Bar Association (NBA)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="bg-[var(--card)] border-border shadow-sm">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Philosophy & Values</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                My clients come first — always. I believe in proactive communication, ethical advocacy, and going the extra mile to ensure legal clarity. Integrity and diligence define every brief I take on.
              </p>
            </CardContent>
          </Card>

          {/* Recognitions */}
          <Card className="bg-[var(--card)] border-border shadow-sm">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Recognitions & Testimonials</h3>
              <ul className="text-[var(--muted-foreground)] space-y-1">
                <li>🏅 Featured in “Top 40 Lawyers Under 40 – Legal Nigeria”</li>
                <li>⭐ “A truly client-focused advocate” – Client Review, 2024</li>
                <li>✅ 95% success rate in case resolution</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
