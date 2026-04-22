import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Index from "@/routes/index";
import About from "@/routes/about";
import Research from "@/routes/research";
import Publications from "@/routes/publications";
import Experience from "@/routes/experience";
import Contact from "@/routes/contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-copper">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&rsquo;re looking for has drifted downstream.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-copper)] px-6 py-3 text-sm font-medium text-[var(--ink)]"
          >
            Return home →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
