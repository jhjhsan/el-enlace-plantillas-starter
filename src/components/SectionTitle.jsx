export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-black/70 dark:text-white/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
