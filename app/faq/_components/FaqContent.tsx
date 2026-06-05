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
      "The trek is considered moderate and typically takes about 2 to 3 hours from Pos 1, depending on your pace. The path goes uphill through a shaded mountain forest. A basic level of fitness is recommended, but you can take your time and enjoy the cool air!",
  },
  {
    category: "Trip",
    question: "Where will I sleep when staying overnight in the village?",
    answer:
      "You will sleep inside the authentic Mbaru Niang (traditional cone-shaped house). It is a communal setup where you sleep on mattresses in an open-tent arrangement alongside other travelers. Please note that the bathrooms are located outside the main house.",
  },
  {
    category: "Trip",
    question: "Is there electricity in Waerebo Village?",
    answer:
      "Electricity in the village is very limited and generally only runs from 6:00 PM to 10:00 PM. We highly recommend bringing a power bank to keep your camera or phone charged!",
  },
  {
    category: "Trip",
    question: 'What is the "Ojek" service mentioned in the itinerary?',
    answer:
      'An "Ojek" is a local motorcycle taxi. On rougher sections of the lower trail you can choose to ride an ojek for part of the way to save energy, or you can simply walk the whole route. It is an optional service arranged with local drivers.',
  },
  {
    category: "Lodge",
    question: "Where exactly is Waerebo Lodge located?",
    answer:
      "Our basecamp is located in Dintor, right at the valley below Waerebo. It sits beautifully in the middle of rice fields, offering stunning open views of the Flores Sea and the surrounding mountains.",
  },
  {
    category: "Lodge",
    question: "Do the lodge rooms have AC and hot water?",
    answer:
      "Yes! We offer several room types to fit your needs. If you want maximum comfort before or after your hike, you can book our AC rooms which come equipped with hot showers. We also offer standard Fan rooms.",
  },
  {
    category: "Restaurant",
    question: "Do you provide food for the trekking journey?",
    answer:
      "Absolutely. We prepare practical lunch boxes for you to carry on the trail. Depending on your booked package, we also serve hearty pre-trek breakfasts and warm dinners when you return to the lodge.",
  },
  {
    category: "Restaurant",
    question: "What kind of food can I expect at the lodge?",
    answer:
      "We serve comforting, authentic local Flores meals. Our co-founder and general manager, Isabela, loves to cook and ensures every guest is well-fed. You will also get to taste authentic, locally sourced Waerebo coffee!",
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
        <h1 className="mb-8 text-4xl leading-tight font-bold text-neutral-900 sm:text-5xl lg:mb-10 lg:text-6xl">
          Got Questions?
          <br />
          We&apos;ve Got Answers.
        </h1>

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
