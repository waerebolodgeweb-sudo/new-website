"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

type Channel = "metrotv" | "kompastv";

const CHANNELS: {
  id: Channel;
  label: string;
  shortcode: string;
  image: { desktop: string; mobile: string };
}[] = [
  {
    id: "kompastv",
    label: "Kompas TV",
    shortcode: "BHUvmYtg_UV",
    image: {
      desktop: "/homepage/Homepage-Waerebo-Lodge-Media-Kompas-TV-Dektop.webp",
      mobile: "/homepage/Homepage-Waerebo-Lodge-Media-Kompas-TV-Mobile.webp",
    },
  },
  {
    id: "metrotv",
    label: "Metro TV",
    shortcode: "BHUsUMGAd2V",
    image: {
      desktop: "/homepage/Homepage-Waerebo-Lodge-Media-Metro-TV-Desktop.webp",
      mobile: "/homepage/Homepage-Waerebo-Lodge-Media-Metro-TV-Mobile.webp",
    },
  },
];

export default function SocialMediaSection() {
  const [active, setActive] = useState<Channel>("kompastv");
  const { t } = useLang();

  const channel = CHANNELS.find((c) => c.id === active)!;

  return (
    <section className="bg-savana-050 py-2.5 lg:py-20">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
        <div className="flex flex-col gap-0 rounded-[28px] bg-white p-2 shadow-xl lg:flex-row lg:gap-10">
          <a
            href={`https://www.instagram.com/p/${channel.shortcode}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block min-h-[260px] overflow-hidden rounded-3xl shadow-md sm:min-h-[360px] lg:min-h-[540px] lg:flex-1"
          >
            <Image
              key={`${active}-desktop`}
              src={channel.image.desktop}
              alt={channel.label}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="hidden object-cover sm:block"
            />
            <Image
              key={`${active}-mobile`}
              src={channel.image.mobile}
              alt={channel.label}
              fill
              sizes="100vw"
              className="object-cover sm:hidden"
            />
          </a>

          {/* Right: card panel */}
          <div className="flex flex-col gap-10 rounded-3xl bg-transparent p-5 lg:w-[500px] lg:flex-shrink-0">
            {/* Channel tabs */}
            <div className="flex gap-4 border-b-2 border-savana-800/20">
              {CHANNELS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setActive(ch.id)}
                  className={`-mb-0.5 w-1/2 border-b-2 px-4 py-3 text-xl font-semibold transition-colors lg:w-fit ${
                    active === ch.id
                      ? "border-yellow-600 text-savana-800"
                      : "border-transparent text-savana-800 opacity-40 hover:opacity-70"
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <h2 className="text-2xl leading-tight font-semibold text-savana-800 lg:text-4xl">
                {t(`social.${active}.heading`)}
              </h2>
              <p className="text-sm leading-relaxed font-normal text-pale-savana-500 lg:text-base">
                {t(`social.${active}.body`)}
              </p>
            </div>

            <a
              href={`https://www.instagram.com/p/${channel.shortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline inline-flex w-full items-center justify-center rounded-lg px-6 py-4 font-medium transition-colors lg:text-lg"
            >
              {t("social.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
