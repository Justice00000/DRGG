import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CinematicHero } from "@/components/CinematicHero";
import { Marquee } from "@/components/Marquee";
import { SectionHeader } from "@/components/SectionHeader";
import { stats, expertise, research, publications } from "@/lib/profile";
import { useSEO } from "@/lib/seo";
import portraitField from "@/assets/portrait-field.jpg";
import portraitArizona from "@/assets/portrait-arizona.jpg";

export default function Index() {
  useSEO({
    title: "God'sgift Chukwuonye — Ph.D. Environmental Scientist",
    description:
      "Cinematic portfolio of Dr. God'sgift Chukwuonye — exposure science, environmental justice, and cumulative risk assessment.",
    ogTitle: "God'sgift Chukwuonye — Environmental Scientist",
    ogDescription:
      "Characterizing toxic mixtures and cumulative risks in environmental justice communities.",
  });

  return (
    <>
      <CinematicHero />

      <section className="relative border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <p className="font-display text-5xl md:text-6xl text-gradient-copper number-tabular">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Marquee />

      <section className="relative py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            index="01"
            kicker="The Scientist"
            title={
              <>
                Where contamination meets{" "}
                <span className="italic text-gradient-copper">community</span>,
                I document, model, and translate.
              </>
            }
          />

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <img
                  src={portraitArizona}
                  alt="God'sgift at the University of Arizona"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl px-5 py-4 max-w-[200px]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Currently
                </p>
                <p className="font-display text-lg leading-tight mt-1">
                  ADEQ &amp; Univ. of Arizona
                </p>
              </div>
            </motion.div>

            <div className="md:col-span-7 space-y-6 text-lg text-foreground/85 leading-relaxed">
              <p>
                I&rsquo;m a Ph.D. candidate at the University of Arizona,
                advised by Dr. Mónica Ramírez-Andreotta, and an Environmental
                Scientist with the Arizona Department of Environmental Quality&rsquo;s
                Watershed Improvement Unit.
              </p>
              <p>
                My work sits at the intersection of <em className="text-primary not-italic">exposure science</em>,{" "}
                <em className="text-primary not-italic">environmental justice</em>, and{" "}
                <em className="text-primary not-italic">compound climate extremes</em> —
                investigating how PFAS, heavy metals, dioxins and PAHs move through
                vulnerable communities in the U.S. Southwest.
              </p>
              <p>
                Trained across Nigeria, Scotland, and the United States, I bring
                rigorous quantitative methods together with participatory research
                so that the people most exposed are the people most informed.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 mt-6 text-primary font-mono text-sm uppercase tracking-wider hover:gap-5 transition-all"
              >
                Full biography <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            index="02"
            kicker="Expertise"
            title={
              <>
                Four pillars,{" "}
                <span className="italic text-gradient-copper">one mission.</span>
              </>
            }
          />
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
            {expertise.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative bg-background p-10 hover:bg-card transition-colors duration-500"
              >
                <p className="font-mono text-xs text-primary mb-6">0{i + 1}</p>
                <h3 className="font-display text-3xl mb-4 group-hover:text-gradient-copper transition-all">
                  {e.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{e.body}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            index="03"
            kicker="Featured Research"
            title={
              <>
                Currently investigating
                <br />
                <span className="italic text-gradient-copper">
                  toxic layering &amp; compound extremes.
                </span>
              </>
            }
            description="Field, lab, and community work across Arizona's mining country and the U.S.–Mexico border."
          />

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden order-2 md:order-1"
            >
              <img src={portraitField} alt="Field research" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-2xl p-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  Field work · 2024
                </p>
                <p className="font-display text-xl mt-2">
                  Wildfire-flood remobilization of PFAS in copper-mining communities.
                </p>
              </div>
            </motion.div>

            <div className="md:col-span-6 space-y-4 order-1 md:order-2">
              {research.slice(0, 3).map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group glass-panel rounded-2xl p-6 hover:border-primary/40 transition-all"
                >
                  <h4 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">
                    {r.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {r.methods.map((m) => (
                      <span
                        key={m}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
              <Link
                to="/research"
                className="inline-flex items-center gap-3 mt-4 text-primary font-mono text-sm uppercase tracking-wider hover:gap-5 transition-all"
              >
                All research projects <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            index="04"
            kicker="Recent Work"
            title={
              <>
                Published in journals that{" "}
                <span className="italic text-gradient-copper">move policy.</span>
              </>
            }
          />
          <div className="space-y-px bg-border rounded-3xl overflow-hidden">
            {publications.slice(0, 4).map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="grid md:grid-cols-12 gap-6 bg-background p-8 hover:bg-card transition-colors group"
              >
                <div className="md:col-span-1 font-display text-3xl text-primary number-tabular">
                  {p.year}
                </div>
                <p className="md:col-span-9 text-sm leading-relaxed text-foreground/85 group-hover:text-foreground">
                  {p.citation}
                </p>
                <div className="md:col-span-2 flex md:justify-end items-start">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-primary/40 text-primary">
                    {p.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/publications"
              className="inline-flex items-center gap-3 text-primary font-mono text-sm uppercase tracking-wider hover:gap-5 transition-all"
            >
              All publications <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-aurora)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8">
            05 / Collaborate
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
            Have a project at the
            <br />
            <span className="italic text-gradient-copper">edge of science &amp; justice?</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            I&rsquo;m open to collaborations, consulting, speaking engagements,
            and faculty conversations.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-4 rounded-full bg-[var(--gradient-copper)] px-10 py-5 text-[var(--ink)] font-medium text-lg"
          >
            Start a conversation
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)]/15">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
