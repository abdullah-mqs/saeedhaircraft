"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiScissors,
  FiMapPin,
  FiPhone,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  const linkClass = "text-white/60 hover:text-accent transition-colors";

  // Year ko state mein rakhein taake hydration mismatch na ho
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#171513] text-white border-t border-white/10 pb-24 md:pb-12 pt-16 w-full block relative z-20">
      <div className="section-container grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ... (Col 1, 2, 3, 4 ka poora code same rahega jo pehle tha) ... */}

        {/* Col 1: Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-heading font-bold tracking-widest uppercase text-base">
            <FiScissors className="text-accent" size={20} />
            <span>Saeed Hair Craft</span>
          </div>
          <p className="text-xs leading-relaxed text-white/60">
            B-17 Markaz Islamabad mein premier luxury barbering aur grooming
            salon. Premium haircuts, beard styling, aur skin treatments.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <a
              href="#"
              className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors"
            >
              <FiInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors"
            >
              <FiFacebook size={14} />
            </a>
            <a
              href="mailto:info@saeedhaircraft.site"
              className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors"
            >
              <FiMail size={14} />
            </a>
          </div>
        </div>

        {/* Col 2: Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={linkClass}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/booking" className={linkClass}>
                Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={linkClass}>
                Gallery Lookbook
              </Link>
            </li>
            <li>
              <Link href="/reviews" className={linkClass}>
                Customer Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Hours */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <FiClock className="text-accent" size={14} /> Opening Hours
          </h4>
          <ul className="space-y-2 text-xs text-white/60">
            <li className="flex justify-between gap-2">
              <span>Mon – Thu</span>
              <span className="text-white">11:00 AM – 11:00 PM</span>
            </li>
            <li className="flex justify-between gap-2">
              <span>Friday</span>
              <span className="text-white">02:00 PM – 11:30 PM</span>
            </li>
            <li className="flex justify-between gap-2">
              <span>Sat – Sun</span>
              <span className="text-white">11:00 AM – 11:30 PM</span>
            </li>
          </ul>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-success bg-success/10 border border-success/30 px-2 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Open Now
          </div>
        </div>

        {/* Col 4: Contact */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">
            Visit Us
          </h4>
          <div className="space-y-3 text-xs text-white/60">
            <p className="flex items-start gap-2">
              <FiMapPin className="text-accent mt-0.5 shrink-0" size={14} />
              <span>B-17 Markaz, Multi Gardens, Islamabad, Pakistan</span>
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-accent shrink-0" size={14} />
              <a href="tel:+923000000000" className={linkClass}>
                +92 300 0000000
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiMail className="text-accent shrink-0" size={14} />
              <a href="mailto:info@saeedhaircraft.site" className={linkClass}>
                info@saeedhaircraft.site
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section-container mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 gap-2 uppercase tracking-wider">
        <div>
          {/* Agar currentYear null hai toh kuch na dikhayein, warna year dikhayein */}
          © {currentYear ? currentYear : "2026"} Saeed Hair Craft. All rights
          reserved.
        </div>
        <div>
          Crafted with Precision by{" "}
          <span className="text-white font-bold">Abdullah Riaz</span>
        </div>
      </div>
    </footer>
  );
}
