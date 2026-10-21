import Link from "next/link";
import {
  FiCalendar,
  FiScissors,
  FiShield,
  FiStar,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section
      data-section="dark"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-section surface-section"
    >
      {/* 1. Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        src="/background-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 2. Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#171513] z-0 pointer-events-none" />

      {/* 3. Soft Warm Gold Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 blur-[160px] pointer-events-none rounded-full z-0" />

      {/* Main Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.2em] uppercase animate-fade-in">
            <FiShield size={14} className="text-accent" />
            <span>Premier Barbering Experience in B-17</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] animate-fade-up">
            Master Craftsmanship <br />
            <span className="italic text-accent">Luxury Grooming</span>
          </h1>

          {/* Description */}
          <p
            className="text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Saeed Hair Craft combines traditional barbering techniques with
            contemporary styling. Step into our luxury space at B-17 Markaz,
            Islamabad for an unmatched grooming transformation.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="/booking" className="w-full sm:w-auto">
              <Button variant="light" size="lg" className="w-full text-sm">
                <FiCalendar size={18} />
                <span>Book Appointment</span>
                <FiArrowRight size={16} />
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full text-sm bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:border-accent hover:text-accent transition-all"
              >
                <FiScissors size={18} />
                <span>Explore Services</span>
              </Button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div
            className="grid grid-cols-3 gap-4 pt-12 mt-8 max-w-2xl mx-auto border-t border-white/20 text-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white flex items-center justify-center gap-1">
                <span>4.9</span>
                <FiStar className="fill-accent text-accent" size={18} />
              </div>
              <p className="text-[10px] text-white/60 uppercase tracking-widest">
                Top Rated
              </p>
            </div>

            <div className="space-y-2 border-x border-white/20">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white">
                5,000+
              </div>
              <p className="text-[10px] text-white/60 uppercase tracking-widest">
                Happy Clients
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white flex items-center justify-center gap-2">
                <FiClock size={20} className="text-accent" />
                <span>100%</span>
              </div>
              <p className="text-[10px] text-white/60 uppercase tracking-widest">
                On-Time Slots
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
