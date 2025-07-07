'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-[var(--card)] text-[var(--foreground)] px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title & Intro */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
            With over a decade of experience in civil litigation, corporate law, and family law, I provide practical and client-centered legal solutions backed by integrity, diligence, and transparency.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-10" data-aos="fade-up">
          {/* Background */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Background & Experience</h3>
            <p className="text-[var(--muted-foreground)]">
              I’ve worked with firms ranging from boutique practices to multi-partner legal groups, representing clients in both high-profile and day-to-day matters. My practice spans negotiation, litigation, corporate compliance, and dispute resolution.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Education & Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--muted-foreground)]">
              <li>LL.B, University of Lagos, Nigeria</li>
              <li>Called to the Nigerian Bar – BL (Nigerian Law School)</li>
              <li>Certified in Alternative Dispute Resolution (ADR)</li>
              <li>Member, Nigerian Bar Association (NBA)</li>
            </ul>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Philosophy & Values</h3>
            <p className="text-[var(--muted-foreground)]">
              My clients come first — always. I believe in proactive communication, ethical advocacy, and going the extra mile to ensure legal clarity. Integrity and diligence define every brief I take on.
            </p>
          </div>

          {/* Recognitions */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Recognitions & Testimonials</h3>
            <ul className="space-y-2 text-[var(--muted-foreground)]">
              <li>🏅 Featured in “Top 40 Lawyers Under 40 – Legal Nigeria”</li>
              <li>⭐ “A truly client-focused advocate” – Client Review, 2024</li>
              <li>✅ 95% success rate in case resolution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
