"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const aboutAsset = (file: string) => `/About%20Us/${file}`;
const historySnapMediaQuery =
  "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

const milestones = [
  {
    key: "m1",
    year: "2010",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2010.webp"),
  },
  {
    key: "m2",
    year: "2012",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2012.webp"),
  },
  {
    key: "m3",
    year: "2013",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2013.webp"),
  },
  {
    key: "m4",
    year: "2021",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2021-1.webp"),
  },
  {
    key: "m5",
    year: "2021",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2021-2.webp"),
  },
  {
    key: "m6",
    year: "2022",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2022.webp"),
  },
  {
    key: "m7",
    year: "2025",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2025-1.webp"),
  },
  {
    key: "m8",
    year: "2025",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2025-2.webp"),
  },
  {
    key: "m9",
    year: "2026",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-2026.webp"),
  },
  {
    key: "m10",
    year: "Now",
    image: aboutAsset("Our-History-Waerebo-Lodge-Year-Now.webp"),
  },
] as const;

export default function HistorySection() {
  const { t } = useLang();
  const [activeMilestone, setActiveMilestone] = useState(0);
  const milestoneRefs = useRef<(HTMLElement | null)[]>([]);
  const stickyMediaRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    let snapTimer: number | undefined;
    let animationFrame: number | undefined;
    let isAutoSnapping = false;

    const clearTimer = (timer: number | undefined) => {
      if (timer !== undefined) window.clearTimeout(timer);
    };

    const snapToNearestMilestone = () => {
      if (isAutoSnapping || !window.matchMedia(historySnapMediaQuery).matches)
        return;

      const viewportCenter = window.innerHeight / 2;
      const timelineRect = timeline.getBoundingClientRect();
      if (
        timelineRect.top > viewportCenter ||
        timelineRect.bottom < viewportCenter
      )
        return;

      let nearestMilestone: HTMLElement | null = null;
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const milestone of milestoneRefs.current) {
        if (!milestone) continue;
        const rect = milestone.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestMilestone = milestone;
        }
      }

      if (!nearestMilestone || nearestDistance <= 2) return;

      const milestoneRect = nearestMilestone.getBoundingClientRect();
      const startTop = window.scrollY;
      const maxTop = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const targetTop = Math.min(
        maxTop,
        Math.max(
          0,
          startTop +
            milestoneRect.top +
            milestoneRect.height / 2 -
            viewportCenter
        )
      );
      const distance = targetTop - startTop;
      const duration = 440;
      const startTime = window.performance.now();

      isAutoSnapping = true;

      const animateSnap = (time: number) => {
        const progress = Math.min(1, (time - startTime) / duration);
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        window.scrollTo(0, startTop + distance * easedProgress);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animateSnap);
        } else {
          animationFrame = undefined;
          isAutoSnapping = false;
        }
      };

      animationFrame = window.requestAnimationFrame(animateSnap);
    };

    const scheduleSnap = () => {
      if (isAutoSnapping) return;
      clearTimer(snapTimer);
      snapTimer = window.setTimeout(snapToNearestMilestone, 140);
    };

    const cancelAutoSnap = () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = undefined;
      }
      isAutoSnapping = false;
      clearTimer(snapTimer);
    };

    window.addEventListener("scroll", scheduleSnap, { passive: true });
    window.addEventListener("wheel", cancelAutoSnap, { passive: true });
    window.addEventListener("touchstart", cancelAutoSnap, { passive: true });

    return () => {
      clearTimer(snapTimer);
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", scheduleSnap);
      window.removeEventListener("wheel", cancelAutoSnap);
      window.removeEventListener("touchstart", cancelAutoSnap);
    };
  }, []);

  useEffect(() => {
    const observedItems = milestoneRefs.current.filter(
      (item): item is HTMLElement => Boolean(item)
    );
    if (observedItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          )[0];

        if (!visibleEntry) return;

        const nextIndex = Number(
          (visibleEntry.target as HTMLElement).dataset.milestoneIndex
        );

        if (Number.isFinite(nextIndex)) {
          setActiveMilestone(nextIndex);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    observedItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stickyMedia = stickyMediaRef.current;
    if (!stickyMedia) return;

    const updateStickyOffset = () => {
      const centeredTop = Math.max(
        24,
        (window.innerHeight - stickyMedia.offsetHeight) / 2
      );
      stickyMedia.style.setProperty("--history-sticky-top", `${centeredTop}px`);
    };

    const resizeObserver = new ResizeObserver(updateStickyOffset);
    resizeObserver.observe(stickyMedia);
    window.addEventListener("resize", updateStickyOffset);
    updateStickyOffset();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyOffset);
      stickyMedia.style.removeProperty("--history-sticky-top");
    };
  }, []);

  return (
    <section id="history" className="bg-savana-50 py-14 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-20">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.95fr] lg:gap-28">
          <div>
            <p className="mb-2 text-base font-medium text-savana-600">
              {t("about.history.eyebrow")}
            </p>
            <h2 className="text-4xl leading-tight font-normal text-savana-800">
              <span className="font-semibold">
                {t("about.history.heading1")}{" "}
              </span>
              {t("about.history.heading2")}
            </h2>
          </div>
          <p className="text-sm leading-relaxed font-medium text-neutral-700 lg:text-base">
            {t("about.history.body")}
          </p>
        </div>

        <div className="mt-9 lg:mt-16 lg:grid lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <div className="hidden lg:block">
            <div
              ref={stickyMediaRef}
              className="sticky"
              style={{ top: "var(--history-sticky-top, 7rem)" }}
            >
              <div className="relative aspect-[1.76] overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-[0_18px_45px_rgba(38,35,22,0.16)]">
                {milestones.map((milestone, index) => (
                  <Image
                    key={milestone.key}
                    src={milestone.image}
                    alt={t(`about.history.${milestone.key}.title`)}
                    fill
                    priority={index === 0}
                    sizes="52vw"
                    className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                      index === activeMilestone ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2">
                  {milestones.map((milestone, index) => (
                    <button
                      key={milestone.key}
                      type="button"
                      aria-label={`Show ${milestone.year} history image`}
                      onClick={() => {
                        setActiveMilestone(index);
                        milestoneRefs.current[index]?.scrollIntoView({
                          behavior: window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                          ).matches
                            ? "auto"
                            : "smooth",
                          block: "center",
                        });
                      }}
                      className={`h-1 rounded-full transition-all ${
                        index === activeMilestone
                          ? "w-12 bg-white"
                          : "w-6 bg-white/45 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div ref={timelineRef} className="relative">
            <div className="absolute top-0 bottom-0 left-[18px] w-1 bg-savana-200 lg:left-[-48px]" />
            <div className="space-y-8 lg:space-y-28">
              {milestones.map((milestone, index) => (
                <article
                  key={milestone.key}
                  ref={(element) => {
                    milestoneRefs.current[index] = element;
                  }}
                  data-milestone-index={index}
                  className="relative pl-11 lg:pl-0"
                >
                  <span
                    className={`absolute top-36 left-[7px] z-10 h-6 w-6 rounded-full transition-colors lg:top-1/2 lg:left-[-58px] lg:-translate-y-1/2 ${
                      index === activeMilestone
                        ? "border-4 border-savana-050 bg-savana-500"
                        : "border-4 border-savana-200 bg-savana-200"
                    }`}
                  />

                  <div
                    data-reveal
                    className="w-full overflow-hidden rounded-xl bg-white shadow-[0_16px_38px_rgba(38,35,22,0.12)] lg:rounded-2xl"
                  >
                    <div className="relative aspect-[1.58] lg:hidden">
                      <Image
                        src={milestone.image}
                        alt={t(`about.history.${milestone.key}.title`)}
                        fill
                        sizes="82vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 lg:p-9">
                      <p className="mb-2 text-xl text-savana-600 italic">
                        {milestone.year}
                      </p>
                      <h3 className="text-2xl leading-tight font-semibold text-savana-800 lg:text-3xl">
                        {t(`about.history.${milestone.key}.title`)}
                      </h3>
                      <p className="mt-4 text-[13px] leading-relaxed text-savana-800 lg:text-sm">
                        {t(`about.history.${milestone.key}.text`)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
