import Link from "next/link";
import { FiCheck, FiAward, FiCalendar } from "react-icons/fi";
import { Barber } from "../../types";

interface BarberCardProps {
  barber: Barber;
}

export default function BarberCard({ barber }: BarberCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden group transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
      {/* Avatar Header */}
      <div className="relative h-72 bg-surface-2 overflow-hidden">
        <img
          src={barber.avatarUrl}
          alt={barber.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Availability pill */}
        <span
          className={`absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1.5 border backdrop-blur-md ${
            barber.isAvailable
              ? "text-success bg-black/50 border-success/40"
              : "text-error bg-black/50 border-error/40"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              barber.isAvailable ? "bg-success animate-pulse" : "bg-error"
            }`}
          />
          {barber.isAvailable ? "Available" : "Busy"}
        </span>

        {/* Experience pill */}
        <span className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 flex items-center gap-1.5">
          <FiAward size={12} className="text-accent" />
          <span>{barber.experienceYears} Yrs Exp.</span>
        </span>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-heading text-xl font-semibold text-text">
            {barber.name}
          </h3>
          <p className="text-[10px] text-accent uppercase tracking-widest font-bold mt-1">
            {barber.role}
          </p>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 pt-2">
          {barber.specialties.map((specialty, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 text-[10px] bg-surface-2 text-text-muted px-2.5 py-1 rounded-full border border-border-soft"
            >
              <FiCheck size={10} className="text-accent" />
              {specialty}
            </span>
          ))}
        </div>

        {/* Book with barber */}
        <Link
          href={`/booking?barberId=${barber.id}`}
          className="mt-4 w-full py-3 bg-transparent border border-border rounded-md text-text hover:bg-accent hover:text-bg hover:border-accent text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200"
        >
          <FiCalendar size={14} />
          <span>Book {barber.name.split(" ")[0]}</span>
        </Link>
      </div>
    </div>
  );
}
