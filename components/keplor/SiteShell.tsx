'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Ambient } from './Ambient';

const links = [
  ['/services', 'Services'],
  ['/industries', 'Industries'],
  ['/approach', 'Approach'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="site">
      <Ambient />
      <header className="site-header">
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
      </header>
      {children}
      <footer className="site-footer">
        <div><span className="wordmark"><span className="wordmark__mark">K</span> Keplor</span><p>Intelligent systems, built around your business.</p></div>
        <div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/documentation">Documentation</Link></div>
        <p className="footer-meta">© {new Date().getFullYear()} Keplor. Independent AI/ML and software solutions.</p>
      </footer>
    </div>
  );
}
