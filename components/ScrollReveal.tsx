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
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let io: IntersectionObserver | null = null;
    let raf = 0;

    // App Router can still be hydrating streamed route segments when this
    // global client component mounts. Wait for that work to settle before
    // mutating classes so React sees the same attributes on both sides.
    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(() => {
        const cards = Array.from(
          document.querySelectorAll<HTMLElement>("[data-reveal]")
        );

        // Stagger cards that sit in the same visual row (same parent + similar
        // offsetTop). Items stacked vertically reset to 0 delay so they each
        // animate as soon as they scroll in (no accumulating lag).
        const groups = new Map<Element, HTMLElement[]>();
        for (const el of cards) {
          const parent = el.parentElement;
          if (!parent) continue;
          const list = groups.get(parent) ?? [];
          list.push(el);
          groups.set(parent, list);
        }
        for (const list of groups.values()) {
          list.sort(
            (a, b) => a.offsetTop - b.offsetTop || a.offsetLeft - b.offsetLeft
          );
          let rowTop = -Infinity;
          let idx = 0;
          for (const el of list) {
            if (Math.abs(el.offsetTop - rowTop) > 24) {
              rowTop = el.offsetTop;
              idx = 0;
            } else {
              idx += 1;
            }
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

        const vh = window.innerHeight;
        for (const el of targets) {
          el.classList.add("reveal");
          const rect = el.getBoundingClientRect();
          // Already on screen at load → reveal immediately (no fade-out flicker).
          if (rect.top < vh * 0.9 && rect.bottom > 0) {
            el.classList.add("in-view");
          } else {
            io.observe(el);
          }
        }
      });
    }, 750);

    return () => {
      window.clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
