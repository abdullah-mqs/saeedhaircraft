"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiScissors, FiCalendar } from "react-icons/fi";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (path: string) => `
    flex items-center gap-2 transition-colors py-2 text-xs font-semibold uppercase tracking-widest
    ${pathname === path ? "text-text border-b-2 border-accent" : "text-text-muted hover:text-text"}
  `;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-border shadow-sm"
          : "bg-bg border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md bg-text flex items-center justify-center text-bg transition-transform duration-300 group-hover:scale-105">
            <FiScissors size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-heading font-bold tracking-wider text-text uppercase">
              Saeed Hair Craft
            </span>
            <span className="text-[9px] text-text-muted tracking-widest uppercase">
              Luxury Barbering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link href="/services" className={navLinkClass("/services")}>
            Services
          </Link>
          <Link href="/gallery" className={navLinkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/reviews" className={navLinkClass("/reviews")}>
            Reviews
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/booking">
            <Button variant="dark" size="sm">
              <FiCalendar size={14} />
              <span>Book Now</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
