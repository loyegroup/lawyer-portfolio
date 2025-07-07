'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-20 px-6 bg-[var(--card)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            Whether you're facing a legal challenge or seeking preventive advice, I’m here to help.
          </p>

          <ul className="space-y-4 text-[var(--muted-foreground)]">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[var(--primary)]" />
              <a href="mailto:lawyer@example.com" className="hover:underline">lawyer@example.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[var(--primary)]" />
              <a href="tel:+2348012345678" className="hover:underline">+234 801 234 5678</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[var(--primary)]" />
              12 Adewale Lane, Victoria Island, Lagos
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-[var(--primary)]" />
              <a href="https://linkedin.com/in/johndoe-law" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/johndoe-law
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-[var(--primary)]" />
              <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Send className="w-5 h-5 text-[var(--primary)]" />
              <a href="https://t.me/johndoe_law" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Telegram Message
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-left"
          className="space-y-6 bg-[var(--background)] p-6 rounded-xl border border-[var(--border)] shadow-sm"
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md bg-transparent border-[var(--border)] text-[var(--foreground)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md bg-transparent border-[var(--border)] text-[var(--foreground)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-md bg-transparent border-[var(--border)] text-[var(--foreground)]"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-[var(--primary)] text-white hover:bg-[var(--primary-foreground)] w-full"
          >
            Send Message
          </Button>

          {submitted && (
            <div className="flex items-center gap-2 mt-4 text-sm text-green-600">
              <CheckCircle className="w-4 h-4" />
              Message sent! I’ll get back to you shortly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
