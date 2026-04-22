import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portrait from "@/assets/portrait-hero.jpg";
import { profile } from "@/lib/profile";

export function CinematicHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          src={portrait}
          alt="God'sgift Chukwuonye"
          className="h-full w-full object-cover object-[60%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-aurora)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-28 left-0 right-0 z-10 mx-auto max-w-7xl px-6 hidden md:flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>N 32.2226° · W 110.9747° · Tucson, AZ</span>
        <span className="flex items-center gap-2">
          <span className="h-px w-8 bg-primary" /> Portfolio · MMXXV
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-32 min-h-screen flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8"
        >
          Ph.D. · Environmental Science · 2025
        </motion.p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.92] tracking-tighter max-w-5xl">
          {["God's", "gift"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block italic text-gradient-copper font-light"
          >
            Chukwuonye
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 grid md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-6 text-lg md:text-xl text-foreground/90 leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4">
            <Link
              to="/research"
              className="group relative inline-flex items-center justify-between rounded-full bg-[var(--gradient-copper)] px-7 py-4 text-[var(--ink)] font-medium overflow-hidden"
            >
              <span className="relative z-10">Explore the research</span>
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)]/15 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center justify-between rounded-full border border-border px-7 py-4 text-sm hover:border-primary/60 hover:text-primary transition-all"
            >
              <span>9+ publications</span>
              <span>↗</span>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="block h-8 w-px bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
