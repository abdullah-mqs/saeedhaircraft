import { FiClock, FiCheck, FiScissors } from "react-icons/fi";
import { mockServices } from "../../data/servicesData";
import { ServiceItem } from "../../types";

interface ServiceSelectProps {
  selectedServiceId: string;
  onSelect: (service: ServiceItem) => void;
}

export default function ServiceSelect({
  selectedServiceId,
  onSelect,
}: ServiceSelectProps) {
  return (
    <div className="space-y-6">
      {/* Step header */}
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-md bg-text text-bg text-sm flex items-center justify-center font-bold">
          1
        </span>
        <div>
          <h3 className="text-base md:text-lg font-heading font-semibold text-text">
            Select Desired Service
          </h3>
          <p className="text-xs text-text-muted">
            Choose what you want us to craft
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {mockServices.map((service) => {
          const isSelected = selectedServiceId === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service)}
              className={`group p-4 rounded-lg border text-left transition-all duration-200 flex justify-between items-center gap-3 ${
                isSelected
                  ? "bg-surface border-accent shadow-md"
                  : "bg-surface-2 border-border-soft hover:border-accent/50 hover:bg-surface"
              }`}
            >
              <div className="space-y-1.5 pr-2 min-w-0 flex-1">
                {/* Category */}
                <div className="flex items-center gap-1.5">
                  <FiScissors size={11} className="text-accent shrink-0" />
                  <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-sm font-semibold text-text truncate">
                  {service.name}
                </h4>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <FiClock size={12} className="text-accent shrink-0" />
                  <span>{service.durationMinutes} mins</span>
                </div>
              </div>

              {/* Price + check */}
              <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                <span className="text-sm md:text-base font-bold text-text whitespace-nowrap">
                  PKR {service.pricePKR.toLocaleString()}
                </span>
                {isSelected && (
                  <FiCheck size={18} className="text-accent animate-fade-in" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
