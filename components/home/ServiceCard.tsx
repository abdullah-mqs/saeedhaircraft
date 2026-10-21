import Link from "next/link";
import { FiClock, FiCheck, FiTrendingUp } from "react-icons/fi";
import { ServiceItem } from "../../types";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="relative group bg-surface border border-border rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:border-accent/50 hover:shadow-md">
      {/* Popular Badge */}
      {service.popular && (
        <span className="absolute -top-3 right-4 bg-accent text-bg font-bold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
          <FiTrendingUp size={11} />
          Popular
        </span>
      )}

      <div className="space-y-4">
        {/* Category & Title */}
        <div>
          <span className="text-[10px] font-bold text-accent tracking-widest uppercase block mb-1">
            {service.category}
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-text">
            {service.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-text-muted leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Pricing & Duration */}
      <div className="mt-8 pt-4 border-t border-border-soft flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-text-muted text-xs font-medium">
          <FiClock size={14} className="text-accent" />
          <span>{service.durationMinutes} mins</span>
        </div>

        <div className="text-right">
          <span className="text-[9px] text-text-muted block uppercase tracking-widest">
            Starts at
          </span>
          <span className="text-lg md:text-xl font-heading font-bold text-text">
            PKR {service.pricePKR.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Book CTA */}
      <Link
        href={`/booking?serviceId=${service.id}`}
        className="mt-5 w-full py-3 bg-transparent border border-border rounded-md text-text hover:bg-accent hover:text-bg hover:border-accent text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200"
      >
        <FiCheck size={14} />
        <span>Select Service</span>
      </Link>
    </div>
  );
}
