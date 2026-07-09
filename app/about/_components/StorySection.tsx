"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

const aboutAsset = (file: string) => `/About%20Us/${file}`;

const desktopPhotos = {
  founder: {
    src: aboutAsset(
      "Desktop-About-Us-Waerebo-Lodge-Founder-Mr-Martin-and-Mrs-Isabela.webp"
    ),
    width: 1080,
    height: 1200,
  },
  landscape: {
    src: aboutAsset("Desktop-About-Us-Waerebo-Lodge-Photo-1.webp"),
    width: 720,
    height: 2256,
  },
  lodge: {
    src: aboutAsset("Desktop-About-Us-Waerebo-Lodge-Photo-2.webp"),
    width: 1272,
    height: 2292,
  },
};

const mobilePhotos = {
  founder: {
    src: aboutAsset(
      "Mobile-About-Us-Waerebo-Lodge-Founder-Mr-Martin-and-Mrs-Isabela.webp"
    ),
    width: 1179,
    height: 1560,
  },
  main: {
    src: aboutAsset("Mobile-About-Us-Waerebo-Lodge-Photo-Main.webp"),
    width: 1179,
    height: 1326,
  },
};

export default function StorySection() {
  const { t } = useLang();

  return (
    <section id="story" className="bg-savana-50 pt-7 pb-14 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-[1512px] lg:px-20">
        <div className="lg:hidden">
          <div className="grid justify-items-end gap-3">
            <Image
              src={mobilePhotos.main.src}
              alt="Waerebo Lodge in the rice fields"
              width={mobilePhotos.main.width}
              height={mobilePhotos.main.height}
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="mt-7 px-4 sm:px-6">
            <h1 className="text-2xl leading-tight font-semibold text-neutral-900">
              {t("about.story.heading1")}
              <br />
              {t("about.story.heading2")}
            </h1>
            <div className="mt-4 space-y-4 text-sm leading-relaxed font-medium text-neutral-500">
              {t("about.story.body")
                .split("\n\n")
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
          </div>

          <div className="mt-7 px-4 sm:px-6">
            <Image
              src={mobilePhotos.founder.src}
              alt="Mr. Martin and Mrs. Isabela"
              width={mobilePhotos.founder.width}
              height={mobilePhotos.founder.height}
              sizes="100vw"
              className="h-auto w-full"
            />
            <p className="mt-4 text-sm font-bold text-neutral-900">
              {t("about.story.martinName")}
            </p>
            <p className="mt-2 text-sm leading-relaxed font-medium text-neutral-500">
              {t("about.story.martinBio")}
            </p>
          </div>
        </div>

        <div className="hidden items-start gap-6 lg:grid lg:grid-cols-[1fr_0.92fr_0.74fr_0.82fr] xl:gap-8">
          <div className="pt-12">
            <h1 className="text-[56px] leading-[0.98] font-semibold tracking-[-0.02em] text-neutral-900">
              {t("about.story.heading1")}
              <br />
              {t("about.story.heading2")}
            </h1>
            <div className="mt-8 space-y-6 text-[15px] leading-relaxed font-medium text-neutral-700">
              {t("about.story.body")
                .split("\n\n")
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
          </div>

          <div>
            <Image
              src={desktopPhotos.founder.src}
              alt="Mr. Martin and Mrs. Isabela"
              width={desktopPhotos.founder.width}
              height={desktopPhotos.founder.height}
              priority
              sizes="25vw"
              className="h-auto w-full"
            />
            <div className="pt-3">
              <p className="text-base leading-tight font-bold text-neutral-900">
                {t("about.story.martinName")}
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed font-medium text-neutral-500">
                {t("about.story.martinBio")}
              </p>
            </div>
          </div>

          <Image
            src={desktopPhotos.landscape.src}
            alt="Flores coastline near Waerebo Lodge"
            width={desktopPhotos.landscape.width}
            height={desktopPhotos.landscape.height}
            sizes="20vw"
            className="mt-20 h-auto w-full"
          />

          <Image
            src={desktopPhotos.lodge.src}
            alt="Waerebo Lodge in the rice fields"
            width={desktopPhotos.lodge.width}
            height={desktopPhotos.lodge.height}
            sizes="20vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
