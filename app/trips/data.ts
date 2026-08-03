export interface TripStop {
  id: string;
  day: string;
  title: string;
  meta: string;
  description: string;
  image: string;
}

export type SummaryIcon =
  | "people"
  | "thumbs-up"
  | "calendar"
  | "car"
  | "walk"
  | "village"
  | "boat"
  | "breakfast"
  | "check";

export interface TripSummaryItem {
  title: string;
  description?: string;
  icon: SummaryIcon;
}

export interface InfoCard {
  title: string;
  description: string;
  tone?: "light" | "accent" | "accommodation" | "accommodation-reminder";
  emphasis?: string[];
  emphasisTone?: "default" | "danger";
  separator?: string;
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
  summary: TripSummaryItem[];
  experiences: string[];
  notes: string[];
  accommodation: InfoCard[];
  accommodationReminder?: string;
  meals: InfoCard[];
  mealsNote?: string;
  stops: TripStop[];
  custom?: boolean;
}

type StopSeed = [
  day: string,
  title: string,
  meta: string,
  imageNumber?: number,
];

const commonTrekCopy: Record<string, string> = {
  "Breakfast at Waerebo Lodge":
    "After breakfast at Waerebo Lodge, guests will depart with a local guide by car to the trekking starting point. The drive takes around 20 minutes.",
  "Terminal to Pos 1":
    "From the terminal, guests may continue to Pos 1 by local motorbike taxi if they are already comfortable riding on a motorbike.\n\nFor guests who are not used to motorbikes, we recommend walking for safety reasons, as the road can be narrow, steep, uneven, and challenging in some parts.",
  "Forest Trekking from Pos 1":
    "After Pos 1, the journey continues into the forest area. The trail is slightly uphill, but the path is shaded by lush tropical trees. The air is cool and refreshing, and in the morning, guests may sometimes hear the sound of birds along the way.",
  "Forest Trekking to Waerebo":
    "After Pos 1, the journey continues into the forest area. The trail is slightly uphill, but the path is shaded by lush tropical trees. The air is cool and refreshing, and in the morning, guests may sometimes hear the sound of birds along the way.",
  "Arrival at Waerebo Village":
    "Upon arrival at Waerebo Village, guests will enter the main traditional house, known as Rumah Gendang. A representative from the Waerebo community and the traditional elder will welcome guests through a traditional welcome ceremony.",
  "Village Experience":
    "During this moment, your guide will share stories about Waerebo Village, its culture, traditional houses, and the daily life of the local community.",
  "Lunch & Coffee Experience":
    "After the welcome ceremony, guests will enjoy a local lunch, Waerebo coffee, and a short rest. In the afternoon, guests will visit local houses and meet the community. This is a chance to learn more about the architecture of Waerebo’s traditional houses and observe daily village activities such as weaving songket, pounding coffee, and drying coffee beans.",
  "Sacred Spring":
    "Guests will visit the local spring, where the people of Waerebo collect water for daily use. Your guide will share the story of the traditional rituals held at this spring as a form of respect to the ancestors believed to protect the area.",
  "Reading House Visit":
    "Guests will visit the reading house to see photos of the traditional house construction process. Your guide will explain the building process and the traditional rituals involved.",
  "Evening Village Atmosphere":
    "Around 6:00 PM, observe traditional cooking before dinner in the village. If the weather is clear, guests may also enjoy night photography or stargazing after dinner, followed by an overnight stay inside Waerebo’s traditional cone-shaped house together with other visitors.",
  "Morning Photography":
    "Around 6:00 AM is a beautiful time for photography, as the morning atmosphere in Waerebo is peaceful and scenic.",
  "Breakfast & Farewell":
    "Breakfast will be served around 7:00 AM. After breakfast, guests will say goodbye to the local community before starting the trek back to Dintor.",
  "Waerebo Lodge Return":
    "In the afternoon, you will trek back to Dintor and return to Waerebo Lodge, where the trip ends.",
};

const oneDayStopCopy: Record<string, string> = {
  ...commonTrekCopy,
  "Breakfast at Waerebo Lodge":
    "Start your morning with breakfast at Waerebo Lodge. After breakfast, you will depart with your local guide by car to the trekking starting point. The drive takes around 20 minutes.",
  "Terminal to Pos 1":
    "From the terminal, guests may continue to Pos 1 by local motorbike taxi if they are comfortable riding on a motorbike.\n\nFor guests who are not used to motorbikes, we recommend walking for safety reasons, as the road can be narrow, steep, uneven, and challenging in some parts.",
  "Arrival at Waerebo Village":
    "Upon arrival at Waerebo Village, guests will enter the main traditional house, known as the Rumah Gendang. A representative from the Waerebo community and the traditional elder will welcome the guests through a traditional welcome ceremony.",
  "Village Activities":
    "This is also a meaningful moment to learn about Waerebo’s culture, traditional houses, local customs, and the daily life of the community through your guide’s storytelling.",
  "Lunch at Waerebo Village":
    "After the welcome ceremony and village introduction, guests will enjoy a local lunch, Waerebo coffee, and some time to rest while taking in the peaceful village atmosphere.",
  "Afternoon Return":
    "In the afternoon, you will trek back to Dintor and return to Waerebo Lodge, where the trip ends.",
};

const overnightStopCopy: Record<string, string> = {
  ...commonTrekCopy,
  "Breakfast at Waerebo Lodge":
    "Start the morning with breakfast at Waerebo Lodge. After breakfast, guests will depart with a local guide by car to the trekking starting point. The drive takes around 20 minutes.",
  "Lunch & Coffee Experience":
    "Enjoy a local lunch and Waerebo coffee after the ceremony. In the afternoon, explore the traditional houses, meet the community, and observe daily activities like weaving and coffee processing.",
  "Evening Village Atmosphere":
    "Around 6:00 PM, observe traditional cooking before dinner in the village. Enjoy stargazing if the weather is clear, followed by an overnight stay in a shared, traditional cone-shaped house.",
};

const overlandCopy: Record<string, string> = {
  "Labuan Bajo Pickup":
    "Your guide will pick you up at the airport or your hotel in Labuan Bajo. Today, the journey begins with a scenic drive toward Dintor.",
  "Cunca Plias Waterfall Visit":
    "On the way, you will visit Cunca Plias Waterfall. From the parking area, it takes around 35 minutes on foot to reach the waterfall. Guests may enjoy the natural surroundings and swim in the waterfall pool before walking back to the car.",
  "Lembor Rice Fields":
    "The journey continues with a stop at the Lembor irrigation area, home to one of the largest rice field irrigation areas in Flores. A lunch box will be prepared for the trip.",
  "Lembor Irrigation Rice Fields":
    "The trip continues with a photo stop at the Lembor rice field irrigation area, one of the largest rice-producing areas in Flores. Lunch will be prepared during the trip.",
  "Watu Weri Beach Coastal Views":
    "Along the way, you will also have photo stops at Watu Weri Beach and other scenic viewpoints before continuing to Dintor.",
  "Watu Weri Beach":
    "Along the way, you will also have photo stops at Watu Weri Beach and other scenic viewpoints before continuing to Dintor.",
  "Arrival at Waerebo Lodge":
    "Tonight, you will stay at Waerebo Lodge, located in the middle of rice fields with open views toward the sea and the Waerebo mountains. Room options may vary, including fan rooms and air-conditioned rooms with hot showers, depending on availability.\n\nDinner will be prepared at the lodge. Rest and overnight at Waerebo Lodge.",
  "Waerebo Lodge Arrival":
    "Tonight, guests will stay at Waerebo Lodge, located in the middle of rice fields with open views toward the sea, rice fields, and the Waerebo mountains. Dinner will be prepared at the lodge. Rest and overnight at Waerebo Lodge.",
  "Boat Trip to Nuca Molas":
    "The journey continues with a boat trip to Nuca Molas Island. It offers clear sea water and a white sand beach, making it a beautiful place to relax, swim, and enjoy the island atmosphere. Lunch will be prepared for the trip.\n\nExperience the daily life of the locals. The island is home to around 1,500 residents, spread across three villages. Most local people are fishermen, with daily activities such as fishing, drying fish, and making traditional boats.",
  Breakfast: "After breakfast, the journey continues back to Labuan Bajo.",
  "Lingko Spider Web Rice Fields":
    "On the way, guests will visit the spider web rice field viewpoint. It takes around 1 hour on foot to reach the viewpoint. A lunch box will be prepared for the trip.",
  "Labuan Bajo":
    "After the visit, the journey continues to Labuan Bajo. The trip ends upon arrival in Labuan Bajo.",
  "Arrival at Ruteng":
    "Upon arrival at Ruteng, guests will check in and rest after a day of exploring. The afternoon continues with visits to the traditional market and cathedral.",
  "Ruteng Traditional Market":
    "After arriving in Ruteng and checking in at the hotel, visit the Ruteng traditional market and experience the rhythm of everyday local life.",
  "Ruteng Cathedral":
    "Following the market, visit Ruteng Cathedral. Dinner will be prepared before resting overnight in Ruteng.",
  "Morning Departure":
    "After breakfast in Ruteng, the journey continues toward Dintor with a visit to Liang Bua.",
  "Hobbit Cave Liang Bua":
    "This cave is an important historical site in Flores, known for the discovery of ancient small-bodied human fossils. Your guide will share the story of the discovery and its significance to Flores history.",
  "Afternoon Transfer":
    "After the cave visit, lunch will be prepared. The journey then continues toward Dintor.",
};

const floresStopCopy: Record<string, string> = {
  ...commonTrekCopy,
  ...overlandCopy,
  "Labuan Bajo Pickup":
    "Your guide will pick you up at the airport or your hotel in Labuan Bajo. Today, the journey begins with a scenic drive toward Ruteng.",
  "Cunca Plias Waterfall Visit":
    "The first stop is Cunca Plias Waterfall. From the parking area, it takes around 35 minutes on foot to reach the waterfall. Guests may enjoy the natural surroundings and swim in the waterfall pool before continuing the journey.",
  "Lingko Spider Web Rice Fields":
    "Visit the Cancar spider web rice fields, a unique traditional rice field system in Manggarai. Its spider web shape reflects one of the oldest land division systems in Flores and symbolizes unity within the Manggarai community.",
  "Village Experience":
    "In the afternoon, explore the traditional houses, meet the community, and observe daily activities like weaving songket and coffee processing.",
  "Lunch & Coffee Experience":
    "Enjoy a local lunch and authentic Waerebo coffee after the ceremony.",
  "Waerebo Lodge Return":
    "Upon arrival at Waerebo Lodge, guests may take a shower and enjoy lunch before completing the journey.",
};

function buildStops(
  folder: string,
  prefix: string,
  seeds: StopSeed[],
  descriptions: Record<string, string>
): TripStop[] {
  return seeds.map(([day, title, meta, imageNumber], index) => ({
    id: `${prefix}-${index + 1}`,
    day,
    title,
    meta,
    description:
      descriptions[title] ??
      commonTrekCopy[title] ??
      overlandCopy[title] ??
      "Travel with a local guide and experience another distinctive part of the Flores landscape and culture.",
    image: `/Trip Package/${folder}/${prefix}-${String(imageNumber ?? index + 1).padStart(2, "0")}.webp`,
  }));
}

const mealsNote =
  "While main meals are provided, we highly recommend bringing your own trail snacks, energy bars, or light bites to keep your energy up during the forest trek and the journey between points.";

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
      "This one-day trip is perfect for travelers who want to visit Waerebo in a shorter time. Starting from Waerebo Lodge, the journey combines a scenic drive, forest trekking, cultural introduction, local lunch, and Waerebo coffee before returning to Dintor in the afternoon.",
    summary: [
      {
        icon: "people",
        title: "1 to 10+ Guests (Private & Group options)",
      },
      {
        icon: "thumbs-up",
        title:
          "Travelers with limited time, active travelers, culture lovers, and guests who want to experience Waerebo in one day",
      },
      {
        icon: "calendar",
        title: "1 Day of Trips, No Overnight Stay",
      },
      {
        icon: "car",
        title:
          "Car transfer (Lodge to Terminal), Optional Ojek (Motorcycle taxi), and Hiking",
      },
    ],
    experiences: [
      "A scenic trek through a shaded, lush forest with local wildlife.",
      "An official welcome ceremony by the village elders at the Rumah Gendang (Main House).",
      "In-depth storytelling about Waerebo's history, architecture, and daily life from your expert guide.",
    ],
    notes: [
      "The trekking route includes uphill sections and natural forest paths. Comfortable walking shoes, drinking water, and light rain protection are recommended. Motorbike taxi from the terminal to Pos 1 is optional and only recommended for guests who are comfortable riding on mountain roads.",
    ],
    accommodation: [
      {
        title: "Waerebo Lodge not included",
        description:
          "in this daytime itinerary (guests typically book a room here the night before or after the trek).",
        tone: "accommodation-reminder",
        emphasis: ["Waerebo Lodge not included"],
        emphasisTone: "danger",
        separator: " ",
      },
      {
        title: "No overnight stay at the Village",
        description: "this is a single-day excursion.",
        tone: "accommodation-reminder",
        emphasis: ["No overnight stay at the Village"],
        emphasisTone: "danger",
      },
    ],
    meals: [
      {
        title: "Lunch included",
        description:
          "A freshly prepared traditional meal is served upon arrival at Waerebo Village.",
      },
      {
        title: "Authentic Waerebo Coffee",
        description:
          "A warm, authentic Waerebo coffee grown and roasted locally by the villagers.",
      },
    ],
    mealsNote,
    stops: buildStops(
      "1D-0N-Trip-webp",
      "Trip-Waerebo-Lodge-1D-0N",
      [
        [
          "Day 1 - Dintor to Waerebo",
          "Breakfast at Waerebo Lodge",
          "20 Minutes · Car",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Terminal to Pos 1",
          "Depends on the condition · Motorbike",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Forest Trekking from Pos 1",
          "Depends on the condition · Trek Walking",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Arrival at Waerebo Village",
          "Trek Walking",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Village Activities",
          "Takes time until afternoon",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Lunch at Waerebo Village",
          "Lunch by the village",
        ],
        ["Day 1 - Dintor to Waerebo", "Afternoon Return", "Trek Back Down"],
      ],
      oneDayStopCopy
    ),
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
      "This overnight experience is the best way to truly feel the atmosphere of Waerebo. More than just a trek, this journey allows guests to spend time with the local community, learn about traditional houses, enjoy local food and coffee, and stay overnight inside the iconic cone-shaped traditional house.",
    summary: [
      {
        icon: "people",
        title: "1 to 10+ Guests (Private & Group options)",
      },
      {
        icon: "thumbs-up",
        title:
          "Travelers who want a deeper Waerebo experience, culture lovers, photographers, adventurous travelers, and guests who want to stay overnight inside the traditional house",
      },
      {
        icon: "calendar",
        title: "2 Days, 1 Night, With Overnight Stay at the Village",
      },
      {
        icon: "car",
        title:
          "Car transfer (Lodge to Terminal), Optional Ojek (Motorcycle taxi), and Forest Trekking.",
      },
    ],
    experiences: [
      "A guided scenic trek through a shaded, lush tropical forest.",
      "An official traditional welcome ceremony by the village elder at the Mbaru Niang House.",
      "In-depth storytelling about Waerebo's history, a sacred spring visit, and a reading house tour.",
      "An overnight stay inside the iconic cone-shaped traditional Mbaru Gendang house.",
    ],
    notes: [
      "This trip includes mountain trekking, a shared traditional sleeping arrangement, simple village facilities, and limited electricity. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, and personal essentials.",
    ],
    accommodation: [
      {
        title: "Waerebo Lodge not included",
        description:
          "in this daytime itinerary (guests typically book a room here the night before or after the trek).",
        tone: "accommodation-reminder",
        emphasis: ["Waerebo Lodge not included"],
        emphasisTone: "danger",
        separator: " ",
      },
      {
        title: "The traditional house has no private rooms.",
        description:
          "Guests sleep in a shared open sleeping area. Bathroom and toilet facilities are located outside the house.",
        tone: "accommodation",
        emphasis: [],
        separator: " ",
      },
      {
        title: "Electricity is very limited",
        description:
          "and usually available only from around 6:00 PM to 10:00 PM.",
        tone: "accommodation",
        emphasis: [],
        separator: " ",
      },
    ],
    meals: [
      {
        title: "Lunch, dinner & breakfast included",
        description:
          "Freshly prepared traditional meals are served by Waerebo Village.",
        tone: "accent",
      },
      {
        title: "Authentic Waerebo Coffee",
        description:
          "A warm, authentic Waerebo coffee grown and roasted locally by the villagers.",
      },
    ],
    mealsNote,
    stops: buildStops(
      "2D-1N-Trip-webp",
      "Trip-Waerebo-Lodge-2D-1N",
      [
        [
          "Day 1 - Dintor to Waerebo",
          "Breakfast at Waerebo Lodge",
          "20 Minutes · Car",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Terminal to Pos 1",
          "Depends on the condition · Motorbike",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Forest Trekking from Pos 1",
          "Depends on the condition · Trek Walking",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Arrival at Waerebo Village",
          "Trek Walking",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Village Experience",
          "Takes time until afternoon",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Lunch & Coffee Experience",
          "Lunch & coffee by the village",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Sacred Spring",
          "Village activities until afternoon",
        ],
        [
          "Day 1 - Dintor to Waerebo",
          "Reading House Visit",
          "Village activities until afternoon",
        ],
        ["Day 1 - Dintor to Waerebo", "Evening Village Atmosphere", "Evening"],
        ["Day 2 - Waerebo to Dintor", "Morning Photography", "Sunrise"],
        [
          "Day 2 - Waerebo to Dintor",
          "Breakfast & Farewell",
          "Breakfast by village",
        ],
        ["Day 2 - Waerebo to Dintor", "Waerebo Lodge Return", "Trek Back Down"],
      ],
      overnightStopCopy
    ),
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
      "This 3-day journey is designed for travelers who want a complete Waerebo experience starting from Labuan Bajo. The trip combines waterfall, rice field scenery, coastal viewpoints, a peaceful stay at Waerebo Lodge, forest trekking, cultural experience, and an overnight stay inside Waerebo’s traditional cone-shaped house.",
    summary: [
      { icon: "people", title: "Private & Group options available" },
      {
        icon: "thumbs-up",
        title:
          "Travelers who want a complete journey from Labuan Bajo, combining nature, culture, trekking, local life, and an overnight stay in the traditional village.",
      },
      {
        icon: "calendar",
        title: "3 Days, 2 Nights (1 Night at Lodge, 1 Night at Village)",
      },
      {
        icon: "car",
        title:
          "Car transfer (Labuan Bajo/Dintor), Optional Ojek (Motorcycle taxi), and Forest Trekking",
      },
    ],
    experiences: [
      "A scenic drive from Labuan Bajo with stops at Cunca Plias Waterfall, Lembor rice fields, and Watu Weri Beach.",
      "A peaceful overnight stay at Waerebo Lodge surrounded by rice fields and mountain views.",
      "A guided scenic trek through a shaded, lush tropical forest.",
      "An official traditional welcome ceremony and an overnight stay inside the iconic cone-shaped traditional house.",
    ],
    notes: [
      "This trip includes waterfall walking, mountain trekking, a shared traditional sleeping arrangement, simple village facilities, and limited electricity in Waerebo. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, comfortable clothes for the waterfall, light rain protection, and personal essentials.",
    ],
    accommodation: [
      {
        title: "Waerebo Lodge included",
        description:
          "in this daytime itinerary please choose your room type for this trip.",
        tone: "accommodation",
        emphasis: ["Waerebo Lodge included"],
        separator: " ",
      },
      {
        title: "The traditional house has no private rooms.",
        description:
          "Guests sleep in a shared open sleeping area. Bathroom and toilet facilities are located outside the house.",
        tone: "accommodation",
        emphasis: ["shared open sleeping area."],
        separator: " ",
      },
      {
        title: "Electricity is very limited",
        description:
          "and usually available only from around 6:00 PM to 10:00 PM.",
        tone: "accommodation",
        emphasis: ["Electricity is very limited"],
        separator: " ",
      },
    ],
    meals: [
      {
        title: "Lunch, dinner & breakfast included",
        description:
          "Lunch on Day 1, dinners, breakfasts, and traditional village meals are prepared throughout the journey.",
        tone: "accent",
      },
      {
        title: "Authentic Waerebo Coffee",
        description:
          "A warm, authentic Waerebo coffee grown and roasted locally by the villagers.",
      },
    ],
    mealsNote,
    stops: buildStops(
      "3D-2N-Trip-webp",
      "Trip-Waerebo-Lodge-3D-2N",
      [
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Labuan Bajo Pickup",
          "Morning · Car",
        ],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Cunca Plias Waterfall Visit",
          "35 min · Walking",
        ],
        ["Day 1 - Labuan Bajo to Dintor", "Lembor Rice Fields", "Midday · Car"],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Watu Weri Beach Coastal Views",
          "Midday · Car",
        ],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Arrival at Waerebo Lodge",
          "Evening",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Breakfast at Waerebo Lodge",
          "20 min · Car",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Terminal to Pos 1",
          "Depends on the condition · Trek Walking",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Forest Trekking to Waerebo",
          "Depends on the condition · Trek Walking",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Arrival at Waerebo Village",
          "Trek Walking",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Village Experience",
          "Takes time until afternoon",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Lunch & Coffee Experience",
          "Takes time until afternoon",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Sacred Spring",
          "Takes time until afternoon",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Reading House Visit",
          "Takes time until afternoon",
        ],
        ["Day 2 - Dintor to Waerebo", "Evening Village Atmosphere", "Evening"],
        ["Day 3 - Waerebo to Dintor", "Morning Photography", "Sunrise"],
        [
          "Day 3 - Waerebo to Dintor",
          "Breakfast & Farewell",
          "Breakfast by village",
        ],
        ["Day 3 - Waerebo to Dintor", "Waerebo Lodge Return", "Trek Back Down"],
      ],
      { ...commonTrekCopy, ...overlandCopy }
    ),
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
      "This 4-day journey combines the cultural and mountain experience of Waerebo with a relaxing island escape to Nuca Molas. Starting from Labuan Bajo, the trip includes waterfall scenery, rice fields, coastal viewpoints, forest trekking, an overnight stay in Waerebo’s traditional cone-shaped house, a boat trip to Nuca Molas Island, and a visit to the spider web rice field viewpoint before returning to Labuan Bajo.",
    summary: [
      {
        icon: "people",
        title: "1 to 10+ Guests (Private & Group options)",
      },
      {
        icon: "thumbs-up",
        title:
          "Travelers who want to combine mountain trekking, cultural experiences, a relaxing island trip, and scenic Flores landscapes.",
      },
      {
        icon: "calendar",
        title:
          "4 Days, 3 Nights (2 Nights at Waerebo Lodge, 1 Night at the Village)",
      },
      {
        icon: "boat",
        title:
          "Car transfer (Labuan Bajo/Dintor), Optional Ojek (Motorcycle taxi), Boat Trip, and Forest Trekking",
      },
    ],
    experiences: [
      "A scenic drive from Labuan Bajo with stops at Cunca Plias Waterfall and the Lembor rice fields.",
      "A guided forest trek and an official traditional welcome ceremony at the Rumah Gendang.",
      "An overnight stay inside Waerebo's iconic cone-shaped traditional house.",
      "A relaxing boat trip to Nuca Molas Island to enjoy white sand beaches and experience a local fishing village.",
      "A trek to the spider web rice field viewpoint.",
    ],
    notes: [
      "This trip includes waterfall walking, mountain trekking, boat travel, beach activities, a shared traditional sleeping arrangement, simple village facilities, and limited electricity in Waerebo. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, comfortable clothes for waterfall and island activities, light rain protection, and personal essentials.",
    ],
    accommodation: [
      {
        title: "Waerebo Lodge included",
        description:
          "for nights 1 and 3 in this daytime itinerary, please choose your room type for this trip.",
        tone: "accent",
        emphasis: ["Waerebo Lodge included"],
        separator: " ",
      },
      {
        title: "The traditional house has no private rooms.",
        description:
          "Guests sleep in a shared open sleeping area. Bathroom and toilet facilities are located outside the house.",
        emphasis: ["shared open sleeping area."],
        separator: " ",
      },
      {
        title: "Electricity is very limited",
        description:
          "and usually available only from around 6:00 PM to 10:00 PM.",
        emphasis: ["Electricity is very limited"],
        separator: " ",
      },
    ],
    meals: [
      {
        title: "Lunch, dinner & breakfast included",
        description:
          "Traditional village meals are prepared throughout the journey.",
        tone: "accent",
      },
      {
        title: "Authentic Waerebo Coffee",
        description:
          "A warm, authentic Waerebo coffee grown and roasted locally by the villagers.",
      },
    ],
    mealsNote,
    stops: buildStops(
      "4D-3N-Trip-Island Escape-webp",
      "Trip-Waerebo-Lodge-4D-3N-Island-Escape",
      [
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Labuan Bajo Pickup",
          "Morning · Car",
        ],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Cunca Plias Waterfall Visit",
          "35 min · Walking",
        ],
        [
          "Day 1 - Labuan Bajo to Dintor",
          "Lembor Irrigation Rice Fields",
          "Midday · Car",
        ],
        ["Day 1 - Labuan Bajo to Dintor", "Watu Weri Beach", "Midday · Car"],
        ["Day 1 - Labuan Bajo to Dintor", "Waerebo Lodge Arrival", "Evening"],
        [
          "Day 2 - Dintor to Waerebo",
          "Breakfast at Waerebo Lodge",
          "20 min · Car",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Terminal to Pos 1",
          "Depends on the condition · Trek Walking",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Forest Trekking to Waerebo",
          "Depends on the condition · Trek Walking",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Arrival at Waerebo Village",
          "Trek Walking",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Village Experience",
          "Takes time until afternoon",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Lunch & Coffee Experience",
          "Takes time until afternoon",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Sacred Spring",
          "Takes time until afternoon",
        ],
        [
          "Day 2 - Dintor to Waerebo",
          "Reading House Visit",
          "Takes time until afternoon",
        ],
        ["Day 2 - Dintor to Waerebo", "Evening Village Atmosphere", "Evening"],
        ["Day 3 - Waerebo to Nuca Molas", "Morning Photography", "Sunrise"],
        [
          "Day 3 - Waerebo to Nuca Molas",
          "Breakfast & Farewell",
          "Breakfast by village",
        ],
        [
          "Day 3 - Waerebo to Nuca Molas",
          "Boat Trip to Nuca Molas",
          "Midday · Boat Trip",
        ],
        ["Day 3 - Waerebo to Nuca Molas", "Waerebo Lodge Return", "Evening"],
        ["Day 4 - Dintor to Labuan Bajo", "Breakfast", "Morning"],
        [
          "Day 4 - Dintor to Labuan Bajo",
          "Lingko Spider Web Rice Fields",
          "1 hour · Trek Walking",
        ],
        ["Day 4 - Dintor to Labuan Bajo", "Labuan Bajo", "Afternoon"],
      ],
      { ...commonTrekCopy, ...overlandCopy }
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
      "This 4-day journey is designed for travelers who want to explore more of Flores beyond Waerebo. The trip combines natural scenery, cultural landmarks, traditional landscapes, the historical Liang Bua Hobbit Cave, and an overnight cultural experience inside Waerebo’s traditional cone-shaped house.",
    summary: [
      {
        icon: "people",
        title: "1 to 10+ Guests (Private & Group options)",
      },
      {
        icon: "thumbs-up",
        title:
          "Travelers who want to explore Flores history, local culture, traditional landscapes, and Waerebo Village in one complete journey from Labuan Bajo.",
      },
      {
        icon: "calendar",
        title:
          "4 Days, 3 Nights (1 Night Ruteng, 1 Night Waerebo Lodge, 1 Night Village)",
      },
      {
        icon: "car",
        title:
          "Car transfer, Optional Ojek (Motorcycle taxi), and Forest Trekking",
      },
    ],
    experiences: [
      "A scenic drive to Ruteng with stops at Cunca Plias Waterfall and the Lembor rice fields.",
      "Visits to the unique Cancar spider web rice fields, Ruteng traditional market, and Ruteng Cathedral.",
      "In-depth storytelling about Waerebo's history, architecture, and daily life from your expert guide.",
      "An exploration of the historical Liang Bua Hobbit Cave.",
      "A guided forest trek and an official traditional welcome ceremony at the Rumah Gendang.",
      "An overnight stay inside Waerebo's iconic cone-shaped traditional house.",
    ],
    notes: [
      "This trip includes waterfall walking, cultural sightseeing, mountain trekking, a shared traditional sleeping arrangement, simple village facilities, and limited electricity in Waerebo. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, comfortable clothes for the waterfall, light rain protection, and personal essentials.",
    ],
    accommodation: [
      {
        title: "First Night will check-in and rest at a hotel in Ruteng",
        description: "after a day of exploring.",
        tone: "accent",
        emphasis: ["hotel in Ruteng"],
      },
      {
        title: "Next night will be at our Waerebo Lodge.",
        description:
          "Located in the middle of rice fields with open views toward the sea, rice fields, and the Waerebo mountains.",
        emphasis: ["Next night will be at our Waerebo Lodge."],
        separator: " ",
      },
      {
        title: "Night 3 will be at the traditional house.",
        description:
          "Guests sleep in a shared open sleeping area. Bathroom and toilet are located outside. Electricity is very limited and usually available only from around 6:00 PM to 10:00 PM.",
        emphasis: ["shared open sleeping area."],
        separator: " ",
      },
    ],
    meals: [
      {
        title: "Lunch, dinner & breakfast included",
        description:
          "Traditional village meals are prepared throughout the journey.",
        tone: "accent",
      },
      {
        title: "Authentic Waerebo Coffee",
        description:
          "A warm, authentic Waerebo coffee grown and roasted locally by the villagers.",
      },
    ],
    mealsNote,
    stops: buildStops(
      "1D-0N-Trip-Flores-webp",
      "Trip-Waerebo-Lodge-4D-3N-Flores",
      [
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Labuan Bajo Pickup",
          "Morning · Car",
          1,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Cunca Plias Waterfall Visit",
          "35 min · Walking",
          2,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Lembor Irrigation Rice Fields",
          "Midday · Car",
          3,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Lingko Spider Web Rice Fields",
          "Midday · Car",
          4,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Arrival at Ruteng",
          "Midday · Car",
          5,
        ],
        [
          "Day 1 - Labuan Bajo to Ruteng",
          "Ruteng Traditional Market",
          "Afternoon",
          6,
        ],
        ["Day 1 - Labuan Bajo to Ruteng", "Ruteng Cathedral", "Afternoon", 7],
        ["Day 2 - Ruteng to Dintor", "Morning Departure", "Morning · Car", 8],
        [
          "Day 2 - Ruteng to Dintor",
          "Hobbit Cave Liang Bua",
          "Midday · Trek Walking",
          9,
        ],
        [
          "Day 2 - Ruteng to Dintor",
          "Afternoon Transfer",
          "Afternoon · Car",
          10,
        ],
        ["Day 2 - Ruteng to Dintor", "Waerebo Lodge Arrival", "Afternoon", 11],
        [
          "Day 3 - Dintor to Waerebo",
          "Breakfast at Waerebo Lodge",
          "20 min · Car",
          12,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Terminal to Pos 1",
          "Depends on the condition · Trek Walking",
          13,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Forest Trekking to Waerebo",
          "Depends on the condition · Trek Walking",
          14,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Arrival at Waerebo Village",
          "Trek Walking",
          15,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Village Experience",
          "Takes time until afternoon",
          16,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Lunch & Coffee Experience",
          "Takes time until afternoon",
          17,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Sacred Spring",
          "Takes time until afternoon",
          18,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Reading House Visit",
          "Takes time until afternoon",
          19,
        ],
        [
          "Day 3 - Dintor to Waerebo",
          "Evening Village Atmosphere",
          "Evening",
          20,
        ],
        ["Day 4 - Waerebo to Dintor", "Morning Photography", "Morning", 21],
        [
          "Day 4 - Waerebo to Dintor",
          "Breakfast & Farewell",
          "Morning · Breakfast by the village",
          22,
        ],
        ["Day 4 - Waerebo to Dintor", "Waerebo Lodge Return", "Evening", 23],
      ],
      floresStopCopy
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
