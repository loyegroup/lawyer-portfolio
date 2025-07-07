'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  HiBriefcase,
  HiHome,
  HiLightBulb,
  HiScale,
  HiUserGroup,
  HiGlobeAlt,
  HiDocumentText,
} from 'react-icons/hi';

const services = [
  {
    title: 'Corporate & Commercial Law',
    description:
      'Guidance on business formation, regulatory compliance, mergers, acquisitions, and corporate governance.',
    icon: <HiBriefcase className="text-xl text-[var(--primary)] mr-2" />,
  },
  {
    title: 'Real Estate & Property',
    description:
      'End-to-end legal support for property transactions, leases, title verifications, and land disputes.',
    icon: <HiHome className="text-xl text-[var(--primary)] mr-2" />,
  },
  {
    title: 'Intellectual Property',
    description:
      'Trademark registration, copyright protection, patent advice, and IP litigation for creatives and businesses.',
    icon: <HiLightBulb className="text-xl text-[var(--primary)] mr-2" />,
  },
  {
    title: 'Civil Litigation',
    description:
      'Representation in court for disputes involving contracts, torts, defamation, and other civil matters.',
    icon: <HiScale className="text-xl text-[var(--primary)] mr-2" />,
  },
  {
    title: 'Family Law',
    description:
      'Support with divorce, child custody, maintenance, and inheritance issues with sensitivity and care.',
    icon: <HiUserGroup className="text-xl text-[var(--primary)] mr-2" />,
  },
  {
    title: 'Immigration',
    description:
      'Legal counsel for residency, visas, deportation defense, and citizenship applications.',
    icon: <HiGlobeAlt className="text-xl text-[var(--primary)] mr-2" />,
  },
  {
    title: 'Contracts & Agreements',
    description:
      'Drafting and reviewing contracts, NDAs, MoUs, and service agreements that protect your interests.',
    icon: <HiDocumentText className="text-xl text-[var(--primary)] mr-2" />,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-[var(--background)] text-[var(--foreground)] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">Our Legal Services</h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            We offer a full range of legal services tailored to your unique needs — whether personal, professional, or corporate.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <AccordionItem value={`service-${index}`} key={index} className="border border-[var(--border)] rounded-xl">
              <AccordionTrigger className="flex items-center gap-2 px-4 py-3 text-left hover:bg-[var(--card)] rounded-xl">
                {service.icon}
                <span className="font-medium">{service.title}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[var(--muted-foreground)] text-sm">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
