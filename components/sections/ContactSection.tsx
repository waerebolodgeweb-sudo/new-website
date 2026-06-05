import Image from "next/image";
import {
  IoLogoWhatsapp,
  IoLocationOutline,
  IoLogoInstagram,
  IoMusicalNotesOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row — heading + contact details */}
        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 lg:text-5xl">
              Contact Us
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-neutral-300 lg:text-base">
              Where the journey to the clouds begins. We handle the logistics so
              you can embrace the adventure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 self-center">
            <div>
              <p className="mb-1.5 text-[10px] font-semibold tracking-wider text-neutral-300 uppercase">
                Phone
              </p>
              <a
                href="tel:+6285239344046"
                className="text-sm font-semibold text-neutral-900 transition-colors hover:text-green-400"
              >
                +6285 239 344 046
              </a>
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-semibold tracking-wider text-neutral-300 uppercase">
                Be Our Partner Now
              </p>
              <a
                href="https://wa.me/6285339021145"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 hover:underline"
              >
                Let&apos;s work together
                <IoArrowForwardOutline size={15} />
              </a>
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-semibold tracking-wider text-neutral-300 uppercase">
                WhatsApp
              </p>
              <a
                href="https://wa.me/6285339021145"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 transition-colors hover:text-green-400"
              >
                <IoLogoWhatsapp size={15} className="text-green-400" />
                +6285 339 021 145
              </a>
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-semibold tracking-wider text-neutral-300 uppercase">
                Emails
              </p>
              <a
                href="mailto:waerebolodge@gmail.com"
                className="text-sm font-semibold break-all text-neutral-900 transition-colors hover:text-green-400"
              >
                waerebolodge@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row — map + lodge image */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Map + socials */}
          <div className="flex flex-col gap-5">
            <div className="relative min-h-56 flex-1 overflow-hidden rounded-3xl shadow-sm">
              <iframe
                title="Map to Waerebo Lodge"
                src="https://www.google.com/maps?q=-8.8465902,120.3055812&z=17&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-white"
              >
                <IoLocationOutline size={14} className="text-green-400" />
                Dintor — Manggarai, Flores, Indonesia
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-green-400 px-4 py-2 text-sm font-semibold text-green-400 transition-colors hover:bg-green-400 hover:text-white"
              >
                <IoLogoInstagram size={16} />
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-green-400 px-4 py-2 text-sm font-semibold text-green-400 transition-colors hover:bg-green-400 hover:text-white"
              >
                <IoMusicalNotesOutline size={16} />
                Tik Tok
              </a>
            </div>
          </div>

          {/* Lodge image */}
          <div className="relative h-72 min-h-72 overflow-hidden rounded-3xl shadow-sm lg:h-auto">
            <Image
              src="/home/contact-us.jpg"
              alt="Waerebo Lodge"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
