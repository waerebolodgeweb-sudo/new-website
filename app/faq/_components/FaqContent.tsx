"use client";

import { useEffect, useRef, useState } from "react";
import { NewIcon } from "@/components/icons/new-icons";
import { useLang } from "@/lib/i18n";

type CatKey = "trip" | "lodge" | "restaurant" | "transport";

const catKeys: CatKey[] = ["trip", "lodge", "restaurant", "transport"];

interface FaqItem {
  qKey: string;
  aKey: string;
}

const faqItems: Record<CatKey, FaqItem[]> = {
  trip: [
    { qKey: "faq.trip.q1", aKey: "faq.trip.a1" },
    { qKey: "faq.trip.q2", aKey: "faq.trip.a2" },
    { qKey: "faq.trip.q3", aKey: "faq.trip.a3" },
    { qKey: "faq.trip.q4", aKey: "faq.trip.a4" },
  ],
  lodge: [
    { qKey: "faq.lodge.q1", aKey: "faq.lodge.a1" },
    { qKey: "faq.lodge.q2", aKey: "faq.lodge.a2" },
  ],
  restaurant: [
    { qKey: "faq.restaurant.q1", aKey: "faq.restaurant.a1" },
    { qKey: "faq.restaurant.q2", aKey: "faq.restaurant.a2" },
  ],
  transport: [{ qKey: "faq.transport.q1", aKey: "faq.transport.a1" }],
};

/* Running number across every group (figma: 01 … 09) */
const startIndex: Record<CatKey, number> = catKeys.reduce(
  (acc, cat) => {
    acc.map[cat] = acc.next;
    acc.next += faqItems[cat].length;
    return acc;
  },
  { map: {} as Record<CatKey, number>, next: 1 }
).map;

export default function FaqContent() {
  const [active, setActive] = useState<CatKey>("trip");
  const [open, setOpen] = useState<string | null>(null);
  const { t } = useLang();

  const groupRefs = useRef<Partial<Record<CatKey, HTMLDivElement | null>>>({});

  /* Highlight the menu entry of the group currently in view */
  useEffect(() => {
    const sync = () => {
      let current: CatKey = catKeys[0];
      catKeys.forEach((cat) => {
        const node = groupRefs.current[cat];
        if (node && node.getBoundingClientRect().top <= 200) current = cat;
      });
      setActive(current);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const goTo = (cat: CatKey) => {
    setActive(cat);
    const node = groupRefs.current[cat];
    if (!node) return;
    const offset = window.innerWidth >= 1024 ? 120 : 136;
    window.scrollTo({
      top: node.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-savana-050">
      <div className="mx-auto flex max-w-[1512px] flex-col px-5 pt-12 pb-[60px] lg:flex-row lg:gap-16 lg:px-10 lg:pt-[60px] lg:pb-[120px] xl:gap-[120px] xl:px-20">
        {/* Heading + category navigation */}
        <div className="lg:sticky lg:top-28 lg:h-fit lg:w-[380px] lg:flex-shrink-0 xl:w-[450px]">
          <h1 className="text-[40px] leading-[50px] font-semibold text-savana-800 lg:leading-[48px] xl:text-[56px] xl:leading-[68px]">
            {t("faq.heading1")}
          </h1>
          <p className="mt-1 text-[28px] leading-[35px] font-light text-savana-600 lg:mt-2 lg:leading-[38px] xl:text-4xl xl:leading-[45px]">
            {t("faq.heading2")}
          </p>

          {/* Desktop — sticky menu list */}
          <div className="mt-10 hidden flex-col gap-3 lg:flex">
            {catKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => goTo(cat)}
                className={`flex h-11 items-center gap-3 text-left text-lg transition-colors xl:text-xl ${
                  active === cat
                    ? "font-semibold text-savana-800"
                    : "text-pale-savana-200 hover:text-savana-600"
                }`}
              >
                <NewIcon
                  name="arrow-down-right"
                  size={24}
                  className={
                    active === cat ? "text-savana-500" : "text-pale-savana-200"
                  }
                />
                {t(`faq.nav.${cat}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile — tab row, pinned under the navbar while scrolling */}
        <div className="sticky top-16 z-20 -mx-5 mt-3 flex items-center justify-between gap-2 border-b border-savana-200 bg-savana-050 px-5 sm:justify-start sm:gap-10 lg:hidden">
          {catKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => goTo(cat)}
              className={`h-12 border-b-2 text-base transition-colors ${
                active === cat
                  ? "border-savana-800 font-semibold text-savana-800"
                  : "border-transparent text-pale-savana-200"
              }`}
            >
              {t(`faq.cat.${cat}`)}
            </button>
          ))}
        </div>

        {/* Questions — every group stacked, divided by a rule */}
        <div className="mt-8 lg:mt-0 lg:min-w-0 lg:flex-1 xl:max-w-[782px]">
          {catKeys.map((cat, groupIndex) => (
            <div
              key={cat}
              data-cat={cat}
              ref={(node) => {
                groupRefs.current[cat] = node;
              }}
              className={
                groupIndex > 0
                  ? "mt-12 border-t border-savana-200 pt-12 lg:mt-[60px] lg:pt-[60px]"
                  : ""
              }
            >
              {faqItems[cat].map((faq, itemIndex) => {
                const isOpen = open === faq.qKey;
                const number = String(startIndex[cat] + itemIndex).padStart(
                  2,
                  "0"
                );

                return (
                  <div
                    key={faq.qKey}
                    data-reveal
                    className={itemIndex > 0 ? "mt-7 lg:mt-10" : ""}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : faq.qKey)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-2 text-left lg:gap-3"
                    >
                      <span className="mt-[3px] w-6 flex-shrink-0 text-xs font-medium text-savana-500 lg:mt-1.5 lg:w-7 lg:text-sm">
                        {number}.
                      </span>
                      <span className="flex-1 text-base leading-6 font-medium text-savana-800 lg:text-lg lg:leading-7 xl:text-xl">
                        {t(faq.qKey)}
                      </span>
                      <NewIcon
                        name={isOpen ? "chevron-up" : "chevron-down"}
                        size={24}
                        className="mt-0.5 text-savana-600"
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3 pr-8 text-sm leading-6 text-pale-savana-300 lg:mt-4 lg:pr-9 lg:text-base lg:leading-7">
                        {t(faq.aKey)}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
