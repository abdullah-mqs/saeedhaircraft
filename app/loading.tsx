export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 animate-fade-in">
      {/* Premium Gold Spinner */}
      <div className="w-12 h-12 rounded-full border-4 border-surface-2 border-t-accent animate-spin" />

      {/* Loading Text */}
      <span className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">
        Loading...
      </span>
    </div>
  );
}
