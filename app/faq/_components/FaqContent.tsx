"use client";

import { useState } from "react";

type Category = "Trip" | "Lodge" | "Restaurant" | "Transport";

const categories: Category[] = ["Trip", "Lodge", "Restaurant", "Transport"];

interface Faq {
  category: Category;
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    category: "Trip",
    question: "How difficult is the trek to Waerebo Village?",
    answer:
      "The trek is considered moderate and typically takes about 3 to 4 hours from Pos 1, depending on your pace. The path goes uphill through a forested mountain terrain. A basic level of fitness is recommended, but our guides set a comfortable pace and there are rest stops along the way.",
  },
  {
    category: "Trip",
    question: "Where will I sleep when staying overnight in the village?",
    answer:
      "You will sleep inside the authentic Mbaru Niang (traditional cone-shaped house). It is a communal sleep where you share an indoor space with your group. Mattresses, blankets, and pillows are provided. Please note that the facilities are simple and part of the authentic cultural experience.",
  },
  {
    category: "Trip",
    question: "Is there electricity in Waerebo Village?",
    answer:
      "Electricity in the village is very limited and generally only runs from 6:00 PM to 10:00 PM. We highly recommend bringing a power bank to keep your camera and phone charged.",
  },
  {
    category: "Trip",
    question: "What is the “Ojek” service mentioned in the itinerary?",
    answer:
      "An “Ojek” is a local motorcycle taxi. On rougher sections of the lower trail you can choose to ride an ojek for part of the way to save energy, or you can simply walk the whole route. It is an optional service arranged with local drivers.",
  },
  {
    category: "Lodge",
    question: "Where exactly is Waerebo Lodge located?",
    answer:
      "Our base is in Dintor, Manggarai, Flores — right at the valley below Waerebo. It is located in the middle of nature, offering stunning open views of the Flores Sea and the surrounding mountains.",
  },
  {
    category: "Lodge",
    question: "Do the lodge rooms have AC and hot water?",
    answer:
      "Yes! We offer several room types to fit your needs. If you select Superior or Deluxe rooms, you will get both AC and hot water for a warm shower. Our standard fan rooms also have a hot shower. We also offer simpler fan rooms at an affordable rate.",
  },
  {
    category: "Restaurant",
    question: "Do you provide food for the trekking journey?",
    answer:
      "Yes, absolutely. We prepare packed lunch boxes for you to carry on the trek. Depending on your booked package, we also serve hearty pre-trek breakfasts and warm dinners once you return to the lodge.",
  },
  {
    category: "Restaurant",
    question: "What kind of food can I expect at the lodge?",
    answer:
      "We serve comforting, authentic local Flores meals. Our co-founder and general manager curates a menu of fresh local produce, so each meal is freshly cooked. We can also accommodate vegetarian preferences and even guests in their tea. So will also get to enjoy authentic, locally sourced Manggarai coffee.",
  },
  {
    category: "Transport",
    question: "How do I get from Labuan Bajo to Waerebo Lodge?",
    answer:
      "We provide a comfortable overland car transfer. Your driver will pick you up from your hotel or the airport in Labuan Bajo for the scenic drive towards Dintor. Along the way, we even stop at scenic spots like Cunca Wulang waterfall and the rice fields. The drive takes roughly 3 to 4 hours.",
  },
];

export default function FaqContent() {
  const [active, setActive] = useState<Category>("Trip");

  const visible = faqs.filter((f) => f.category === active);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Heading */}
        <h1 className="mb-8 text-4xl leading-tight font-bold text-neutral-900 sm:text-5xl lg:mb-10 lg:text-6xl">
          Got Questions?
          <br />
          We&apos;ve Got Answers.
        </h1>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap gap-2 lg:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-green-400 text-white"
                  : "bg-light-green-100 text-neutral-300 hover:bg-pale-green-100/30 hover:text-neutral-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Q&A list */}
        <div className="divide-y divide-pale-green-100/40 border-t border-pale-green-100/40">
          {visible.map((faq) => (
            <div key={faq.question} className="py-7 lg:py-8">
              <h2 className="mb-3 text-base font-bold text-neutral-900 lg:text-lg">
                Q: {faq.question}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-neutral-300 lg:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
