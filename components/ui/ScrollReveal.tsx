"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "fadeIn";

const HIDDEN: Record<Variant, React.CSSProperties> = {
  fadeUp:    { opacity: 0, transform: "translateY(48px)" },
  fadeDown:  { opacity: 0, transform: "translateY(-48px)" },
  fadeLeft:  { opacity: 0, transform: "translateX(-48px)" },
  fadeRight: { opacity: 0, transform: "translateX(48px)" },
  fadeIn:    { opacity: 0 },
};

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        ...(visible ? {} : HIDDEN[variant]),
      }}
    >
      {children}
    </div>
  );
}
