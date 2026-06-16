"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

const banner = "/about/story-left.jpg";

const milestoneImages = ["/trip/stop-1.jpg", "/lodge/hero-1.jpg", "/about/story-mid.jpg"];
const milestoneYears = ["2011", "2022", "2026"];
const milestoneKeys = ["m1", "m2", "m3"] as const;

export default function HistorySection() {
  const { t } = useLang();

  return (
    <section id="history" className="bg-light-green-100 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="relative mb-10 h-52 overflow-hidden rounded-3xl shadow-sm lg:mb-14 lg:h-96">
          <Image src={banner} alt="Waerebo highlands" fill className="object-cover" />
        </div>

        {/* Section header */}
        <div className="mb-10 grid gap-3 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          <h2 className="text-3xl font-bold text-neutral-900 lg:text-5xl">
            {t("about.history.heading")}
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300 lg:pt-2">
            {t("about.history.body")}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 lg:space-y-20">
          {milestoneKeys.map((mk, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={mk}
                data-reveal
                className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`relative h-56 overflow-hidden rounded-3xl shadow-sm lg:h-96 ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={milestoneImages[i]}
                    alt={t(`about.history.${mk}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={reversed ? "lg:order-1" : ""}>
                  <p className="mb-1 text-lg font-bold text-green-200">
                    {milestoneYears[i]}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 lg:text-2xl">
                    {t(`about.history.${mk}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {t(`about.history.${mk}.text`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
