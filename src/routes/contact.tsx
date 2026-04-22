import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/lib/profile";
import { useSEO } from "@/lib/seo";

export default function ContactPage() {
  useSEO({
    title: "Contact — God'sgift Chukwuonye",
    description:
      "Get in touch with Dr. God'sgift Chukwuonye for collaborations, consulting, speaking engagements, and faculty conversations.",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`[Portfolio] ${data.get("subject") || "Hello"}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="00"
          kicker="Contact"
          title={
            <>
              Let&rsquo;s start a
              <br />
              <span className="italic text-gradient-copper">conversation.</span>
            </>
          }
          description="Whether it's a collaboration, consulting engagement, speaking invitation, or a question about the research — I'd love to hear from you."
        />

        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 space-y-8"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="font-display text-2xl md:text-3xl hover:text-primary transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                Phone
              </p>
              <a
                href={`tel:${profile.phone}`}
                className="font-display text-2xl md:text-3xl hover:text-primary transition-colors"
              >
                {profile.phone}
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                Based
              </p>
              <p className="font-display text-2xl md:text-3xl">{profile.location}</p>
              <p className="text-sm text-muted-foreground mt-1 font-mono">
                Mountain Time (UTC −7)
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                Elsewhere
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl md:text-3xl hover:text-primary transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="glass-panel rounded-2xl p-6 mt-12">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                Affiliations
              </p>
              <ul className="space-y-1 text-sm">
                {profile.affiliations.map((a) => (
                  <li key={a} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-7 glass-panel rounded-3xl p-8 md:p-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field name="name" label="Your name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <Field name="subject" label="Subject" />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
                placeholder="Tell me about your project, idea, or question…"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <p className="text-xs text-muted-foreground font-mono">
                {sent ? "✓ Opening your mail client…" : "Replies within 48 hrs."}
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--gradient-copper)] px-7 py-4 text-[var(--ink)] font-medium hover:gap-5 transition-all"
              >
                Send message
                <span>→</span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
      />
    </div>
  );
}
