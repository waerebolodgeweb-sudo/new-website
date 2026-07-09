"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactSection from "@/components/sections/ContactSection";
import { useLang } from "@/lib/i18n";
import DailyMenuSlider from "./DailyMenuSlider";

const bookMessage =
  "Hello Waerebo Lodge!\n\nI'd like to book a table / meal at the Waerebo Lodge Restaurant.\n\nPlease share availability. Thank you!";
const bookHref = `https://wa.me/6285339021145?text=${encodeURIComponent(
  bookMessage
)}`;

const heroImages = [
  "/restaurant/Waerebo-Restaurant-Photo-Eating-Lunch-01.webp",
  "/restaurant/Waerebo-Restaurant-Photo-Eating-Lunch-02.webp",
  "/restaurant/Waerebo-Restaurant-Photo-Eating-Lunch-03.webp",
  "/restaurant/Waerebo-Restaurant-Photo-Eating-Lunch-04.webp",
  "/restaurant/Waerebo-Restaurant-Photo-Eating-Lunch-05.webp",
  "/restaurant/Waerebo-Restaurant-Photo-Eating-Lunch-06.webp",
];

export default function RestaurantContent() {
  const { t } = useLang();
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="pt-16 lg:pt-20">
      <section className="overflow-hidden bg-[#f8f6ef] py-12 lg:py-16">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_590px] lg:items-center">
            <h1 className="text-5xl leading-tight font-semibold text-savana-800 lg:text-[56px]">
              {t("restaurant.page.heading")}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed font-medium text-neutral-700 lg:justify-self-end lg:text-center">
              {t("restaurant.page.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 rounded-[36px] bg-white p-2 shadow-xl shadow-black/10 lg:grid-cols-[1fr_1.72fr]">
            <div className="rounded-[28px] bg-savana-50 px-7 py-7 lg:min-h-[488px]">
              <h2 className="text-3xl leading-tight font-semibold text-savana-800">
                {t("restaurant.taste.heading")}
              </h2>
              <div className="mt-3 space-y-6 text-base leading-relaxed font-medium text-pale-savana-300">
                <p>{t("restaurant.taste.body1")}</p>
                <p>{t("restaurant.taste.body2")}</p>
                <p>{t("restaurant.taste.body3")}</p>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border-white bg-white lg:min-h-[488px]">
              {heroImages.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt="Guests sharing a home-cooked meal at Waerebo Lodge Restaurant"
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className={`object-cover transition-opacity duration-700 ${
                    index === activeHero ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {heroImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Show restaurant photo ${index + 1}`}
                    onClick={() => setActiveHero(index)}
                    className={`h-1 rounded-full transition-all ${
                      index === activeHero
                        ? "w-14 bg-white"
                        : "w-10 bg-white/35 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col gap-6 md:flex-row">
            <div className="grid rounded-[36px] border-white bg-white shadow-xl shadow-black/10 md:w-2/3 lg:grid-cols-2">
              <div className="relative min-h-[250px] overflow-hidden rounded-[28px] border-[8px] border-white bg-white">
                <Image
                  src="/restaurant/Waerebo-Restaurant-Photo-Eating-Favorite-Food.webp"
                  alt="Fresh fish favourite menu at Waerebo Lodge Restaurant"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="rounded-[32px] border-[8px] border-white bg-savana-200 px-7 py-7">
                <h2 className="text-3xl font-semibold text-savana-800">
                  {t("restaurant.favorite.heading")}
                </h2>
                <div className="mt-3 space-y-5 text-base leading-relaxed font-medium text-pale-savana-300">
                  <p>{t("restaurant.favorite.body1")}</p>
                  <p>{t("restaurant.favorite.body2")}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[36px] border-8 border-white bg-savana-50 px-7 py-7 shadow-xl shadow-black/10 md:w-1/3">
              <h2 className="text-3xl font-semibold text-savana-800">
                {t("restaurant.daily.heading")}
              </h2>
              <div className="mt-3 text-base leading-relaxed font-medium text-pale-savana-300">
                <p>{t("restaurant.daily.body")}</p>
                <ul className="ml-5 list-disc">
                  <li>{t("restaurant.daily.item1")}</li>
                  <li>{t("restaurant.daily.item2")}</li>
                </ul>
              </div>
            </div>
          </div>

          <DailyMenuSlider bookHref={bookHref} />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
