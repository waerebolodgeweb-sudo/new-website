"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "en" | "id";

const dict: Record<Lang, Record<string, string>> = {
  en: {
    // ── Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Our Services",
    "nav.trip": "Trip",
    "nav.lodge": "Lodge",
    "nav.restaurant": "Restaurant",
    "nav.transport": "Transport",
    "nav.testimonials": "Guest Experiences",
    "nav.gallery": "Our Gallery",
    "nav.moments": "Moments",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "nav.contact": "Contact Us",

    // ── Hero
    "hero.line1": "A lodge stop",
    "hero.line2": "before your",
    "hero.line3": "journey.",
    "hero.subtitle":
      "Located among rice terraces and ocean views, Waerebo Lodge is the final oasis before your climb to the legendary Waerebo Village.",

    // ── Purpose / About Us (home)
    "purpose.eyebrow": "About Us",
    "purpose.heading": "Basecamp with a Purpose.",
    "purpose.body1.pre": 'We built Waerebo Lodge with a simple goal "',
    "purpose.body1.bold":
      "to provide a comfortable, high-quality resting place before your ascent to the sky village",
    "purpose.body1.post": '".',
    "purpose.body2":
      "But our mission goes beyond our walls. We commit 10% of your room rate to directly support the social and cultural initiatives of the Waerebo community. By staying with us, your adventure leaves a positive, lasting mark on the highlands.",
    "purpose.cta": "Learn More",
    "purpose.mapCta": "Open Map",
    "purpose.mapCtaMobile": "Open Location Map",
    "purpose.location.title": "Waerebo Lodge",
    "purpose.location.address":
      "Flores, Desa Dintor, Satar Lenda, Satar Mese Barat, Manggarai Regency, East Nusa Tenggara",
    "purpose.village.title": "Waerebo Village",
    "purpose.village.caption":
      "Discover the iconic Waerebo houses, sustained by responsible and mindful travel choices.",

    // ── Services (home accordion)
    "services.eyebrow": "Our Services",
    "services.heading": "Everything You Need.",
    "services.headingStrong": "Everything",
    "services.headingRest": "You Need.",
    "services.body":
      "We offer more than just a stay. Enjoy warm Flores hospitality, expert local guides, and thoughtfully planned journeys so you can focus on the moments that matter",
    "services.learnMore": "Learn More",
    "services.trip.label": "Waerebo Trip",
    "services.trip.content":
      "Pick from our curated 1 to 4-day guided trekking routes. Dive deep into Manggarai culture, sleep inside the iconic Village Houses, and explore the highlands safely",
    "services.lodge.label": "Lodge",
    "services.lodge.content":
      "Recharge at our dedicated valley basecamp located in Dintor. Enjoy clean, comfortable rooms with stunning ocean views, giving you the perfect rest before your climb.",
    "services.restaurant.label": "Restaurant",
    "services.restaurant.content":
      "Savor the authentic taste of Flores with our daily home-cooked meals. From hearty breakfasts to dinner, we use fresh, local ingredients to fuel your adventure.",
    "services.transport.label": "Transport",
    "services.transport.content":
      "Travel your way across Flores with our reliable transport services. Choose a comfortable options for airport transfers, basecamp drop-offs, and custom itineraries.",

    // ── Testimonials
    "testimonials.eyebrow": "Travelers Review",
    "testimonials.heading": "Word on the Trail.",

    // ── Gallery
    "gallery.eyebrow": "Guest Experiences",
    "gallery.head1": "Hear From Our ",
    "gallery.head2": "Guest.",
    "moments.eyebrow": "Our Gallery",
    "moments.head1": "Moments ",
    "moments.head2": "Captured.",
    "gallery.photo1.title": "Smiles Before the Ascent",
    "gallery.photo1.caption":
      "Taking a moment to soak in the golden rice terraces and coastal breeze at Dintor before hiking up to the sky village",
    "gallery.photo2.title": "The Sky Village Awaits",
    "gallery.photo2.caption":
      "The iconic cone-shaped Mbaru Niang houses of Waerebo, wrapped in morning mist high above the clouds",
    "gallery.photo3.title": "Rooftops in the Clouds",
    "gallery.photo3.caption":
      "Straw-thatched rooftops of the ancestral village — a living heritage perched on the mountain ridge",

    // ── Social Media
    "social.eyebrow": "Social Media",
    "social.kompastv.heading": "Discovering Waerebo with Kompas TV",
    "social.kompastv.body":
      'Watch the breathtaking coverage of our cultural heritage and stunning mountain landscapes. Discover the magic of the "Village Above the Clouds" as featured on Kompas TV.',
    "social.metrotv.heading": "Waerebo Lodge Featured on Metro TV",
    "social.metrotv.body":
      "Explore the beauty of Flores and the iconic Mbaru Niang traditional houses through this exclusive travel documentary segment by Metro TV.",
    "social.cta": "Watch on Instagram",

    // ── Contact
    "contact.heading": "Contact Us",
    "contact.body":
      "Where the journey to the clouds begins. We handle the logistics so you can embrace the adventure",
    "contact.phone": "Phone",
    "contact.whatsapp": "Whatsapp",
    "contact.partner": "Be Our Partner Now",
    "contact.partnerCta": "Let’s work together",
    "contact.email": "Emails",
    "contact.tile.village": "Waerebo Village",
    "contact.tile.heartTitle": "The Heart of Flores",
    "contact.tile.heartCaption":
      "More than just a destination, it is a profound connection to the past.",
    "contact.tile.trekking": "Trekking Program",
    "contact.tile.exploreLodge": "Explore Lodge",
    "contact.tile.dintor": "Dintor",
    "contact.tile.dintorCaption": "– Manggarai, Flores, Indonesia",

    // ── Journeys section tabs
    "journeys.tab.trip": "Trip",
    "journeys.tab.lodge": "Lodge",
    "journeys.tab.restaurant": "Restaurant",
    "journeys.tab.transport": "Transport",
    // Headings per tab
    "journeys.trip.eyebrow": "The Adventure",
    "journeys.trip.head": "Curated Highland ",
    "journeys.trip.emph": "Journeys",
    "journeys.lodge.eyebrow": "Your Stay",
    "journeys.lodge.head": "Rest Before the ",
    "journeys.lodge.emph": "Ascent.",
    "journeys.restaurant.eyebrow": "Food & Beverage",
    "journeys.restaurant.head": "Authentic Local ",
    "journeys.restaurant.emph": "Flavors.",
    "journeys.transport.eyebrow": "Transportation",
    "journeys.transport.head": "Effortless ",
    "journeys.transport.emph": "Travel Solutions.",
    "journeys.available": "Available",
    "journeys.seeTripDetails": "See Trip Details",
    "journeys.seeLodgeDetails": "See Details",
    "journeys.discoverAllRoom": "Discover All Room",
    "journeys.seeRestaurantDetails": "See Restaurant Details",
    "journeys.seeVehicleDetails": "See Vehicle Details",
    "journeys.findAllVehicles": "Find All Available Vehicle",
    "journeys.seeTransportDetails": "See Our Transport Details",
    // Trip cards
    "journeys.trip1.title": "One Day Trek",
    "journeys.trip1.duration": "1 Day | No Overnight Stay",
    "journeys.trip1.meta0": "1 Day",
    "journeys.trip1.meta1": "Trek start at Dintor",
    "journeys.trip1.desc":
      "A one-day short trip adventure to the iconic traditional village of Waerebo.",
    "journeys.trip2.title": "Overnight Experience",
    "journeys.trip2.duration": "2 Days | 1 Night",
    "journeys.trip2.meta0": "2 Days 1 Night",
    "journeys.trip2.meta1": "Trek start at Dintor",
    "journeys.trip2.desc":
      "Experience local life and stay overnight inside the traditional cone-shaped house.",
    "journeys.trip3.title": "Nature & Culture Journey",
    "journeys.trip3.duration": "3 Days | 2 Nights",
    "journeys.trip3.meta0": "3 Days 2 Nights",
    "journeys.trip3.meta1": "Trek start at Labuan Bajo",
    "journeys.trip3.desc":
      "A complete nature, culture, and trekking journey from Labuan Bajo.",
    "journeys.trip4.title": "Waerebo & Island Escape",
    "journeys.trip4.duration": "4 Days | 3 Nights",
    "journeys.trip4.desc":
      "Mountain village trekking combined with the Nuca Molas island experience.",
    "journeys.trip5.title": "Flores Heritage & Waerebo",
    "journeys.trip5.duration": "4 Days | 3 Nights",
    "journeys.trip5.desc":
      "A journey through Flores heritage, remarkable landscapes, and Waerebo Village.",
    "journeys.exploreAllTrips": "Explore All Trip",
    "journeys.feature.trekking": "Trekking",
    "journeys.feature.lunch": "Lunch",
    "journeys.feature.villageVisit": "Village Visit",
    "journeys.feature.villageStay": "Village Stay",
    "journeys.feature.meals": "Meals",
    "journeys.feature.waterfalls": "Waterfalls",
    "journeys.feature.riceFields": "Rice Fields",
    "journeys.feature.nucaMolas": "Nuca Molas",
    "journeys.feature.cave": "Cave",
    "journeys.custom.title": "Create Your Own Itineraries!",
    "journeys.custom.desc":
      "Looking for a more flexible trip? We can help create a private itinerary based on your travel dates, group size, interests, and preferred pace.",
    "journeys.custom.whatsapp": "Custom Trip via WhatsApp",
    "journeys.custom.email": "Custom Trip via Email",
    // Lodge cards
    "journeys.lodge1.title": "Twin Room (AC)",
    "journeys.lodge1.meta0": "2 Person",
    "journeys.lodge1.meta1": "AC · Hot Shower",
    "journeys.lodge1.desc":
      "Rest comfortably before your trek in a room with two single beds, air conditioning, and a hot shower — with serene views of the rice fields and mountains just outside your window.",
    "journeys.lodge2.title": "Double Room (AC)",
    "journeys.lodge2.meta0": "2 Person",
    "journeys.lodge2.meta1": "AC · Hot Shower",
    "journeys.lodge2.desc":
      "A spacious double room with a plush bed, air conditioning, and a private hot shower. The most relaxing way to unwind after the descent, with sweeping views of the highlands.",
    "journeys.lodge3.title": "Twin Room (Fan)",
    "journeys.lodge3.meta0": "2 Person",
    "journeys.lodge3.meta1": "Fan · Shower",
    "journeys.lodge3.desc":
      "Two single beds cooled by a fan, with a private bathroom featuring a shower and traditional bucket bath. Simple, clean, and everything you need before your ascent.",
    "journeys.restaurant.desc":
      "Enjoy meals prepared directly for your adventure, including breakfast and dinner at the lodge. We also provide practical lunch boxes for your trekking journey and authentic Waerebo coffee to complete your cultural experience.",
    "journeys.restaurant.meals": "We prepare for Breakfast, Lunch, and Dinner",
    "journeys.restaurant.personalized":
      "Request personalized food, for example like vegetarian menu",
    "journeys.restaurant.included":
      "Certain meals are included with your room reservation.",
    "journeys.transport.oto.desc":
      "For larger groups or travelers looking for a more authentic local experience, we also offer the OTO COLT a traditional Flores transport vehicle that has been part of daily life in the region for generations. With capacity for up to 20 passengers, it is perfect for groups.",
    "journeys.transport.innova.desc":
      "Comfortable and private journey, we provide a Toyota Innova, ideal for couples, families, or small groups with luggage.",

    // ── Restaurant showcase
    "restaurant.subtitle":
      "Our kitchen serves fresh, home-cooked meals prepared daily from local ingredients. Every lunch and dinner includes rice, vegetables, and a seasonal protein — fresh fish when in season, or chicken and tempe otherwise. Meals are priced per person, and you are welcome to dine here even without an overnight stay.",
    "restaurant.bookLabel": "Book Restaurant",
    "restaurant.viewLabel": "View Restaurant",

    // ── Transport showcase
    "transport.subtitle":
      "We offer two vehicle options: an otopool — a diesel truck fitted with wooden bench seating in the back — and a Toyota Innova. Guided by Pak Martin himself, transport can be arranged as part of a full lodge-and-trekking package, or booked as a standalone vehicle rental for your own journey.",
    "transport.bookLabel": "Book Transport",
    "transport.viewLabel": "View Transport",
    "transport.page.heading": "Transportation Services",
    "transport.page.subtitle":
      "Waerebo Lodge offers transportation services that can be booked either as part of your trip package or as a standalone service.",
    "transport.choose.heading": "Choose Your Ride",
    "transport.choose.body1":
      "Choose a vehicle that fits your travel style and group size. For a comfortable, private journey, the Toyota Innova is ideal for couples, families, and small groups with luggage.",
    "transport.choose.body2":
      "For an authentic local experience, we offer the Oto Colt, a traditional Flores transport vehicle used for generations. Fitting up to 20 passengers, it is perfect for larger groups, community visits, and cultural adventures.",
    "transport.choose.body3":
      "All services operate on request and can be fully customized to your itinerary. We can arrange airport transfers, trips directly to Waerebo, or travel to other destinations across Flores.",
    "transport.oto.description":
      "A traditional open-air truck that is perfect for large groups (up to 20 passengers) and cultural adventures.",
    "transport.innova.description":
      "A comfortable and private journey. Ideal for couples, families, or small groups traveling with extra luggage.",

    // ── Restaurant page
    "restaurant.page.heading": "Waerebo Lodge Restaurant",
    "restaurant.page.subtitle":
      "Open to everyone-whether you're staying at the lodge, exploring Waerebo Village, or simply passing through Dintor for a peaceful, home-cooked meal.",
    "restaurant.taste.heading": "A Genuine Taste of Flores",
    "restaurant.taste.body1":
      "Every day, our kitchen prepares fresh home cooked dishes using locally sourced ingredients from the surrounding area. Meals are simple, wholesome, and full of local flavor, typically served with white or red rice, fresh vegetables, and a seasonal protein.",
    "restaurant.taste.body2":
      "Take your time, enjoy the view, and experience the slower pace of life in rural Flores. Surrounded by rice fields, mountain scenery, and fresh countryside air.",
    "restaurant.taste.body3":
      "Dining at Waerebo Lodge is about more than just food, it's about enjoying a genuine taste of Flores.",
    "restaurant.favorite.heading": "Favourite Menu",
    "restaurant.favorite.body1":
      'Guest favorite is our freshly grilled fish, with our signature "Sambal Mati Tempat" a spicy local chili relish that captures the bold flavors of Flores.',
    "restaurant.favorite.body2":
      "Depending on the season and the daily catch, we may also serve our delicious home-style free-range chicken, prepared with the same care and freshness.",
    "restaurant.daily.heading": "Your Daily Meals",
    "restaurant.daily.body":
      "Whether you are dining in or heading out, we have you covered:",
    "restaurant.daily.item1": "Served fresh for breakfast, lunch, and dinner.",
    "restaurant.daily.item2":
      "Certain meals are included with your room reservation.",
    "restaurant.menu.heading1": "Savor Our",
    "restaurant.menu.heading2": "Daily Menu",
    "restaurant.menu.eggplant.title": "Fried Eggplant",
    "restaurant.menu.eggplant.description":
      "Eggplant slices fried to a golden crisp, served as a savory crunch to complete the main dish.",
    "restaurant.menu.greens.title": "Sautéed Greens",
    "restaurant.menu.greens.description":
      "Freshly picked, seasonal vegetables stir-fried with aromatic garlic and traditional spices.",
    "restaurant.menu.fish.title": "Fresh Grilled Fish",
    "restaurant.menu.fish.description":
      "Locally sourced fish, marinated in our signature blend of island spices and grilled to perfection.",
    "restaurant.menu.chicken.title": "Homestyle Fried Chicken",
    "restaurant.menu.chicken.description":
      "Tender local chicken cooked homestyle until crisp and savory, perfect with rice and sambal.",
    "restaurant.menu.breakfast.title": "Lodge Breakfast Plate",
    "restaurant.menu.breakfast.description":
      "A comforting start to your day featuring eggs, toast, sweet local bananas, and a warm cup of Waerebo coffee.",
    "restaurant.menu.rice.title": "Red Rice",
    "restaurant.menu.rice.description":
      "Nutritious, earthy, and grown in the region. The perfect pairing for rich, local flavors.",
    "restaurant.menu.tempeh.title": "Crispy Fried Tempeh",
    "restaurant.menu.tempeh.description":
      "Golden fried tempeh with a satisfying crunch, a simple local favorite rich in flavor.",
    "restaurant.menu.bananas.title": "Fresh Local Bananas",
    "restaurant.menu.bananas.description":
      "Sweet local bananas served fresh as a light finish or easy trekking energy.",
    "restaurant.menu.friedRice.title": "Signature Fried Rice",
    "restaurant.menu.friedRice.description":
      "A comforting plate of fried rice cooked with local seasoning and simple Flores warmth.",
    "restaurant.bookNow": "Book Restaurant Now",

    // ── About page — Story
    "about.story.heading1": "The Story",
    "about.story.heading2": "Behind the Lodge",
    "about.story.body.old":
      "Sincere greetings from the heart of Flores. We are Martin and Isabela Anggo, and we built Waerebo Lodge after being inspired by community-based ecotourism in 2007. Our goal is to provide a comfortable resting place for travelers while giving back to the Waerebo community. Come and take a break with us before your ascent.",
    "about.story.martinName.old": "Mr. Martin",
    "about.story.martinBio":
      "Born in Waerebo Village in 1969, Martin has been a dedicated local guide since 2003. For more than two decades, he has introduced visitors from around the world to the culture, traditions, and natural beauty of Waerebo. As the founder of Waerebo Lodge, Martin enjoys sharing stories about village life and helping guests experience the authentic spirit of Waerebo and Flores.",

    // ── About page — Offer grid
    "about.offer.eyebrow": "Our Services",
    "about.offer.heading1": "Everything",
    "about.offer.heading2": "You Need",
    "about.offer.body":
      "We handle the logistics so you can focus on the experience. Explore our services to make your journey to the Waerebo village adventurous, safe, and unforgettable.",
    "about.offer.cta": "Contact Us",
    "about.offer.quote.heading": "The Heart of Flores",
    "about.offer.quote.body":
      "“More than just a beautiful destination, it is a profound connection to the past. Walk our trails, share our authentic coffee, and sleep under the starlit sky of our ancestral home.”",
    "about.tile.waerebo-village": "Waerebo Village",
    "about.tile.pleas-waterfall": "Pleas Waterfall",
    "about.tile.waerebo-lodge": "Waerebo Lodge",
    "about.tile.hobbit-cave": "Hobbit Cave",
    "about.tile.waerebo-house": "Waerebo House",
    "about.tile.double-bed": "Double Bed",
    "about.tile.nusa-molas": "Nusa Molas Boat Trip",
    "about.tile.restaurant": "Waerebo Restaurant",

    // ── About page — History
    "about.history.heading": "Our History",
    "about.history.body.old":
      "From a single shelter at the trailhead to a beloved basecamp — a look back at the milestones that shaped Waerebo Lodge and its bond with the community.",
    "about.history.m1.title.old": "Where It All Began",
    "about.history.m1.text.old":
      "Inspired by community-based ecotourism, Martin and Isabela laid the first stones of Waerebo Lodge — a humble resting place at the foot of the trail.",
    "about.history.m2.title.old": "Growing With the Village",
    "about.history.m2.text.old":
      "As more travelers discovered Waerebo, the lodge grew alongside the community — adding comfortable rooms, a kitchen, and trusted local guides.",
    "about.history.m3.title.old": "A Living Gateway to the Clouds",
    "about.history.m3.text.old":
      "Today the lodge welcomes guests from around the world, giving back to the Waerebo community while offering the perfect basecamp before the ascent.",

    // ── FAQ page
    "about.story.body":
      "We are Martin and Isabela Anggo, the founders of Waerebo Lodge.\n\nWhat began as a simple dream to welcome travelers visiting Waerebo grew into Waerebo Lodge in 2010, starting with just three modest guest rooms. Isabela, known for her warm hospitality and love of local cooking, has always been at the heart of the guest experience. As more travelers discovered the beauty of Waerebo, the lodge gradually expanded into the eleven-room property you see today.\n\nWaerebo Lodge was built with a simple purpose: to provide a comfortable place for travelers to rest before and after their journey to Waerebo Village, while supporting community-based tourism and creating benefits for local families.\n\nWe invite you to slow down, experience the peaceful beauty of rural Flores, enjoy genuine local hospitality, and become part of the story that continues to grow here.",
    "about.story.martinName": "Mr. Martin & Mrs. Isabela",
    "about.history.eyebrow": "Our History",
    "about.history.heading1": "The Journey of",
    "about.history.heading2": "Waerebo Lodge",
    "about.history.body":
      "The journey of Waerebo Lodge is about more than building a place to stay. Growing alongside the Waerebo community, the lodge has evolved from a humble family-run guesthouse into a gateway for travelers seeking the natural beauty of Flores, the richness of local culture, and the genuine hospitality passed down through generations.",
    "about.history.m1.title": "Where It All Began",
    "about.history.m1.text":
      "Inspired by the spirit of community-based ecotourism, Martin and Isabela founded Waerebo Lodge as a simple resting place for travelers visiting Waerebo Village. At the time, the lodge consisted of just three guest rooms and was entirely managed by the family.",
    "about.history.m2.title": "More Travelers, More Stories",
    "about.history.m2.text":
      "As word of Waerebo's beauty began to spread, more travelers made the journey to this remote mountain village. To welcome them, four additional wooden rooms were added, allowing more guests to rest comfortably before and after their trek.",
    "about.history.m3.title": "A Home Away from Home",
    "about.history.m3.text":
      "With visitor numbers continuing to grow, so did the stories, friendships, and cultural exchanges taking place at the lodge. Two more rooms were added, and Waerebo Lodge gradually became known as a gathering place for travelers from around the world seeking an authentic Flores experience.",
    "about.history.m4.title": "Building for the Future",
    "about.history.m4.text":
      "With guest numbers continuing to grow, more rooms and supporting facilities were gradually added, helping the lodge become a stronger and more reliable base for travelers.",
    "about.history.m5.title": "Comfort for Modern Travelers",
    "about.history.m5.text":
      "After years of welcoming trekkers and adventurers, we introduced two new rooms featuring air conditioning and hot showers. These additions provided extra comfort for guests while maintaining the warm and personal atmosphere that defines Waerebo Lodge.",
    "about.history.m6.title": "Growing Together with the Community",
    "about.history.m6.text":
      "The journey of Waerebo Lodge has always been closely connected to the people of Dintor and Waerebo. Together with local guides, farmers, fishermen, and village families, we continue to build a tourism experience that supports the local economy while preserving the region's culture and traditions.",
    "about.history.m7.title": "Welcoming a New Generation of Travelers",
    "about.history.m7.text":
      "As travel expectations evolved, some of our rooms were thoughtfully renovated to provide greater comfort and convenience while preserving the simple charm and relaxed atmosphere that guests have come to love.",
    "about.history.m8.title": "Thoughtful Renovations",
    "about.history.m8.text":
      "Some of our rooms were thoughtfully renovated to provide greater comfort and convenience while preserving the simple charm and relaxed atmosphere that guests have come to love.",
    "about.history.m9.title": "Preserving Tradition, Improving Comfort",
    "about.history.m9.text":
      "Our journey continues. Additional room upgrades were completed to enhance the guest experience while staying true to the values that have guided us from the beginning: genuine hospitality, simplicity, and a deep connection to nature and local culture.",
    "about.history.m10.title": "The Gateway to Waerebo",
    "about.history.m10.text":
      "Today, Waerebo Lodge welcomes guests from all over the world. More than just a place to stay, it serves as a gateway to Waerebo Village, a place where local culture, the natural beauty of Flores, and heartfelt hospitality come together to create unforgettable experiences.",

    "faq.heading1": "Got Questions?",
    "faq.heading2": "We’ve Got Answers.",
    "faq.cat.location": "Location",
    "faq.cat.rooms": "Rooms",
    "faq.cat.reservation": "Booking",
    "faq.cat.restaurant": "Restaurant",
    "faq.cat.waerebo": "Wae Rebo",
    "faq.cat.general": "General",
    "faq.nav.location": "Location and Access",
    "faq.nav.rooms": "Rooms and Facilities",
    "faq.nav.reservation": "Check-in and Reservations",
    "faq.nav.restaurant": "Restaurant and Food",
    "faq.nav.waerebo": "Journey to Wae Rebo Village",
    "faq.nav.general": "General Information",
    "faq.location.q1": "Where exactly is Waerebo Lodge located?",
    "faq.location.a1":
      "Waerebo Lodge is located in Dintor Village, West Satar Mese District, Manggarai Regency, Flores. Our lodge sits among rice fields, with views of the surrounding hills and Mules Island.",
    "faq.location.q2": "Is Waerebo Lodge inside Wae Rebo Village?",
    "faq.location.a2":
      "No. Waerebo Lodge is in Dintor Village, while Wae Rebo Village is in the mountains and can only be reached by trekking. Our lodge is a convenient place to rest before or after your journey to Wae Rebo Village.",
    "faq.location.q3": "How do I get to Waerebo Lodge from Labuan Bajo?",
    "faq.location.a3":
      "Waerebo Lodge can be reached by road from Labuan Bajo to Dintor Village. The journey usually takes around four hours, depending on road conditions, weather, and the places visited along the way.\n\nWe can arrange pickup from the airport or your hotel in Labuan Bajo.",
    "faq.location.q4":
      "Does the transportation price include the driver and fuel?",
    "faq.location.a4":
      "Yes. The transportation price includes the driver and fuel. Our vehicles are only available with a driver and cannot be rented for self-drive use.",
    "faq.location.q5": "What vehicle capacities are available?",
    "faq.location.a5":
      "A Toyota Innova can accommodate up to four guests without a guide, or three guests when accompanied by a guide. For groups, an otocolt is available with capacity for up to 20 people.\n\nCapacity may need to be adjusted based on the amount and size of the luggage.",
    "faq.location.q6": "What places can we visit on the way to the lodge?",
    "faq.location.a6":
      "On the way to Waerebo Lodge, you can visit several interesting places such as Cunca Plias, the Lembor rice fields, Dahot, and Watu Weri.\n\nThe places visited depend on your travel package and available time. Full information is available in the details for each travel package.",
    "faq.rooms.q1": "How many rooms are available at Waerebo Lodge?",
    "faq.rooms.a1":
      "Waerebo Lodge has a total of 11 rooms, with several room types and different facilities.",
    "faq.rooms.q2": "What room types are available?",
    "faq.rooms.a2":
      "We offer three room types:\n\n- Standard Room: a permanent building with tiled flooring and a fan.\n- Basic Room: a wooden-style room with a fan.\n- Deluxe Room: a permanent building with tiled flooring, air conditioning, and hot water.\n\nFull capacity and facility information is available on each room type’s page.",
    "faq.rooms.q3": "Does every room have a private bathroom?",
    "faq.rooms.a3":
      "Yes. Every room has a private bathroom. However, bathroom facilities vary depending on the room type selected.",
    "faq.rooms.q4": "Do all rooms have air conditioning and hot water?",
    "faq.rooms.a4":
      "No. Air conditioning and hot water are only available in Deluxe Rooms. Standard Rooms and Basic Rooms use fans and do not include hot water.",
    "faq.rooms.q5": "Are mosquito nets provided in the rooms?",
    "faq.rooms.a5":
      "Yes. Mosquito nets are provided for additional comfort while resting.",
    "faq.reservation.q1": "How do I make a reservation?",
    "faq.reservation.a1":
      "You can make a reservation through our WhatsApp. Please provide your arrival date, number of guests, preferred room or package, and any transportation requirements.",
    "faq.reservation.q2": "Do guests need to reserve in advance?",
    "faq.reservation.a2":
      "Advance reservations are highly recommended, especially for group visits and travel during peak season. This helps us confirm the availability of rooms, vehicles, guides, and meals.",
    "faq.reservation.q3":
      "Can transportation be booked without a travel package?",
    "faq.reservation.a3":
      "Yes. Transportation can be booked separately or as part of a Waerebo Lodge travel package.",
    "faq.reservation.q4": "Is breakfast included in the room rate?",
    "faq.reservation.a4": "Yes. Breakfast is included in the room rate.",
    "faq.restaurant.q1":
      "Is the restaurant open to visitors who are not staying overnight?",
    "faq.restaurant.a1":
      "Yes. Waerebo Lodge Restaurant is open to overnight guests and general visitors. Advance reservations are recommended, especially for group visits.",
    "faq.restaurant.q2": "Can the restaurant accommodate groups?",
    "faq.restaurant.a2":
      "Yes. Our restaurant can accommodate up to 30 people. For group visits, we recommend reserving in advance so we can prepare the space and meals properly.",
    "faq.restaurant.q3": "What food is available?",
    "faq.restaurant.a3":
      'Our restaurant serves dishes made with fresh ingredients. One of our signature dishes is grilled fish with "Mati Tempat" sambal. Other menu options depend on the ingredients available that day.',
    "faq.restaurant.q4":
      "Are vegetarian meals or special dietary options available?",
    "faq.restaurant.a4":
      "Guests with allergies, dietary restrictions, or specific dietary requirements should inform us before arrival. Our team will do its best to prepare suitable options based on ingredient availability.",
    "faq.restaurant.q5":
      "Is there a place to enjoy the sunset near the restaurant?",
    "faq.restaurant.a5":
      "Yes. There are several attractive spots around the restaurant for enjoying the sunset. Our team will be happy to show you the best location based on the weather conditions at the time.",
    "faq.waerebo.q1":
      "How long does it take to reach the trekking starting point from the lodge?",
    "faq.waerebo.a1":
      "The drive from Waerebo Lodge to the starting area for the Wae Rebo journey takes around 20 minutes. From there, guests can continue to Pos 1 on foot or by local motorcycle taxi.",
    "faq.waerebo.q2":
      "What is the elevation, and how difficult is the trek to Wae Rebo Village?",
    "faq.waerebo.a2":
      "Wae Rebo Village is located at approximately **1,200 meters above sea level**. The trek from Pos 1 is considered **moderate**, covering around **4 km** with an average travel time of **2–3 hours**, depending on each guest’s fitness and walking pace.\n\nThe trekking route is predominantly uphill and passes through mountain forest. Basic fitness and comfortable, non-slip footwear are therefore highly recommended.",
    "faq.waerebo.q3": "Does the journey require a guide?",
    "faq.waerebo.a3":
      "We strongly recommend traveling with a local guide who understands the route, terrain conditions, and visiting customs in Wae Rebo Village. Waerebo Lodge can help arrange a guide for your journey.",
    "faq.waerebo.q4":
      "What is the motorcycle taxi service mentioned in the itinerary?",
    "faq.waerebo.a4":
      "A local motorcycle taxi, or ojek, is operated by a local driver. It can be used to reach Pos 1, helping guests save time and energy before beginning the trek.\n\n_This service is optional. Guests may also choose to walk._",
    "faq.waerebo.q5":
      "Where do guests sleep when staying overnight in Wae Rebo Village?",
    "faq.waerebo.a5":
      "Guests sleep inside a traditional cone-shaped house known as a Mbaru Niang. The accommodation is communal, so the sleeping space is shared with other travelers.\n\nSimple mattresses, pillows, and blankets are provided. Bathrooms are located outside the main house and are shared.",
    "faq.general.q1":
      "Is electricity available 24 hours a day in Wae Rebo Village?",
    "faq.general.a1":
      "No. Electricity in Wae Rebo Village is generally only available from around 6:00 PM to 10:00 PM. We recommend fully charging your electronic devices before starting the trek and carrying a power bank during the journey.",
    "faq.general.q2":
      "Is electricity available 24 hours a day at Waerebo Lodge?",
    "faq.general.a2":
      "Yes. Electricity at Waerebo Lodge is available 24 hours a day.",
    "faq.general.q3":
      "Are Wi-Fi and mobile phone signals available at Waerebo Lodge?",
    "faq.general.a3":
      "Mobile phone signals around the lodge are generally unavailable or very weak. However, Waerebo Lodge provides a Starlink Wi-Fi connection for guests who need internet access.",
    "faq.general.q4": "Is luggage storage available during the trek?",
    "faq.general.a4":
      "Yes. You can leave luggage and unnecessary belongings at Waerebo Lodge to make the trek to Wae Rebo Village more comfortable. We recommend carrying only a small bag with the items needed for the journey and overnight stay in the village.",

    // ── Trips page
    "trips.chooseProgram": "Choose your Program",
    "trips.bookTrip": "Book The Trip",
    "trips.time": "Time:",
    "trips.transport": "Transport:",

    // ── Booking modal
    "booking.heading": "Please fill Booking Information",
    "booking.name": "Name",
    "booking.name.placeholder": "Input your name",
    "booking.origin": "Origin",
    "booking.origin.placeholder": "Where are you from?",
    "booking.phone": "Phone Number",
    "booking.phone.placeholder": "Input your phone number",
    "booking.email": "Email",
    "booking.email.placeholder": "Input your email address",
    "booking.program": "Trip Program",
    "booking.program.placeholder": "Select your trip type",
    "booking.date": "Trip Date",
    "booking.travelers": "Travelers",
    "booking.travelers.placeholder": "Select number of guests",
    "booking.via.whatsapp": "Book Via Whatsapp",
    "booking.via.email": "Book Via Email",

    // Trip detail page
    "trip.home": "Home",
    "trip.previousPackage": "Previous trip package",
    "trip.nextPackage": "Next trip package",
    "trip.pageSections": "Trip page sections",
    "trip.summary": "Trip Summary",
    "trip.accommodation": "Accommodation",
    "trip.meals": "Meals & Dining",
    "trip.itinerary": "Itinerary Timeline",
    "trip.itineraryDay": "Itinerary",
    "trip.whatYouGet": "What You Get",
    "trip.travelersNotes": "Travelers Notes",
    "trip.reminder": "Reminder:",
    "trip.bookWhatsapp": "Book Trip via WhatsApp",
    "trip.bookEmail": "Book Trip via Email",
    "trip.whatsappBooking": "WhatsApp Booking",
    "trip.emailBooking": "Email Booking",
    "trip.bookingActions": "Trip booking options",
    "trip.packageSelected": "{trip} selected. Trip details updated.",
    "trip.custom.heading": "Looking for a more flexible trip?",
    "trip.custom.body":
      "We can help you create a private itinerary based on your travel dates, group size, interests, and preferred pace. Whether you want to combine Waerebo with waterfalls, rice fields, local villages, island trips, or a longer Flores overland journey, we will help design the experience that suits you best.",
    "trip.custom.notes1":
      "As this is a fully customized journey, the physical requirements and available facilities will depend on your final itinerary. However, travel to Waerebo and the surrounding Flores regions generally involves outdoor activities, varying climates (from coastal heat to mountain chill), and basic village infrastructure with limited electricity.",
    "trip.custom.notes2":
      "We recommend versatile clothing, comfortable walking or trekking shoes, a flashlight, sun protection, light rain gear, and personal essentials. Our team will provide a specific, detailed packing list once your itinerary is finalized.",
    "trip.custom.whatsapp": "Create Custom Trip via WhatsApp",
    "trip.custom.email": "Create Custom Trip via Email",
    "trip.custom.feature.travelers": "Private & Group Travelers",
    "trip.custom.feature.team": "Local Expert Team",
    "trip.custom.feature.flexible": "Flexible Itinerary",
    "trip.custom.feature.lodge": "Waerebo Lodge Package",
    "trip.custom.feature.village": "Waerebo Village Overnight Stay",
    "trip.custom.feature.authentic": "Iconic & Authentic Experience",
    "trip.custom.feature.meals": "Arranged Breakfast, Meals, Dinner, etc.",
    "trip.custom.feature.accommodation": "Pick Personal Accommodation",
    "trip.message.book": "Hello Waerebo Lodge! I would like to book this trip:",
    "trip.message.custom":
      "Hello Waerebo Lodge! I would like to create a custom Flores and Waerebo itinerary.",
    "trip.email.bookSubject": "Trip booking request",
    "trip.email.customSubject": "Custom Waerebo itinerary request",

    // ── Room detail
    "room.available": "Available",
    "room.otherFacility": "Other Facility",
    "room.locations": "Locations",
    "room.review": "Review",
    "room.bookNow": "Book Room Now",
    "room.moreRooms": "More Room",
    "room.toExplore": "to Explore",
    "room.seeLodgeDetails": "See Lodge Details",
    "room.discoverMore": "Discover More",
    "room.roomOptions": "Room Options",
    "room.seeRoom": "See Room",
    "room.seeAllRoom": "See All Room",
    "room.preview": "Preview",
    "room.facility": "Room Facility",
    "room.diningArrangements": "Dining Arrangements",
    "room.breakfastIncluded": "Breakfast Included",
    "room.dinnerIncluded": "Dinner Included",
    "room.lunchNote":
      "*Lunch is not included in this package. However, it is available for an additional charge.",
    "room.latestReview": "Latest Review",
    "room.seeAll": "See all",
    "cardSpec.people": "2 People",
    "cardSpec.ac": "AC",
    "cardSpec.fan": "Fan",
    "cardSpec.shower": "Hot Water",
    "cardSpec.bed": "Bed",
    "facility.wifi": "Wifi",
    "facility.ac": "Air Conditioning",
    "facility.fan": "Fan",
    "facility.shower": "Shower",
    "facility.hotShower": "Hot Shower",
    "facility.parking": "Free Parking",
    "facility.westernToilet": "Western Toilet",
    "facility.mosquitoNet": "Mosquito Net",
    "facility.washBasin": "Wash Basin",
    "facility.waterTub": "Traditional Water Tub & Dipper",
    "facility.towel": "Towel",
    "facility.toothbrush": "Toothbrush",
    "facility.soap": "Soap",
    "facility.amenities": "Amenities",
    "facility.toilet": "Bathroom",
    "rooms.standard-twin-1.description":
      "Two single beds with a fan and private bathroom. A comfortable and practical choice for friends or trekking partners looking to rest before or after their Waerebo adventure.",
    "rooms.standard-double.description":
      "A cozy room with a double bed, fan, and private bathroom. Ideal for couples or solo travelers seeking a peaceful stay surrounded by nature.",
    "rooms.standard-twin-2.description":
      "Two single beds with a fan and private bathroom. A comfortable and practical choice for friends or trekking partners looking to rest before or after their Waerebo adventure.",
    "rooms.wooden-twin-1.description":
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    "rooms.wooden-twin-2.description":
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    "rooms.wooden-double.description":
      "A warm wooden room with a double bed, perfect for couples seeking a more authentic and relaxing Flores experience.",
    "rooms.wooden-twin-3.description":
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    "rooms.deluxe-double-1.description":
      "A spacious air-conditioned room featuring a double bed and private hot shower. Perfect for guests who appreciate extra comfort after a long journey through Flores.",
    "rooms.deluxe-twin-1.description":
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for friends and trekking companions looking to recharge before their next adventure.",
    "rooms.deluxe-double-2.description":
      "A spacious air-conditioned room featuring a double bed and private hot shower. Perfect for guests who appreciate extra comfort after a long journey through Flores.",
    "rooms.deluxe-twin-2.description":
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for friends and trekking companions looking to recharge before their next adventure.",
    "rooms.standard-twin-1.highlight.capacity": "2 Guests",
    "rooms.standard-twin-1.highlight.couples": "Perfect for trekking partners",
    "rooms.standard-twin-1.highlight.bedroom": "Twin Bed",
    "rooms.standard-twin-1.highlight.bathroom": "Private Bathroom",
    "rooms.standard-double.highlight.capacity": "2 Guests",
    "rooms.standard-double.highlight.couples": "Perfect for couples",
    "rooms.standard-double.highlight.bedroom": "Double Bed",
    "rooms.standard-double.highlight.bathroom": "Private Bathroom",
    "rooms.standard-twin-2.highlight.capacity": "2 Guests",
    "rooms.standard-twin-2.highlight.couples": "Perfect for trekking partners",
    "rooms.standard-twin-2.highlight.bedroom": "Twin Bed",
    "rooms.standard-twin-2.highlight.bathroom": "Private Bathroom",
    "rooms.wooden-twin-1.highlight.capacity": "2 Guests",
    "rooms.wooden-twin-1.highlight.couples": "Traditional Wooden Room",
    "rooms.wooden-twin-1.highlight.bedroom": "Twin Bed",
    "rooms.wooden-twin-1.highlight.bathroom": "Private Bathroom",
    "rooms.wooden-twin-2.highlight.capacity": "2 Guests",
    "rooms.wooden-twin-2.highlight.couples": "Traditional Wooden Room",
    "rooms.wooden-twin-2.highlight.bedroom": "Twin Bed",
    "rooms.wooden-twin-2.highlight.bathroom": "Private Bathroom",
    "rooms.wooden-double.highlight.capacity": "2 Guests",
    "rooms.wooden-double.highlight.couples": "Perfect for couples",
    "rooms.wooden-double.highlight.bedroom": "Double Bed",
    "rooms.wooden-double.highlight.bathroom": "Private Bathroom",
    "rooms.wooden-twin-3.highlight.capacity": "2 Guests",
    "rooms.wooden-twin-3.highlight.couples": "Traditional Wooden Room",
    "rooms.wooden-twin-3.highlight.bedroom": "Twin Bed",
    "rooms.wooden-twin-3.highlight.bathroom": "Private Bathroom",
    "rooms.deluxe-double-1.highlight.capacity": "2 Guests",
    "rooms.deluxe-double-1.highlight.couples": "Perfect for couples",
    "rooms.deluxe-double-1.highlight.bedroom": "Double Bed",
    "rooms.deluxe-double-1.highlight.bathroom":
      "Private Bathroom with Hot Shower",
    "rooms.deluxe-twin-1.highlight.capacity": "2 Guests",
    "rooms.deluxe-twin-1.highlight.couples": "Perfect for trekking partners",
    "rooms.deluxe-twin-1.highlight.bedroom": "Twin Bed",
    "rooms.deluxe-twin-1.highlight.bathroom": "Private Hot Shower",
    "rooms.deluxe-double-2.highlight.capacity": "2 Guests",
    "rooms.deluxe-double-2.highlight.couples": "Perfect for couples",
    "rooms.deluxe-double-2.highlight.bedroom": "Double Bed",
    "rooms.deluxe-double-2.highlight.bathroom":
      "Private Bathroom with Hot Shower",
    "rooms.deluxe-twin-2.highlight.capacity": "2 Guests",
    "rooms.deluxe-twin-2.highlight.couples": "Perfect for trekking partners",
    "rooms.deluxe-twin-2.highlight.bedroom": "Twin Bed",
    "rooms.deluxe-twin-2.highlight.bathroom": "Private Hot Shower",

    // ── Lodge page (room catalog)
    "lodge.eyebrow": "Enjoy Your Stay in Our",
    "lodge.heading": "Comfortable Rooms",
    "lodge.bookNow": "Book Now",
    "lodge.seeDetails": "See Details",

    // ── Legal pages (fixed chrome)
    "legal.eyebrow": "Legal",
    "legal.lastUpdated": "Last updated:",
    "legal.questions.heading": "Questions?",
    "legal.questions.body":
      "If you have any questions about this page, reach out to us at",
    "legal.questions.or": "or",
    "legal.questions.address":
      "Waerebo Lodge — Dintor, Manggarai, Flores, Indonesia.",

    // ── Footer
    "footer.follow": "Follow us for more updates & information!",
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.credits": "Photo Credits",
  },

  id: {
    // ── Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.services": "Layanan Kami",
    "nav.trip": "Trip",
    "nav.lodge": "Penginapan",
    "nav.restaurant": "Restoran",
    "nav.transport": "Transportasi",
    "nav.testimonials": "Pengalaman Tamu",
    "nav.gallery": "Galeri",
    "nav.moments": "Momen",
    "nav.reviews": "Ulasan",
    "nav.faq": "FAQ",
    "nav.contact": "Hubungi Kami",

    // ── Hero
    "hero.line1": "Tempat singgah",
    "hero.line2": "sebelum",
    "hero.line3": "perjalananmu.",
    "hero.subtitle":
      "Di antara sawah dan pemandangan laut, Waerebo Lodge adalah oasis terakhir sebelum pendakianmu menuju Desa Waerebo yang legendaris.",

    // ── Purpose / About Us (home)
    "purpose.eyebrow": "Tentang Kami",
    "purpose.heading": "Basecamp Penuh Makna.",
    "purpose.body1.pre":
      'Kami membangun Waerebo Lodge dengan satu tujuan sederhana "',
    "purpose.body1.bold":
      "menyediakan tempat istirahat yang nyaman dan berkualitas sebelum pendakianmu ke desa di atas awan",
    "purpose.body1.post": '".',
    "purpose.body2":
      "Namun misi kami melampaui dinding lodge ini. Kami mengalokasikan 10% dari tarif kamar untuk mendukung langsung inisiatif sosial dan budaya komunitas Waerebo. Dengan menginap bersama kami, petualanganmu meninggalkan jejak positif yang bermakna di pegunungan ini.",
    "purpose.cta": "Pelajari",
    "purpose.mapCta": "Buka Peta Lokasi",
    "purpose.mapCtaMobile": "Buka Peta Lokasi",
    "purpose.location.title": "Waerebo Lodge",
    "purpose.location.address":
      "Flores, Desa Dintor, Satar Lenda, Satar Mese Barat, Kabupaten Manggarai, Nusa Tenggara Timur",
    "purpose.village.title": "Desa Waerebo",
    "purpose.village.caption":
      "Temukan keunikan rumah adat Waerebo, yang terjaga oleh pilihan perjalanan yang bertanggung jawab.",

    // ── Services (home accordion)
    "services.eyebrow": "Layanan Kami",
    "services.heading": "Semua yang Anda Butuhkan.",
    "services.headingStrong": "Semua",
    "services.headingRest": "yang Anda Butuhkan.",
    "services.body":
      "Kami menawarkan lebih dari sekadar tempat menginap. Nikmati keramahan Flores, pemandu lokal berpengalaman, dan perjalanan yang dirancang dengan baik agar Anda bisa fokus pada momen yang berarti.",
    "services.learnMore": "Pelajari Lebih Lanjut",
    "services.trip.label": "Paket Trip Waerebo",
    "services.trip.content":
      "Pilih rute trekking berpemandu 1 hingga 4 hari yang telah kami susun. Selami budaya Manggarai, bermalam di rumah adat ikonik, dan jelajahi dataran tinggi dengan aman.",
    "services.lodge.label": "Penginapan",
    "services.lodge.content":
      "Beristirahatlah di basecamp lembah kami di Dintor. Nikmati kamar yang bersih dan nyaman dengan pemandangan laut yang indah, tempat terbaik sebelum pendakian Anda.",
    "services.restaurant.label": "Restoran",
    "services.restaurant.content":
      "Nikmati cita rasa Flores yang autentik melalui hidangan rumahan harian kami. Dari sarapan hangat hingga makan malam, kami memakai bahan lokal segar untuk menemani petualangan Anda.",
    "services.transport.label": "Transportasi",
    "services.transport.content":
      "Jelajahi Flores dengan layanan transportasi kami yang andal. Pilih opsi nyaman untuk transfer bandara, antar ke basecamp, dan itinerary khusus.",

    // ── Testimonials
    "testimonials.eyebrow": "Ulasan Wisatawan",
    "testimonials.heading": "Cerita dari Jalur Pendakian.",

    // ── Gallery
    "gallery.eyebrow": "Pengalaman Tamu",
    "gallery.head1": "Cerita Dari ",
    "gallery.head2": "Tamu.",
    "moments.eyebrow": "Galeri Kami",
    "moments.head1": "Momen yang ",
    "moments.head2": "Diabadikan.",
    "gallery.photo1.title": "Senyum Sebelum Mendaki",
    "gallery.photo1.caption":
      "Menikmati sejenak keindahan sawah keemasan dan angin pantai di Dintor sebelum mendaki ke desa di atas awan",
    "gallery.photo2.title": "Desa di Atas Awan",
    "gallery.photo2.caption":
      "Rumah kerucut Mbaru Niang yang ikonik di Waerebo, diselimuti kabut pagi tinggi di atas awan",
    "gallery.photo3.title": "Atap di Antara Awan",
    "gallery.photo3.caption":
      "Atap jerami desa leluhur — warisan hidup yang berdiri kokoh di punggungan gunung",

    // ── Social Media
    "social.eyebrow": "Media Sosial",
    "social.kompastv.heading": "Menjelajahi Waerebo bersama Kompas TV",
    "social.kompastv.body":
      'Saksikan liputan memukau tentang warisan budaya kami dan lanskap pegunungan yang indah. Temukan pesona "Desa di Atas Awan" seperti yang ditampilkan di Kompas TV.',
    "social.metrotv.heading": "Waerebo Lodge Tampil di Metro TV",
    "social.metrotv.body":
      "Jelajahi keindahan Flores dan rumah adat Mbaru Niang yang ikonik melalui segmen dokumenter perjalanan eksklusif dari Metro TV.",
    "social.cta": "Tonton di Instagram",

    // ── Contact
    "contact.heading": "Hubungi Kami",
    "contact.body":
      "Di sinilah perjalanan menuju awan dimulai. Kami mengurus semua logistik agar Anda bisa menikmati petualangan.",
    "contact.phone": "Telepon",
    "contact.whatsapp": "WhatsApp",
    "contact.partner": "Jadilah Mitra Kami",
    "contact.partnerCta": "Mari berkolaborasi",
    "contact.email": "Email",
    "contact.tile.village": "Desa Waerebo",
    "contact.tile.heartTitle": "Jiwa Flores",
    "contact.tile.heartCaption":
      "Lebih dari sekadar tujuan wisata, ia adalah hubungan mendalam dengan masa lalu.",
    "contact.tile.trekking": "Program Trekking",
    "contact.tile.exploreLodge": "Jelajahi Lodge",
    "contact.tile.dintor": "Dintor",
    "contact.tile.dintorCaption": "– Manggarai, Flores, Indonesia",

    // ── Journeys section tabs
    "journeys.tab.trip": "Trip",
    "journeys.tab.lodge": "Penginapan",
    "journeys.tab.restaurant": "Restoran",
    "journeys.tab.transport": "Transportasi",
    "journeys.trip.eyebrow": "Petualangan",
    "journeys.trip.head": "Perjalanan Dataran Tinggi ",
    "journeys.trip.emph": "Pilihan",
    "journeys.lodge.eyebrow": "Tempat Menginap",
    "journeys.lodge.head": "Istirahat Sebelum ",
    "journeys.lodge.emph": "Pendakian.",
    "journeys.restaurant.eyebrow": "Makanan & Minuman",
    "journeys.restaurant.head": "Cita Rasa Lokal ",
    "journeys.restaurant.emph": "Autentik.",
    "journeys.transport.eyebrow": "Transportasi",
    "journeys.transport.head": "Solusi Perjalanan ",
    "journeys.transport.emph": "Mudah.",
    "journeys.available": "Tersedia",
    "journeys.seeTripDetails": "Lihat Detail Trip",
    "journeys.seeLodgeDetails": "Lihat Detail",
    "journeys.discoverAllRoom": "Lihat Semua Kamar",
    "journeys.seeRestaurantDetails": "Lihat Detail Restoran",
    "journeys.seeVehicleDetails": "Lihat Detail Kendaraan",
    "journeys.findAllVehicles": "Lihat Semua Kendaraan",
    "journeys.seeTransportDetails": "Lihat Detail Transportasi Kami",
    // Trip cards
    "journeys.trip1.title": "Trekking Satu Hari",
    "journeys.trip1.duration": "1 Hari | Tanpa Menginap",
    "journeys.trip1.meta0": "1 Hari",
    "journeys.trip1.meta1": "Trek mulai dari Dintor",
    "journeys.trip1.desc":
      "Petualangan singkat satu hari menuju desa adat Waerebo yang ikonik.",
    "journeys.trip2.title": "Pengalaman Menginap",
    "journeys.trip2.duration": "2 Hari | 1 Malam",
    "journeys.trip2.meta0": "2 Hari 1 Malam",
    "journeys.trip2.meta1": "Trek mulai dari Dintor",
    "journeys.trip2.desc":
      "Rasakan kehidupan lokal dan bermalam di dalam rumah adat tradisional berbentuk kerucut.",
    "journeys.trip3.title": "Perjalanan Alam & Budaya",
    "journeys.trip3.duration": "3 Hari | 2 Malam",
    "journeys.trip3.meta0": "3 Hari 2 Malam",
    "journeys.trip3.meta1": "Trek mulai dari Labuan Bajo",
    "journeys.trip3.desc":
      "Perjalanan alam, budaya, dan trekking yang lengkap dari Labuan Bajo.",
    "journeys.trip4.title": "Waerebo & Jelajah Pulau",
    "journeys.trip4.duration": "4 Hari | 3 Malam",
    "journeys.trip4.desc":
      "Trekking desa pegunungan yang dipadukan dengan pengalaman di Pulau Nuca Molas.",
    "journeys.trip5.title": "Warisan Flores & Waerebo",
    "journeys.trip5.duration": "4 Hari | 3 Malam",
    "journeys.trip5.desc":
      "Perjalanan melalui warisan Flores, bentang alam yang menakjubkan, dan Desa Waerebo.",
    "journeys.exploreAllTrips": "Jelajahi Semua Trip",
    "journeys.feature.trekking": "Trekking",
    "journeys.feature.lunch": "Makan Siang",
    "journeys.feature.villageVisit": "Kunjungan Desa",
    "journeys.feature.villageStay": "Menginap di Desa",
    "journeys.feature.meals": "Makanan",
    "journeys.feature.waterfalls": "Air Terjun",
    "journeys.feature.riceFields": "Sawah",
    "journeys.feature.nucaMolas": "Nuca Molas",
    "journeys.feature.cave": "Gua",
    "journeys.custom.title": "Buat Itinerary Anda Sendiri!",
    "journeys.custom.desc":
      "Mencari trip yang lebih fleksibel? Kami dapat membantu membuat itinerary privat berdasarkan tanggal perjalanan, jumlah peserta, minat, dan tempo yang Anda inginkan.",
    "journeys.custom.whatsapp": "Trip Kustom via WhatsApp",
    "journeys.custom.email": "Trip Kustom via Email",
    // Lodge cards
    "journeys.lodge1.title": "Kamar Twin (AC)",
    "journeys.lodge1.meta0": "2 Orang",
    "journeys.lodge1.meta1": "AC · Shower Air Panas",
    "journeys.lodge1.desc":
      "Istirahat nyaman sebelum trek di kamar dengan dua kasur tunggal, AC, dan shower air panas — dengan pemandangan sawah dan pegunungan yang menenangkan di luar jendela.",
    "journeys.lodge2.title": "Kamar Double (AC)",
    "journeys.lodge2.meta0": "2 Orang",
    "journeys.lodge2.meta1": "AC · Shower Air Panas",
    "journeys.lodge2.desc":
      "Kamar double luas dengan kasur empuk, AC, dan shower air panas pribadi. Cara paling menenangkan untuk bersantai setelah turun gunung, dengan pemandangan pegunungan yang lapang.",
    "journeys.lodge3.title": "Kamar Twin (Kipas)",
    "journeys.lodge3.meta0": "2 Orang",
    "journeys.lodge3.meta1": "Kipas · Shower",
    "journeys.lodge3.desc":
      "Dua kasur tunggal dengan kipas angin dan kamar mandi pribadi — shower dan bak mandi tradisional. Sederhana, bersih, dan semua yang Anda butuhkan sebelum pendakian.",
    "journeys.restaurant.desc":
      "Nikmati hidangan yang disiapkan langsung untuk perjalanan Anda, termasuk sarapan dan makan malam di lodge. Kami juga menyediakan kotak makan siang praktis untuk trekking dan kopi Waerebo autentik untuk melengkapi pengalaman budaya Anda.",
    "journeys.restaurant.meals":
      "Kami menyiapkan sarapan, makan siang, dan makan malam",
    "journeys.restaurant.personalized":
      "Minta menu khusus, misalnya menu vegetarian",
    "journeys.restaurant.included":
      "Hidangan tertentu sudah termasuk dalam reservasi kamar Anda.",
    "journeys.transport.oto.desc":
      "Untuk rombongan besar atau wisatawan yang ingin pengalaman lokal yang lebih autentik, kami menyediakan OTO COLT, kendaraan tradisional Flores yang telah menjadi bagian dari kehidupan sehari-hari di wilayah ini. Dengan kapasitas hingga 20 penumpang, kendaraan ini cocok untuk rombongan.",
    "journeys.transport.innova.desc":
      "Perjalanan yang nyaman dan privat dengan Toyota Innova, ideal untuk pasangan, keluarga, atau grup kecil dengan bagasi.",

    // ── Restaurant showcase
    "restaurant.subtitle":
      "Dapur kami menyajikan makanan rumahan segar yang dimasak setiap hari dari bahan lokal. Setiap makan siang dan malam selalu ada nasi, sayur, dan lauk bergizi — ikan segar saat musimnya, atau ayam dan tempe di luar musim. Harga dihitung per orang, dan Anda tetap bisa makan di sini meski tidak menginap.",
    "restaurant.bookLabel": "Pesan Restoran",
    "restaurant.viewLabel": "Lihat Restoran",

    // ── Transport showcase
    "transport.subtitle":
      "Kami menyediakan dua pilihan kendaraan: otopool — truk diesel dengan kursi kayu di bagian belakang — dan Toyota Innova. Dipandu langsung oleh Pak Martin, transportasi bisa dipadukan dalam paket lodge dan trekking, atau disewa tersendiri tanpa paket apapun.",
    "transport.bookLabel": "Pesan Transportasi",
    "transport.viewLabel": "Lihat Transportasi",
    "transport.page.heading": "Layanan Transportasi",
    "transport.page.subtitle":
      "Waerebo Lodge menyediakan layanan transportasi yang dapat dipesan sebagai bagian dari paket perjalanan Anda atau sebagai layanan terpisah.",
    "transport.choose.heading": "Pilih Kendaraan Anda",
    "transport.choose.body1":
      "Pilih kendaraan yang sesuai dengan gaya perjalanan dan ukuran rombongan Anda. Untuk perjalanan yang nyaman dan privat, Toyota Innova cocok untuk pasangan, keluarga, dan grup kecil dengan bagasi.",
    "transport.choose.body2":
      "Untuk pengalaman lokal yang autentik, kami menyediakan Oto Colt, kendaraan tradisional Flores yang telah digunakan selama beberapa generasi. Dengan kapasitas hingga 20 penumpang, kendaraan ini cocok untuk rombongan besar, kunjungan komunitas, dan perjalanan budaya.",
    "transport.choose.body3":
      "Semua layanan beroperasi berdasarkan permintaan dan dapat disesuaikan dengan itinerary Anda. Kami dapat mengatur transfer bandara, perjalanan langsung ke Waerebo, atau perjalanan ke destinasi lain di Flores.",
    "transport.oto.description":
      "Truk terbuka tradisional yang cocok untuk rombongan besar hingga 20 penumpang dan perjalanan budaya.",
    "transport.innova.description":
      "Perjalanan yang nyaman dan privat. Ideal untuk pasangan, keluarga, atau grup kecil yang membawa bagasi tambahan.",

    // ── Restaurant page
    "restaurant.page.heading": "Restoran Waerebo Lodge",
    "restaurant.page.subtitle":
      "Terbuka untuk semua orang, baik Anda menginap di lodge, menjelajahi Desa Waerebo, atau hanya singgah di Dintor untuk menikmati makanan rumahan yang tenang.",
    "restaurant.taste.heading": "Cita Rasa Flores yang Autentik",
    "restaurant.taste.body1":
      "Setiap hari, dapur kami menyiapkan hidangan rumahan segar menggunakan bahan lokal dari sekitar lodge. Makanannya sederhana, sehat, dan penuh cita rasa lokal, biasanya disajikan dengan nasi putih atau nasi merah, sayuran segar, dan lauk musiman.",
    "restaurant.taste.body2":
      "Nikmati waktu Anda, pemandangan sekitar, dan ritme hidup pedesaan Flores yang lebih tenang, dikelilingi sawah, pegunungan, dan udara segar.",
    "restaurant.taste.body3":
      "Makan di Waerebo Lodge bukan hanya tentang makanan, tetapi tentang menikmati cita rasa Flores yang sesungguhnya.",
    "restaurant.favorite.heading": "Menu Favorit",
    "restaurant.favorite.body1":
      'Favorit tamu adalah ikan bakar segar dengan sambal khas kami, "Sambal Mati Tempat", sambal lokal pedas yang menangkap rasa kuat khas Flores.',
    "restaurant.favorite.body2":
      "Tergantung musim dan hasil tangkapan harian, kami juga dapat menyajikan ayam kampung rumahan yang dimasak dengan perhatian dan kesegaran yang sama.",
    "restaurant.daily.heading": "Makanan Harian Anda",
    "restaurant.daily.body":
      "Baik Anda makan di tempat atau bersiap untuk perjalanan, kami menyediakan:",
    "restaurant.daily.item1":
      "Disajikan segar untuk sarapan, makan siang, dan makan malam.",
    "restaurant.daily.item2":
      "Beberapa makanan sudah termasuk dalam reservasi kamar Anda.",
    "restaurant.menu.heading1": "Nikmati",
    "restaurant.menu.heading2": "Menu Harian Kami",
    "restaurant.menu.eggplant.title": "Terong Goreng",
    "restaurant.menu.eggplant.description":
      "Irisan terong yang digoreng hingga renyah keemasan, menjadi pelengkap gurih untuk hidangan utama.",
    "restaurant.menu.greens.title": "Sayur Tumis",
    "restaurant.menu.greens.description":
      "Sayuran musiman segar yang ditumis dengan bawang putih aromatik dan bumbu tradisional.",
    "restaurant.menu.fish.title": "Ikan Bakar Segar",
    "restaurant.menu.fish.description":
      "Ikan lokal yang dimarinasi dengan racikan rempah pulau khas kami, lalu dibakar hingga matang sempurna.",
    "restaurant.menu.chicken.title": "Ayam Goreng Rumahan",
    "restaurant.menu.chicken.description":
      "Ayam lokal yang dimasak rumahan hingga gurih dan renyah, cocok disantap dengan nasi dan sambal.",
    "restaurant.menu.breakfast.title": "Sarapan Lodge",
    "restaurant.menu.breakfast.description":
      "Awal hari yang hangat dengan telur, roti panggang, pisang lokal manis, dan secangkir kopi Waerebo.",
    "restaurant.menu.rice.title": "Nasi Merah",
    "restaurant.menu.rice.description":
      "Bergizi, bercita rasa alami, dan tumbuh di wilayah ini. Pasangan sempurna untuk rasa lokal yang kaya.",
    "restaurant.menu.tempeh.title": "Tempe Goreng Renyah",
    "restaurant.menu.tempeh.description":
      "Tempe goreng keemasan dengan tekstur renyah, lauk lokal sederhana yang kaya rasa.",
    "restaurant.menu.bananas.title": "Pisang Lokal Segar",
    "restaurant.menu.bananas.description":
      "Pisang lokal manis yang disajikan segar sebagai penutup ringan atau energi sebelum trekking.",
    "restaurant.menu.friedRice.title": "Nasi Goreng Khas",
    "restaurant.menu.friedRice.description":
      "Sepiring nasi goreng hangat dengan bumbu lokal dan cita rasa rumahan khas Flores.",
    "restaurant.bookNow": "Pesan Restoran Sekarang",

    // ── About page — Story
    "about.story.heading1": "Kisah di Balik",
    "about.story.heading2": "Lodge Ini",
    "about.story.body.old":
      "Salam tulus dari jantung Flores. Kami adalah Martin dan Isabela Anggo, yang membangun Waerebo Lodge terinspirasi dari ekowisata berbasis komunitas pada tahun 2007. Tujuan kami adalah menyediakan tempat istirahat yang nyaman bagi wisatawan sambil memberi kembali kepada komunitas Waerebo. Singgahlah bersama kami sebelum pendakianmu.",
    "about.story.martinName.old": "Pak Martin",
    "about.story.martinBio":
      "Lahir di Desa Waerebo pada tahun 1969, Martin telah menjadi pemandu lokal yang berdedikasi sejak 2003. Selama lebih dari dua dekade, ia memperkenalkan budaya, tradisi, dan keindahan alam Waerebo kepada pengunjung dari seluruh dunia. Sebagai pendiri Waerebo Lodge, Martin senang berbagi cerita tentang kehidupan desa dan membantu tamu merasakan semangat autentik Waerebo dan Flores.",

    // ── About page — Offer grid
    "about.offer.eyebrow": "Layanan Kami",
    "about.offer.heading1": "Semua",
    "about.offer.heading2": "yang Anda Butuhkan",
    "about.offer.body":
      "Kami mengurus semua logistik agar Anda bisa fokus pada pengalaman. Jelajahi layanan kami untuk menjadikan perjalanan ke Desa Waerebo penuh petualangan, aman, dan tak terlupakan.",
    "about.offer.cta": "Hubungi Kami",
    "about.offer.quote.heading": "Jiwa Flores",
    "about.offer.quote.body":
      "“Lebih dari sekadar tujuan wisata yang indah, ia adalah hubungan mendalam dengan masa lalu. Jalani jalur kami, nikmati kopi asli kami, dan tidurlah di bawah langit berbintang rumah leluhur kami.”",
    "about.tile.waerebo-village": "Desa Waerebo",
    "about.tile.pleas-waterfall": "Air Terjun Pleas",
    "about.tile.waerebo-lodge": "Waerebo Lodge",
    "about.tile.hobbit-cave": "Gua Hobbit",
    "about.tile.waerebo-house": "Rumah Waerebo",
    "about.tile.double-bed": "Kamar Double",
    "about.tile.nusa-molas": "Trip Kapal Nusa Molas",
    "about.tile.restaurant": "Restoran Waerebo",

    // ── About page — History
    "about.history.heading": "Sejarah Kami",
    "about.history.body.old":
      "Dari sebuah tempat singgah kecil di awal jalur hingga menjadi basecamp yang dicintai — kilas balik tonggak-tonggak yang membentuk Waerebo Lodge dan keterikatan kami dengan komunitas.",
    "about.history.m1.title.old": "Di Sinilah Segalanya Bermula",
    "about.history.m1.text.old":
      "Terinspirasi oleh ekowisata berbasis komunitas, Martin dan Isabela meletakkan batu pertama Waerebo Lodge — tempat istirahat sederhana di kaki jalur pendakian.",
    "about.history.m2.title.old": "Tumbuh Bersama Desa",
    "about.history.m2.text.old":
      "Seiring semakin banyak wisatawan yang menemukan Waerebo, lodge ini tumbuh bersama komunitas — menambah kamar-kamar nyaman, dapur, dan pemandu lokal terpercaya.",
    "about.history.m3.title.old": "Gerbang Hidup Menuju Awan",
    "about.history.m3.text.old":
      "Kini lodge ini menyambut tamu dari seluruh dunia, memberi kembali kepada komunitas Waerebo sambil menawarkan basecamp terbaik sebelum pendakian.",

    // ── FAQ page
    "about.story.body":
      "Kami adalah Martin dan Isabela Anggo, pendiri Waerebo Lodge.\n\nBerawal dari mimpi sederhana untuk menyambut wisatawan yang berkunjung ke Waerebo, Waerebo Lodge berdiri pada tahun 2010 dengan hanya tiga kamar tamu sederhana. Isabela, yang dikenal dengan keramahan hangat dan kecintaannya pada masakan lokal, selalu menjadi bagian penting dari pengalaman para tamu. Seiring semakin banyak wisatawan menemukan keindahan Waerebo, lodge ini perlahan berkembang menjadi properti sebelas kamar seperti yang Anda lihat hari ini.\n\nWaerebo Lodge dibangun dengan tujuan sederhana: menyediakan tempat yang nyaman bagi wisatawan untuk beristirahat sebelum dan sesudah perjalanan mereka ke Desa Waerebo, sambil mendukung pariwisata berbasis komunitas dan menciptakan manfaat bagi keluarga lokal.\n\nKami mengundang Anda untuk melambat sejenak, menikmati keindahan Flores yang damai, merasakan keramahan lokal yang tulus, dan menjadi bagian dari cerita yang terus tumbuh di sini.",
    "about.story.martinName": "Pak Martin & Ibu Isabela",
    "about.history.eyebrow": "Sejarah Kami",
    "about.history.heading1": "Perjalanan",
    "about.history.heading2": "Waerebo Lodge",
    "about.history.body":
      "Perjalanan Waerebo Lodge bukan hanya tentang membangun tempat menginap. Tumbuh bersama komunitas Waerebo, lodge ini berkembang dari penginapan keluarga yang sederhana menjadi gerbang bagi wisatawan yang mencari keindahan alam Flores, kekayaan budaya lokal, dan keramahan tulus yang diwariskan lintas generasi.",
    "about.history.m1.title": "Di Sinilah Segalanya Bermula",
    "about.history.m1.text":
      "Terinspirasi oleh semangat ekowisata berbasis komunitas, Martin dan Isabela mendirikan Waerebo Lodge sebagai tempat istirahat sederhana bagi wisatawan yang mengunjungi Desa Waerebo. Saat itu lodge hanya memiliki tiga kamar dan dikelola sepenuhnya oleh keluarga.",
    "about.history.m2.title": "Lebih Banyak Tamu, Lebih Banyak Cerita",
    "about.history.m2.text":
      "Ketika keindahan Waerebo mulai dikenal lebih luas, semakin banyak wisatawan melakukan perjalanan menuju desa pegunungan ini. Untuk menyambut mereka, empat kamar kayu tambahan dibangun agar lebih banyak tamu dapat beristirahat dengan nyaman sebelum dan sesudah trekking.",
    "about.history.m3.title": "Rumah Kedua yang Hangat",
    "about.history.m3.text":
      "Seiring jumlah pengunjung terus bertambah, begitu pula cerita, persahabatan, dan pertukaran budaya yang terjadi di lodge. Dua kamar lagi ditambahkan, dan Waerebo Lodge perlahan dikenal sebagai tempat berkumpul wisatawan dari berbagai negara yang mencari pengalaman Flores yang autentik.",
    "about.history.m4.title": "Membangun untuk Masa Depan",
    "about.history.m4.text":
      "Seiring jumlah tamu terus bertambah, kamar dan fasilitas pendukung ditambahkan secara bertahap, membantu lodge menjadi basecamp yang lebih kuat dan lebih nyaman bagi wisatawan.",
    "about.history.m5.title": "Kenyamanan untuk Wisatawan Modern",
    "about.history.m5.text":
      "Setelah bertahun-tahun menyambut para trekker dan petualang, kami menambahkan dua kamar baru dengan fasilitas AC dan air panas. Tambahan ini memberi kenyamanan lebih bagi tamu, sambil tetap menjaga suasana hangat dan personal khas Waerebo Lodge.",
    "about.history.m6.title": "Tumbuh Bersama Komunitas",
    "about.history.m6.text":
      "Perjalanan Waerebo Lodge selalu terhubung erat dengan masyarakat Dintor dan Waerebo. Bersama pemandu lokal, petani, nelayan, dan keluarga desa, kami terus membangun pengalaman wisata yang mendukung ekonomi lokal sekaligus menjaga budaya dan tradisi daerah.",
    "about.history.m7.title": "Menyambut Generasi Baru Wisatawan",
    "about.history.m7.text":
      "Seiring berubahnya harapan wisatawan, beberapa kamar kami direnovasi dengan cermat untuk menghadirkan kenyamanan dan kemudahan yang lebih baik, tanpa menghilangkan kesederhanaan dan suasana santai yang disukai para tamu.",
    "about.history.m8.title": "Renovasi yang Penuh Pertimbangan",
    "about.history.m8.text":
      "Beberapa kamar direnovasi secara bertahap untuk menghadirkan kenyamanan dan kemudahan yang lebih baik, tanpa menghilangkan kesederhanaan serta suasana santai yang disukai para tamu.",
    "about.history.m9.title": "Menjaga Tradisi, Meningkatkan Kenyamanan",
    "about.history.m9.text":
      "Perjalanan kami terus berlanjut. Peningkatan kamar tambahan dilakukan untuk memperkaya pengalaman tamu sambil tetap setia pada nilai-nilai yang membimbing kami sejak awal: keramahan yang tulus, kesederhanaan, dan hubungan mendalam dengan alam serta budaya lokal.",
    "about.history.m10.title": "Gerbang Menuju Waerebo",
    "about.history.m10.text":
      "Hari ini, Waerebo Lodge menyambut tamu dari berbagai belahan dunia. Lebih dari sekadar tempat menginap, lodge ini menjadi gerbang menuju Desa Waerebo, tempat budaya lokal, keindahan alam Flores, dan keramahan sepenuh hati berpadu menciptakan pengalaman yang tak terlupakan.",

    "faq.heading1": "Punya Pertanyaan?",
    "faq.heading2": "Kami Punya Jawabannya.",
    "faq.cat.location": "Lokasi",
    "faq.cat.rooms": "Kamar",
    "faq.cat.reservation": "Reservasi",
    "faq.cat.restaurant": "Restoran",
    "faq.cat.waerebo": "Wae Rebo",
    "faq.cat.general": "Umum",
    "faq.nav.location": "Lokasi dan Akses",
    "faq.nav.rooms": "Kamar dan Fasilitas",
    "faq.nav.reservation": "Check-in dan Reservasi",
    "faq.nav.restaurant": "Restoran dan Makanan",
    "faq.nav.waerebo": "Perjalanan ke Kampung Wae Rebo",
    "faq.nav.general": "Informasi Umum",
    "faq.location.q1": "Di mana tepatnya Waerebo Lodge berada?",
    "faq.location.a1":
      "Waerebo Lodge berlokasi di Desa Dintor, Kecamatan Satar Mese Barat, Kabupaten Manggarai, Flores. Lodge kami berada di tengah persawahan, dengan pemandangan perbukitan dan Pulau Mules.",
    "faq.location.q2": "Apakah Waerebo Lodge berada di dalam Kampung Wae Rebo?",
    "faq.location.a2":
      "Tidak. Waerebo Lodge berada di Desa Dintor, sedangkan Kampung Wae Rebo berada di kawasan pegunungan dan hanya dapat dicapai dengan trekking. Lodge kami cocok sebagai tempat beristirahat sebelum atau setelah perjalanan ke Kampung Wae Rebo.",
    "faq.location.q3": "Bagaimana cara menuju Waerebo Lodge dari Labuan Bajo?",
    "faq.location.a3":
      "Waerebo Lodge dapat dicapai melalui perjalanan darat dari Labuan Bajo menuju Desa Dintor. Perjalanan biasanya memerlukan waktu sekitar empat jam, tergantung kondisi jalan, cuaca, dan tempat yang dikunjungi selama perjalanan.\n\nKami dapat mengatur penjemputan dari bandara atau hotel di Labuan Bajo.",
    "faq.location.q4":
      "Apakah harga transportasi sudah termasuk pengemudi dan bahan bakar?",
    "faq.location.a4":
      "Ya. Harga transportasi sudah termasuk pengemudi dan bahan bakar. Kendaraan kami hanya tersedia dengan pengemudi dan tidak disewakan secara lepas kunci.",
    "faq.location.q5": "Berapa kapasitas kendaraan yang tersedia?",
    "faq.location.a5":
      "Toyota Innova dapat menampung maksimal empat tamu tanpa pemandu, atau tiga tamu apabila perjalanan didampingi pemandu. Untuk rombongan, tersedia otocolt dengan kapasitas hingga 20 orang.\n\nKapasitas dapat disesuaikan kembali berdasarkan jumlah dan ukuran bagasi.",
    "faq.location.q6":
      "Tempat apa saja yang dapat dikunjungi dalam perjalanan menuju lodge?",
    "faq.location.a6":
      "Dalam perjalanan menuju Waerebo Lodge, Anda dapat mengunjungi beberapa tempat menarik seperti Cunca Plias, persawahan Lembor, Dahot, dan Watu Weri.\n\nTempat yang dikunjungi bergantung pada paket perjalanan dan waktu yang tersedia. Informasi lengkap dapat dilihat pada rincian masing-masing paket perjalanan.",
    "faq.rooms.q1": "Berapa jumlah kamar yang tersedia di Waerebo Lodge?",
    "faq.rooms.a1":
      "Waerebo Lodge memiliki total 11 kamar dengan beberapa pilihan tipe dan fasilitas yang berbeda.",
    "faq.rooms.q2": "Apa saja tipe kamar yang tersedia?",
    "faq.rooms.a2":
      "Kami menyediakan tiga tipe kamar:\n\n- Standard Room: bangunan permanen, lantai keramik, dan kipas angin.\n- Basic Room: kamar bergaya kayu dengan kipas angin.\n- Deluxe Room: bangunan permanen, lantai keramik, AC, dan air panas.\n\nInformasi lengkap mengenai kapasitas dan fasilitas dapat dilihat pada halaman masing-masing tipe kamar.",
    "faq.rooms.q3": "Apakah setiap kamar memiliki kamar mandi pribadi?",
    "faq.rooms.a3":
      "Ya. Setiap kamar memiliki kamar mandi pribadi. Namun, fasilitas kamar mandi dapat berbeda sesuai tipe kamar yang dipilih.",
    "faq.rooms.q4": "Apakah semua kamar memiliki AC dan air panas?",
    "faq.rooms.a4":
      "Tidak. AC dan air panas hanya tersedia di Deluxe Room. Standard Room dan Basic Room menggunakan kipas angin serta tidak dilengkapi air panas.",
    "faq.rooms.q5": "Apakah tersedia kelambu di dalam kamar?",
    "faq.rooms.a5":
      "Ya. Kelambu tersedia untuk memberikan kenyamanan tambahan saat beristirahat.",
    "faq.reservation.q1": "Bagaimana cara melakukan reservasi?",
    "faq.reservation.a1":
      "Reservasi dapat dilakukan melalui WhatsApp kami. Mohon informasikan tanggal kedatangan, jumlah tamu, pilihan kamar atau paket, serta kebutuhan transportasi.",
    "faq.reservation.q2":
      "Apakah tamu perlu melakukan reservasi terlebih dahulu?",
    "faq.reservation.a2":
      "Reservasi sebelumnya sangat disarankan, terutama untuk kunjungan rombongan dan perjalanan pada musim ramai. Hal ini membantu kami memastikan ketersediaan kamar, kendaraan, pemandu, dan makanan.",
    "faq.reservation.q3":
      "Apakah transportasi dapat dipesan tanpa mengambil paket perjalanan?",
    "faq.reservation.a3":
      "Ya. Transportasi dapat dipesan secara terpisah maupun sebagai bagian dari paket perjalanan Waerebo Lodge.",
    "faq.reservation.q4": "Apakah sarapan sudah termasuk dalam harga kamar?",
    "faq.reservation.a4": "Ya. Sarapan sudah termasuk dalam harga menginap.",
    "faq.restaurant.q1":
      "Apakah restoran terbuka untuk pengunjung yang tidak menginap?",
    "faq.restaurant.a1":
      "Ya. Restoran Waerebo Lodge terbuka untuk tamu yang menginap maupun pengunjung umum. Reservasi sebelumnya disarankan, khususnya untuk kunjungan rombongan.",
    "faq.restaurant.q2": "Apakah restoran dapat menerima rombongan?",
    "faq.restaurant.a2":
      "Ya. Restoran kami dapat menampung hingga 30 orang. Untuk kunjungan rombongan, kami menyarankan reservasi terlebih dahulu agar kami dapat mempersiapkan tempat dan hidangan dengan baik.",
    "faq.restaurant.q3": "Makanan apa saja yang tersedia?",
    "faq.restaurant.a3":
      'Restoran kami menyajikan hidangan yang dibuat menggunakan bahan-bahan segar. Salah satu menu khas kami adalah ikan bakar dengan sambal "Mati Tempat". Pilihan menu lainnya bergantung pada ketersediaan bahan pada hari tersebut.',
    "faq.restaurant.q4":
      "Apakah tersedia makanan vegetarian atau untuk kebutuhan diet tertentu?",
    "faq.restaurant.a4":
      "Tamu yang memiliki alergi, pantangan makanan, atau kebutuhan diet tertentu disarankan menginformasikannya sebelum kedatangan. Tim kami akan berusaha menyiapkan pilihan yang sesuai berdasarkan ketersediaan bahan.",
    "faq.restaurant.q5":
      "Apakah ada tempat untuk menikmati matahari terbenam di sekitar restoran?",
    "faq.restaurant.a5":
      "Ya. Terdapat beberapa spot menarik di sekitar restoran untuk menikmati matahari terbenam. Tim kami dengan senang hati akan membantu menunjukkan lokasi terbaik sesuai kondisi cuaca saat itu.",
    "faq.waerebo.q1":
      "Berapa lama perjalanan dari lodge menuju titik awal trekking?",
    "faq.waerebo.a1":
      "Perjalanan dari Waerebo Lodge menuju area awal perjalanan ke Kampung Wae Rebo memerlukan waktu sekitar 20 menit dengan kendaraan. Setelah itu, tamu dapat melanjutkan perjalanan menuju Pos 1 dengan berjalan kaki atau menggunakan ojek lokal.",
    "faq.waerebo.q2":
      "Berapa ketinggian dan seberapa sulit trekking menuju Kampung Wae Rebo?",
    "faq.waerebo.a2":
      "Kampung Wae Rebo berada di ketinggian sekitar **1.200 meter di atas permukaan laut (mdpl)**. Trekking dari Pos 1 tergolong **tingkat kesulitan sedang**, dengan jarak sekitar **4 km** dan waktu tempuh rata-rata **2–3 jam**, tergantung kondisi fisik serta kecepatan berjalan masing-masing.\n\nJalur trekking didominasi tanjakan dan melewati hutan pegunungan. Oleh karena itu, kebugaran dasar serta penggunaan alas kaki yang nyaman dan tidak licin sangat disarankan.",
    "faq.waerebo.q3": "Apakah perjalanan harus didampingi pemandu?",
    "faq.waerebo.a3":
      "Kami sangat menyarankan perjalanan didampingi pemandu lokal yang memahami jalur, kondisi medan, dan tata cara kunjungan ke Kampung Wae Rebo. Waerebo Lodge dapat membantu mengatur pemandu untuk perjalanan Anda.",
    "faq.waerebo.q4": "Apa itu layanan ojek yang disebutkan dalam itinerary?",
    "faq.waerebo.a4":
      "Ojek adalah layanan transportasi sepeda motor yang dioperasikan oleh pengemudi lokal. Ojek dapat digunakan untuk menuju Pos 1 sehingga tamu dapat menghemat waktu dan tenaga sebelum memulai trekking.\n\n_Layanan ini bersifat opsional. Tamu juga dapat memilih berjalan kaki._",
    "faq.waerebo.q5": "Di mana tamu tidur saat menginap di Kampung Wae Rebo?",
    "faq.waerebo.a5":
      "Tamu akan tidur di dalam rumah tradisional berbentuk kerucut yang dikenal sebagai Mbaru Niang. Sistem menginapnya bersifat komunal sehingga ruang tidur digunakan bersama wisatawan lain.\n\nKasur, bantal, dan selimut sederhana disediakan. Kamar mandi berada di luar rumah utama dan digunakan bersama.",
    "faq.general.q1":
      "Apakah listrik tersedia selama 24 jam di Kampung Wae Rebo?",
    "faq.general.a1":
      "Tidak. Listrik di Kampung Wae Rebo umumnya hanya tersedia sekitar pukul 18.00–22.00. Kami menyarankan Anda mengisi penuh perangkat elektronik sebelum memulai trekking dan membawa power bank selama perjalanan.",
    "faq.general.q2": "Apakah listrik tersedia selama 24 jam di Waerebo Lodge?",
    "faq.general.a2": "Ya. Listrik di Waerebo Lodge tersedia selama 24 jam.",
    "faq.general.q3":
      "Apakah tersedia Wi-Fi dan sinyal telepon di Waerebo Lodge?",
    "faq.general.a3":
      "Sinyal telepon seluler di sekitar lodge umumnya tidak tersedia atau sangat lemah. Namun, Waerebo Lodge menyediakan koneksi Wi-Fi melalui Starlink bagi tamu yang membutuhkan akses internet.",
    "faq.general.q4":
      "Apakah tersedia layanan penitipan koper selama trekking?",
    "faq.general.a4":
      "Ya. Anda dapat menitipkan koper dan barang yang tidak diperlukan di Waerebo Lodge agar perjalanan trekking menuju Kampung Wae Rebo lebih nyaman. Kami menyarankan hanya membawa tas kecil berisi perlengkapan yang diperlukan selama perjalanan dan menginap di kampung.",

    // ── Trips page
    "trips.chooseProgram": "Pilih Program Anda",
    "trips.bookTrip": "Pesan Trip",
    "trips.time": "Waktu:",
    "trips.transport": "Transportasi:",

    // ── Booking modal
    "booking.heading": "Isi Informasi Pemesanan",
    "booking.name": "Nama",
    "booking.name.placeholder": "Masukkan nama Anda",
    "booking.origin": "Asal",
    "booking.origin.placeholder": "Anda berasal dari mana?",
    "booking.phone": "Nomor Telepon",
    "booking.phone.placeholder": "Masukkan nomor telepon Anda",
    "booking.email": "Email",
    "booking.email.placeholder": "Masukkan alamat email Anda",
    "booking.program": "Program Trip",
    "booking.program.placeholder": "Pilih jenis trip Anda",
    "booking.date": "Tanggal Trip",
    "booking.travelers": "Jumlah Wisatawan",
    "booking.travelers.placeholder": "Pilih jumlah tamu",
    "booking.via.whatsapp": "Pesan Via WhatsApp",
    "booking.via.email": "Pesan Via Email",

    // Halaman detail trip
    "trip.home": "Beranda",
    "trip.previousPackage": "Paket trip sebelumnya",
    "trip.nextPackage": "Paket trip berikutnya",
    "trip.pageSections": "Bagian halaman trip",
    "trip.summary": "Ringkasan Trip",
    "trip.accommodation": "Akomodasi",
    "trip.meals": "Makanan & Bersantap",
    "trip.itinerary": "Rangkaian Itinerary",
    "trip.itineraryDay": "Itinerary",
    "trip.whatYouGet": "Yang Anda Dapatkan",
    "trip.travelersNotes": "Catatan untuk Wisatawan",
    "trip.reminder": "Pengingat:",
    "trip.bookWhatsapp": "Pesan Trip via WhatsApp",
    "trip.bookEmail": "Pesan Trip via Email",
    "trip.whatsappBooking": "Pesan via WhatsApp",
    "trip.emailBooking": "Pesan via Email",
    "trip.bookingActions": "Pilihan pemesanan trip",
    "trip.packageSelected": "{trip} dipilih. Detail trip diperbarui.",
    "trip.custom.heading": "Mencari trip yang lebih fleksibel?",
    "trip.custom.body":
      "Kami dapat membantu membuat itinerary privat berdasarkan tanggal perjalanan, jumlah peserta, minat, dan tempo yang Anda inginkan. Baik Anda ingin memadukan Waerebo dengan air terjun, sawah, desa lokal, wisata pulau, maupun perjalanan darat Flores yang lebih panjang, kami akan membantu merancang pengalaman yang paling sesuai.",
    "trip.custom.notes1":
      "Karena perjalanan ini sepenuhnya disesuaikan, kebutuhan fisik dan fasilitas yang tersedia bergantung pada itinerary akhir. Namun, perjalanan ke Waerebo dan wilayah Flores di sekitarnya umumnya melibatkan aktivitas luar ruang, perubahan iklim dari panas pesisir hingga dingin pegunungan, serta infrastruktur desa sederhana dengan listrik terbatas.",
    "trip.custom.notes2":
      "Kami menyarankan pakaian serbaguna, sepatu jalan atau trekking yang nyaman, senter, pelindung matahari, jas hujan ringan, dan keperluan pribadi. Tim kami akan memberikan daftar perlengkapan yang spesifik dan terperinci setelah itinerary Anda selesai disusun.",
    "trip.custom.whatsapp": "Buat Trip Kustom via WhatsApp",
    "trip.custom.email": "Buat Trip Kustom via Email",
    "trip.custom.feature.travelers": "Wisatawan Privat & Grup",
    "trip.custom.feature.team": "Tim Ahli Lokal",
    "trip.custom.feature.flexible": "Itinerary Fleksibel",
    "trip.custom.feature.lodge": "Paket Waerebo Lodge",
    "trip.custom.feature.village": "Menginap di Desa Waerebo",
    "trip.custom.feature.authentic": "Pengalaman Ikonik & Autentik",
    "trip.custom.feature.meals": "Sarapan, Makan Siang, Makan Malam, dll.",
    "trip.custom.feature.accommodation": "Pilih Akomodasi Pribadi",
    "trip.message.book": "Halo Waerebo Lodge! Saya ingin memesan trip ini:",
    "trip.message.custom":
      "Halo Waerebo Lodge! Saya ingin membuat itinerary kustom Flores dan Waerebo.",
    "trip.email.bookSubject": "Permintaan pemesanan trip",
    "trip.email.customSubject": "Permintaan itinerary kustom Waerebo",

    // ── Room detail
    "room.available": "Tersedia",
    "room.otherFacility": "Fasilitas Lainnya",
    "room.locations": "Lokasi",
    "room.review": "Ulasan",
    "room.bookNow": "Pesan Kamar Sekarang",
    "room.moreRooms": "Kamar Lainnya",
    "room.toExplore": "untuk Dijelajahi",
    "room.seeLodgeDetails": "Lihat Detail Penginapan",
    "room.discoverMore": "Temukan Lebih Banyak",
    "room.roomOptions": "Pilihan Kamar",
    "room.seeRoom": "Lihat Kamar",
    "room.seeAllRoom": "Lihat Semua Kamar",
    "room.preview": "Pratinjau",
    "room.facility": "Fasilitas Kamar",
    "room.diningArrangements": "Pengaturan Makan",
    "room.breakfastIncluded": "Termasuk Sarapan",
    "room.dinnerIncluded": "Termasuk Makan Malam",
    "room.lunchNote":
      "*Makan siang belum termasuk dalam paket ini. Namun, tersedia dengan biaya tambahan.",
    "room.latestReview": "Ulasan Terbaru",
    "room.seeAll": "Lihat semua",
    "cardSpec.people": "2 Orang",
    "cardSpec.ac": "AC",
    "cardSpec.fan": "Kipas",
    "cardSpec.shower": "Air Panas",
    "cardSpec.bed": "Tempat Tidur",
    "facility.wifi": "Wifi",
    "facility.ac": "AC",
    "facility.fan": "Kipas",
    "facility.shower": "Shower",
    "facility.hotShower": "Shower Air Panas",
    "facility.parking": "Parkir Gratis",
    "facility.westernToilet": "Toilet Duduk",
    "facility.mosquitoNet": "Kelambu",
    "facility.washBasin": "Wastafel",
    "facility.waterTub": "Bak Air Tradisional & Gayung",
    "facility.towel": "Handuk",
    "facility.toothbrush": "Sikat Gigi",
    "facility.soap": "Sabun",
    "facility.amenities": "Amenitas",
    "facility.toilet": "Kamar Mandi",
    "rooms.standard-twin-1.description":
      "Dua tempat tidur single dengan kipas angin dan kamar mandi pribadi. Pilihan nyaman dan praktis untuk teman atau pasangan trekking yang ingin beristirahat sebelum atau setelah petualangan ke Waerebo.",
    "rooms.standard-double.description":
      "Kamar nyaman dengan tempat tidur double, kipas angin, dan kamar mandi pribadi. Ideal untuk pasangan atau solo traveler yang mencari suasana tenang di tengah alam.",
    "rooms.standard-twin-2.description":
      "Dua tempat tidur single dengan kipas angin dan kamar mandi pribadi. Pilihan nyaman dan praktis untuk teman atau pasangan trekking yang ingin beristirahat sebelum atau setelah petualangan ke Waerebo.",
    "rooms.wooden-twin-1.description":
      "Menginap di kamar kayu yang hangat dan mencerminkan karakter tradisional pedesaan Flores. Dilengkapi twin bed dan kamar mandi pribadi untuk pengalaman lodge yang autentik.",
    "rooms.wooden-twin-2.description":
      "Menginap di kamar kayu yang hangat dan mencerminkan karakter tradisional pedesaan Flores. Dilengkapi twin bed dan kamar mandi pribadi untuk pengalaman lodge yang autentik.",
    "rooms.wooden-double.description":
      "Kamar kayu yang hangat dengan tempat tidur double, cocok untuk pasangan yang mencari pengalaman Flores yang lebih autentik dan menenangkan.",
    "rooms.wooden-twin-3.description":
      "Menginap di kamar kayu yang hangat dan mencerminkan karakter tradisional pedesaan Flores. Dilengkapi twin bed dan kamar mandi pribadi untuk pengalaman lodge yang autentik.",
    "rooms.deluxe-double-1.description":
      "Kamar luas ber-AC dengan tempat tidur double dan shower air panas pribadi. Cocok untuk tamu yang menginginkan kenyamanan ekstra setelah perjalanan panjang melintasi Flores.",
    "rooms.deluxe-twin-1.description":
      "Dua tempat tidur single dengan AC dan shower air panas pribadi. Pilihan nyaman untuk teman atau rekan trekking yang ingin memulihkan energi sebelum petualangan berikutnya.",
    "rooms.deluxe-double-2.description":
      "Kamar luas ber-AC dengan tempat tidur double dan shower air panas pribadi. Cocok untuk tamu yang menginginkan kenyamanan ekstra setelah perjalanan panjang melintasi Flores.",
    "rooms.deluxe-twin-2.description":
      "Dua tempat tidur single dengan AC dan shower air panas pribadi. Pilihan nyaman untuk teman atau rekan trekking yang ingin memulihkan energi sebelum petualangan berikutnya.",
    "rooms.standard-twin-1.highlight.capacity": "2 Tamu",
    "rooms.standard-twin-1.highlight.couples": "Cocok untuk rekan trekking",
    "rooms.standard-twin-1.highlight.bedroom": "Twin Bed",
    "rooms.standard-twin-1.highlight.bathroom": "Kamar Mandi Pribadi",
    "rooms.standard-double.highlight.capacity": "2 Tamu",
    "rooms.standard-double.highlight.couples": "Cocok untuk pasangan",
    "rooms.standard-double.highlight.bedroom": "Double Bed",
    "rooms.standard-double.highlight.bathroom": "Kamar Mandi Pribadi",
    "rooms.standard-twin-2.highlight.capacity": "2 Tamu",
    "rooms.standard-twin-2.highlight.couples": "Cocok untuk rekan trekking",
    "rooms.standard-twin-2.highlight.bedroom": "Twin Bed",
    "rooms.standard-twin-2.highlight.bathroom": "Kamar Mandi Pribadi",
    "rooms.wooden-twin-1.highlight.capacity": "2 Tamu",
    "rooms.wooden-twin-1.highlight.couples": "Kamar Kayu Tradisional",
    "rooms.wooden-twin-1.highlight.bedroom": "Twin Bed",
    "rooms.wooden-twin-1.highlight.bathroom": "Kamar Mandi Pribadi",
    "rooms.wooden-twin-2.highlight.capacity": "2 Tamu",
    "rooms.wooden-twin-2.highlight.couples": "Kamar Kayu Tradisional",
    "rooms.wooden-twin-2.highlight.bedroom": "Twin Bed",
    "rooms.wooden-twin-2.highlight.bathroom": "Kamar Mandi Pribadi",
    "rooms.wooden-double.highlight.capacity": "2 Tamu",
    "rooms.wooden-double.highlight.couples": "Cocok untuk pasangan",
    "rooms.wooden-double.highlight.bedroom": "Double Bed",
    "rooms.wooden-double.highlight.bathroom": "Kamar Mandi Pribadi",
    "rooms.wooden-twin-3.highlight.capacity": "2 Tamu",
    "rooms.wooden-twin-3.highlight.couples": "Kamar Kayu Tradisional",
    "rooms.wooden-twin-3.highlight.bedroom": "Twin Bed",
    "rooms.wooden-twin-3.highlight.bathroom": "Kamar Mandi Pribadi",
    "rooms.deluxe-double-1.highlight.capacity": "2 Tamu",
    "rooms.deluxe-double-1.highlight.couples": "Cocok untuk pasangan",
    "rooms.deluxe-double-1.highlight.bedroom": "Double Bed",
    "rooms.deluxe-double-1.highlight.bathroom":
      "Kamar Mandi Pribadi dengan Shower Air Panas",
    "rooms.deluxe-twin-1.highlight.capacity": "2 Tamu",
    "rooms.deluxe-twin-1.highlight.couples": "Cocok untuk rekan trekking",
    "rooms.deluxe-twin-1.highlight.bedroom": "Twin Bed",
    "rooms.deluxe-twin-1.highlight.bathroom": "Shower Air Panas Pribadi",
    "rooms.deluxe-double-2.highlight.capacity": "2 Tamu",
    "rooms.deluxe-double-2.highlight.couples": "Cocok untuk pasangan",
    "rooms.deluxe-double-2.highlight.bedroom": "Double Bed",
    "rooms.deluxe-double-2.highlight.bathroom":
      "Kamar Mandi Pribadi dengan Shower Air Panas",
    "rooms.deluxe-twin-2.highlight.capacity": "2 Tamu",
    "rooms.deluxe-twin-2.highlight.couples": "Cocok untuk rekan trekking",
    "rooms.deluxe-twin-2.highlight.bedroom": "Twin Bed",
    "rooms.deluxe-twin-2.highlight.bathroom": "Shower Air Panas Pribadi",

    // ── Lodge page (room catalog)
    "lodge.eyebrow": "Nikmati Menginap di",
    "lodge.heading": "Kamar yang Nyaman",
    "lodge.bookNow": "Pesan Sekarang",
    "lodge.seeDetails": "Lihat Detail",

    // ── Legal pages (fixed chrome)
    "legal.eyebrow": "Legal",
    "legal.lastUpdated": "Terakhir diperbarui:",
    "legal.questions.heading": "Ada Pertanyaan?",
    "legal.questions.body":
      "Jika ada pertanyaan tentang halaman ini, hubungi kami di",
    "legal.questions.or": "atau",
    "legal.questions.address":
      "Waerebo Lodge — Dintor, Manggarai, Flores, Indonesia.",

    // ── Footer
    "footer.follow": "Ikuti kami untuk info & kabar terbaru!",
    "footer.rights": "Semua hak dilindungi.",
    "footer.terms": "Syarat & Ketentuan",
    "footer.privacy": "Kebijakan Privasi",
    "footer.credits": "Kredit Foto",
  },
};

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string, fallback?: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "waerebo-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "id" ? saved : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "id" : "en";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string, fallback?: string) =>
      dict[lang][key] ?? dict.en[key] ?? fallback ?? key,
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LanguageProvider>");
  return ctx;
}
