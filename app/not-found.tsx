import Link from "next/link";
import { FiArrowLeft, FiScissors } from "react-icons/fi";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div
      data-section="dark"
      className="surface-section min-h-screen flex items-center justify-center pt-32 pb-24"
    >
      <div className="section-container text-center max-w-lg mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto">
          <FiScissors size={28} />
        </div>

        <div className="space-y-2">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-section-text">
            404
          </h1>
          <p className="text-sm md:text-base text-section-text-muted leading-relaxed">
            Ye page kahin kho gaya hai. Chalein wapas home pe?
          </p>
        </div>

        <Link href="/">
          <Button variant="primary" size="md" className="gap-2">
            <FiArrowLeft size={16} />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
