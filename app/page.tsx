import { Suspense } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import HeroSection from "../components/home/HeroSection";
import ServiceCard from "../components/home/ServiceCard";
import BarberCard from "../components/home/BarberCard";
import OffersBanner from "../components/home/OffersBanner";
import HighlightsSection from "../components/home/HighlightsSection";
import ReviewsSection from "../components/home/ReviewsSection";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { mockServices } from "../data/servicesData";
import { mockBarbers } from "../data/barbersData";

export default function HomePage() {
  const featuredServices = mockServices.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* 1. Hero (Dark) */}
      <HeroSection />

      {/* 2. Offers (Dark) */}
      <Suspense fallback={null}>
        <Reveal direction="up">
          <OffersBanner />
        </Reveal>
      </Suspense>

      {/* 3. Services (Light) */}
      <Reveal direction="up" delay={50}>
        <section
          data-section="light"
          className="surface-section section-padding border-t border-section"
        >
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <SectionHeading
                align="left"
                eyebrow="SIGNATURE OFFERINGS"
                title="Explore Our"
                titleHighlight="Services"
              />
              <Link href="/services" className="mt-4 md:mt-0 pb-6">
                <Button variant="dark" size="sm" className="gap-2">
                  <span>View All Services</span>
                  <FiArrowRight size={16} />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. Highlights (Dark) */}
      <Reveal direction="up" delay={50}>
        <HighlightsSection />
      </Reveal>

      {/* 5. Barbers (Light) */}
      <Reveal direction="up" delay={50}>
        <section
          data-section="light"
          className="surface-section section-padding border-t border-section"
        >
          <div className="section-container">
            <SectionHeading
              align="center"
              eyebrow="EXPERT TEAM"
              title="Master"
              titleHighlight="Barbers"
              subtitle="Years of craft mastery dedicated to your personal style and grooming satisfaction."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockBarbers.map((barber) => (
                <BarberCard key={barber.id} barber={barber} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. Reviews (Dark) - Suspense wrapped */}
      <Suspense fallback={null}>
        <Reveal direction="up" delay={50}>
          <ReviewsSection />
        </Reveal>
      </Suspense>

      {/* 7. Location CTA (Light) */}
      <Reveal direction="up" delay={50}>
        <section
          data-section="light"
          className="surface-section section-padding border-t border-section"
        >
          <div className="section-container">
            <div className="bg-surface border border-section rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-heading font-semibold uppercase text-section-text">
                  Ready for a Fresh Transformation?
                </h3>
                <p className="text-sm text-section-text-muted max-w-lg leading-relaxed">
                  Walk into Saeed Hair Craft or secure your preferred time slot
                  online instantly. No waiting lines!
                </p>
              </div>

              <Link href="/booking" className="shrink-0">
                <Button variant="dark" size="lg" className="gap-2">
                  <span>Book Your Slot Now</span>
                  <FiArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
