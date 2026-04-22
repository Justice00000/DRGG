const items = [
  "Exposure Science",
  "★",
  "PFAS Risk Assessment",
  "★",
  "Environmental Justice",
  "★",
  "Geospatial Modelling",
  "★",
  "Participatory Research",
  "★",
  "Climate Adaptation",
  "★",
  "Regulatory Compliance",
  "★",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative border-y border-border/60 bg-card/40 overflow-hidden py-6">
      <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-2xl md:text-4xl">
        {doubled.map((it, i) => (
          <span
            key={i}
            className={
              it === "★"
                ? "text-primary"
                : "italic text-foreground/80"
            }
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
