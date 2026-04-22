import { useEffect } from "react";

type Meta = { title?: string; description?: string; ogTitle?: string; ogDescription?: string };

export function useSEO({ title, description, ogTitle, ogDescription }: Meta) {
  useEffect(() => {
    if (title) document.title = title;
    const setMeta = (selector: string, attr: string, name: string, content?: string) => {
      if (!content) return;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", ogTitle ?? title);
    setMeta('meta[property="og:description"]', "property", "og:description", ogDescription ?? description);
  }, [title, description, ogTitle, ogDescription]);
}
