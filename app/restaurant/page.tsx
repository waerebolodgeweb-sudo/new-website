import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import DailyMenuSlider from "./_components/DailyMenuSlider";

const bookMessage =
  "Hello Waerebo Lodge!\n\nI'd like to book a table / meal at the Waerebo Lodge Restaurant.\n\nPlease share availability. Thank you!";
const bookHref = `https://wa.me/6285339021145?text=${encodeURIComponent(
  bookMessage
)}`;

export const metadata: Metadata = {
  title: "Waerebo Lodge Restaurant",
  description:
    "Home-cooked Flores meals at Waerebo Lodge, open to guests and travelers passing through Dintor.",
};

export default function RestaurantPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <section className="overflow-hidden bg-[#f8f6ef] py-12 lg:py-16">
          <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
            <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_590px] lg:items-center">
              <h1 className="text-5xl leading-tight font-semibold text-savana-800 lg:text-[56px]">
                Waerebo Lodge Restaurant
              </h1>
              <p className="max-w-2xl text-base leading-relaxed font-medium text-neutral-700 lg:justify-self-end lg:text-center">
                Open to everyone-whether you&apos;re staying at the lodge,
                exploring Waerebo Village, or simply passing through Dintor for
                a peaceful, home-cooked meal.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.72fr]">
              <div className="rounded-[32px] border-[8px] border-white bg-white px-7 py-7 shadow-xl shadow-black/10 lg:min-h-[488px]">
                <h2 className="text-3xl leading-tight font-semibold text-savana-800">
                  A Genuine Taste of Flores
                </h2>
                <div className="mt-3 space-y-6 text-base leading-relaxed font-medium text-pale-savana-300">
                  <p>
                    Every day, our kitchen prepares fresh home cooked dishes
                    using locally sourced ingredients from the surrounding area.
                    Meals are simple, wholesome, and full of local flavor,
                    typically served with white or red rice, fresh vegetables,
                    and a seasonal protein.
                  </p>
                  <p>
                    Take your time, enjoy the view, and experience the slower
                    pace of life in rural Flores. Surrounded by rice fields,
                    mountain scenery, and fresh countryside air.
                  </p>
                  <p>
                    Dining at Waerebo Lodge is about more than just food,
                    it&apos;s about enjoying a genuine taste of Flores.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[340px] overflow-hidden rounded-[32px] border-[8px] border-white bg-white shadow-xl shadow-black/10 lg:min-h-[488px]">
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

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.18fr_0.94fr_0.98fr]">
              <div className="relative min-h-[250px] overflow-hidden rounded-[32px] border-[8px] border-white bg-white shadow-xl shadow-black/10">
                <Image
                  src="/restaurant/favourite%20menu.png"
                  alt="Fresh fish favourite menu at Waerebo Lodge Restaurant"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="rounded-[32px] border-[8px] border-white bg-savana-200 px-7 py-7 shadow-xl shadow-black/10">
                <h2 className="text-3xl font-semibold text-savana-800">
                  Favourite Menu
                </h2>
                <div className="mt-3 space-y-5 text-base leading-relaxed font-medium text-pale-savana-300">
                  <p>
                    Guest favorite is our freshly grilled fish, with our
                    signature &quot;Sambal Mati Tempat&quot; a spicy local chili
                    relish that captures the bold flavors of Flores.
                  </p>
                  <p>
                    Depending on the season and the daily catch, we may also
                    serve our delicious home-style free-range chicken, prepared
                    with the same care and freshness.
                  </p>
                </div>
              </div>

              <div className="rounded-[32px] border-[8px] border-white bg-white px-7 py-7 shadow-xl shadow-black/10">
                <h2 className="text-3xl font-semibold text-savana-800">
                  Your Daily Meals
                </h2>
                <div className="mt-3 text-base leading-relaxed font-medium text-pale-savana-300">
                  <p>
                    Whether you are dining in or heading out, we have you
                    covered:
                  </p>
                  <ul className="ml-5 list-disc">
                    <li>Served fresh for breakfast, lunch, and dinner.</li>
                    <li>
                      Certain meals are included with your room reservation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <DailyMenuSlider bookHref={bookHref} />
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
