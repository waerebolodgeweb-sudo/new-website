"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

type Channel = "metrotv" | "kompastv";

const CHANNELS: { id: Channel; label: string; shortcode: string }[] = [
  { id: "metrotv", label: "Metro TV", shortcode: "BHUsUMGAd2V" },
  { id: "kompastv", label: "Kompas TV", shortcode: "BHUvmYtg_UV" },
];

export default function VideoSection() {
  const [active, setActive] = useState<Channel>("metrotv");
  const { t } = useLang();

  const channel = CHANNELS.find((c) => c.id === active)!;

  return (
    <section className="bg-neutral-050 py-20 lg:py-28">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.65fr_1fr]">
          {/* Left: Instagram embed */}
          <div className="flex flex-col gap-4">
            {/* Channel selector */}
            <div className="flex gap-2">
              {CHANNELS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setActive(ch.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    active === ch.id
                      ? "bg-savana-800 text-white"
                      : "bg-light-green-100 text-neutral-300 hover:bg-pale-green-100/30 hover:text-neutral-900"
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>

            {/* Embed container */}
            <div className="overflow-hidden rounded-3xl shadow-md">
              <iframe
                key={channel.shortcode}
                src={`https://www.instagram.com/p/${channel.shortcode}/embed/`}
                className="w-full border-0"
                height="540"
                allowFullScreen
                scrolling="no"
                title={channel.label}
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-end gap-10">
            <div>
              <p className="mb-2 text-base font-normal text-savana-600">
                {t("video.eyebrow")}
              </p>
              <h2 className="mb-3 text-3xl leading-none font-semibold text-savana-800 lg:text-4xl">
                {t("video.heading")}
              </h2>
              <p className="text-base leading-relaxed font-normal text-pale-savana-500">
                {t(`video.${active}.body`)}
              </p>
            </div>
            <a
              href={`https://www.instagram.com/p/${channel.shortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-savana-700"
            >
              {t("video.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
