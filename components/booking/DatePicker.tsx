import { FiCalendar, FiClock, FiX } from "react-icons/fi";

interface DatePickerProps {
  selectedDate: string;
  selectedTimeSlot: string;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
}

export default function DatePicker({
  selectedDate,
  selectedTimeSlot,
  onSelectDate,
  onSelectTime,
}: DatePickerProps) {
  // Generate next 5 available days
  const availableDates = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      iso: date.toISOString().split("T")[0],
      dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
      dayNum: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      isToday: i === 0,
    };
  });

  const timeSlots = [
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  return (
    <div className="space-y-6">
      {/* Step header */}
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-md bg-text text-bg text-sm flex items-center justify-center font-bold">
          2
        </span>
        <div>
          <h3 className="text-base md:text-lg font-heading font-semibold text-text">
            Select Date & Time
          </h3>
          <p className="text-xs text-text-muted">Pick your preferred slot</p>
        </div>
      </div>

      {/* Date Selector */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
          <FiCalendar className="text-accent" size={14} /> Date
        </label>
        <div className="grid grid-cols-5 gap-2">
          {availableDates.map((item) => {
            const isSelected = selectedDate === item.iso;
            return (
              <button
                key={item.iso}
                type="button"
                onClick={() => onSelectDate(item.iso)}
                className={`relative py-3 px-1 rounded-lg border text-center transition-all duration-200 ${
                  isSelected
                    ? "bg-surface border-accent shadow-sm"
                    : "bg-surface-2 border-border-soft text-text-muted hover:border-accent/50 hover:bg-surface"
                }`}
              >
                {/* Today badge */}
                {item.isToday && (
                  <span
                    className={`absolute top-1 right-1 text-[8px] font-bold uppercase px-1 rounded-sm ${
                      isSelected
                        ? "bg-accent text-bg"
                        : "bg-border-soft text-text-muted"
                    }`}
                  >
                    Today
                  </span>
                )}

                <span className="text-[10px] uppercase block opacity-80 text-text-muted">
                  {item.dayName}
                </span>
                <span
                  className={`text-lg font-extrabold block leading-tight ${
                    isSelected ? "text-accent" : "text-text"
                  }`}
                >
                  {item.dayNum}
                </span>
                <span className="text-[10px] block opacity-80 text-text-muted">
                  {item.month}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slot Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
            <FiClock className="text-accent" size={14} /> Available Slots
          </label>

          {/* Clear selection */}
          {selectedTimeSlot && (
            <button
              type="button"
              onClick={() => onSelectTime("")}
              className="text-[10px] font-semibold text-text-muted hover:text-text transition-colors flex items-center gap-1"
            >
              <FiX size={11} /> Clear
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {timeSlots.map((slot) => {
            const isSelected = selectedTimeSlot === slot;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => onSelectTime(slot)}
                className={`py-2.5 px-2 rounded-md border text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-text text-bg border-text"
                    : "bg-surface-2 border-border-soft text-text-muted hover:border-accent/50 hover:text-text"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>
      </div>

      {/* Summary (when both selected) */}
      {selectedDate && selectedTimeSlot && (
        <div className="p-3 flex items-center gap-2 text-xs rounded-md border border-border bg-surface-2">
          <FiCalendar size={13} className="text-accent shrink-0" />
          <span className="text-text-muted">Selected:</span>
          <span className="text-text font-semibold">
            {new Date(selectedDate).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}{" "}
            • {selectedTimeSlot}
          </span>
        </div>
      )}
    </div>
  );
}
