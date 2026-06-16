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
    "nav.lodge": "Lodge",
    "nav.restaurant": "Restaurant",
    "nav.transport": "Transport",
    "nav.testimonials": "Testimonials",
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
    "purpose.cta": "Learn More About Us",
    "purpose.village.title": "Waerebo Village",
    "purpose.village.caption":
      "Discover the iconic Wae Rebo houses, sustained by responsible and mindful travel choices.",

    // ── Services (home accordion)
    "services.eyebrow": "Our Services",
    "services.heading": "Everything You Need.",
    "services.body":
      "We handle the logistics so you can focus on the experience. Explore our services to make your journey to the Waerebo village adventurous, safe, and unforgettable.",
    "services.learnMore": "Learn More",
    "services.trip.label": "Waerebo Trip",
    "services.trip.content":
      "Guided trekking packages to Wae Rebo village, ranging from day trips to multi-day immersive experiences with local guides and porters.",
    "services.lodge.label": "Lodge",
    "services.lodge.content":
      "Comfortable accommodation in our highland lodge, featuring both AC and fan rooms with stunning mountain views and traditional Flores-inspired design.",
    "services.restaurant.label": "Restaurant",
    "services.restaurant.content":
      "Fresh, locally sourced meals in our open-air restaurant. Traditional Manggarai cuisine and international dishes prepared by local chefs.",
    "services.transport.label": "Transport",
    "services.transport.content":
      "Reliable door-to-door transportation from Ruteng or Labuan Bajo to Waerebo Lodge and back, with private and shared options available.",

    // ── Testimonials
    "testimonials.eyebrow": "Travelers Review",
    "testimonials.heading": "Word on the Trail.",

    // ── Gallery
    "gallery.eyebrow": "The Experience",
    "gallery.head1": "Moments ",
    "gallery.head2": "Captured.",
    "gallery.photo1.title": "Smiles Before the Ascent",
    "gallery.photo1.caption":
      "Taking a moment to soak in the golden rice terraces and coastal breeze at Dintor before hiking up to the sky village",
    "gallery.photo2.title": "The Sky Village Awaits",
    "gallery.photo2.caption":
      "The iconic cone-shaped Mbaru Niang houses of Wae Rebo, wrapped in morning mist high above the clouds",
    "gallery.photo3.title": "Rooftops in the Clouds",
    "gallery.photo3.caption":
      "Straw-thatched rooftops of the ancestral village — a living heritage perched on the mountain ridge",

    // ── Video
    "video.eyebrow": "Local Voices",
    "video.heading": "The Heart of Waerebo",
    "video.metrotv.body":
      "Watch Pak Martin and the Waerebo community share their story in this Metro TV feature — a look at life in the legendary sky village through the eyes of a true local.",
    "video.kompastv.body":
      "Sit down with our founder, Pak Martin, in an exclusive interview with Kompas TV. Discover the untold stories, rich traditions, and the true spirit of the sky village from a true local.",
    "video.cta": "Watch on Instagram",

    // ── Contact
    "contact.heading": "Contact Us",
    "contact.body":
      "Where the journey to the clouds begins. We handle the logistics so you can embrace the adventure",
    "contact.phone": "Phone",
    "contact.whatsapp": "Whatsapp",
    "contact.partner": "Be Our Partner Now",
    "contact.partnerCta": "Let’s work together",
    "contact.email": "Emails",

    // ── Journeys section tabs
    "journeys.tab.trip": "Trip",
    "journeys.tab.lodge": "Lodge",
    "journeys.tab.restaurant": "Restaurant",
    "journeys.tab.transport": "Transport",
    // Headings per tab
    "journeys.trip.eyebrow": "The Adventure",
    "journeys.trip.head": "Curated Highland ",
    "journeys.trip.emph": "Journeys",
    "journeys.lodge.eyebrow": "The Stay",
    "journeys.lodge.head": "Rooms at the ",
    "journeys.lodge.emph": "Lodge",
    "journeys.restaurant.eyebrow": "The Table",
    "journeys.restaurant.head": "A Taste of ",
    "journeys.restaurant.emph": "Flores",
    "journeys.transport.eyebrow": "On the Road",
    "journeys.transport.head": "Getting You ",
    "journeys.transport.emph": "There",
    "journeys.available": "Available",
    "journeys.seeTripDetails": "See Trip Details",
    "journeys.seeLodgeDetails": "See Lodge Details",
    // Trip cards
    "journeys.trip1.title": "1 Day Trekking",
    "journeys.trip1.meta0": "1 Day",
    "journeys.trip1.meta1": "Trek start at Dintor",
    "journeys.trip1.desc":
      "A full-day adventure starting from Dintor. Trek through a lush forest to reach the traditional Waerebo village, experience a local welcome ceremony, enjoy authentic coffee, and return to the lodge by afternoon.",
    "journeys.trip2.title": "2D/1N Trekking",
    "journeys.trip2.meta0": "2 Days 1 Night",
    "journeys.trip2.meta1": "Trek start at Dintor",
    "journeys.trip2.desc":
      "Trek to the sky village and spend the night in a traditional communal cone-shaped house. Interact with locals, learn about daily activities like weaving and coffee pounding, and enjoy stargazing after dinner.",
    "journeys.trip3.title": "3D/2N Trekking",
    "journeys.trip3.meta0": "3 Days 2 Nights",
    "journeys.trip3.meta1": "Trek start at Labuan Bajo",
    "journeys.trip3.desc":
      "A complete journey starting with a pickup in Labuan Bajo. Visit the beautiful Pleas Waterfall and Lembor rice fields, rest at Waerebo Lodge for a night, and embark on your overnight village trek the next day.",
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
    "journeys.lodge3.title": "Family Room (AC)",
    "journeys.lodge3.meta0": "4 Person",
    "journeys.lodge3.meta1": "AC · Hot Shower",
    "journeys.lodge3.desc":
      "Our largest room comfortably sleeps a family of four with a double bed and two singles, air conditioning, and a generous hot-water bathroom. Plenty of space to gather and relax.",

    // ── Restaurant showcase
    "restaurant.subtitle":
      "Taste the true flavors of Flores at our lodge. Curated by our co-founder, our kitchen serves up comforting local meals, trail-ready lunch boxes, and authentic local dishes. We even love it when guests share recipes from their home countries.",
    "restaurant.bookLabel": "Book Restaurant",
    "restaurant.viewLabel": "View Restaurant",

    // ── Transport showcase
    "transport.subtitle":
      "Effortless travel solutions for your mountain journey. We handle the driving so you can enjoy the view. From scenic overland car transfers to quick rides to the Dintor terminal, we make sure you reach your trekking starting line on time and stress-free.",
    "transport.bookLabel": "Book Transport",
    "transport.viewLabel": "View Transport",

    // ── About page — Story
    "about.story.heading1": "The Story",
    "about.story.heading2": "Behind the Lodge",
    "about.story.body":
      "Sincere greetings from the heart of Flores. We are Martin and Isabela Anggo, and we built Waerebo Lodge after being inspired by community-based ecotourism in 2007. Our goal is to provide a comfortable resting place for travelers while giving back to the Waerebo community. Come and take a break with us before your ascent.",
    "about.story.martinName": "Mr. Martin",
    "about.story.martinBio":
      "Mr. Martin was born in Waerebo in 1969 and has been a dedicated local guide since 2003. His wife, Isabela, is the general manager who loves cooking and is always excited to try recipes from her guests’ home countries!",

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
    "about.history.body":
      "From a single shelter at the trailhead to a beloved basecamp — a look back at the milestones that shaped Waerebo Lodge and its bond with the community.",
    "about.history.m1.title": "Where It All Began",
    "about.history.m1.text":
      "Inspired by community-based ecotourism, Martin and Isabela laid the first stones of Waerebo Lodge — a humble resting place at the foot of the trail.",
    "about.history.m2.title": "Growing With the Village",
    "about.history.m2.text":
      "As more travelers discovered Wae Rebo, the lodge grew alongside the community — adding comfortable rooms, a kitchen, and trusted local guides.",
    "about.history.m3.title": "A Living Gateway to the Clouds",
    "about.history.m3.text":
      "Today the lodge welcomes guests from around the world, giving back to the Waerebo community while offering the perfect basecamp before the ascent.",

    // ── FAQ page
    "faq.heading1": "Got Questions?",
    "faq.heading2": "We’ve Got Answers.",
    "faq.cat.trip": "Trip",
    "faq.cat.lodge": "Lodge",
    "faq.cat.restaurant": "Restaurant",
    "faq.cat.transport": "Transport",
    "faq.trip.q1": "How difficult is the trek to Waerebo Village?",
    "faq.trip.a1":
      "The trek is considered moderate and typically takes about 2 to 3 hours from Pos 1, depending on your pace. The path goes uphill through a shaded mountain forest. A basic level of fitness is recommended, but you can take your time and enjoy the cool air!",
    "faq.trip.q2": "Where will I sleep when staying overnight in the village?",
    "faq.trip.a2":
      "You will sleep inside the authentic Mbaru Niang (traditional cone-shaped house). It is a communal setup where you sleep on mattresses in an open-tent arrangement alongside other travelers. Please note that the bathrooms are located outside the main house.",
    "faq.trip.q3": "Is there electricity in Waerebo Village?",
    "faq.trip.a3":
      "Electricity in the village is very limited and generally only runs from 6:00 PM to 10:00 PM. We highly recommend bringing a power bank to keep your camera or phone charged!",
    "faq.trip.q4":
      'What is the "Ojek" service mentioned in the itinerary?',
    "faq.trip.a4":
      'An "Ojek" is a local motorcycle taxi. On rougher sections of the lower trail you can choose to ride an ojek for part of the way to save energy, or you can simply walk the whole route. It is an optional service arranged with local drivers.',
    "faq.lodge.q1": "Where exactly is Waerebo Lodge located?",
    "faq.lodge.a1":
      "Our basecamp is located in Dintor, right at the valley below Waerebo. It sits beautifully in the middle of rice fields, offering stunning open views of the Flores Sea and the surrounding mountains.",
    "faq.lodge.q2": "Do the lodge rooms have AC and hot water?",
    "faq.lodge.a2":
      "Yes! We offer several room types to fit your needs. If you want maximum comfort before or after your hike, you can book our AC rooms which come equipped with hot showers. We also offer standard Fan rooms.",
    "faq.restaurant.q1": "Do you provide food for the trekking journey?",
    "faq.restaurant.a1":
      "Absolutely. We prepare practical lunch boxes for you to carry on the trail. Depending on your booked package, we also serve hearty pre-trek breakfasts and warm dinners when you return to the lodge.",
    "faq.restaurant.q2": "What kind of food can I expect at the lodge?",
    "faq.restaurant.a2":
      "We serve comforting, authentic local Flores meals. Our co-founder and general manager, Isabela, loves to cook and ensures every guest is well-fed. You will also get to taste authentic, locally sourced Waerebo coffee!",
    "faq.transport.q1": "How do I get from Labuan Bajo to Waerebo Lodge?",
    "faq.transport.a1":
      "We provide a comfortable overland car transfer. Your driver will pick you up from your hotel or the airport in Labuan Bajo for the scenic drive towards Dintor. Along the way, we even stop at scenic spots like Cunca Wulang waterfall and the rice fields. The drive takes roughly 3 to 4 hours.",

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

    // ── Room detail
    "room.available": "Available",
    "room.otherFacility": "Other Facility",
    "room.locations": "Locations",
    "room.review": "Review",
    "room.bookNow": "Book Room Now",
    "room.moreRooms": "More Room",
    "room.toExplore": "to Explore",
    "room.seeLodgeDetails": "See Lodge Details",

    // ── Legal pages (fixed chrome)
    "legal.eyebrow": "Legal",
    "legal.lastUpdated": "Last updated:",
    "legal.questions.heading": "Questions?",
    "legal.questions.body": "If you have any questions about this page, reach out to us at",
    "legal.questions.or": "or",
    "legal.questions.address": "Waerebo Lodge — Dintor, Manggarai, Flores, Indonesia.",

    // ── Footer
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
  },

  id: {
    // ── Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.services": "Layanan Kami",
    "nav.lodge": "Penginapan",
    "nav.restaurant": "Restoran",
    "nav.transport": "Transportasi",
    "nav.testimonials": "Testimoni",
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
    "purpose.body1.pre": 'Kami membangun Waerebo Lodge dengan satu tujuan sederhana "',
    "purpose.body1.bold":
      "menyediakan tempat istirahat yang nyaman dan berkualitas sebelum pendakianmu ke desa di atas awan",
    "purpose.body1.post": '".',
    "purpose.body2":
      "Namun misi kami melampaui dinding lodge ini. Kami mengalokasikan 10% dari tarif kamar untuk mendukung langsung inisiatif sosial dan budaya komunitas Waerebo. Dengan menginap bersama kami, petualanganmu meninggalkan jejak positif yang bermakna di pegunungan ini.",
    "purpose.cta": "Pelajari Tentang Kami",
    "purpose.village.title": "Desa Waerebo",
    "purpose.village.caption":
      "Temukan keunikan rumah adat Wae Rebo, yang terjaga oleh pilihan perjalanan yang bertanggung jawab.",

    // ── Services (home accordion)
    "services.eyebrow": "Layanan Kami",
    "services.heading": "Semua yang Anda Butuhkan.",
    "services.body":
      "Kami mengurus semua logistik agar Anda bisa fokus pada pengalaman. Jelajahi layanan kami untuk menjadikan perjalanan ke Desa Waerebo penuh petualangan, aman, dan tak terlupakan.",
    "services.learnMore": "Pelajari Lebih Lanjut",
    "services.trip.label": "Paket Trip Waerebo",
    "services.trip.content":
      "Paket trekking dengan pemandu ke Desa Wae Rebo, mulai dari tur sehari hingga pengalaman beberapa hari dengan pemandu dan porter lokal.",
    "services.lodge.label": "Penginapan",
    "services.lodge.content":
      "Akomodasi nyaman di lodge pegunungan kami, tersedia kamar ber-AC dan kipas angin dengan pemandangan gunung yang menakjubkan dan desain khas Flores.",
    "services.restaurant.label": "Restoran",
    "services.restaurant.content":
      "Makanan segar dari bahan lokal di restoran terbuka kami. Masakan Manggarai tradisional dan hidangan internasional yang disiapkan oleh koki lokal.",
    "services.transport.label": "Transportasi",
    "services.transport.content":
      "Transportasi door-to-door yang andal dari Ruteng atau Labuan Bajo ke Waerebo Lodge dan kembali, dengan pilihan privat dan bersama.",

    // ── Testimonials
    "testimonials.eyebrow": "Ulasan Wisatawan",
    "testimonials.heading": "Cerita dari Jalur Pendakian.",

    // ── Gallery
    "gallery.eyebrow": "Pengalaman Wisata",
    "gallery.head1": "Momen yang ",
    "gallery.head2": "Diabadikan.",
    "gallery.photo1.title": "Senyum Sebelum Mendaki",
    "gallery.photo1.caption":
      "Menikmati sejenak keindahan sawah keemasan dan angin pantai di Dintor sebelum mendaki ke desa di atas awan",
    "gallery.photo2.title": "Desa di Atas Awan",
    "gallery.photo2.caption":
      "Rumah kerucut Mbaru Niang yang ikonik di Wae Rebo, diselimuti kabut pagi tinggi di atas awan",
    "gallery.photo3.title": "Atap di Antara Awan",
    "gallery.photo3.caption":
      "Atap jerami desa leluhur — warisan hidup yang berdiri kokoh di punggungan gunung",

    // ── Video
    "video.eyebrow": "Suara Lokal",
    "video.heading": "Jiwa Waerebo",
    "video.metrotv.body":
      "Saksikan Pak Martin dan komunitas Waerebo berbagi kisah mereka dalam liputan khusus Metro TV — sebuah pandangan tentang kehidupan di desa legendaris di atas awan melalui mata warga asli.",
    "video.kompastv.body":
      "Simak wawancara eksklusif dengan pendiri kami, Pak Martin, di Kompas TV. Temukan kisah tersembunyi, tradisi yang kaya, dan jiwa sejati desa di atas awan dari seorang warga asli.",
    "video.cta": "Tonton di Instagram",

    // ── Contact
    "contact.heading": "Hubungi Kami",
    "contact.body":
      "Di sinilah perjalanan menuju awan dimulai. Kami mengurus semua logistik agar Anda bisa menikmati petualangan.",
    "contact.phone": "Telepon",
    "contact.whatsapp": "WhatsApp",
    "contact.partner": "Jadilah Mitra Kami",
    "contact.partnerCta": "Mari berkolaborasi",
    "contact.email": "Email",

    // ── Journeys section tabs
    "journeys.tab.trip": "Trip",
    "journeys.tab.lodge": "Penginapan",
    "journeys.tab.restaurant": "Restoran",
    "journeys.tab.transport": "Transportasi",
    "journeys.trip.eyebrow": "Petualangan",
    "journeys.trip.head": "Paket Perjalanan Highland ",
    "journeys.trip.emph": "Pilihan",
    "journeys.lodge.eyebrow": "Tempat Menginap",
    "journeys.lodge.head": "Kamar di ",
    "journeys.lodge.emph": "Lodge",
    "journeys.restaurant.eyebrow": "Sajian Meja",
    "journeys.restaurant.head": "Cita Rasa ",
    "journeys.restaurant.emph": "Flores",
    "journeys.transport.eyebrow": "Di Perjalanan",
    "journeys.transport.head": "Mengantar ",
    "journeys.transport.emph": "Anda",
    "journeys.available": "Tersedia",
    "journeys.seeTripDetails": "Lihat Detail Trip",
    "journeys.seeLodgeDetails": "Lihat Detail Penginapan",
    // Trip cards
    "journeys.trip1.title": "Trekking 1 Hari",
    "journeys.trip1.meta0": "1 Hari",
    "journeys.trip1.meta1": "Trek mulai dari Dintor",
    "journeys.trip1.desc":
      "Petualangan seharian penuh dari Dintor. Treking melewati hutan lebat menuju desa tradisional Waerebo, merasakan upacara penyambutan lokal, menikmati kopi asli, dan kembali ke lodge sore harinya.",
    "journeys.trip2.title": "Trekking 2H/1M",
    "journeys.trip2.meta0": "2 Hari 1 Malam",
    "journeys.trip2.meta1": "Trek mulai dari Dintor",
    "journeys.trip2.desc":
      "Trek ke desa di atas awan dan bermalam di rumah adat komunal berbentuk kerucut. Berinteraksi dengan warga lokal, belajar tentang aktivitas harian seperti menenun dan menumbuk kopi, serta menikmati langit berbintang setelah makan malam.",
    "journeys.trip3.title": "Trekking 3H/2M",
    "journeys.trip3.meta0": "3 Hari 2 Malam",
    "journeys.trip3.meta1": "Trek mulai dari Labuan Bajo",
    "journeys.trip3.desc":
      "Perjalanan lengkap dimulai dengan penjemputan di Labuan Bajo. Kunjungi Air Terjun Pleas yang indah dan sawah Lembor, istirahat di Waerebo Lodge semalam, lalu berangkat trek bermalam ke desa keesokan harinya.",
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
    "journeys.lodge3.title": "Kamar Keluarga (AC)",
    "journeys.lodge3.meta0": "4 Orang",
    "journeys.lodge3.meta1": "AC · Shower Air Panas",
    "journeys.lodge3.desc":
      "Kamar terbesar kami yang nyaman untuk keluarga empat orang dengan satu kasur double dan dua kasur tunggal, AC, dan kamar mandi air panas yang luas. Banyak ruang untuk berkumpul dan bersantai.",

    // ── Restaurant showcase
    "restaurant.subtitle":
      "Nikmati cita rasa sejati Flores di lodge kami. Diracik oleh pendiri bersama kami, dapur kami menyajikan makanan lokal yang menghangatkan, bekal praktis untuk jalur trek, dan hidangan autentik lokal. Kami bahkan senang ketika tamu berbagi resep dari negara asal mereka.",
    "restaurant.bookLabel": "Pesan Restoran",
    "restaurant.viewLabel": "Lihat Restoran",

    // ── Transport showcase
    "transport.subtitle":
      "Solusi perjalanan mudah untuk petualangan gunung Anda. Kami yang mengemudi agar Anda bisa menikmati pemandangan. Dari transfer mobil darat yang indah hingga tumpangan cepat ke terminal Dintor, kami memastikan Anda tiba di titik awal trek tepat waktu dan tanpa stres.",
    "transport.bookLabel": "Pesan Transportasi",
    "transport.viewLabel": "Lihat Transportasi",

    // ── About page — Story
    "about.story.heading1": "Kisah di Balik",
    "about.story.heading2": "Lodge Ini",
    "about.story.body":
      "Salam tulus dari jantung Flores. Kami adalah Martin dan Isabela Anggo, yang membangun Waerebo Lodge terinspirasi dari ekowisata berbasis komunitas pada tahun 2007. Tujuan kami adalah menyediakan tempat istirahat yang nyaman bagi wisatawan sambil memberi kembali kepada komunitas Waerebo. Singgahlah bersama kami sebelum pendakianmu.",
    "about.story.martinName": "Pak Martin",
    "about.story.martinBio":
      "Pak Martin lahir di Waerebo pada tahun 1969 dan telah menjadi pemandu lokal yang berdedikasi sejak 2003. Istrinya, Isabela, adalah manajer umum yang gemar memasak dan selalu antusias mencoba resep dari negara asal para tamunya!",

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
    "about.history.body":
      "Dari sebuah tempat singgah kecil di awal jalur hingga menjadi basecamp yang dicintai — kilas balik tonggak-tonggak yang membentuk Waerebo Lodge dan keterikatan kami dengan komunitas.",
    "about.history.m1.title": "Di Sinilah Segalanya Bermula",
    "about.history.m1.text":
      "Terinspirasi oleh ekowisata berbasis komunitas, Martin dan Isabela meletakkan batu pertama Waerebo Lodge — tempat istirahat sederhana di kaki jalur pendakian.",
    "about.history.m2.title": "Tumbuh Bersama Desa",
    "about.history.m2.text":
      "Seiring semakin banyak wisatawan yang menemukan Wae Rebo, lodge ini tumbuh bersama komunitas — menambah kamar-kamar nyaman, dapur, dan pemandu lokal terpercaya.",
    "about.history.m3.title": "Gerbang Hidup Menuju Awan",
    "about.history.m3.text":
      "Kini lodge ini menyambut tamu dari seluruh dunia, memberi kembali kepada komunitas Waerebo sambil menawarkan basecamp terbaik sebelum pendakian.",

    // ── FAQ page
    "faq.heading1": "Punya Pertanyaan?",
    "faq.heading2": "Kami Punya Jawabannya.",
    "faq.cat.trip": "Trip",
    "faq.cat.lodge": "Penginapan",
    "faq.cat.restaurant": "Restoran",
    "faq.cat.transport": "Transportasi",
    "faq.trip.q1": "Seberapa sulit trek ke Desa Waerebo?",
    "faq.trip.a1":
      "Trek ini tergolong sedang dan biasanya membutuhkan waktu sekitar 2 hingga 3 jam dari Pos 1, tergantung kecepatan Anda. Jalurnya mendaki melalui hutan gunung yang rindang. Disarankan memiliki kebugaran dasar, namun Anda bisa bersantai dan menikmati udara yang sejuk!",
    "faq.trip.q2": "Di mana saya tidur saat menginap semalam di desa?",
    "faq.trip.a2":
      "Anda akan tidur di dalam Mbaru Niang yang autentik (rumah kerucut tradisional). Ini adalah pengaturan komunal di mana Anda tidur di atas kasur dalam susunan tenda terbuka bersama wisatawan lain. Harap dicatat bahwa kamar mandi terletak di luar rumah utama.",
    "faq.trip.q3": "Apakah ada listrik di Desa Waerebo?",
    "faq.trip.a3":
      "Listrik di desa sangat terbatas dan umumnya hanya menyala dari pukul 18.00 hingga 22.00. Kami sangat menyarankan Anda membawa power bank untuk mengisi daya kamera atau ponsel!",
    "faq.trip.q4":
      'Apa itu layanan "Ojek" yang disebutkan dalam itinerary?',
    "faq.trip.a4":
      '"Ojek" adalah ojek motor lokal. Di bagian jalur bawah yang lebih kasar, Anda bisa memilih naik ojek untuk menghemat tenaga, atau cukup berjalan kaki sepanjang rute. Ini adalah layanan opsional yang diatur bersama pengemudi lokal.',
    "faq.lodge.q1": "Di mana tepatnya Waerebo Lodge berada?",
    "faq.lodge.a1":
      "Basecamp kami terletak di Dintor, tepat di lembah bawah Waerebo. Berada indah di tengah sawah, menawarkan pemandangan terbuka yang menakjubkan ke Laut Flores dan pegunungan sekitar.",
    "faq.lodge.q2": "Apakah kamar lodge memiliki AC dan air panas?",
    "faq.lodge.a2":
      "Ya! Kami menawarkan beberapa tipe kamar sesuai kebutuhan Anda. Jika Anda menginginkan kenyamanan maksimal sebelum atau setelah mendaki, Anda bisa memesan kamar AC kami yang dilengkapi shower air panas. Kami juga menyediakan kamar Kipas Angin standar.",
    "faq.restaurant.q1":
      "Apakah Anda menyediakan makanan untuk perjalanan trekking?",
    "faq.restaurant.a1":
      "Tentu saja. Kami menyiapkan bekal praktis untuk Anda bawa di jalur. Tergantung paket yang Anda pesan, kami juga menyajikan sarapan sebelum trek dan makan malam hangat saat Anda kembali ke lodge.",
    "faq.restaurant.q2": "Makanan apa yang bisa saya harapkan di lodge?",
    "faq.restaurant.a2":
      "Kami menyajikan hidangan lokal Flores yang autentik dan menghangatkan. Pendiri bersama dan manajer umum kami, Isabela, senang memasak dan memastikan setiap tamu kenyang. Anda juga akan mencicipi kopi Waerebo asli dari sumber lokal!",
    "faq.transport.q1":
      "Bagaimana cara ke Waerebo Lodge dari Labuan Bajo?",
    "faq.transport.a1":
      "Kami menyediakan transfer mobil darat yang nyaman. Pengemudi Anda akan menjemput dari hotel atau bandara di Labuan Bajo untuk perjalanan pemandangan indah menuju Dintor. Di sepanjang perjalanan, kami bahkan berhenti di tempat indah seperti air terjun Cunca Wulang dan sawah. Perjalanan memakan waktu sekitar 3 hingga 4 jam.",

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

    // ── Room detail
    "room.available": "Tersedia",
    "room.otherFacility": "Fasilitas Lainnya",
    "room.locations": "Lokasi",
    "room.review": "Ulasan",
    "room.bookNow": "Pesan Kamar Sekarang",
    "room.moreRooms": "Kamar Lainnya",
    "room.toExplore": "untuk Dijelajahi",
    "room.seeLodgeDetails": "Lihat Detail Penginapan",

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
    "footer.rights": "Semua hak dilindungi.",
    "footer.terms": "Syarat & Ketentuan",
    "footer.privacy": "Kebijakan Privasi",
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
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") setLangState(saved);
  }, []);

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
