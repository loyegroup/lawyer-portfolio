'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // from shadcn
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div
          className="`text-2xl font-bold text-primary animate__animated animate__fadeInLeft"
          data-aos="fade-right" 
        >
          <Link href="/">Lawyer<span className="text-blue-600">Pro</span></Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 animate__animated animate__fadeInDown">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-lg font-medium transition-all duration-300"
            >
              <span className="group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden animate__animated animate__fadeInRight">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate__animated animate__fadeInDown">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-blue-600 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
