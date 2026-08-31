"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global "appear on scroll" animator.
 *
 * - Elements marked `data-reveal` animate individually, staggered by their
 *   position among sibling cards (great for grids / lists of cards).
 * - Sections that contain no `data-reveal` cards fall back to revealing the
 *   whole section as one block. The footer reveals as a block too.
 *
 * Styling lives in globals.css (`.reveal` / `.reveal.in-view`).
 * No-JS or reduced-motion users see everything immediately.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // The homepage has its own section-level reveal boundaries. Skipping the
    // global DOM scan there avoids duplicate observers and expensive layout work.
    if (pathname === "/") return;

    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let io: IntersectionObserver | null = null;
    let raf = 0;

    raf = requestAnimationFrame(() => {
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]")
      );

      // Stagger sibling cards by DOM order without reading layout metrics.
      const groups = new Map<Element, HTMLElement[]>();
      for (const el of cards) {
        const parent = el.parentElement;
        if (!parent) continue;
        const list = groups.get(parent) ?? [];
        list.push(el);
        groups.set(parent, list);
      }
      for (const list of groups.values()) {
        for (const [idx, el] of list.entries()) {
          el.style.transitionDelay = `${Math.min(idx, 6) * 90}ms`;
        }
      }

      // Sections with no marked cards reveal as a whole block.
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section")
      ).filter((s) => !s.querySelector("[data-reveal]"));

      const footers = Array.from(
        document.querySelectorAll<HTMLElement>("body > footer, main > footer")
      );

      const targets = [...cards, ...sections, ...footers];
      if (targets.length === 0) return;

      io = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );

      for (const el of targets) {
        el.classList.add("reveal");
        io.observe(el);
      }
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
