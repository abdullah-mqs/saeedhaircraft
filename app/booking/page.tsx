"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  FiCheck,
  FiArrowLeft,
  FiArrowRight,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";
import ServiceSelect from "../../components/booking/ServiceSelect";
import DatePicker from "../../components/booking/DatePicker";
import UserDetails from "../../components/booking/UserDetails";
import Button from "../../components/common/Button";
import { mockServices } from "../../data/servicesData";
import { formatFullDate } from "../../lib/formatDate";
import { ServiceItem, BookingRequest } from "../../types";

function BookingContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialService =
    mockServices.find((s) => s.id === searchParams.get("serviceId")) ||
    mockServices[0];

  const [booking, setBooking] = useState<BookingRequest>({
    serviceId: initialService.id,
    bookingDate: new Date().toISOString().split("T")[0],
    timeSlot: "02:00 PM",
    customerName: "",
    customerPhone: "",
    customerNotes: "",
  });

  const selectedService = useMemo(
    () =>
      mockServices.find((s) => s.id === booking.serviceId) || initialService,
    [booking.serviceId, initialService],
  );

  const canProceed = useMemo(() => {
    if (step === 1) return !!booking.serviceId;
    if (step === 2) return !!booking.bookingDate && !!booking.timeSlot;
    if (step === 3) {
      const name = booking.customerName.trim();
      const phone = booking.customerPhone.replace(/\s/g, "");
      return name.length >= 2 && /^(\+92|0)3\d{9}$/.test(phone);
    }
    return true;
  }, [step, booking]);

  const handleUserUpdate = (field: string, value: string) => {
    const key =
      field === "name"
        ? "customerName"
        : field === "phone"
          ? "customerPhone"
          : "customerNotes";
    setBooking((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const handleNext = () => {
    setError(null);
    if (!canProceed) {
      if (step === 3) setError("Please enter a valid name and phone number.");
      return;
    }

    if (step === 3) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1200);
    } else {
      setStep(step + 1);
    }
  };

  const whatsappUrl = useMemo(() => {
    const msg = `Hi Saeed Hair Craft! I just booked:\n\nService: ${selectedService.name}\nDate: ${formatFullDate(booking.bookingDate)}\nTime: ${booking.timeSlot}\nName: ${booking.customerName}\n\nConfirming my appointment.`;
    return `https://wa.me/923000000000?text=${encodeURIComponent(msg)}`;
  }, [booking, selectedService]);

  return (
    <div
      data-section="light"
      className="surface-section min-h-screen pt-32 pb-24"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase text-section-text">
            Secure Your <span className="italic text-accent">Slot</span>
          </h1>
        </div>

        <div className="bg-surface border border-section rounded-xl p-6 md:p-10">
          {step < 4 && (
            <div className="mb-10 pb-6 border-b border-section">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                {/* Progress Steps... */}
                <div
                  className={`flex items-center gap-2 ${step >= 1 ? "text-section-text" : "text-section-text-muted"}`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] transition-colors ${step >= 1 ? "bg-accent text-bg" : "bg-surface-2 text-section-text-muted"}`}
                  >
                    {step > 1 ? "✓" : "1"}
                  </span>
                  <span className="hidden sm:inline">Service</span>
                </div>
                <div
                  className={`flex-1 h-px mx-2 ${step > 1 ? "bg-accent" : "bg-border"}`}
                />

                <div
                  className={`flex items-center gap-2 ${step >= 2 ? "text-section-text" : "text-section-text-muted"}`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] transition-colors ${step >= 2 ? "bg-accent text-bg" : "bg-surface-2 text-section-text-muted"}`}
                  >
                    {step > 2 ? "✓" : "2"}
                  </span>
                  <span className="hidden sm:inline">Date & Time</span>
                </div>
                <div
                  className={`flex-1 h-px mx-2 ${step > 2 ? "bg-accent" : "bg-border"}`}
                />

                <div
                  className={`flex items-center gap-2 ${step >= 3 ? "text-section-text" : "text-section-text-muted"}`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] transition-colors ${step >= 3 ? "bg-accent text-bg" : "bg-surface-2 text-section-text-muted"}`}
                  >
                    3
                  </span>
                  <span className="hidden sm:inline">Details</span>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <ServiceSelect
              selectedServiceId={booking.serviceId}
              onSelect={(s) => setBooking({ ...booking, serviceId: s.id })}
            />
          )}
          {step === 2 && (
            <DatePicker
              selectedDate={booking.bookingDate}
              selectedTimeSlot={booking.timeSlot}
              onSelectDate={(date) =>
                setBooking({ ...booking, bookingDate: date })
              }
              onSelectTime={(time) =>
                setBooking({ ...booking, timeSlot: time })
              }
            />
          )}
          {step === 3 && (
            <UserDetails
              name={booking.customerName}
              phone={booking.customerPhone}
              notes={booking.customerNotes || ""}
              onUpdate={handleUserUpdate}
            />
          )}

          {step === 4 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent text-bg flex items-center justify-center mx-auto shadow-gold">
                <FiCheck size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-section-text">
                Booking Confirmed!
              </h3>
              <p className="text-sm text-section-text-muted max-w-md mx-auto">
                Thank you{" "}
                <span className="text-section-text font-semibold">
                  {booking.customerName}
                </span>
                . Your appointment for{" "}
                <span className="text-section-text font-semibold">
                  {selectedService.name}
                </span>{" "}
                has been registered.
              </p>

              <div className="bg-surface-2 border border-section rounded-lg p-6 mt-6 max-w-md mx-auto text-left space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-section-text-muted uppercase tracking-wider">
                    Service
                  </span>
                  <span className="text-section-text font-semibold">
                    {selectedService.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-section-text-muted uppercase tracking-wider">
                    Date
                  </span>
                  <span className="text-section-text font-semibold">
                    {formatFullDate(booking.bookingDate)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-section-text-muted uppercase tracking-wider">
                    Time
                  </span>
                  <span className="text-section-text font-semibold">
                    {booking.timeSlot}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="dark" size="md" className="w-full sm:w-auto">
                    <FiDownload size={15} />
                    Confirm on WhatsApp
                  </Button>
                </a>
                <Link href="/">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 p-3 rounded-md border border-error/50 bg-error/5 text-error text-[11px] font-bold uppercase tracking-wider text-center">
              {error}
            </div>
          )}

          {step < 4 && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-section gap-3">
              {step > 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStep(step - 1)}
                >
                  <FiArrowLeft size={16} /> Back
                </Button>
              )}
              <div className={step === 1 ? "ml-auto" : ""}>
                <Button
                  variant="dark"
                  size="sm"
                  onClick={handleNext}
                  disabled={isSubmitting || !canProceed}
                >
                  <span>
                    {step === 3
                      ? isSubmitting
                        ? "Confirming..."
                        : "Confirm"
                      : "Continue"}
                  </span>
                  <FiArrowRight size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>

        {step < 4 && (
          <p className="text-center text-[10px] uppercase tracking-widest text-section-text-muted mt-8 flex items-center justify-center gap-1.5 font-bold">
            <FiMapPin size={11} className="text-accent" />
            B-17 Markaz, Islamabad
          </p>
        )}
      </div>
    </div>
  );
}

// Next.js mein useSearchParams ke liye Suspense boundary zaroori hai
export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-bg">
          <div className="w-10 h-10 rounded-full border-2 border-border border-t-accent animate-spin" />
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
