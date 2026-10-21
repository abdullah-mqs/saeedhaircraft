import { FiUser, FiPhone, FiMessageSquare, FiCheck } from "react-icons/fi";

interface UserDetailsProps {
  name: string;
  phone: string;
  notes: string;
  onUpdate: (field: string, value: string) => void;
}

export default function UserDetails({
  name,
  phone,
  notes,
  onUpdate,
}: UserDetailsProps) {
  // Simple validation — phone format (Pakistani)
  const phoneValid =
    phone.replace(/\s/g, "").length === 0 ||
    /^(\+92|0)3\d{9}$/.test(phone.replace(/\s/g, ""));
  const nameValid = name.length === 0 || name.length >= 2;

  return (
    <div className="space-y-6">
      {/* Step header */}
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-md bg-text text-bg text-sm flex items-center justify-center font-bold">
          3
        </span>
        <div>
          <h3 className="text-base md:text-lg font-heading font-semibold text-text">
            Your Contact Details
          </h3>
          <p className="text-xs text-text-muted">
            Well use this to confirm your booking
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest flex items-center gap-1.5">
            <FiUser className="text-text-muted" size={13} /> Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ali Ahmed"
            value={name}
            onChange={(e) => onUpdate("name", e.target.value)}
            className={`w-full bg-transparent border-b px-0 py-2 text-sm text-text placeholder:text-text-dim outline-none transition-colors ${
              nameValid ? "border-border focus:border-accent" : "border-error"
            }`}
          />
          {!nameValid && (
            <p className="text-[10px] text-error">
              Name must be at least 2 characters
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest flex items-center gap-1.5">
            <FiPhone className="text-text-muted" size={13} /> Phone Number
            (WhatsApp) *
          </label>
          <input
            type="tel"
            required
            placeholder="0300 0000000"
            value={phone}
            onChange={(e) => onUpdate("phone", e.target.value)}
            className={`w-full bg-transparent border-b px-0 py-2 text-sm text-text placeholder:text-text-dim outline-none transition-colors ${
              phoneValid ? "border-border focus:border-accent" : "border-error"
            }`}
          />
          {!phoneValid && (
            <p className="text-[10px] text-error">
              Format: 0300 1234567 or +92 300 1234567
            </p>
          )}
          {phoneValid && phone.length > 0 && (
            <p className="text-[10px] text-success flex items-center gap-1">
              <FiCheck size={11} /> Valid number
            </p>
          )}
        </div>

        {/* Notes */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest flex items-center gap-1.5">
            <FiMessageSquare className="text-text-muted" size={13} /> Special
            Requests (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Any specific styling instructions..."
            value={notes}
            onChange={(e) => onUpdate("notes", e.target.value)}
            className="w-full bg-transparent border-b border-border focus:border-accent px-0 py-2 text-sm text-text placeholder:text-text-dim outline-none transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}
