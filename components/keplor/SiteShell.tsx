'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Ambient } from './Ambient';
import { CustomCursor } from './CustomCursor';

const links = [
  ['/services', 'Services'],
  ['/industries', 'Industries'],
  ['/approach', 'Approach'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

const footerNav = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/features', 'Features'],
  ['/blog', 'Blog'],
  ['/services', 'Services'],
  ['/testimonials', 'Testimonials'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact'],
];

const footerServices = [
  ['/services', 'AI & Machine Learning'],
  ['/services', 'Custom Software'],
  ['/services', 'Cloud Solutions'],
  ['/services', 'Research & Analytics'],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="site">
      <Ambient />
      <div className="grain" aria-hidden="true" />
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">K</span>
          <span>Keplor</span>
        </Link>
        <nav className={open ? 'nav nav--open' : 'nav'}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Let's talk <span>↗</span></Link>
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '×' : '☰'}
        </button>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand__mark">K</span>
              <span>Keplor</span>
            </Link>
            <p className="footer-statement">Intelligent systems, built around your business. Keplor designs AI/ML, software, cloud, and analytics solutions for real organisational needs.</p>
            <Link className="button button--primary footer-cta" href="/contact" data-cursor="EXPLORE">Discuss a project <span>↗</span></Link>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerNav.map(([href, label]) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </nav>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <nav className="footer-nav" aria-label="Footer service links">
              {footerServices.map(([href, label]) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Keplor. Independent AI/ML and software solutions.</span>
          <span className="footer-domain">keplor.tech</span>
        </div>
      </footer>

      <CustomCursor />
    </div>
  );
}
