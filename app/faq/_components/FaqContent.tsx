"use client";

import { useState } from "react";
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
  transport: [
    { qKey: "faq.transport.q1", aKey: "faq.transport.a1" },
  ],
};

export default function FaqContent() {
  const [active, setActive] = useState<CatKey>("trip");
  const { t } = useLang();

  const visible = faqItems[active];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
        <h1 className="mb-8 text-4xl leading-tight font-bold text-neutral-900 sm:text-5xl lg:mb-10 lg:text-6xl">
          {t("faq.heading1")}
          <br />
          {t("faq.heading2")}
        </h1>

        <div className="mb-10 flex flex-wrap gap-2 lg:mb-14">
          {catKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-green-400 text-white"
                  : "bg-light-green-100 text-neutral-300 hover:bg-pale-green-100/30 hover:text-neutral-900"
              }`}
            >
              {t(`faq.cat.${cat}`)}
            </button>
          ))}
        </div>

        <div className="divide-y divide-pale-green-100/40 border-t border-pale-green-100/40">
          {visible.map((faq) => (
            <div key={faq.qKey} data-reveal className="py-7 lg:py-8">
              <h2 className="mb-3 text-base font-bold text-neutral-900 lg:text-lg">
                Q: {t(faq.qKey)}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-neutral-300 lg:text-base">
                {t(faq.aKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
