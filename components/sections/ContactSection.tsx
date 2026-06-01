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
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row — heading + contact details */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-lodge-dark mb-4">
              Contact Us
            </h2>
            <p className="text-lodge-neutral text-sm lg:text-base leading-relaxed max-w-md">
              Where the journey to the clouds begins. We handle the logistics so
              you can embrace the adventure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 self-center">
            <div>
              <p className="text-[10px] font-semibold text-lodge-neutral uppercase tracking-wider mb-1.5">
                Phone
              </p>
              <a
                href="tel:+6285239344046"
                className="text-lodge-dark font-semibold text-sm hover:text-lodge-green transition-colors"
              >
                +6285 239 344 046
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-lodge-neutral uppercase tracking-wider mb-1.5">
                Be Our Partner Now
              </p>
              <a
                href="https://wa.me/6285339021145"
                className="inline-flex items-center gap-1.5 text-lodge-green font-semibold text-sm hover:underline"
              >
                Let&apos;s work together
                <IoArrowForwardOutline size={15} />
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-lodge-neutral uppercase tracking-wider mb-1.5">
                WhatsApp
              </p>
              <a
                href="https://wa.me/6285339021145"
                className="inline-flex items-center gap-1.5 text-lodge-dark font-semibold text-sm hover:text-lodge-green transition-colors"
              >
                <IoLogoWhatsapp size={15} className="text-lodge-green" />
                +6285 339 021 145
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-lodge-neutral uppercase tracking-wider mb-1.5">
                Emails
              </p>
              <a
                href="mailto:waerebolodge@gmail.com"
                className="text-lodge-dark font-semibold text-sm hover:text-lodge-green transition-colors break-all"
              >
                waerebolodge@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row — map + lodge image */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Map + socials */}
          <div className="flex flex-col gap-5">
            <div className="relative flex-1 min-h-56 rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="https://placehold.co/800x500/5A7C61/F0E3D3?text=Dintor+Map"
                alt="Map to Waerebo Lodge"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-lodge-dark text-xs font-semibold rounded-full shadow-sm">
                <IoLocationOutline size={14} className="text-lodge-green" />
                Dintor — Manggarai, Flores, Indonesia
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-lodge-green text-lodge-green text-sm font-semibold rounded-full hover:bg-lodge-green hover:text-white transition-colors"
              >
                <IoLogoInstagram size={16} />
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-lodge-green text-lodge-green text-sm font-semibold rounded-full hover:bg-lodge-green hover:text-white transition-colors"
              >
                <IoMusicalNotesOutline size={16} />
                Tik Tok
              </a>
            </div>
          </div>

          {/* Lodge image */}
          <div className="relative h-72 lg:h-auto min-h-72 rounded-3xl overflow-hidden shadow-sm">
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
