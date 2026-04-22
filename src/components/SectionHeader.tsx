import { motion } from "framer-motion";

interface Props {
  index: string;
  kicker: string;
  title: React.ReactNode;
  description?: string;
}

export function SectionHeader({ index, kicker, title, description }: Props) {
  return (
    <div className="grid md:grid-cols-12 gap-6 mb-16">
      <div className="md:col-span-3">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {index} / {kicker}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-9"
      >
        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
