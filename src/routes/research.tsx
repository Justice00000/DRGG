import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { research } from "@/lib/profile";
import { useSEO } from "@/lib/seo";

export default function ResearchPage() {
  useSEO({
    title: "Research — God'sgift Chukwuonye",
    description:
      "Active research on toxic layering, compound climate extremes, drinking water justice, and rooftop-harvested rainwater contamination.",
  });

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="00"
          kicker="Research"
          title={
            <>
              Active investigations across
              <br />
              <span className="italic text-gradient-copper">
                exposure, equity &amp; extremes.
              </span>
            </>
          }
          description="Each project is grounded in a specific community and a specific contaminant — but together they trace a single thread: how cumulative environmental burdens stack on the people least equipped to absorb them."
        />

        <div className="grid gap-6 md:gap-8">
          {research.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid md:grid-cols-12 gap-8 glass-panel rounded-3xl p-8 md:p-12 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{ background: "var(--gradient-aurora)" }}
              />
              <div className="relative md:col-span-2">
                <p className="font-display text-6xl md:text-7xl text-gradient-copper number-tabular">
                  0{i + 1}
                </p>
              </div>
              <div className="relative md:col-span-7">
                <h3 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
                  {r.title}
                </h3>
                <p className="text-foreground/85 leading-relaxed text-lg">{r.summary}</p>
              </div>
              <div className="relative md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Methods
                </p>
                <ul className="space-y-2">
                  {r.methods.map((m) => (
                    <li key={m} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="h-px w-4 bg-primary" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-24 rounded-3xl p-12 md:p-20 overflow-hidden"
          style={{ background: "var(--gradient-copper)" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink)]/70 mb-6">
            Affiliation
          </p>
          <h3 className="font-display text-4xl md:text-6xl text-[var(--ink)] leading-[1.05] tracking-tight max-w-3xl">
            Ramírez-Andreotta Integrated Environmental Science &amp; Health Risk Lab
          </h3>
          <p className="mt-6 text-[var(--ink)]/80 max-w-2xl text-lg">
            University of Arizona · College of Agriculture, Life &amp;
            Environmental Sciences. Advised by Dr. Mónica Ramírez-Andreotta,
            Associate Professor of Environmental Science.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
