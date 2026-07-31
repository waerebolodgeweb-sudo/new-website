export interface TripStop {
  id: string;
  day: string;
  title: string;
  meta: string;
  description: string;
  image: string;
}

export interface InfoCard {
  title: string;
  description: string;
  tone?: "light" | "accent";
}

export interface TripProgram {
  id: string;
  label: string;
  duration: string;
  title: string;
  heroTitle: string;
  subtitle: string;
  heroDesktop: string;
  heroMobile: string;
  overview: string;
  summary: { title: string; description: string }[];
  experiences: string[];
  notes: string[];
  accommodation: InfoCard[];
  meals: InfoCard[];
  stops: TripStop[];
  custom?: boolean;
}

type StopSeed = [
  day: string,
  title: string,
  meta: string,
  imageNumber?: number,
];

const activityCopy: Record<string, string> = {
  "Breakfast at Waerebo Lodge":
    "Start with a fresh breakfast at the lodge while your local guide checks the route, weather, and everything needed for the day ahead.",
  "Terminal to Pos 1":
    "A short ride brings you to the trailhead. Continue toward Pos 1 as village paths give way to the cool, shaded forest.",
  "Forest Trekking from Pos 1":
    "Follow the mountain trail through dense forest, bamboo groves, and sweeping viewpoints with your local trekking guide.",
  "Arrival at Waerebo Village":
    "Reach the ridge and take in the first view of the seven Mbaru Niang houses before entering the village with your guide.",
  "Village Activities":
    "Join the welcome ceremony, meet local families, and learn the customs that shape everyday life in this remarkable highland village.",
  "Lunch at Waerebo Village":
    "Enjoy a simple home-cooked lunch and Flores coffee prepared by the community inside a traditional Mbaru Niang house.",
  "Afternoon Return":
    "Walk back through the forest, continue from the terminal by vehicle, and return to Waerebo Lodge in the late afternoon.",
  "Waerebo Lodge Departure":
    "After breakfast, meet your guide and travel from the lodge to the trailhead for the start of the Waerebo trek.",
  "Village Experience":
    "Spend unhurried time with the community, discovering traditional architecture, stories, music, and the rhythms of village life.",
  "Lunch & Coffee Experience":
    "Share a seasonal lunch and freshly brewed Flores coffee while learning how food is prepared and shared in the village.",
  "Sacred Spring":
    "Walk with a local guide to the village spring and hear why this water source is an important part of Waerebo tradition.",
  "Exploring Mbaru Niang":
    "Step inside the cone-shaped communal house and discover how its five levels support family life, food storage, and ceremony.",
  "Reading House Visit":
    "Visit the village reading house and learn how this shared space supports local children, stories, and community learning.",
  "Evening Village Atmosphere":
    "Watch mist settle over the valley, share dinner with the community, and experience the stillness of Waerebo after dark.",
  "Morning Photography":
    "Wake early for soft mountain light, drifting clouds, and quiet views across the Mbaru Niang rooftops.",
  "Breakfast & Farewell":
    "Enjoy breakfast in the village, say farewell to your hosts, and prepare for the return trek through the forest.",
  "Waerebo Lodge Return":
    "Descend to the terminal and return to the lodge for a warm meal, a shower, and a well-earned rest.",
  "Labuan Bajo Departure":
    "Meet your driver in Labuan Bajo and begin the overland journey through the changing landscapes of western Flores.",
  Pickup:
    "Meet your private driver in Labuan Bajo and begin the overland journey through the changing landscapes of western Flores.",
  "Pleas Waterfall":
    "Walk through lush tropical vegetation to Pleas Waterfall and pause beside its cool, clear cascade.",
  "Lembor Irrigation Rice Fields":
    "Cross the broad Lembor valley and see the irrigation network that sustains one of western Flores' largest rice-growing areas.",
  "Watu Weri Beach":
    "Stop along Flores' south coast for open sea views and the quiet shoreline of Watu Weri Beach.",
  "Waerebo Lodge Arrival":
    "Arrive in Dintor, settle into Waerebo Lodge, and meet the local team before the next day's trek.",
  "Cunca Rami Waterfall":
    "Take a refreshing detour to a forest waterfall, reached by a short walk through farms, jungle, and small villages.",
  "Lunch in Flores":
    "Pause for a local lunch surrounded by rice fields and mountain scenery before continuing deeper into Flores.",
  "Wae Rebo Beach & Coast Views":
    "Follow the southern coast past quiet beaches and broad ocean views on the road toward Dintor.",
  "Arrival at Waerebo Lodge":
    "Settle into the lodge in Dintor, meet the team, and enjoy a relaxed evening before the trek begins.",
  "Weaving Experience":
    "Learn how Manggarai motifs are created as village artisans demonstrate the patient craft of traditional songke weaving.",
  "Village Storytelling":
    "Sit with community members inside a Mbaru Niang and hear stories about ancestry, farming, and the surrounding forest.",
  "Journey to the Coast":
    "Leave the highlands behind and travel toward the coast, with time for scenic stops along the way.",
  "Coastal Lodge Stay":
    "Check in near the coast and enjoy a restful evening before the final island experience.",
  "Labuan Bajo Viewpoint":
    "Stop above the harbour for a wide view of the islands and the layered blue water of the Komodo archipelago.",
  "Island Escape":
    "Board a local boat for clear-water swimming, relaxed beach time, and a final day among the islands near Flores.",
  "Boat Trip to Nuca Molas":
    "Travel by local boat toward Nuca Molas, with time to take in the island coastline and clear Flores waters.",
  Breakfast:
    "Begin the final travel day with breakfast at the lodge before continuing toward Labuan Bajo.",
  "Lingko Spider Web Rice Fields":
    "See the remarkable lingko fields from above, arranged like a spiderweb around a traditional communal centre.",
  "Labuan Bajo":
    "Complete the journey in Labuan Bajo with a final transfer to your hotel or preferred drop-off point.",
  "Cunca Wulang Waterfall":
    "Walk into a dramatic limestone canyon where clear turquoise water runs between steep rock walls.",
  "Ruteng Rice Fields":
    "Travel through cool highland farmland and see the geometric rice fields that surround Ruteng.",
  "Ruteng Heritage Walk":
    "Explore the historic heart of Ruteng with a local guide, from traditional textiles to the town's enduring Manggarai character.",
  "Songke Weaving":
    "Meet local weavers and discover the symbols, natural colours, and patient handwork behind Manggarai songke cloth.",
  "Ruteng Cathedral":
    "Visit one of Ruteng's landmark churches and learn how local tradition and faith have grown together in the highlands.",
  "Ruteng Traditional Market":
    "Explore Ruteng's traditional market, where local produce, spices, textiles, and daily Manggarai life come together.",
  "Morning Departure":
    "Leave Ruteng after breakfast and continue south through the cool Manggarai highlands.",
  "Hobbit Cave":
    "Explore Liang Bua, the archaeological site where Homo floresiensis was discovered, with insight from a local guide.",
  "Afternoon Transfer":
    "Continue across the highlands toward Dintor, with flexible stops for scenery, refreshments, and village life.",
  "Liang Bua Cave":
    "Explore the archaeological site where Homo floresiensis was discovered and hear the story behind Flores' famous ‘hobbit’.",
  "Cancar Spiderweb Rice Fields":
    "View the remarkable lingko fields from above, arranged like a spiderweb around the traditional communal centre.",
};

function buildStops(
  folder: string,
  prefix: string,
  seeds: StopSeed[]
): TripStop[] {
  return seeds.map(([day, title, meta, imageNumber], index) => ({
    id: `${prefix}-${index + 1}`,
    day,
    title,
    meta,
    description:
      activityCopy[title] ??
      "Travel with a local guide and experience another distinctive part of the Flores landscape and culture.",
    image: `/Trip Package/${folder}/${prefix}-${String(imageNumber ?? index + 1).padStart(2, "0")}.webp`,
  }));
}

const waereboAccommodation: InfoCard[] = [
  {
    title: "Waerebo Lodge private room",
    description:
      "A comfortable base in Dintor with a private room, warm shower, and easy access to the Waerebo trailhead.",
    tone: "accent",
  },
  {
    title: "Mbaru Niang village stay",
    description:
      "A shared traditional sleeping space in Waerebo Village, with bedding provided by the local community.",
  },
  {
    title: "Electricity & basic facilities",
    description:
      "Village facilities are simple and electricity is limited, while the lodge provides charging and private bathroom access.",
  },
];

const dayTripAccommodation: InfoCard[] = [
  {
    title: "Waerebo Lodge not included",
    description:
      "This is a same-day trekking program. Add a lodge stay before or after the trek if you would like more time to rest.",
    tone: "accent",
  },
  {
    title: "Overnight stay after the trek",
    description:
      "Ask our team to combine the program with a private room and breakfast at Waerebo Lodge.",
  },
];

const standardMeals: InfoCard[] = [
  {
    title: "Lunch included",
    description:
      "A freshly prepared local lunch is served during the day's journey.",
    tone: "accent",
  },
  {
    title: "Authentic Waerebo coffee",
    description:
      "Enjoy Flores coffee with the community inside a traditional house.",
  },
];

const overnightMeals: InfoCard[] = [
  {
    title: "Daily breakfast included",
    description: "Breakfast is served at the lodge or in Waerebo Village.",
    tone: "accent",
  },
  {
    title: "Lunch, dinner & village coffee",
    description:
      "Simple, seasonal meals are prepared by the lodge and Waerebo community throughout the journey.",
  },
];

const trekkingExperiences = [
  "A scenic trek through rainforest, farmland, and mountain viewpoints",
  "A traditional welcome and time with the Waerebo community",
  "Local meals, Flores coffee, and an experienced local guide",
];

const trekkingNotes = [
  "The trail includes steep, uneven, and occasionally slippery sections. A moderate level of fitness is recommended.",
  "Bring supportive shoes, rain protection, drinking water, sun protection, and a light layer for the cooler highlands.",
];

export const tripPrograms: TripProgram[] = [
  {
    id: "one-day-trek",
    label: "One Day Trek",
    duration: "No overnight stay",
    title: "One Day Trek",
    heroTitle: "A short adventure to the iconic traditional village of Waerebo",
    subtitle:
      "A focused day trek for travelers who want to experience Waerebo and return to the lodge before evening.",
    heroDesktop:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-1D-0N-Hero-Desktop.webp",
    heroMobile:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-1D-0N-Hero-Desktop.webp",
    overview:
      "This one-day trip is perfect for travelers who want to visit Waerebo on a shorter schedule. Starting from Waerebo Lodge, the journey combines a scenic forest trek, cultural activities in the village, and a same-day return to Dintor.",
    summary: [
      {
        title: "The 1-day Waerebo experience",
        description: "A complete guided trek with no overnight stay.",
      },
      {
        title: "Transfers and entrance included",
        description: "Lodge transfer, village contribution, and guide support.",
      },
      {
        title: "Full-day program",
        description: "Morning departure and late-afternoon return.",
      },
    ],
    experiences: trekkingExperiences,
    notes: trekkingNotes,
    accommodation: dayTripAccommodation,
    meals: standardMeals,
    stops: buildStops("1D-0N-Trip-webp", "Trip-Waerebo-Lodge-1D-0N", [
      [
        "Day 1 - Dintor to Waerebo",
        "Breakfast at Waerebo Lodge",
        "07:00 · Waerebo Lodge",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Terminal to Pos 1",
        "08:00 · Vehicle & local ojek",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Forest Trekking from Pos 1",
        "09:00 · Guided trek",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Arrival at Waerebo Village",
        "11:00 · Waerebo Village",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Village Activities",
        "11:30 · Cultural experience",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Lunch at Waerebo Village",
        "12:30 · Local lunch",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Afternoon Return",
        "14:00 · Trek to Dintor",
      ],
    ]),
  },
  {
    id: "overnight-experience",
    label: "Overnight Experience",
    duration: "2 days, 1 night",
    title: "Overnight Experience",
    heroTitle:
      "Experience local village life and stay overnight in Waerebo's traditional cone-shaped house",
    subtitle:
      "Trek into Waerebo, share an evening with the community, and wake to the quiet beauty of the highlands.",
    heroDesktop:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-2D-1N-Hero-Desktop.webp",
    heroMobile:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-2D-1N-Hero-Mobile.webp",
    overview:
      "The Overnight Experience gives you time to slow down and connect with Waerebo beyond a day visit. Trek through the forest, join village life, sleep communally in a Mbaru Niang, and return after a highland sunrise.",
    summary: [
      {
        title: "One night in Waerebo Village",
        description:
          "Traditional shared accommodation and village hospitality.",
      },
      {
        title: "Guided return trekking",
        description:
          "Local guide, trail transfers, and village contribution included.",
      },
      {
        title: "Meals throughout the journey",
        description: "Breakfast, lunch, dinner, and Flores coffee included.",
      },
    ],
    experiences: [
      ...trekkingExperiences,
      "An evening and sunrise among Waerebo's seven Mbaru Niang houses",
    ],
    notes: trekkingNotes,
    accommodation: waereboAccommodation,
    meals: overnightMeals,
    stops: buildStops("2D-1N-Trip-webp", "Trip-Waerebo-Lodge-2D-1N", [
      [
        "Day 1 - Dintor to Waerebo",
        "Breakfast at Waerebo Lodge",
        "07:00 · Breakfast & briefing",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Terminal to Pos 1",
        "08:00 · Vehicle & local ojek",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Forest Trekking from Pos 1",
        "09:00 · Guided trek",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Arrival at Waerebo Village",
        "11:00 · Waerebo Village",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Village Experience",
        "11:30 · Welcome ceremony",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Lunch & Coffee Experience",
        "12:30 · Mbaru Niang",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Sacred Spring",
        "14:00 · Guided village walk",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Reading House Visit",
        "15:30 · Village activity",
      ],
      [
        "Day 1 - Dintor to Waerebo",
        "Evening Village Atmosphere",
        "18:00 · Dinner & overnight",
      ],
      ["Day 2 - Waerebo to Dintor", "Morning Photography", "06:00 · Sunrise"],
      [
        "Day 2 - Waerebo to Dintor",
        "Breakfast & Farewell",
        "07:00 · Waerebo Village",
      ],
      [
        "Day 2 - Waerebo to Dintor",
        "Waerebo Lodge Return",
        "08:30 · Trek & transfer",
      ],
    ]),
  },
  {
    id: "nature-culture-journey",
    label: "Nature & Culture Journey",
    duration: "3 days, 2 nights",
    title: "Nature & Culture Journey",
    heroTitle:
      "A complete nature, culture, and trekking journey from Labuan Bajo",
    subtitle:
      "Travel overland from Labuan Bajo, discover the landscapes of western Flores, and spend a night in Waerebo Village.",
    heroDesktop:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-3D-2N-Hero-Desktop.webp",
    heroMobile:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-3D-2N-Hero-Mobile.webp",
    overview:
      "This three-day journey links the natural highlights of western Flores with an immersive night in Waerebo. Waterfalls, rice fields, coastlines, village traditions, and a guided mountain trek unfold at a comfortable pace.",
    summary: [
      {
        title: "Labuan Bajo to Waerebo",
        description:
          "Private overland transport with scenic stops along the way.",
      },
      {
        title: "Two distinctive nights",
        description: "One night at Waerebo Lodge and one in Waerebo Village.",
      },
      {
        title: "Nature and culture combined",
        description:
          "Waterfalls, coastlines, trekking, food, and community life.",
      },
    ],
    experiences: [
      "A private overland journey from Labuan Bajo through western Flores",
      "Waterfall, rice-field, and coastal stops selected by local guides",
      "A full Waerebo trek with village activities and an overnight stay",
    ],
    notes: [
      "Overland travel times depend on road and weather conditions. Stops may be adjusted to keep the trip comfortable and safe.",
      ...trekkingNotes,
    ],
    accommodation: waereboAccommodation,
    meals: overnightMeals,
    stops: buildStops("3D-2N-Trip-webp", "Trip-Waerebo-Lodge-3D-2N", [
      ["Day 1 - Labuan Bajo to Dintor", "Pickup", "08:00 · Private vehicle"],
      [
        "Day 1 - Labuan Bajo to Dintor",
        "Pleas Waterfall",
        "10:30 · Nature walk",
      ],
      [
        "Day 1 - Labuan Bajo to Dintor",
        "Lembor Irrigation Rice Fields",
        "13:00 · Scenic stop",
      ],
      [
        "Day 1 - Labuan Bajo to Dintor",
        "Watu Weri Beach",
        "15:00 · Coastal stop",
      ],
      [
        "Day 1 - Labuan Bajo to Dintor",
        "Waerebo Lodge Arrival",
        "17:00 · Dinner & overnight",
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Breakfast at Waerebo Lodge",
        "07:00 · Waerebo Lodge",
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Terminal to Pos 1",
        "08:00 · Vehicle & local ojek",
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Forest Trekking from Pos 1",
        "09:00 · Guided trek",
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Arrival at Waerebo Village",
        "11:00 · Waerebo Village",
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Lunch & Coffee Experience",
        "12:30 · Mbaru Niang",
        11,
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Village Experience",
        "11:30 · Welcome ceremony",
        10,
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Sacred Spring",
        "14:00 · Guided village walk",
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Reading House Visit",
        "15:30 · Community experience",
      ],
      [
        "Day 2 - Dintor to Waerebo",
        "Evening Village Atmosphere",
        "18:00 · Dinner & overnight",
      ],
      ["Day 3 - Waerebo to Dintor", "Morning Photography", "06:00 · Sunrise"],
      [
        "Day 3 - Waerebo to Dintor",
        "Breakfast & Farewell",
        "07:00 · Waerebo Village",
      ],
      [
        "Day 3 - Waerebo to Dintor",
        "Waerebo Lodge Return",
        "08:30 · Trek & transfer",
      ],
    ]),
  },
  {
    id: "waerebo-island-escape",
    label: "Waerebo & Island Escape",
    duration: "4 days, 3 nights",
    title: "Waerebo & Island Escape",
    heroTitle:
      "A journey that combines Waerebo mountain trekking with the beauty of Nuca Molas Island",
    subtitle:
      "Move from mountain culture to the sea on a four-day journey through western Flores and its nearby islands.",
    heroDesktop:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-4D-3N-Island-Escape-Hero-Desktop.webp",
    heroMobile:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-4D-3N-Island-Escape-Hero-Mobile.webp",
    overview:
      "Waerebo & Island Escape pairs the cultural heart of Flores with a relaxed coastal finish. Travel from Labuan Bajo, trek and stay in Waerebo, then return to the sea for viewpoints, clear water, and island time.",
    summary: [
      {
        title: "Four days across western Flores",
        description:
          "Private transport, local guide, and boat experience included.",
      },
      {
        title: "Highland and coastal stays",
        description: "Three nights planned around each stage of the journey.",
      },
      {
        title: "Waerebo plus an island day",
        description:
          "Culture, trekking, waterfalls, viewpoints, and clear water.",
      },
    ],
    experiences: [
      "A complete Waerebo trek and overnight cultural experience",
      "A private overland route through waterfalls, rice fields, and coastlines",
      "A relaxed boat journey among the islands near Flores",
    ],
    notes: [
      "Boat routes are weather-dependent and may change for safety. The team will choose the best available island experience on the day.",
      ...trekkingNotes,
    ],
    accommodation: waereboAccommodation,
    meals: overnightMeals,
    stops: buildStops(
      "4D-3N-Trip-Island Escape-webp",
      "Trip-Waerebo-Lodge-4D-3N-Island-Escape",
      [
        ["Day 1 - Labuan Bajo to Dintor", "Pickup", "08:00 · Private vehicle"],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Pleas Waterfall",
          "10:00 · Nature walk",
        ],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Lembor Irrigation Rice Fields",
          "13:00 · Scenic stop",
        ],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Watu Weri Beach",
          "15:00 · Coastal stop",
        ],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Waerebo Lodge Arrival",
          "17:00 · Dinner & overnight",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Breakfast at Waerebo Lodge",
          "07:00 · Waerebo Lodge",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Terminal to Pos 1",
          "08:00 · Vehicle & local ojek",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Forest Trekking from Pos 1",
          "09:00 · Guided trek",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Arrival at Waerebo Village",
          "11:00 · Waerebo Village",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Lunch & Coffee Experience",
          "12:30 · Mbaru Niang",
          11,
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Village Experience",
          "11:30 · Welcome ceremony",
          10,
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Sacred Spring",
          "14:00 · Guided village walk",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Reading House Visit",
          "15:30 · Village activity",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Evening Village Atmosphere",
          "18:00 · Dinner & overnight",
        ],
        [
          "Day 3 - Waerebo to Nuca Molas",
          "Morning Photography",
          "06:00 · Sunrise",
        ],
        [
          "Day 3 - Waerebo to Nuca Molas",
          "Breakfast & Farewell",
          "07:00 · Waerebo Village",
        ],
        [
          "Day 3 - Waerebo to Nuca Molas",
          "Boat Trip to Nuca Molas",
          "10:30 · Private boat",
        ],
        [
          "Day 3 - Waerebo to Nuca Molas",
          "Waerebo Lodge Return",
          "16:00 · Lodge arrival",
        ],
        ["Day 4 - Dintor to Labuan Bajo", "Breakfast", "07:00 · Waerebo Lodge"],
        [
          "Day 4 - Dintor to Labuan Bajo",
          "Lingko Spider Web Rice Fields",
          "10:30 · Scenic stop",
        ],
        ["Day 4 - Dintor to Labuan Bajo", "Labuan Bajo", "15:00 · Drop-off"],
      ]
    ),
  },
  {
    id: "flores-heritage-waerebo",
    label: "Flores Heritage & Waerebo",
    duration: "4 days, 3 nights",
    title: "Flores Heritage & Waerebo",
    heroTitle:
      "Explore Flores history, culture, and the legendary Waerebo Village",
    subtitle:
      "An overland cultural journey through Ruteng, Liang Bua, the spiderweb rice fields, and Waerebo Village.",
    heroDesktop:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-4D-3N-Flores-Hero-Desktop.webp",
    heroMobile:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-4D-3N-Flores-Hero-Mobile.webp",
    overview:
      "Flores Heritage & Waerebo follows the deeper story of Manggarai. Journey through highland farms and historic Ruteng, visit Liang Bua and Cancar, then continue to Waerebo for an immersive village stay.",
    summary: [
      {
        title: "A heritage route across Manggarai",
        description:
          "Private transport and local context throughout the journey.",
      },
      {
        title: "Three nights in Flores",
        description: "Stays arranged in Ruteng, Dintor, and Waerebo Village.",
      },
      {
        title: "History and living culture",
        description:
          "Archaeology, songke weaving, farming traditions, and Waerebo.",
      },
    ],
    experiences: [
      "Liang Bua, the archaeological home of Homo floresiensis",
      "Traditional songke weaving and Cancar's spiderweb rice fields",
      "A complete trek, overnight stay, and cultural experience in Waerebo",
    ],
    notes: [
      "This program includes longer overland drives and a mountain trek. A flexible pace is maintained, but good general mobility is recommended.",
      ...trekkingNotes,
    ],
    accommodation: waereboAccommodation,
    meals: overnightMeals,
    stops: buildStops(
      "1D-0N-Trip-Flores-webp",
      "Trip-Waerebo-Lodge-4D-3N-Flores",
      [
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Pickup",
          "08:00 · Private vehicle",
          1,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Pleas Waterfall",
          "10:30 · Nature walk",
          2,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Lembor Irrigation Rice Fields",
          "13:00 · Scenic stop",
          3,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Lingko Spider Web Rice Fields",
          "14:30 · Viewpoint",
          4,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Ruteng Traditional Market",
          "16:00 · Market visit",
          6,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Ruteng Cathedral",
          "17:00 · Heritage visit",
          7,
        ],
        [
          "Day 2 - Ruteng to Dintor",
          "Morning Departure",
          "08:00 · Private vehicle",
          8,
        ],
        ["Day 2 - Ruteng to Dintor", "Hobbit Cave", "10:00 · Liang Bua", 9],
        [
          "Day 2 - Ruteng to Dintor",
          "Afternoon Transfer",
          "13:30 · Scenic drive",
          10,
        ],
        [
          "Day 2 - Ruteng to Dintor",
          "Waerebo Lodge Arrival",
          "17:00 · Dinner & overnight",
          11,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Breakfast at Waerebo Lodge",
          "07:00 · Waerebo Lodge",
          12,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Terminal to Pos 1",
          "08:00 · Vehicle & local ojek",
          13,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Forest Trekking from Pos 1",
          "09:00 · Guided trek",
          14,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Arrival at Waerebo Village",
          "11:00 · Waerebo Village",
          15,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Lunch & Coffee Experience",
          "12:30 · Mbaru Niang",
          17,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Village Experience",
          "11:30 · Welcome ceremony",
          16,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Sacred Spring",
          "14:00 · Guided village walk",
          18,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Reading House Visit",
          "15:30 · Village activity",
          19,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Evening Village Atmosphere",
          "18:00 · Dinner & overnight",
          20,
        ],
        [
          "Day 4 - Waerebo to Dintor",
          "Morning Photography",
          "06:00 · Sunrise",
          21,
        ],
        [
          "Day 4 - Waerebo to Dintor",
          "Breakfast & Farewell",
          "07:00 · Waerebo Village",
          22,
        ],
        [
          "Day 4 - Waerebo to Dintor",
          "Waerebo Lodge Return",
          "08:30 · Trek & transfer",
          23,
        ],
      ]
    ),
  },
  {
    id: "custom-itinerary",
    label: "Create Your Own Itineraries",
    duration: "Custom",
    title: "Create Your Own Itineraries",
    heroTitle:
      "A flexible journey combining Waerebo trekking with your chosen destinations",
    subtitle:
      "Tell us your dates and interests; our local team will shape a private Flores journey around you.",
    heroDesktop:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-Custom-Hero-Desktop.webp",
    heroMobile:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-Custom-Hero-Mobile.webp",
    overview: "",
    summary: [],
    experiences: [],
    notes: [],
    accommodation: [],
    meals: [],
    stops: [],
    custom: true,
  },
];
