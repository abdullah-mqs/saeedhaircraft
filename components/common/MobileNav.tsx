"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiScissors,
  FiCalendar,
  FiPhoneCall,
  FiImage,
} from "react-icons/fi";

export default function MobileNav() {
  const pathname = usePathname();

  const tabClass = (path: string) => `
    flex flex-col items-center gap-1 py-1 px-2 text-[10px] font-semibold uppercase tracking-wider transition-colors
    ${pathname === path ? "text-text font-bold" : "text-text-muted"}
  `;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-lg border-t border-border z-50 px-2 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className={tabClass("/")}>
          <FiHome size={18} />
          <span>Home</span>
        </Link>

        <Link href="/services" className={tabClass("/services")}>
          <FiScissors size={18} />
          <span>Services</span>
        </Link>

        {/* Center Book Button */}
        <Link href="/booking" className="relative flex flex-col items-center">
          <div className="-mt-6 w-12 h-12 rounded-full bg-text text-bg flex items-center justify-center border-2 border-bg shadow-md transition-transform active:scale-95">
            <FiCalendar size={20} />
          </div>
          <span
            className={`mt-1 text-[10px] font-semibold uppercase tracking-wider ${pathname === "/booking" ? "text-text" : "text-text-muted"}`}
          >
            Book
          </span>
        </Link>

        <Link href="/gallery" className={tabClass("/gallery")}>
          <FiImage size={18} />
          <span>Gallery</span>
        </Link>

        <Link href="/contact" className={tabClass("/contact")}>
          <FiPhoneCall size={18} />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
}
