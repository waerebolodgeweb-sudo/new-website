export interface Stop {
  id: string;
  day?: string;
  title: string;
  time?: string;
  transport?: string;
  description: string;
  image: string;
}

export interface TripProgram {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  price: string;
  heroImage: string;
  stops: Stop[];
}

const HERO = "/trip/hero-trip.jpg";

export const tripPrograms: TripProgram[] = [
  {
    id: "1-day",
    label: "1 Day Trekking",
    title: "1 Day Waerebo Trekking",
    subtitle:
      "A full-day journey from Dintor through forest and farmland to the legendary Waerebo Village, returning to the lodge the same afternoon.",
    price: "IDR 350.000",
    heroImage: HERO,
    stops: [
      {
        id: "1d-lodge-terminal",
        day: "Day 1",
        title: "Waerebo Lodge to Terminal",
        time: "Morning (After breakfast)",
        transport: "By car (20 minutes)",
        description:
          "After breakfast at Waerebo Lodge, you are picked up and driven to the trailhead terminal. The short drive winds through rice paddies and traditional Manggarai farmland — a gentle preview of the landscape ahead.",
        image: "/trip/stop-1.jpg",
      },
      {
        id: "1d-terminal-pos1",
        title: "Terminal to Pos 1",
        time: "Morning",
        transport: "Ojek (motorcycle taxi) or walking",
        description:
          "From the terminal the trek begins. You can take a local ojek up the rough track or set off on foot through community farmland. Pos 1 is a simple shelter where you can refill water and catch your breath.",
        image: "/trip/stop-2.jpg",
      },
      {
        id: "1d-pos1-forest",
        title: "Pos 1 to Forest Area",
        time: "Morning (After breakfast)",
        transport: "Trekking / Walking",
        description:
          "Beyond Pos 1 the trail enters dense primary forest. The path becomes steeper and the air cooler and misty — ancient trees arch overhead and the calls of Flores birds echo through the canopy.",
        image: "/trip/stop-3.jpg",
      },
      {
        id: "1d-waerebo",
        title: "Waerebo Village",
        time: "Afternoon (Return to Dintor)",
        transport: "Walking (for the return trip)",
        description:
          "Arrive to a traditional Manggarai welcome. Explore the seven cone-shaped Mbaru Niang houses, share authentic Flores coffee with the community, and take in the mountain panorama before walking back down to Dintor.",
        image: "/trip/stop-4.jpg",
      },
    ],
  },
  {
    id: "2d1n",
    label: "2D/1N Trekking",
    title: "2D/1N Waerebo Trekking",
    subtitle:
      "Spend a night in the heart of Waerebo. Witness the sunrise above the clouds and connect deeply with the Manggarai community.",
    price: "IDR 650.000",
    heroImage: HERO,
    stops: [
      {
        id: "2d-depart",
        day: "Day 1",
        title: "Waerebo Lodge to Terminal",
        time: "Morning (After breakfast)",
        transport: "By car (20 minutes)",
        description:
          "Depart Waerebo Lodge after breakfast and drive to the Dintor trailhead. Pack your overnight essentials — your belongings can be carried by our local porters.",
        image: "/trip/stop-1.jpg",
      },
      {
        id: "2d-full-trek",
        title: "Full Day Trek to Waerebo",
        time: "Midday",
        transport: "Trekking / Walking",
        description:
          "Trek the complete trail through Pos 1 and the forest area, arriving at Waerebo village by midday. Join the welcome ceremony and enjoy a traditional lunch prepared by the villagers.",
        image: "/trip/stop-3.jpg",
      },
      {
        id: "2d-overnight",
        day: "Night",
        title: "Overnight in Waerebo",
        time: "Evening",
        transport: "Village stay",
        description:
          "Sleep in the traditional communal Mbaru Niang alongside the community. Experience authentic Manggarai hospitality, a traditional dinner, and stargazing far from any city lights.",
        image: "/trip/stop-4.jpg",
      },
      {
        id: "2d-return",
        day: "Day 2",
        title: "Return to Waerebo Lodge",
        time: "After sunrise",
        transport: "Walking (for the return trip)",
        description:
          "After sunrise and a farewell breakfast, descend through the forest back to the terminal. Our car returns you to Waerebo Lodge for a hot shower and well-earned rest.",
        image: "/trip/stop-2.jpg",
      },
    ],
  },
  {
    id: "3d2n",
    label: "3D/2N Trekking",
    title: "3D/2N Waerebo Trekking",
    subtitle:
      "The complete Waerebo immersion with two nights in the village — daily Manggarai traditions and two mountain sunrises above the clouds.",
    price: "IDR 950.000",
    heroImage: HERO,
    stops: [
      {
        id: "3d-day1",
        day: "Day 1",
        title: "Lodge, Trek & Waerebo",
        time: "Morning to afternoon",
        transport: "By car + trekking",
        description:
          "Drive to Dintor and trek the full trail to Waerebo. Arrive in the afternoon, join the welcome ceremony, and settle into the communal Mbaru Niang for your first night.",
        image: "/trip/stop-1.jpg",
      },
      {
        id: "3d-day2",
        day: "Day 2",
        title: "Village Immersion Day",
        time: "Full day",
        transport: "On foot around the village",
        description:
          "A free day in the village — join daily life, learn traditional songke weaving, help with farming, explore the surrounding nature trails, and listen to elders share folklore. Second night in the village.",
        image: "/trip/stop-3.jpg",
      },
      {
        id: "3d-day3",
        day: "Day 3",
        title: "Return to Waerebo Lodge",
        time: "After sunrise",
        transport: "Walking (for the return trip)",
        description:
          "A final sunrise above the clouds and a farewell breakfast, then descend through the forest back to Dintor and on to Waerebo Lodge.",
        image: "/trip/stop-4.jpg",
      },
    ],
  },
  {
    id: "4d-boat",
    label: "4D/3N Waerebo & Boat Trip",
    title: "4D/3N Waerebo & Boat Trip",
    subtitle:
      "Combine the legendary Waerebo trek with an island-hopping boat trip through the waters around Labuan Bajo — culture and sea in one journey.",
    price: "IDR 1.450.000",
    heroImage: HERO,
    stops: [
      {
        id: "4db-trek",
        day: "Day 1",
        title: "Trek to Waerebo Village",
        time: "Morning to afternoon",
        transport: "By car + trekking",
        description:
          "Drive to Dintor and trek through the forest to Waerebo for the traditional welcome ceremony and an overnight stay in the village.",
        image: "/trip/stop-1.jpg",
      },
      {
        id: "4db-return",
        day: "Day 2",
        title: "Return & Transfer to the Coast",
        time: "Morning to evening",
        transport: "Walking + by car",
        description:
          "Descend from Waerebo after sunrise, then transfer toward the coast near Labuan Bajo, ready for the boat trip the following day.",
        image: "/trip/stop-2.jpg",
      },
      {
        id: "4db-boat",
        day: "Day 3",
        title: "Island Hopping Boat Trip",
        time: "Full day at sea",
        transport: "By boat",
        description:
          "Spend the day island hopping — snorkelling over coral reefs, relaxing on pink-sand beaches, and watching the sunset from the deck before returning to harbour.",
        image: "/trip/stop-3.jpg",
      },
      {
        id: "4db-depart",
        day: "Day 4",
        title: "Free Morning & Departure",
        time: "Morning",
        transport: "By car",
        description:
          "A relaxed final morning before your transfer to Labuan Bajo airport or onward to Waerebo Lodge — your Flores adventure complete.",
        image: "/trip/stop-4.jpg",
      },
    ],
  },
  {
    id: "4d-hobbit",
    label: "4D/3N Hobbit Cave & Waerebo",
    title: "4D/3N Hobbit Cave & Waerebo",
    subtitle:
      "Pair the legendary Waerebo trek with a visit to Liang Bua — the cave where the discovery of Homo floresiensis, 'The Hobbit', made global headlines.",
    price: "IDR 1.550.000",
    heroImage: HERO,
    stops: [
      {
        id: "4dh-cave",
        day: "Day 1",
        title: "Liang Bua Hobbit Cave",
        time: "Morning to afternoon",
        transport: "By car + guided cave tour",
        description:
          "Explore the famous Liang Bua cave with a knowledgeable local guide, walking through the stalactite chambers with full historical and archaeological context.",
        image: "/trip/stop-1.jpg",
      },
      {
        id: "4dh-trek",
        day: "Day 2",
        title: "Trek to Waerebo Village",
        time: "Morning to afternoon",
        transport: "By car + trekking",
        description:
          "Drive to Dintor and trek through the forest to Waerebo for the traditional welcome ceremony and an overnight stay in the communal Mbaru Niang.",
        image: "/trip/stop-2.jpg",
      },
      {
        id: "4dh-village",
        day: "Day 3",
        title: "Village Immersion Day",
        time: "Full day",
        transport: "On foot around the village",
        description:
          "A full day in Waerebo — share daily life with the community, learn traditional weaving, and watch the mist roll over the surrounding peaks. Second night in the village.",
        image: "/trip/stop-3.jpg",
      },
      {
        id: "4dh-return",
        day: "Day 4",
        title: "Return to Waerebo Lodge",
        time: "After sunrise",
        transport: "Walking (for the return trip)",
        description:
          "A final sunrise above the clouds, a farewell breakfast, then descend through the forest back to Dintor and on to Waerebo Lodge.",
        image: "/trip/stop-4.jpg",
      },
    ],
  },
];
