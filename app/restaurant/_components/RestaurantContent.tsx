"use client";

import Image from "next/image";
import ContactSection from "@/components/sections/ContactSection";
import { useLang } from "@/lib/i18n";
import DailyMenuSlider from "./DailyMenuSlider";

const bookMessage =
  "Hello Waerebo Lodge!\n\nI'd like to book a table / meal at the Waerebo Lodge Restaurant.\n\nPlease share availability. Thank you!";
const bookHref = `https://wa.me/6285339021145?text=${encodeURIComponent(
  bookMessage
)}`;

export default function RestaurantContent() {
  const { t } = useLang();

  return (
    <main className="pt-16 lg:pt-20">
      <section className="overflow-hidden bg-[#f8f6ef] py-12 lg:py-16">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
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
              <Image
                src="/restaurant/hero-image.jpg"
                alt="Guests sharing a home-cooked meal at Waerebo Lodge Restaurant"
                fill
                priority
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
                <span className="h-1 w-14 rounded-full bg-white/70" />
                <span className="h-1 w-14 rounded-full bg-white" />
                <span className="h-1 w-14 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col gap-6 md:flex-row">
            <div className="grid rounded-[36px] border-white bg-white shadow-xl shadow-black/10 md:w-2/3 lg:grid-cols-2">
              <div className="relative min-h-[250px] overflow-hidden rounded-[28px] border-[8px] border-white bg-white">
                <Image
                  src="/restaurant/favourite%20menu.png"
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
