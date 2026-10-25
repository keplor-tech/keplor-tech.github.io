'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Ambient } from './Ambient';
import { CustomCursor } from './CustomCursor';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const links = [
  ['/services', 'Services'],
  ['/industries', 'Industries'],
  ['/approach', 'Approach'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="site">
      <Ambient />
      <motion.header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
        style={{ y: reduced ? 0 : headerY }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
              <span className="wordmark__mark">K</span> Keplor
            </Link>

            <nav className={open ? 'site-nav site-nav--open' : 'site-nav'}>
              {links.map(([href, label]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
              ))}
              <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Let's talk <span>↗</span></Link>
            </nav>

            <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </motion.header>
      {children}
      <footer className="site-footer">
        <div><span className="wordmark"><span className="wordmark__mark">K</span> Keplor</span><p>Intelligent systems, built around your business.</p></div>
        <div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/documentation">Documentation</Link></div>
        <p className="footer-meta">© {new Date().getFullYear()} Keplor. Independent AI/ML and software solutions.</p>
      </footer>
      <CustomCursor />
    </div>
  );
}
