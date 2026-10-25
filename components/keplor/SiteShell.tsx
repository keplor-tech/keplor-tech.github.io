'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="wordmark__mark">K</span> Keplor
        </Link>
        <nav className={open ? 'site-nav site-nav--open' : 'site-nav'}>
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
          {open ? <X size={21} /> : <Menu size={21} />}
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
        <div>
          <span className="wordmark"><span className="wordmark__mark">K</span> Keplor</span>
          <p>Intelligent systems, built around your business.</p>
        </div>
        <div className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/documentation">Documentation</Link>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Keplor. Independent AI/ML and software solutions.</p>
      </footer>

      <CustomCursor />
    </div>
  );
}
