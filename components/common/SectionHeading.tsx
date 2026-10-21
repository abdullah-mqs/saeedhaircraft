import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  action?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  action,
}: SectionHeadingProps) {
  const isCenter = align !== "left";

  return (
    <div
      className={`flex flex-col gap-4 mb-10 md:mb-14 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${action ? "md:flex-row md:items-end md:justify-between" : ""}`}
    >
      <div
        className={`flex flex-col gap-3 ${isCenter ? "items-center" : "items-start"}`}
      >
        {eyebrow && (
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
            {eyebrow}
          </span>
        )}

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-section-text">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className="italic text-accent">{titleHighlight}</span>
            </>
          )}
        </h2>

        {/* Underline accent */}
        <div
          className={`h-0.5 w-12 bg-accent rounded-full ${
            isCenter ? "mx-auto" : ""
          }`}
        />

        {subtitle && (
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mt-1 text-section-text-muted">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
