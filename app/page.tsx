// app/page.tsx
'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';   
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Resume from '@/components/Resume';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main>
      < Navbar />
      < Hero />
      < About />
      < Services />
      < CaseStudies />
      < Resume />
      < Blog />
      < Contact />
      < Footer />
    </main>
  );
}