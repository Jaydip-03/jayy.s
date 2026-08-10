type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : ""
      }`}
    >
      <span className="inline-block text-xs font-medium uppercase tracking-[0.35em] text-accent">
        {eyebrow}
      </span>

      <h2 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-7 text-lg leading-8 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}