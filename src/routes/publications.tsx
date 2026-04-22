import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { publications } from "@/lib/profile";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — God'sgift Chukwuonye" },
      {
        name: "description",
        content:
          "Peer-reviewed publications by Dr. God'sgift Chukwuonye on PFAS, heavy metals, drinking water justice, and compound climate extremes.",
      },
      { property: "og:title", content: "Publications — God'sgift Chukwuonye" },
      {
        property: "og:description",
        content:
          "9+ peer-reviewed publications spanning exposure science, environmental justice, and climate adaptation.",
      },
    ],
  }),
  component: PublicationsPage,
});

const filters = ["All", "First Author", "Co-Author", "In Review"] as const;

function PublicationsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered =
    filter === "All" ? publications : publications.filter((p) => p.tag === filter);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="00"
          kicker="Publications"
          title={
            <>
              Peer-reviewed work in
              <br />
              <span className="italic text-gradient-copper">
                journals that move policy.
              </span>
            </>
          }
          description="A growing body of work on environmental exposure, justice, and risk assessment in vulnerable communities."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-xs font-mono uppercase tracking-wider border transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((p, i) => (
            <motion.a
              key={i}
              href={p.doi}
              target={p.doi !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group block glass-panel rounded-2xl p-8 hover:border-primary/40 transition-all"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1">
                  <p className="font-display text-3xl text-primary number-tabular">
                    {p.year}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <p className="text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors">
                    {p.citation}
                  </p>
                  {p.doi !== "#" && (
                    <p className="mt-3 font-mono text-[11px] text-muted-foreground break-all group-hover:text-primary transition-colors">
                      {p.doi}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2 flex md:justify-end">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border ${
                      p.tag === "First Author"
                        ? "border-primary/60 text-primary"
                        : p.tag === "In Review"
                          ? "border-amber-glow/40 text-[var(--amber-glow)]"
                          : "border-border text-muted-foreground"
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 glass-panel rounded-3xl p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Also presented
          </p>
          <p className="font-display text-3xl md:text-4xl leading-tight">
            8 oral presentations · 9 posters across AGU, ISES, SACNAS, NGWA
            and HBCU Climate Change Conference.
          </p>
        </div>
      </div>
    </div>
  );
}
