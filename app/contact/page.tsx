import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiMail,
  FiMessageCircle,
  FiNavigation,
} from "react-icons/fi";
import Link from "next/link";
import Button from "../../components/common/Button";
import Reveal from "../../components/common/Reveal";

export default function ContactPage() {
  return (
    <div
      data-section="light"
      className="surface-section min-h-screen pt-32 pb-24"
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-section text-section-text-muted text-[10px] font-bold uppercase tracking-widest">
            <FiMapPin size={14} className="text-accent" />
            <span>Find Us</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-section-text">
            Get in <span className="italic text-accent">Touch</span>
          </h1>
          <p className="text-sm text-section-text-muted max-w-xl mx-auto">
            Visit our luxury barbershop in B-17 Markaz Islamabad or contact us
            directly for inquiries and appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Reveal direction="left">
            <div className="space-y-4">
              <div className="bg-surface border border-section rounded-lg p-6 flex items-start gap-4 transition-colors hover:border-accent/50">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-section-text">
                    Location
                  </h3>
                  <p className="text-sm text-section-text-muted mt-1 leading-relaxed">
                    B-17 Markaz, Multi Gardens, Islamabad, Pakistan
                  </p>
                  <a
                    href="https://maps.google.com/?q=B-17+Markaz+Islamabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-[11px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors border-b border-accent/40 pb-0.5"
                  >
                    <FiNavigation size={12} /> Open in Maps
                  </a>
                </div>
              </div>

              <div className="bg-surface border border-section rounded-lg p-6 flex items-start gap-4 transition-colors hover:border-accent/50">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FiPhone size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-section-text">
                    Phone & WhatsApp
                  </h3>
                  <a
                    href="tel:+923000000000"
                    className="text-sm text-section-text-muted hover:text-accent transition-colors mt-1 block"
                  >
                    +92 300 0000000
                  </a>
                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-[11px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors border-b border-accent/40 pb-0.5"
                  >
                    <FiMessageCircle size={12} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-surface border border-section rounded-lg p-6 flex items-start gap-4 transition-colors hover:border-accent/50">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FiMail size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-section-text">
                    Email Address
                  </h3>
                  <a
                    href="mailto:contact@saeedhaircraft.site"
                    className="text-sm text-section-text-muted hover:text-accent transition-colors mt-1 block"
                  >
                    contact@saeedhaircraft.site
                  </a>
                </div>
              </div>

              <div className="bg-text rounded-lg p-6">
                <p className="text-sm text-bg font-semibold mb-4 uppercase tracking-wider">
                  Ready to experience luxury?
                </p>
                <Link href="/booking" className="block">
                  <Button variant="light" size="md" className="w-full">
                    Book Your Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="space-y-4">
              <div className="bg-surface border border-section rounded-lg p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-section-text">
                      Business Hours
                    </h3>
                    <p className="text-xs text-section-text-muted">
                      Open 7 days a week
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm divide-y divide-border">
                  <li className="flex justify-between pt-3">
                    <span className="text-section-text-muted">
                      Monday – Thursday
                    </span>
                    <span className="text-section-text font-semibold">
                      11:00 AM – 11:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between pt-3">
                    <span className="text-section-text-muted">Friday</span>
                    <span className="text-section-text font-semibold">
                      02:00 PM – 11:30 PM
                    </span>
                  </li>
                  <li className="flex justify-between pt-3">
                    <span className="text-section-text-muted">
                      Saturday – Sunday
                    </span>
                    <span className="text-section-text font-semibold">
                      11:00 AM – 11:30 PM
                    </span>
                  </li>
                </ul>

                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-success border border-success/30 bg-success/5 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  Open Now
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-section">
                <iframe
                  title="Saeed Hair Craft Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.3!2d72.98!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQjE3IE1hcmtheiBJc2xhbWFiYWQ!5e0!3m2!1sen!2spk!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
