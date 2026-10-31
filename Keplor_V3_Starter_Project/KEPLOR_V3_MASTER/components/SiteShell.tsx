"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Services", "/services/"],
  ["Features", "/features/"],
  ["Products", "/products/"],
  ["Blog", "/blog/"],
  ["Careers", "/careers/"],
  ["Contact", "/contact/"],
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const wash = document.getElementById("wash");
      if (wash) {
        const y = window.scrollY;
        wash.style.transform = `translate3d(${Math.sin(y * 0.0007) * 9}px, ${-y * 0.055}px, 0)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      const wash = document.getElementById("wash");
      if (wash) {
        wash.style.setProperty("--mx", x + "px");
        wash.style.setProperty("--my", y + "px");
      }
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (revealElements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl && !yearEl.textContent) {
      yearEl.textContent = new Date().getFullYear().toString();
    }
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <div className="site-shell">
      <div className="ambient" aria-hidden="true">
        <div className="wash" id="wash"></div>
      </div>
      <div className="grain" aria-hidden="true"></div>
      <header>
        <a className="brand" href="/" aria-label="Keplor home">
          <Image src="/assets/keplor-primary.png" alt="" width={31} height={31} priority />
          <span>Keplor</span>
        </a>
        <nav className="nav" id="nav">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <a className="nav-cta" href="/contact/">
            Let's talk <span>→</span>
          </a>
        </nav>
        <button
          className="menu-toggle"
          id="menuToggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="nav"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </header>
      {mobileOpen && (
        <nav id="mobile-navigation" className="mobile-nav open" aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
      <main>{children}</main>
    </div>
  );
}
