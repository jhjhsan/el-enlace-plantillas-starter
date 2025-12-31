export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {children}
    </div>
  );
}
