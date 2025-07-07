'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] text-[var(--muted-foreground)] py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 items-start" data-aos="fade-up">
        {/* Created by */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">LawerPro</h3>
          <p className="text-sm">
            Created by <span className="text-[var(--primary)] font-medium">LoyeGroup</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[var(--foreground)]">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Office Hours */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[var(--foreground)]">Office Hours</h4>
          <ul className="text-sm space-y-1">
            <li>Mon – Fri: 9:00 AM – 5:00 PM</li>
            <li>Sat & Sun: Closed</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-[var(--foreground)]">Follow Us</h4>
          <div className="flex gap-4 text-[var(--primary)] text-xl">
            <a href="https://twitter.com/loyegroup" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-foreground)] transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/loyegroup" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-foreground)] transition">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/loyegroup" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-foreground)] transition">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-[var(--muted-foreground)]">
        &copy; {new Date().getFullYear()} LoyeLaw. All rights reserved.
      </div>
    </footer>
  );
}
