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
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          {/* Left: Instagram embed */}
          <div className="overflow-hidden rounded-3xl shadow-md lg:flex-1">
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

          {/* Right: card panel */}
          <div className="flex flex-col gap-10 rounded-3xl bg-savana-200 p-5 lg:w-[500px] lg:flex-shrink-0">
            {/* Channel tabs */}
            <div className="flex gap-4 border-b-2 border-savana-800/20">
              {CHANNELS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setActive(ch.id)}
                  className={`-mb-0.5 border-b-2 px-4 py-3 text-xl font-semibold transition-colors ${
                    active === ch.id
                      ? "border-savana-800 text-savana-800"
                      : "border-transparent text-savana-800 opacity-40 hover:opacity-70"
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <h2 className="text-3xl leading-tight font-semibold text-savana-800 lg:text-4xl">
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
              className="inline-flex w-full items-center justify-center rounded-lg border border-savana-800 px-6 py-4 text-lg font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white"
            >
              {t("video.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
