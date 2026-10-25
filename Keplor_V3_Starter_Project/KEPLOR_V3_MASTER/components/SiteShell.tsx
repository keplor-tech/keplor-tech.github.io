 "use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["About", "/about/"], ["Services", "/services/"], ["Features", "/features/"],
  ["Blog", "/blog/"], ["Testimonials", "/testimonials/"], ["Careers", "/careers/"], ["Contact", "/contact/"]
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <div className="site-shell">
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Keplor home"><span className="wordmark-mark" aria-hidden="true" />keplor<span style={{color:"var(--color-violet)"}}>.</span></Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href || pathname === href.slice(0,-1) ? "page" : undefined}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="/contact/">Discuss a project <span aria-hidden="true">↗</span></Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>}
    </header>
    <main>{children}</main>
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div><Link className="wordmark" href="/"><span className="wordmark-mark" aria-hidden="true" />keplor<span style={{color:"var(--color-violet)"}}>.</span></Link><p className="footer-note">Thoughtful AI and software systems, designed around real-world needs.</p></div>
          <nav className="footer-links" aria-label="Footer navigation">{[["Home","/"],...links].map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Keplor</span><span>Built with intent. Designed for what’s next.</span></div>
      </div>
    </footer>
  </div>;
}
