 "use client";
 import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

 const navLinks = [
  ["About", "/about/"], ["Services", "/services/"], ["Features", "/features/"],
  ["Blog", "/blog/"], ["Testimonials", "/testimonials/"], ["Careers", "/careers/"], ["Contact", "/contact/"]
];

 const footerColumns = [
   { title: "Company", links: [["About", "/about/"], ["Services", "/services/"], ["Features", "/features/"], ["Careers", "/careers/"]] },
   { title: "Resources", links: [["Blog", "/blog/"], ["Testimonials", "/testimonials/"], ["Contact", "/contact/"]] }
 ];

 export default function SiteShell({ children }: { children: React.ReactNode }) {
   const [mobileOpen, setMobileOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
     const onScroll = () => setScrolled(window.scrollY > 20);
     window.addEventListener("scroll", onScroll, { passive: true });
     return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return <div className="site-shell">
     <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
       <div className="container header-inner">
         <Link className="wordmark" href="/" aria-label="Keplor home">
           <span className="wordmark-mark" aria-hidden="true" />
           keplor<span style={{color:"var(--color-violet)"}}>.</span>
         </Link>
         <nav className="nav-links" aria-label="Primary navigation">
           {navLinks.map(([label, href]) => (
             <Link
               key={href}
               href={href}
               aria-current={pathname === href || pathname === href.slice(0,-1) ? "page" : undefined}
             >
               {label}
             </Link>
           ))}
         </nav>
         <Link className="header-cta" href="/contact/">
           Discuss a project <span aria-hidden="true">→</span>
         </Link>
         <button
           className="menu-toggle"
           type="button"
           aria-expanded={mobileOpen}
           aria-controls="mobile-navigation"
           onClick={() => setMobileOpen(v => !v)}
         >
           {mobileOpen ? "Close" : "Menu"}
         </button>
       </div>
       {mobileOpen && (
         <nav id="mobile-navigation" className="mobile-nav open" aria-label="Mobile navigation">
           <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
           {navLinks.map(([label, href]) => (
             <Link key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</Link>
           ))}
         </nav>
       )}
     </header>
     <main>{children}</main>
     <footer className="site-footer">
       <div className="container">
         <div className="footer-top">
           <div className="footer-brand">
             <Link className="wordmark" href="/">
               <span className="wordmark-mark" aria-hidden="true" />
               keplor<span style={{color:"var(--color-violet)"}}>.</span>
             </Link>
             <p>Thoughtful AI and software systems, designed around real-world needs.</p>
           </div>
           {footerColumns.map((col) => (
             <nav className="footer-nav" key={col.title} aria-label={col.title}>
               <span className="footer-nav-title">{col.title}</span>
               {col.links.map(([label, href]) => (
                 <Link key={href} href={href}>{label}</Link>
               ))}
             </nav>
           ))}
         </div>
         <div className="footer-bottom">
           <span className="footer-copyright">© {new Date().getFullYear()} Keplor</span>
           <span className="footer-tagline">Built with intent. Designed for what’s next.</span>
         </div>
       </div>
     </footer>
   </div>;
 }
