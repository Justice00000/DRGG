import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { education, honors, profile } from "@/lib/profile";
import { useSEO } from "@/lib/seo";
import portraitForest from "@/assets/portrait-forest.jpg";
import portraitMontreal from "@/assets/portrait-montreal.jpg";
import portraitField from "@/assets/portrait-field.jpg";

export default function AboutPage() {
  useSEO({
    title: "About — God'sgift Chukwuonye",
    description:
      "Biography, education, and honors of Dr. God'sgift Chukwuonye — environmental scientist trained across Nigeria, Scotland, and the United States.",
  });

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="00"
          kicker="About"
          title={
            <>
              An environmental scientist
              <br />
              <span className="italic text-gradient-copper">shaped by three continents.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85"
          >
            <p>
              I was born in Nigeria, trained as a plant biologist at the University
              of Benin, then crossed the Atlantic to study Environment &amp;
              Development at the University of Edinburgh as a MasterCard Foundation
              Scholar. Today I live and work in Tucson, Arizona, where I&rsquo;m
              completing my Ph.D. in Environmental Science at the University of
              Arizona.
            </p>
            <p>
              Each move sharpened a single question:{" "}
              <span className="text-primary">
                what does it actually take to make environmental data useful to the
                people most affected by contamination?
              </span>
            </p>
            <p>
              That question runs through everything &mdash; from quantifying PFAS in
              copper-mining communities, to mapping climate-driven hydrology across
              the Southwest, to teaching undergraduates how to wrangle their first
              dataset in R. The technical work and the human work are inseparable.
            </p>
            <p>
              When I&rsquo;m not in the lab or the field, you&rsquo;ll likely find
              me convening the Water Justice Knowledge Exchange, mentoring younger
              researchers, or somewhere on a forest trail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={portraitForest} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-12">
              <img src={portraitMontreal} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden">
              <img src={portraitField} alt="" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>

        <SectionHeader
          index="01"
          kicker="Education"
          title={
            <>
              A path through{" "}
              <span className="italic text-gradient-copper">three universities.</span>
            </>
          }
        />

        <div className="space-y-px bg-border rounded-3xl overflow-hidden mb-32">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="grid md:grid-cols-12 gap-6 bg-background p-10 group hover:bg-card transition-colors"
            >
              <div className="md:col-span-2 font-display text-4xl text-primary number-tabular">
                {ed.year}
              </div>
              <div className="md:col-span-10">
                <h3 className="font-display text-3xl mb-1">{ed.degree}</h3>
                <p className="text-primary font-mono text-xs uppercase tracking-wider mb-3">
                  {ed.school}
                </p>
                <p className="text-foreground/80 mb-2">{ed.note}</p>
                <p className="text-sm text-muted-foreground italic">{ed.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionHeader
          index="02"
          kicker="Honors"
          title={
            <>
              Selected{" "}
              <span className="italic text-gradient-copper">fellowships &amp; awards.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-4 mb-32">
          {honors.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:border-primary/40 transition-all"
            >
              <span className="text-2xl">✦</span>
              <p className="text-foreground/90">{h}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-panel rounded-3xl p-10 md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Quick facts
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Based
              </p>
              <p className="font-display text-2xl mt-1">{profile.location}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Languages
              </p>
              <p className="font-display text-2xl mt-1">English · Igbo</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Open to
              </p>
              <p className="font-display text-2xl mt-1">Postdoc · Industry · Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
