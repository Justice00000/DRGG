import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 transition-all duration-500">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-panel shadow-[var(--shadow-elevate)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-copper)] text-[var(--ink)] font-display text-lg font-semibold">
              G
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-sm tracking-tight">
                God&rsquo;sgift Chukwuonye
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Environmental Scientist
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => {
              const active = isActive(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative">
                    {n.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-primary" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium uppercase tracking-wider hover:border-primary/60 hover:text-primary transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            Available
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`h-[2px] w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 glass-panel rounded-3xl p-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-foreground hover:bg-secondary/60"
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
