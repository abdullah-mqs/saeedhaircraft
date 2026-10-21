"use client";

import { useState, useMemo } from "react";
import { FiShield, FiFilter } from "react-icons/fi";
import ServiceCard from "../../components/home/ServiceCard";
import Reveal from "../../components/common/Reveal";
import { mockServices } from "../../data/servicesData";
import { ServiceItem } from "../../types";

type Category = "All" | ServiceItem["category"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories = useMemo(() => {
    const set = new Set<Category>(["All"]);
    mockServices.forEach((s) => set.add(s.category));
    return Array.from(set);
  }, []);

  const filteredServices = useMemo(() => {
    return activeCategory === "All"
      ? mockServices
      : mockServices.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div
      data-section="light"
      className="surface-section min-h-screen pt-32 pb-24"
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-section text-section-text-muted text-[10px] font-bold uppercase tracking-widest">
            <FiShield size={14} className="text-accent" />
            <span>Transparent Pricing</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-section-text">
            Our Professional{" "}
            <span className="italic text-accent">Services</span>
          </h1>
          <p className="text-sm text-section-text-muted max-w-xl mx-auto">
            Choose from our curated menu of premium salon services delivered
            with absolute precision and top-tier hygiene.
          </p>
        </div>

        <Reveal direction="up">
          <div className="mb-12 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-section">
            <span className="text-section-text-muted shrink-0 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest mr-4">
              <FiFilter size={13} className="text-accent" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-md border transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-bg border-accent"
                    : "bg-transparent border-transparent text-section-text-muted hover:text-section-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="border border-section rounded-lg p-12 text-center">
              <p className="text-section-text-muted">
                No services in this category yet.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}
