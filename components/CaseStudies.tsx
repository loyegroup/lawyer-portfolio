'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Quote } from 'lucide-react';

const caseStudies = [
  {
    title: 'Successfully Resolved High-Value Property Dispute',
    summary:
      'Represented a client in a ₦200M land ownership dispute. Through diligent investigation and strategic negotiation, we secured rightful ownership and avoided prolonged litigation.',
    quote:
      '“Their thoroughness and professionalism were unmatched. I felt seen, heard, and protected throughout the entire process.”',
    aos: 'fade-right',
  },
  {
    title: 'Fast-Tracked Immigration Approval for Entrepreneur',
    summary:
      'Assisted a business client in acquiring residency via investment route. Streamlined paperwork and advocacy led to a 3-week approval time — half the usual period.',
    quote:
      '“I was expecting months of waiting. They made the impossible happen, fast and flawlessly.”',
    aos: 'fade-up',
  },
  {
    title: 'Won Custody Rights in Complex Divorce Case',
    summary:
      'Advocated for a mother in a multi-jurisdictional divorce. Successfully obtained full custody with financial support through compelling legal arguments.',
    quote:
      '“It was the hardest chapter of my life. Thanks to their support, I now have peace and my child.”',
    aos: 'fade-left',
  },
  {
    title: 'Defended Startup in IP Infringement Claim',
    summary:
      'Protected a tech startup against a trademark infringement claim. Settled the matter out of court with zero damages and retained brand identity.',
    quote:
      '“Their strategic thinking and legal insight saved our brand. We couldn’t have asked for better counsel.”',
    aos: 'fade-up',
  },
];

export default function CaseStudies() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-[var(--card)] text-[var(--foreground)] px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Real legal challenges. Practical results. Here’s how we’ve helped clients achieve justice and peace of mind.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  className="w-full text-left p-6 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:shadow-lg transition cursor-pointer animate__animated animate__fadeInUp"
                  data-aos={item.aos}
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-xl">
                <DialogHeader>
                  <DialogTitle className="text-[var(--primary)]">{item.title}</DialogTitle>
                  <DialogDescription className="text-[var(--muted-foreground)] mt-2">
                    {item.summary}
                  </DialogDescription>
                </DialogHeader>

                <blockquote className="mt-6 border-l-4 pl-4 italic text-sm text-[var(--muted-foreground)]">
                  <Quote className="inline-block w-4 h-4 mr-2 text-[var(--primary)]" />
                  {item.quote}
                </blockquote>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
