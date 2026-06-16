"use client";

import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useLang } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-neutral-050 py-20 lg:py-28">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
          {/* Left content */}
          <div className="flex flex-col gap-8 lg:w-[40%] lg:max-w-[469px]">
            <div>
              <h2 className="mb-2 text-4xl leading-tight font-semibold text-savana-800 lg:text-5xl">
                {t("contact.heading")}
              </h2>
              <p className="text-base leading-relaxed text-black">
                {t("contact.body")}
              </p>
            </div>

            {/* Map */}
            <div className="relative h-44 w-full overflow-hidden rounded-3xl shadow-sm">
              <iframe
                title="Map to Waerebo Lodge"
                src="https://www.google.com/maps?q=-8.8465902,120.3055812&z=17&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Address */}
            <p className="text-xl font-semibold text-green-400">
              Dintor – Manggarai, Flores, Indonesia
            </p>

            {/* Socials */}
            <div className="mt-auto flex items-end gap-10">
              <a
                href="#"
                className="text-xl font-semibold text-[#9B9529] transition-opacity hover:opacity-80"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xl font-semibold text-[#9B9529] transition-opacity hover:opacity-80"
              >
                Tik Tok
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-7 lg:flex-1">
            {/* Contact details */}
            <div className="flex flex-col gap-7">
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-14">
                <div>
                  <p className="mb-2 text-base font-semibold text-[#9B9529]">
                    {t("contact.phone")}
                  </p>
                  <a
                    href="tel:+6285239344046"
                    className="text-xl font-semibold text-green-400 transition-opacity hover:opacity-80"
                  >
                    +6285 239 344 046
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-base font-semibold text-[#9B9529]">
                    {t("contact.whatsapp")}
                  </p>
                  <a
                    href="https://wa.me/6285339021145"
                    className="text-xl font-semibold text-green-400 transition-opacity hover:opacity-80"
                  >
                    +6285 339 021 145
                  </a>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 sm:gap-14">
                <div>
                  <p className="mb-2 text-base font-semibold text-[#9B9529]">
                    {t("contact.partner")}
                  </p>
                  <a
                    href="https://wa.me/6285339021145"
                    className="inline-flex items-center gap-2 text-xl font-semibold text-green-400 transition-opacity hover:opacity-80"
                  >
                    {t("contact.partnerCta")}
                    <IoArrowForwardOutline size={20} />
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-base font-semibold text-[#9B9529]">
                    {t("contact.email")}
                  </p>
                  <a
                    href="mailto:waerebolodge@gmail.com"
                    className="text-xl font-semibold break-all text-green-400 transition-opacity hover:opacity-80"
                  >
                    waerebolodge@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Large lodge image */}
            <div className="relative h-72 w-full overflow-hidden rounded-[36px] shadow-sm lg:h-[400px]">
              <Image
                src="/home/contact-us.jpg"
                alt="Waerebo Lodge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
