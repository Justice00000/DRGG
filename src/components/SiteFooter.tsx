import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-tight">
              Let&rsquo;s build a more
              <span className="block text-gradient-copper italic">
                equitable environment.
              </span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Open to collaborations across exposure science, environmental
              justice, climate adaptation, and risk assessment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Navigate
              </p>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
                <li><Link to="/research" className="hover:text-primary">Research</Link></li>
                <li><Link to="/publications" className="hover:text-primary">Publications</Link></li>
                <li><Link to="/experience" className="hover:text-primary">Experience</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Connect
              </p>
              <ul className="space-y-2">
                <li><a href={`mailto:${profile.email}`} className="hover:text-primary break-all">Email</a></li>
                <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a></li>
                <li><Link to="/contact" className="hover:text-primary">Contact form</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Studio
            </p>
            <p className="text-foreground">{profile.location}</p>
            <p className="text-muted-foreground mt-1">{profile.email}</p>
            <p className="text-muted-foreground">{profile.phone}</p>
          </div>
        </div>

        <div className="reveal-line my-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground font-mono uppercase tracking-wider">
          <p>© {new Date().getFullYear()} {profile.shortName}. All rights reserved.</p>
          <p>Made with rigor in {profile.location}.</p>
        </div>
      </div>
    </footer>
  );
}
