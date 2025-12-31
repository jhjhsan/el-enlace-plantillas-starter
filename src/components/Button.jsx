export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]";

  const styles = {
    primary: "bg-[color:var(--primary)] text-black hover:opacity-90",
    secondary:
      "bg-transparent text-black ring-1 ring-black/15 hover:bg-black/5 dark:text-white dark:ring-white/15 dark:hover:bg-white/10",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
