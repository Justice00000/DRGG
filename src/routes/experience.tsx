import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/lib/profile";
import { useSEO } from "@/lib/seo";

export default function ExperiencePage() {
  useSEO({
    title: "Experience — God'sgift Chukwuonye",
    description:
      "Professional experience: Arizona Department of Environmental Quality, Ramírez-Andreotta Lab, USGS Climate Adaptation Science Center, Farm Africa.",
  });

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="00"
          kicker="Experience"
          title={
            <>
              From Ethiopian farms
              <br />
              to <span className="italic text-gradient-copper">Arizona watersheds.</span>
            </>
          }
          description="A decade of environmental work spanning academia, government, and international development."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    <span className="relative h-4 w-4 rounded-full bg-primary border-2 border-background" />
                  </span>
                </div>

                <div className={i % 2 === 0 ? "md:text-right md:pr-12 pl-12 md:pl-0" : "md:pl-12 pl-12"}>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-2">
                    {exp.period}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-foreground/80 italic">{exp.org}</p>
                </div>

                <div className={i % 2 === 0 ? "md:pl-12 pl-12" : "md:text-right md:pr-12 pl-12 md:pl-0"}>
                  <ul className={`space-y-3 text-foreground/80 ${i % 2 === 0 ? "" : "md:[&>li]:flex-row-reverse"}`}>
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start">
                        <span className="text-primary mt-2 shrink-0">→</span>
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <SectionHeader
            index="01"
            kicker="Leadership"
            title={
              <>
                Building <span className="italic text-gradient-copper">community</span> &
                convening conversations.
              </>
            }
          />

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-3xl p-10"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
                2023 — Present
              </p>
              <h3 className="font-display text-3xl mb-4">
                Co-convener, Water Justice Knowledge Exchange
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Secured $7,000+ in funding for environmental justice and water
                security research. Facilitated expert panels and networking
                sessions focused on climate resilience and regulatory frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-panel rounded-3xl p-10"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
                2021 — 2024
              </p>
              <h3 className="font-display text-3xl mb-4">
                President &amp; Co-founder, African Graduate Students Association
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Expanded organization to 80+ members, fostering career workshops,
                mentorship programs, and partnerships across the University of
                Arizona.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
