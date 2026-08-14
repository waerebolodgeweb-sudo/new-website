import type { Lang } from "@/lib/i18n";
import { tripPrograms, type TripProgram } from "./data";

/**
 * Indonesian copy for every user-facing string stored in the trip data.
 * Keeping the English data as the canonical structure means itinerary IDs,
 * image paths, icons, and layout metadata cannot drift between languages.
 */
const indonesia: Record<string, string> = {
  "One Day Trek": "Trekking Satu Hari",
  "No overnight stay": "Tanpa menginap",
  "A short adventure to the iconic traditional village of Waerebo":
    "Petualangan singkat menuju desa adat Waerebo yang ikonik",
  "A focused day trek for travelers who want to experience Waerebo and return to the lodge before evening.":
    "Trekking sehari bagi wisatawan yang ingin merasakan Waerebo dan kembali ke lodge sebelum malam.",
  "This one-day trip is perfect for travelers who want to visit Waerebo in a shorter time. Starting from Waerebo Lodge, the journey combines a scenic drive, forest trekking, cultural introduction, local lunch, and Waerebo coffee before returning to Dintor in the afternoon.":
    "Trip satu hari ini cocok bagi wisatawan yang ingin mengunjungi Waerebo dalam waktu singkat. Berangkat dari Waerebo Lodge, perjalanan memadukan berkendara dengan pemandangan indah, trekking hutan, pengenalan budaya, makan siang lokal, dan kopi Waerebo sebelum kembali ke Dintor pada sore hari.",
  "1 to 10+ Guests (Private & Group options)":
    "1 hingga 10+ tamu (pilihan privat & grup)",
  "Travelers with limited time, active travelers, culture lovers, and guests who want to experience Waerebo in one day":
    "Wisatawan dengan waktu terbatas, pelancong aktif, pencinta budaya, dan tamu yang ingin menikmati Waerebo dalam satu hari",
  "1 Day of Trips, No Overnight Stay": "Trip 1 hari, tanpa menginap",
  "Car transfer (Lodge to Terminal), Optional Ojek (Motorcycle taxi), and Hiking":
    "Transfer mobil (lodge ke terminal), ojek opsional, dan trekking",
  "A scenic trek through a shaded, lush forest with local wildlife.":
    "Trekking berpemandangan indah melalui hutan rimbun yang teduh dengan satwa lokal.",
  "An official welcome ceremony by the village elders at the Rumah Gendang (Main House).":
    "Upacara penyambutan resmi oleh tetua adat di Rumah Gendang (rumah utama).",
  "In-depth storytelling about Waerebo's history, architecture, and daily life from your expert guide.":
    "Cerita mendalam dari pemandu ahli tentang sejarah, arsitektur, dan kehidupan sehari-hari di Waerebo.",
  "The trekking route includes uphill sections and natural forest paths. Comfortable walking shoes, drinking water, and light rain protection are recommended. Motorbike taxi from the terminal to Pos 1 is optional and only recommended for guests who are comfortable riding on mountain roads.":
    "Rute trekking mencakup tanjakan dan jalur hutan alami. Disarankan memakai sepatu jalan yang nyaman serta membawa air minum dan pelindung hujan ringan. Ojek dari terminal ke Pos 1 bersifat opsional dan hanya disarankan bagi tamu yang terbiasa berkendara di jalan pegunungan.",
  "Waerebo Lodge not included": "Waerebo Lodge tidak termasuk",
  "in this daytime itinerary (guests typically book a room here the night before or after the trek).":
    "dalam itinerary siang hari ini (tamu biasanya memesan kamar untuk malam sebelum atau sesudah trekking).",
  "No overnight stay at the Village": "Tidak menginap di desa",
  "this is a single-day excursion.": "ini adalah perjalanan satu hari.",
  "Lunch included": "Makan siang termasuk",
  "A freshly prepared traditional meal is served upon arrival at Waerebo Village.":
    "Hidangan tradisional yang baru dimasak disajikan setibanya di Desa Waerebo.",
  "Authentic Waerebo Coffee": "Kopi Waerebo autentik",
  "A warm, authentic Waerebo coffee grown and roasted locally by the villagers.":
    "Kopi Waerebo autentik yang ditanam dan disangrai langsung oleh masyarakat setempat.",
  "While main meals are provided, we highly recommend bringing your own trail snacks, energy bars, or light bites to keep your energy up during the forest trek and the journey between points.":
    "Walaupun hidangan utama disediakan, kami sangat menyarankan Anda membawa camilan trekking, energy bar, atau makanan ringan sendiri untuk menjaga energi selama trekking hutan dan perjalanan antarlokasi.",
  "Day 1 - Dintor to Waerebo": "Hari 1 - Dintor ke Waerebo",
  "Breakfast at Waerebo Lodge": "Sarapan di Waerebo Lodge",
  "20 Minutes · Car": "20 menit · Mobil",
  "Start your morning with breakfast at Waerebo Lodge. After breakfast, you will depart with your local guide by car to the trekking starting point. The drive takes around 20 minutes.":
    "Awali pagi dengan sarapan di Waerebo Lodge. Setelah sarapan, Anda berangkat bersama pemandu lokal menggunakan mobil menuju titik awal trekking. Perjalanan memakan waktu sekitar 20 menit.",
  "Terminal to Pos 1": "Terminal ke Pos 1",
  "Depends on the condition · Motorbike": "Tergantung kondisi · Ojek",
  "From the terminal, guests may continue to Pos 1 by local motorbike taxi if they are comfortable riding on a motorbike.\n\nFor guests who are not used to motorbikes, we recommend walking for safety reasons, as the road can be narrow, steep, uneven, and challenging in some parts.":
    "Dari terminal, tamu dapat melanjutkan ke Pos 1 menggunakan ojek lokal jika nyaman berkendara dengan sepeda motor.\n\nDemi keselamatan, tamu yang tidak terbiasa naik motor kami sarankan berjalan kaki karena beberapa bagian jalan cukup sempit, curam, tidak rata, dan menantang.",
  "Forest Trekking from Pos 1": "Trekking hutan dari Pos 1",
  "Depends on the condition · Trek Walking":
    "Tergantung kondisi · Berjalan kaki",
  "After Pos 1, the journey continues into the forest area. The trail is slightly uphill, but the path is shaded by lush tropical trees. The air is cool and refreshing, and in the morning, guests may sometimes hear the sound of birds along the way.":
    "Setelah Pos 1, perjalanan berlanjut memasuki kawasan hutan. Jalurnya sedikit menanjak, tetapi terlindungi pepohonan tropis yang rimbun. Udaranya sejuk dan menyegarkan; pada pagi hari, tamu terkadang dapat mendengar kicauan burung di sepanjang jalan.",
  "Arrival at Waerebo Village": "Tiba di Desa Waerebo",
  "Trek Walking": "Berjalan kaki",
  "Upon arrival at Waerebo Village, guests will enter the main traditional house, known as the Rumah Gendang. A representative from the Waerebo community and the traditional elder will welcome the guests through a traditional welcome ceremony.":
    "Setibanya di Desa Waerebo, tamu akan memasuki rumah adat utama yang dikenal sebagai Rumah Gendang. Perwakilan masyarakat Waerebo dan tetua adat akan menyambut tamu melalui upacara penyambutan tradisional.",
  "Village Activities": "Aktivitas desa",
  "Takes time until afternoon": "Berlangsung hingga sore",
  "This is also a meaningful moment to learn about Waerebo’s culture, traditional houses, local customs, and the daily life of the community through your guide’s storytelling.":
    "Momen ini juga menjadi kesempatan bermakna untuk mempelajari budaya Waerebo, rumah adat, kebiasaan setempat, dan kehidupan sehari-hari masyarakat melalui cerita pemandu Anda.",
  "Lunch at Waerebo Village": "Makan siang di Desa Waerebo",
  "Lunch by the village": "Makan siang dari desa",
  "After the welcome ceremony and village introduction, guests will enjoy a local lunch, Waerebo coffee, and some time to rest while taking in the peaceful village atmosphere.":
    "Setelah upacara penyambutan dan pengenalan desa, tamu akan menikmati makan siang lokal, kopi Waerebo, dan waktu beristirahat sambil merasakan suasana desa yang tenang.",
  "Afternoon Return": "Kembali pada sore hari",
  "Trek Back Down": "Trekking turun",
  "In the afternoon, you will trek back to Dintor and return to Waerebo Lodge, where the trip ends.":
    "Pada sore hari, Anda akan trekking kembali ke Dintor dan tiba di Waerebo Lodge, tempat perjalanan berakhir.",
  "Overnight Experience": "Pengalaman Menginap",
  "2 days, 1 night": "2 hari, 1 malam",
  "Experience local village life and stay overnight in Waerebo's traditional cone-shaped house":
    "Rasakan kehidupan desa dan menginap di rumah adat Waerebo yang berbentuk kerucut",
  "Trek into Waerebo, share an evening with the community, and wake to the quiet beauty of the highlands.":
    "Trekking menuju Waerebo, habiskan malam bersama masyarakat, lalu bangun dalam keindahan dataran tinggi yang tenang.",
  "This overnight experience is the best way to truly feel the atmosphere of Waerebo. More than just a trek, this journey allows guests to spend time with the local community, learn about traditional houses, enjoy local food and coffee, and stay overnight inside the iconic cone-shaped traditional house.":
    "Pengalaman menginap ini adalah cara terbaik untuk benar-benar merasakan suasana Waerebo. Lebih dari sekadar trekking, perjalanan ini memberi tamu kesempatan menghabiskan waktu bersama masyarakat, mempelajari rumah adat, menikmati makanan dan kopi lokal, serta bermalam di dalam rumah adat berbentuk kerucut yang ikonik.",
  "Travelers who want a deeper Waerebo experience, culture lovers, photographers, adventurous travelers, and guests who want to stay overnight inside the traditional house":
    "Wisatawan yang ingin mengenal Waerebo lebih dalam, pencinta budaya, fotografer, petualang, dan tamu yang ingin bermalam di dalam rumah adat",
  "2 Days, 1 Night, With Overnight Stay at the Village":
    "2 hari, 1 malam, termasuk menginap di desa",
  "Car transfer (Lodge to Terminal), Optional Ojek (Motorcycle taxi), and Forest Trekking.":
    "Transfer mobil (lodge ke terminal), ojek opsional, dan trekking hutan.",
  "A guided scenic trek through a shaded, lush tropical forest.":
    "Trekking berpemandangan indah bersama pemandu melalui hutan tropis yang rimbun dan teduh.",
  "An official traditional welcome ceremony by the village elder at the Mbaru Niang House.":
    "Upacara penyambutan adat resmi oleh tetua desa di Rumah Mbaru Niang.",
  "In-depth storytelling about Waerebo's history, a sacred spring visit, and a reading house tour.":
    "Cerita mendalam tentang sejarah Waerebo, kunjungan ke mata air keramat, dan tur rumah baca.",
  "An overnight stay inside the iconic cone-shaped traditional Mbaru Gendang house.":
    "Bermalam di dalam rumah adat Mbaru Gendang berbentuk kerucut yang ikonik.",
  "This trip includes mountain trekking, a shared traditional sleeping arrangement, simple village facilities, and limited electricity. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, and personal essentials.":
    "Trip ini mencakup trekking gunung, tempat tidur tradisional bersama, fasilitas desa sederhana, dan listrik terbatas. Tamu disarankan membawa sepatu trekking yang nyaman, pakaian hangat untuk malam hari, senter, air minum, serta keperluan pribadi.",
  "The traditional house has no private rooms.":
    "Rumah adat tidak memiliki kamar pribadi.",
  "Guests sleep in a shared open sleeping area. Bathroom and toilet facilities are located outside the house.":
    "Tamu tidur di area terbuka bersama. Fasilitas kamar mandi dan toilet berada di luar rumah.",
  "Electricity is very limited": "Listrik sangat terbatas",
  "and usually available only from around 6:00 PM to 10:00 PM.":
    "dan biasanya hanya tersedia sekitar pukul 18.00 hingga 22.00.",
  "Lunch, dinner & breakfast included":
    "Makan siang, makan malam & sarapan termasuk",
  "Freshly prepared traditional meals are served by Waerebo Village.":
    "Hidangan tradisional yang baru dimasak disajikan oleh masyarakat Desa Waerebo.",
  "Start the morning with breakfast at Waerebo Lodge. After breakfast, guests will depart with a local guide by car to the trekking starting point. The drive takes around 20 minutes.":
    "Awali pagi dengan sarapan di Waerebo Lodge. Setelah sarapan, tamu berangkat bersama pemandu lokal menggunakan mobil menuju titik awal trekking. Perjalanan memakan waktu sekitar 20 menit.",
  "From the terminal, guests may continue to Pos 1 by local motorbike taxi if they are already comfortable riding on a motorbike.\n\nFor guests who are not used to motorbikes, we recommend walking for safety reasons, as the road can be narrow, steep, uneven, and challenging in some parts.":
    "Dari terminal, tamu dapat melanjutkan ke Pos 1 menggunakan ojek lokal jika sudah terbiasa berkendara dengan sepeda motor.\n\nDemi keselamatan, tamu yang tidak terbiasa naik motor kami sarankan berjalan kaki karena beberapa bagian jalan cukup sempit, curam, tidak rata, dan menantang.",
  "Upon arrival at Waerebo Village, guests will enter the main traditional house, known as Rumah Gendang. A representative from the Waerebo community and the traditional elder will welcome guests through a traditional welcome ceremony.":
    "Setibanya di Desa Waerebo, tamu akan memasuki rumah adat utama yang dikenal sebagai Rumah Gendang. Perwakilan masyarakat Waerebo dan tetua adat akan menyambut tamu melalui upacara penyambutan tradisional.",
  "Village Experience": "Pengalaman di desa",
  "During this moment, your guide will share stories about Waerebo Village, its culture, traditional houses, and the daily life of the local community.":
    "Pada kesempatan ini, pemandu akan berbagi cerita tentang Desa Waerebo, budayanya, rumah adat, dan kehidupan sehari-hari masyarakat setempat.",
  "Lunch & Coffee Experience": "Pengalaman makan siang & kopi",
  "Lunch & coffee by the village": "Makan siang & kopi dari desa",
  "Enjoy a local lunch and Waerebo coffee after the ceremony. In the afternoon, explore the traditional houses, meet the community, and observe daily activities like weaving and coffee processing.":
    "Nikmati makan siang lokal dan kopi Waerebo setelah upacara. Pada sore hari, jelajahi rumah adat, temui masyarakat, dan amati aktivitas sehari-hari seperti menenun dan mengolah kopi.",
  "Sacred Spring": "Mata air keramat",
  "Village activities until afternoon": "Aktivitas desa hingga sore",
  "Guests will visit the local spring, where the people of Waerebo collect water for daily use. Your guide will share the story of the traditional rituals held at this spring as a form of respect to the ancestors believed to protect the area.":
    "Tamu akan mengunjungi mata air setempat, tempat masyarakat Waerebo mengambil air untuk kebutuhan sehari-hari. Pemandu akan menceritakan ritual adat yang dilakukan di mata air ini sebagai penghormatan kepada leluhur yang dipercaya menjaga kawasan tersebut.",
  "Reading House Visit": "Kunjungan ke rumah baca",
  "Guests will visit the reading house to see photos of the traditional house construction process. Your guide will explain the building process and the traditional rituals involved.":
    "Tamu akan mengunjungi rumah baca untuk melihat foto proses pembangunan rumah adat. Pemandu akan menjelaskan proses pembangunan dan ritual adat yang menyertainya.",
  "Evening Village Atmosphere": "Suasana desa pada malam hari",
  Evening: "Malam",
  "Around 6:00 PM, observe traditional cooking before dinner in the village. Enjoy stargazing if the weather is clear, followed by an overnight stay in a shared, traditional cone-shaped house.":
    "Sekitar pukul 18.00, saksikan proses memasak tradisional sebelum makan malam di desa. Jika cuaca cerah, nikmati pemandangan bintang, lalu bermalam bersama di rumah adat berbentuk kerucut.",
  "Day 2 - Waerebo to Dintor": "Hari 2 - Waerebo ke Dintor",
  "Morning Photography": "Fotografi pagi",
  Sunrise: "Matahari terbit",
  "Around 6:00 AM is a beautiful time for photography, as the morning atmosphere in Waerebo is peaceful and scenic.":
    "Sekitar pukul 06.00 merupakan waktu yang indah untuk berfoto karena suasana pagi di Waerebo tenang dan menawan.",
  "Breakfast & Farewell": "Sarapan & perpisahan",
  "Breakfast by village": "Sarapan dari desa",
  "Breakfast will be served around 7:00 AM. After breakfast, guests will say goodbye to the local community before starting the trek back to Dintor.":
    "Sarapan disajikan sekitar pukul 07.00. Setelah sarapan, tamu akan berpamitan dengan masyarakat setempat sebelum memulai trekking kembali ke Dintor.",
  "Waerebo Lodge Return": "Kembali ke Waerebo Lodge",
  "Nature & Culture Journey": "Perjalanan Alam & Budaya",
  "3 days, 2 nights": "3 hari, 2 malam",
  "A complete nature, culture, and trekking journey from Labuan Bajo":
    "Perjalanan lengkap menikmati alam, budaya, dan trekking dari Labuan Bajo",
  "Travel overland from Labuan Bajo, discover the landscapes of western Flores, and spend a night in Waerebo Village.":
    "Lakukan perjalanan darat dari Labuan Bajo, jelajahi lanskap Flores bagian barat, dan bermalam di Desa Waerebo.",
  "This 3-day journey is designed for travelers who want a complete Waerebo experience starting from Labuan Bajo. The trip combines waterfall, rice field scenery, coastal viewpoints, a peaceful stay at Waerebo Lodge, forest trekking, cultural experience, and an overnight stay inside Waerebo’s traditional cone-shaped house.":
    "Perjalanan 3 hari ini dirancang bagi wisatawan yang menginginkan pengalaman Waerebo lengkap dari Labuan Bajo. Trip ini memadukan air terjun, pemandangan sawah, panorama pesisir, menginap dengan tenang di Waerebo Lodge, trekking hutan, pengalaman budaya, serta bermalam di dalam rumah adat Waerebo berbentuk kerucut.",
  "Private & Group options available": "Tersedia pilihan privat & grup",
  "Travelers who want a complete journey from Labuan Bajo, combining nature, culture, trekking, local life, and an overnight stay in the traditional village.":
    "Wisatawan yang menginginkan perjalanan lengkap dari Labuan Bajo dengan perpaduan alam, budaya, trekking, kehidupan lokal, dan menginap di desa adat.",
  "3 Days, 2 Nights (1 Night at Lodge, 1 Night at Village)":
    "3 hari, 2 malam (1 malam di lodge, 1 malam di desa)",
  "Car transfer (Labuan Bajo/Dintor), Optional Ojek (Motorcycle taxi), and Forest Trekking":
    "Transfer mobil (Labuan Bajo/Dintor), ojek opsional, dan trekking hutan",
  "A scenic drive from Labuan Bajo with stops at Cunca Plias Waterfall, Lembor rice fields, and Watu Weri Beach.":
    "Perjalanan darat berpemandangan indah dari Labuan Bajo dengan singgah di Air Terjun Cunca Plias, sawah Lembor, dan Pantai Watu Weri.",
  "A peaceful overnight stay at Waerebo Lodge surrounded by rice fields and mountain views.":
    "Menginap dengan tenang di Waerebo Lodge yang dikelilingi sawah dan pemandangan pegunungan.",
  "An official traditional welcome ceremony and an overnight stay inside the iconic cone-shaped traditional house.":
    "Upacara penyambutan adat resmi dan bermalam di dalam rumah adat berbentuk kerucut yang ikonik.",
  "This trip includes waterfall walking, mountain trekking, a shared traditional sleeping arrangement, simple village facilities, and limited electricity in Waerebo. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, comfortable clothes for the waterfall, light rain protection, and personal essentials.":
    "Trip ini mencakup perjalanan kaki ke air terjun, trekking gunung, tempat tidur tradisional bersama, fasilitas desa sederhana, dan listrik terbatas di Waerebo. Tamu disarankan membawa sepatu trekking yang nyaman, pakaian hangat untuk malam hari, senter, air minum, pakaian nyaman untuk air terjun, pelindung hujan ringan, serta keperluan pribadi.",
  "Waerebo Lodge included": "Waerebo Lodge termasuk",
  "in this daytime itinerary please choose your room type for this trip.":
    "dalam itinerary ini; silakan pilih tipe kamar untuk trip ini.",
  "shared open sleeping area.": "area tidur terbuka bersama.",
  "Lunch on Day 1, dinners, breakfasts, and traditional village meals are prepared throughout the journey.":
    "Makan siang pada Hari 1, makan malam, sarapan, dan hidangan tradisional desa disiapkan sepanjang perjalanan.",
  "Day 1 - Labuan Bajo to Dintor": "Hari 1 - Labuan Bajo ke Dintor",
  "Labuan Bajo Pickup": "Penjemputan di Labuan Bajo",
  "Morning · Car": "Pagi · Mobil",
  "Your guide will pick you up at the airport or your hotel in Labuan Bajo. Today, the journey begins with a scenic drive toward Dintor.":
    "Pemandu akan menjemput Anda di bandara atau hotel di Labuan Bajo. Hari ini, perjalanan dimulai dengan berkendara menikmati pemandangan menuju Dintor.",
  "Cunca Plias Waterfall Visit": "Kunjungan ke Air Terjun Cunca Plias",
  "35 min · Walking": "35 menit · Berjalan kaki",
  "On the way, you will visit Cunca Plias Waterfall. From the parking area, it takes around 35 minutes on foot to reach the waterfall. Guests may enjoy the natural surroundings and swim in the waterfall pool before walking back to the car.":
    "Dalam perjalanan, Anda akan mengunjungi Air Terjun Cunca Plias. Dari area parkir, dibutuhkan sekitar 35 menit berjalan kaki untuk mencapai air terjun. Tamu dapat menikmati alam sekitar dan berenang di kolam air terjun sebelum kembali berjalan ke mobil.",
  "Lembor Rice Fields": "Sawah Lembor",
  "Midday · Car": "Siang · Mobil",
  "The journey continues with a stop at the Lembor irrigation area, home to one of the largest rice field irrigation areas in Flores. A lunch box will be prepared for the trip.":
    "Perjalanan berlanjut dengan singgah di kawasan irigasi Lembor, salah satu kawasan persawahan beririgasi terbesar di Flores. Kotak makan siang akan disiapkan untuk perjalanan.",
  "Watu Weri Beach Coastal Views": "Pemandangan pesisir Pantai Watu Weri",
  "Along the way, you will also have photo stops at Watu Weri Beach and other scenic viewpoints before continuing to Dintor.":
    "Dalam perjalanan, Anda juga akan berhenti untuk berfoto di Pantai Watu Weri dan titik pandang indah lainnya sebelum melanjutkan ke Dintor.",
  "Arrival at Waerebo Lodge": "Tiba di Waerebo Lodge",
  "Tonight, you will stay at Waerebo Lodge, located in the middle of rice fields with open views toward the sea and the Waerebo mountains. Room options may vary, including fan rooms and air-conditioned rooms with hot showers, depending on availability.\n\nDinner will be prepared at the lodge. Rest and overnight at Waerebo Lodge.":
    "Malam ini, Anda akan menginap di Waerebo Lodge yang berada di tengah sawah dengan pemandangan terbuka ke arah laut dan pegunungan Waerebo. Pilihan kamar dapat berbeda sesuai ketersediaan, termasuk kamar dengan kipas atau AC dan shower air panas.\n\nMakan malam disiapkan di lodge. Beristirahat dan bermalamlah di Waerebo Lodge.",
  "Day 2 - Dintor to Waerebo": "Hari 2 - Dintor ke Waerebo",
  "20 min · Car": "20 menit · Mobil",
  "After breakfast at Waerebo Lodge, guests will depart with a local guide by car to the trekking starting point. The drive takes around 20 minutes.":
    "Setelah sarapan di Waerebo Lodge, tamu berangkat bersama pemandu lokal menggunakan mobil menuju titik awal trekking. Perjalanan memakan waktu sekitar 20 menit.",
  "Forest Trekking to Waerebo": "Trekking hutan menuju Waerebo",
  "After the welcome ceremony, guests will enjoy a local lunch, Waerebo coffee, and a short rest. In the afternoon, guests will visit local houses and meet the community. This is a chance to learn more about the architecture of Waerebo’s traditional houses and observe daily village activities such as weaving songket, pounding coffee, and drying coffee beans.":
    "Setelah upacara penyambutan, tamu akan menikmati makan siang lokal, kopi Waerebo, dan beristirahat sejenak. Pada sore hari, tamu mengunjungi rumah warga dan bertemu masyarakat. Ini adalah kesempatan untuk mempelajari arsitektur rumah adat Waerebo serta mengamati aktivitas sehari-hari seperti menenun songket, menumbuk kopi, dan menjemur biji kopi.",
  "Around 6:00 PM, observe traditional cooking before dinner in the village. If the weather is clear, guests may also enjoy night photography or stargazing after dinner, followed by an overnight stay inside Waerebo’s traditional cone-shaped house together with other visitors.":
    "Sekitar pukul 18.00, saksikan proses memasak tradisional sebelum makan malam di desa. Jika cuaca cerah, tamu juga dapat menikmati fotografi malam atau melihat bintang setelah makan malam, lalu bermalam bersama pengunjung lain di dalam rumah adat Waerebo berbentuk kerucut.",
  "Day 3 - Waerebo to Dintor": "Hari 3 - Waerebo ke Dintor",
  "Waerebo & Island Escape": "Waerebo & Jelajah Pulau",
  "4 days, 3 nights": "4 hari, 3 malam",
  "A journey that combines Waerebo mountain trekking with the beauty of Nuca Molas Island":
    "Perjalanan yang memadukan trekking pegunungan Waerebo dengan keindahan Pulau Nuca Molas",
  "Move from mountain culture to the sea on a four-day journey through western Flores and its nearby islands.":
    "Beranjak dari budaya pegunungan menuju laut dalam perjalanan empat hari melintasi Flores bagian barat dan pulau-pulau di sekitarnya.",
  "This 4-day journey combines the cultural and mountain experience of Waerebo with a relaxing island escape to Nuca Molas. Starting from Labuan Bajo, the trip includes waterfall scenery, rice fields, coastal viewpoints, forest trekking, an overnight stay in Waerebo’s traditional cone-shaped house, a boat trip to Nuca Molas Island, and a visit to the spider web rice field viewpoint before returning to Labuan Bajo.":
    "Perjalanan 4 hari ini memadukan pengalaman budaya dan pegunungan Waerebo dengan wisata pulau yang santai ke Nuca Molas. Berangkat dari Labuan Bajo, trip ini mencakup pemandangan air terjun, sawah, titik pandang pesisir, trekking hutan, bermalam di rumah adat Waerebo berbentuk kerucut, perjalanan perahu ke Pulau Nuca Molas, dan kunjungan ke titik pandang sawah jaring laba-laba sebelum kembali ke Labuan Bajo.",
  "Travelers who want to combine mountain trekking, cultural experiences, a relaxing island trip, and scenic Flores landscapes.":
    "Wisatawan yang ingin memadukan trekking gunung, pengalaman budaya, wisata pulau yang santai, dan lanskap Flores yang indah.",
  "4 Days, 3 Nights (2 Nights at Waerebo Lodge, 1 Night at the Village)":
    "4 hari, 3 malam (2 malam di Waerebo Lodge, 1 malam di desa)",
  "Car transfer (Labuan Bajo/Dintor), Optional Ojek (Motorcycle taxi), Boat Trip, and Forest Trekking":
    "Transfer mobil (Labuan Bajo/Dintor), ojek opsional, perjalanan perahu, dan trekking hutan",
  "A scenic drive from Labuan Bajo with stops at Cunca Plias Waterfall and the Lembor rice fields.":
    "Perjalanan darat berpemandangan indah dari Labuan Bajo dengan singgah di Air Terjun Cunca Plias dan sawah Lembor.",
  "A guided forest trek and an official traditional welcome ceremony at the Rumah Gendang.":
    "Trekking hutan bersama pemandu dan upacara penyambutan adat resmi di Rumah Gendang.",
  "An overnight stay inside Waerebo's iconic cone-shaped traditional house.":
    "Bermalam di dalam rumah adat Waerebo berbentuk kerucut yang ikonik.",
  "A relaxing boat trip to Nuca Molas Island to enjoy white sand beaches and experience a local fishing village.":
    "Perjalanan perahu santai ke Pulau Nuca Molas untuk menikmati pantai berpasir putih dan merasakan kehidupan desa nelayan setempat.",
  "A trek to the spider web rice field viewpoint.":
    "Trekking menuju titik pandang sawah jaring laba-laba.",
  "This trip includes waterfall walking, mountain trekking, boat travel, beach activities, a shared traditional sleeping arrangement, simple village facilities, and limited electricity in Waerebo. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, comfortable clothes for waterfall and island activities, light rain protection, and personal essentials.":
    "Trip ini mencakup perjalanan kaki ke air terjun, trekking gunung, perjalanan perahu, aktivitas pantai, tempat tidur tradisional bersama, fasilitas desa sederhana, dan listrik terbatas di Waerebo. Tamu disarankan membawa sepatu trekking yang nyaman, pakaian hangat untuk malam hari, senter, air minum, pakaian nyaman untuk aktivitas air terjun dan pulau, pelindung hujan ringan, serta keperluan pribadi.",
  "for nights 1 and 3 in this daytime itinerary, please choose your room type for this trip.":
    "untuk malam ke-1 dan ke-3 dalam itinerary ini; silakan pilih tipe kamar untuk trip ini.",
  "Traditional village meals are prepared throughout the journey.":
    "Hidangan tradisional desa disiapkan sepanjang perjalanan.",
  "Lembor Irrigation Rice Fields": "Persawahan irigasi Lembor",
  "The trip continues with a photo stop at the Lembor rice field irrigation area, one of the largest rice-producing areas in Flores. Lunch will be prepared during the trip.":
    "Trip berlanjut dengan berhenti untuk berfoto di kawasan irigasi sawah Lembor, salah satu daerah penghasil beras terbesar di Flores. Makan siang akan disiapkan selama perjalanan.",
  "Watu Weri Beach": "Pantai Watu Weri",
  "Waerebo Lodge Arrival": "Tiba di Waerebo Lodge",
  "Tonight, guests will stay at Waerebo Lodge, located in the middle of rice fields with open views toward the sea, rice fields, and the Waerebo mountains. Dinner will be prepared at the lodge. Rest and overnight at Waerebo Lodge.":
    "Malam ini, tamu akan menginap di Waerebo Lodge yang berada di tengah sawah dengan pemandangan terbuka ke arah laut, persawahan, dan pegunungan Waerebo. Makan malam disiapkan di lodge. Beristirahat dan bermalamlah di Waerebo Lodge.",
  "Day 3 - Waerebo to Nuca Molas": "Hari 3 - Waerebo ke Nuca Molas",
  "Boat Trip to Nuca Molas": "Perjalanan perahu ke Nuca Molas",
  "Midday · Boat Trip": "Siang · Perjalanan perahu",
  "The journey continues with a boat trip to Nuca Molas Island. It offers clear sea water and a white sand beach, making it a beautiful place to relax, swim, and enjoy the island atmosphere. Lunch will be prepared for the trip.\n\nExperience the daily life of the locals. The island is home to around 1,500 residents, spread across three villages. Most local people are fishermen, with daily activities such as fishing, drying fish, and making traditional boats.":
    "Perjalanan berlanjut dengan perahu menuju Pulau Nuca Molas. Air lautnya jernih dan pantainya berpasir putih, menjadikannya tempat yang indah untuk bersantai, berenang, dan menikmati suasana pulau. Makan siang akan disiapkan untuk perjalanan.\n\nRasakan kehidupan sehari-hari masyarakat setempat. Pulau ini dihuni sekitar 1.500 penduduk yang tersebar di tiga desa. Sebagian besar warga adalah nelayan dengan aktivitas seperti menangkap ikan, menjemur ikan, dan membuat perahu tradisional.",
  "Day 4 - Dintor to Labuan Bajo": "Hari 4 - Dintor ke Labuan Bajo",
  Breakfast: "Sarapan",
  Morning: "Pagi",
  "After breakfast, the journey continues back to Labuan Bajo.":
    "Setelah sarapan, perjalanan dilanjutkan kembali ke Labuan Bajo.",
  "Lingko Spider Web Rice Fields": "Sawah jaring laba-laba Lingko",
  "1 hour · Trek Walking": "1 jam · Berjalan kaki",
  "On the way, guests will visit the spider web rice field viewpoint. It takes around 1 hour on foot to reach the viewpoint. A lunch box will be prepared for the trip.":
    "Dalam perjalanan, tamu akan mengunjungi titik pandang sawah jaring laba-laba. Dibutuhkan sekitar 1 jam berjalan kaki untuk mencapai titik pandang. Kotak makan siang akan disiapkan untuk perjalanan.",
  "Labuan Bajo": "Labuan Bajo",
  Afternoon: "Sore",
  "After the visit, the journey continues to Labuan Bajo. The trip ends upon arrival in Labuan Bajo.":
    "Setelah kunjungan, perjalanan dilanjutkan menuju Labuan Bajo. Trip berakhir setibanya di Labuan Bajo.",
  "Flores Heritage & Waerebo": "Warisan Flores & Waerebo",
  "Explore Flores history, culture, and the legendary Waerebo Village":
    "Jelajahi sejarah, budaya Flores, dan Desa Waerebo yang legendaris",
  "An overland cultural journey through Ruteng, Liang Bua, the spiderweb rice fields, and Waerebo Village.":
    "Perjalanan budaya melalui jalur darat melintasi Ruteng, Liang Bua, sawah jaring laba-laba, dan Desa Waerebo.",
  "This 4-day journey is designed for travelers who want to explore more of Flores beyond Waerebo. The trip combines natural scenery, cultural landmarks, traditional landscapes, the historical Liang Bua Hobbit Cave, and an overnight cultural experience inside Waerebo’s traditional cone-shaped house.":
    "Perjalanan 4 hari ini dirancang bagi wisatawan yang ingin menjelajahi Flores lebih jauh, tidak hanya Waerebo. Trip ini memadukan pemandangan alam, situs budaya, lanskap tradisional, Gua Hobbit Liang Bua yang bersejarah, dan pengalaman budaya dengan bermalam di dalam rumah adat Waerebo berbentuk kerucut.",
  "Travelers who want to explore Flores history, local culture, traditional landscapes, and Waerebo Village in one complete journey from Labuan Bajo.":
    "Wisatawan yang ingin menjelajahi sejarah Flores, budaya lokal, lanskap tradisional, dan Desa Waerebo dalam satu perjalanan lengkap dari Labuan Bajo.",
  "4 Days, 3 Nights (1 Night Ruteng, 1 Night Waerebo Lodge, 1 Night Village)":
    "4 hari, 3 malam (1 malam di Ruteng, 1 malam di Waerebo Lodge, 1 malam di desa)",
  "Car transfer, Optional Ojek (Motorcycle taxi), and Forest Trekking":
    "Transfer mobil, ojek opsional, dan trekking hutan",
  "A scenic drive to Ruteng with stops at Cunca Plias Waterfall and the Lembor rice fields.":
    "Perjalanan darat berpemandangan indah menuju Ruteng dengan singgah di Air Terjun Cunca Plias dan sawah Lembor.",
  "Visits to the unique Cancar spider web rice fields, Ruteng traditional market, and Ruteng Cathedral.":
    "Kunjungan ke sawah jaring laba-laba Cancar yang unik, pasar tradisional Ruteng, dan Katedral Ruteng.",
  "An exploration of the historical Liang Bua Hobbit Cave.":
    "Menjelajahi Gua Hobbit Liang Bua yang bersejarah.",
  "This trip includes waterfall walking, cultural sightseeing, mountain trekking, a shared traditional sleeping arrangement, simple village facilities, and limited electricity in Waerebo. Guests are encouraged to bring comfortable trekking shoes, warm clothing for the evening, a flashlight, drinking water, comfortable clothes for the waterfall, light rain protection, and personal essentials.":
    "Trip ini mencakup perjalanan kaki ke air terjun, wisata budaya, trekking gunung, tempat tidur tradisional bersama, fasilitas desa sederhana, dan listrik terbatas di Waerebo. Tamu disarankan membawa sepatu trekking yang nyaman, pakaian hangat untuk malam hari, senter, air minum, pakaian nyaman untuk air terjun, pelindung hujan ringan, serta keperluan pribadi.",
  "First Night will check-in and rest at a hotel in Ruteng":
    "Malam pertama check-in dan beristirahat di hotel di Ruteng",
  "after a day of exploring.": "setelah seharian menjelajah.",
  "hotel in Ruteng": "hotel di Ruteng",
  "Next night will be at our Waerebo Lodge.":
    "Malam berikutnya menginap di Waerebo Lodge.",
  "Located in the middle of rice fields with open views toward the sea, rice fields, and the Waerebo mountains.":
    "Berada di tengah sawah dengan pemandangan terbuka ke arah laut, persawahan, dan pegunungan Waerebo.",
  "Night 3 will be at the traditional house.":
    "Malam ke-3 menginap di rumah adat.",
  "Guests sleep in a shared open sleeping area. Bathroom and toilet are located outside. Electricity is very limited and usually available only from around 6:00 PM to 10:00 PM.":
    "Tamu tidur di area terbuka bersama. Kamar mandi dan toilet berada di luar. Listrik sangat terbatas dan biasanya hanya tersedia sekitar pukul 18.00 hingga 22.00.",
  "Day 1 - Labuan Bajo to Ruteng": "Hari 1 - Labuan Bajo ke Ruteng",
  "Your guide will pick you up at the airport or your hotel in Labuan Bajo. Today, the journey begins with a scenic drive toward Ruteng.":
    "Pemandu akan menjemput Anda di bandara atau hotel di Labuan Bajo. Hari ini, perjalanan dimulai dengan berkendara menikmati pemandangan menuju Ruteng.",
  "The first stop is Cunca Plias Waterfall. From the parking area, it takes around 35 minutes on foot to reach the waterfall. Guests may enjoy the natural surroundings and swim in the waterfall pool before continuing the journey.":
    "Perhentian pertama adalah Air Terjun Cunca Plias. Dari area parkir, dibutuhkan sekitar 35 menit berjalan kaki untuk mencapai air terjun. Tamu dapat menikmati alam sekitar dan berenang di kolam air terjun sebelum melanjutkan perjalanan.",
  "Visit the Cancar spider web rice fields, a unique traditional rice field system in Manggarai. Its spider web shape reflects one of the oldest land division systems in Flores and symbolizes unity within the Manggarai community.":
    "Kunjungi sawah jaring laba-laba Cancar, sistem persawahan tradisional Manggarai yang unik. Bentuk jaring laba-labanya mencerminkan salah satu sistem pembagian tanah tertua di Flores dan melambangkan persatuan masyarakat Manggarai.",
  "Arrival at Ruteng": "Tiba di Ruteng",
  "Upon arrival at Ruteng, guests will check in and rest after a day of exploring. The afternoon continues with visits to the traditional market and cathedral.":
    "Setibanya di Ruteng, tamu akan check-in dan beristirahat setelah seharian menjelajah. Sore hari dilanjutkan dengan mengunjungi pasar tradisional dan katedral.",
  "Ruteng Traditional Market": "Pasar Tradisional Ruteng",
  "After arriving in Ruteng and checking in at the hotel, visit the Ruteng traditional market and experience the rhythm of everyday local life.":
    "Setelah tiba di Ruteng dan check-in di hotel, kunjungi pasar tradisional Ruteng dan rasakan keseharian masyarakat setempat.",
  "Ruteng Cathedral": "Katedral Ruteng",
  "Following the market, visit Ruteng Cathedral. Dinner will be prepared before resting overnight in Ruteng.":
    "Setelah dari pasar, kunjungi Katedral Ruteng. Makan malam akan disiapkan sebelum beristirahat semalam di Ruteng.",
  "Day 2 - Ruteng to Dintor": "Hari 2 - Ruteng ke Dintor",
  "Morning Departure": "Keberangkatan pagi",
  "After breakfast in Ruteng, the journey continues toward Dintor with a visit to Liang Bua.":
    "Setelah sarapan di Ruteng, perjalanan dilanjutkan menuju Dintor dengan mengunjungi Liang Bua.",
  "Hobbit Cave Liang Bua": "Gua Hobbit Liang Bua",
  "Midday · Trek Walking": "Siang · Berjalan kaki",
  "This cave is an important historical site in Flores, known for the discovery of ancient small-bodied human fossils. Your guide will share the story of the discovery and its significance to Flores history.":
    "Gua ini merupakan situs bersejarah penting di Flores yang dikenal sebagai lokasi penemuan fosil manusia purba bertubuh kecil. Pemandu akan menceritakan kisah penemuan tersebut dan maknanya bagi sejarah Flores.",
  "Afternoon Transfer": "Transfer sore",
  "Afternoon · Car": "Sore · Mobil",
  "After the cave visit, lunch will be prepared. The journey then continues toward Dintor.":
    "Setelah mengunjungi gua, makan siang akan disiapkan. Perjalanan kemudian dilanjutkan menuju Dintor.",
  "Day 3 - Dintor to Waerebo": "Hari 3 - Dintor ke Waerebo",
  "In the afternoon, explore the traditional houses, meet the community, and observe daily activities like weaving songket and coffee processing.":
    "Pada sore hari, jelajahi rumah adat, temui masyarakat, dan amati aktivitas sehari-hari seperti menenun songket dan mengolah kopi.",
  "Enjoy a local lunch and authentic Waerebo coffee after the ceremony.":
    "Nikmati makan siang lokal dan kopi Waerebo autentik setelah upacara.",
  "Day 4 - Waerebo to Dintor": "Hari 4 - Waerebo ke Dintor",
  "Morning · Breakfast by the village": "Pagi · Sarapan dari desa",
  "Upon arrival at Waerebo Lodge, guests may take a shower and enjoy lunch before completing the journey.":
    "Setibanya di Waerebo Lodge, tamu dapat mandi dan menikmati makan siang sebelum mengakhiri perjalanan.",
  "Upon arrival at Waerebo Lodge, guests may take a shower and enjoy lunch. After lunch, the journey continues back to Labuan Bajo, where the trip ends.":
    "Setibanya di Waerebo Lodge, tamu dapat mandi dan menikmati makan siang. Setelah makan siang, perjalanan dilanjutkan kembali ke Labuan Bajo, tempat trip berakhir.",
  "After returning from Nuca Molas Island, continue by boat to Dintor and transfer to Waerebo Lodge. Dinner will be prepared at the lodge before your second overnight stay.":
    "Setelah kembali dari Pulau Nuca Molas, lanjutkan perjalanan dengan perahu ke Dintor lalu transfer ke Waerebo Lodge. Makan malam akan disiapkan di lodge sebelum bermalam untuk malam kedua.",
  "A quick, immersive one-day trip from Waerebo Lodge featuring scenic views, a forest trek, a cultural introduction, local lunch, and Waerebo coffee before returning to Dintor in the afternoon.":
    "Perjalanan satu hari yang singkat dan mendalam dari Waerebo Lodge, mencakup pemandangan indah, trekking hutan, pengenalan budaya, makan siang lokal, dan kopi Waerebo sebelum kembali ke Dintor pada sore hari.",
  "Immerse yourself in a two-day, one-night Waerebo trip. Trek to the village, connect with the local community over traditional food and coffee, and sleep inside the iconic cone-shaped house.":
    "Nikmati perjalanan Waerebo selama dua hari satu malam. Trekking menuju desa, berinteraksi dengan masyarakat setempat sambil menikmati makanan tradisional dan kopi, lalu bermalam di rumah kerucut yang ikonik.",
  "Nature & Culture": "Alam & Budaya",
  "Starting from Labuan Bajo, enjoy scenic waterfalls, rice terraces, and coastal views, paired with stays at Waerebo Lodge and Waerebo Village, including a visit inside the traditional cone-shaped house (Mbaru Niang). The journey lasts three days and two nights.":
    "Berangkat dari Labuan Bajo, nikmati air terjun, terasering sawah, dan pemandangan pesisir, dilengkapi dengan menginap di Waerebo Lodge dan Desa Waerebo serta mengunjungi bagian dalam rumah adat berbentuk kerucut (Mbaru Niang). Perjalanan berlangsung selama tiga hari dua malam.",
  "Combine mountain culture with a relaxing island escape on a four-day, three-night trip. Depart from Labuan Bajo to experience waterfalls, an overnight stay in Waerebo Village, a Nuca Molas Island boat trip, and the famous spider web rice fields.":
    "Padukan budaya pegunungan dengan liburan santai di pulau selama empat hari tiga malam. Berangkat dari Labuan Bajo untuk menikmati air terjun, bermalam di Desa Waerebo, perjalanan perahu ke Pulau Nuca Molas, dan sawah jaring laba-laba yang terkenal.",
  "Explore deeper into Flores on a four-day, three-night trip. Combine your Waerebo overnight stay with breathtaking scenery, cultural landmarks, and a visit to the historic Liang Bua Hobbit Cave.":
    "Jelajahi Flores lebih dalam selama empat hari tiga malam. Padukan pengalaman bermalam di Waerebo dengan pemandangan menakjubkan, landmark budaya, dan kunjungan ke Gua Hobbit Liang Bua yang bersejarah.",
  "A total of 1 day, with no overnight stay.": "Total 1 hari, tanpa menginap.",
  "1 day": "1 hari",
  "no overnight stay": "tanpa menginap",
  "A total of 2 days and 1 night.": "Total 2 hari dan 1 malam.",
  "2 days and 1 night": "2 hari dan 1 malam",
  "A total of 3 days and 2 nights.": "Total 3 hari dan 2 malam.",
  "3 days and 2 nights": "3 hari dan 2 malam",
  "A total of 4 days and 3 nights.": "Total 4 hari dan 3 malam.",
  "4 days and 3 nights": "4 hari dan 3 malam",
  "Cultural village exploration.": "Eksplorasi desa budaya.",
  "Lunch prepared in the village.": "Makan siang disiapkan di desa.",
  "Multiple meals prepared during the trip.":
    "Beberapa hidangan disiapkan selama perjalanan.",
  "Rumah Gendang (main house) visit.":
    "Kunjungan ke Rumah Gendang (rumah utama).",
  "Some transportation provided.": "Sebagian transportasi disediakan.",
  "Waerebo Village stay not included.":
    "Menginap di Desa Waerebo tidak termasuk.",
  "A taste of authentic Waerebo coffee.":
    "Mencicipi kopi Waerebo yang autentik.",
  "authentic Waerebo coffee": "kopi Waerebo yang autentik",
  "Lodge stay not included.": "Menginap di lodge tidak termasuk.",
  "A scenic trek through the forest.":
    "Trekking berpemandangan indah melalui hutan.",
  "1-night stay in Waerebo Village.": "Menginap 1 malam di Desa Waerebo.",
  "Iconic rice field and beach visits.":
    "Kunjungan ke sawah dan pantai yang ikonik.",
  "1-night stay at Waerebo Lodge.": "Menginap 1 malam di Waerebo Lodge.",
  "2-night stay at Waerebo Lodge.": "Menginap 2 malam di Waerebo Lodge.",
  "Cunca Plias Waterfall visit.": "Kunjungan ke Air Terjun Cunca Plias.",
  "Boat trip to Nuca Molas Island.": "Perjalanan perahu ke Pulau Nuca Molas.",
  "1-night stay in Ruteng.": "Menginap 1 malam di Ruteng.",
  "Ruteng Cathedral and market visits.":
    "Kunjungan ke Katedral dan pasar Ruteng.",
  "Entry to Liang Bua Hobbit Cave.": "Tiket masuk ke Gua Hobbit Liang Bua.",
  Pickup: "Penjemputan",
  "Pleas Waterfall": "Air Terjun Pleas",
  "Lembor irrigation rice fields": "Sawah irigasi Lembor",
  "Hobbit Cave": "Gua Hobbit",
  "Create Your Own Itineraries": "Buat Itinerary Anda Sendiri",
  Custom: "Kustom",
  "A flexible journey combining Waerebo trekking with your chosen destinations":
    "Perjalanan fleksibel yang memadukan trekking Waerebo dengan destinasi pilihan Anda",
  "Tell us your dates and interests; our local team will shape a private Flores journey around you.":
    "Sampaikan tanggal dan minat Anda; tim lokal kami akan merancang perjalanan privat Flores khusus untuk Anda.",
};

function localizeValue(value: unknown): unknown {
  if (typeof value === "string") return indonesia[value] ?? value;
  if (Array.isArray(value)) return value.map(localizeValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, localizeValue(entry)])
    );
  }
  return value;
}

export function getTripPrograms(lang: Lang): TripProgram[] {
  if (lang === "en") return tripPrograms;
  return tripPrograms.map((program) => localizeValue(program) as TripProgram);
}

export function getMissingTripTranslations(): string[] {
  const missing = new Set<string>();
  const ignoredKeys = new Set([
    "id",
    "icon",
    "heroDesktop",
    "heroMobile",
    "image",
    "tone",
    "emphasisTone",
  ]);

  const visit = (value: unknown, key?: string) => {
    if (typeof value === "string") {
      const isStructural =
        key === "id" ||
        value === "" ||
        value.trim() === "" ||
        value.startsWith("/") ||
        value.startsWith("http") ||
        /^[a-z0-9-]+$/.test(value);
      if (!isStructural && !indonesia[value]) missing.add(value);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((entry) => visit(entry, key));
      return;
    }
    if (value && typeof value === "object") {
      Object.entries(value).forEach(([entryKey, entry]) => {
        if (!ignoredKeys.has(entryKey)) visit(entry, entryKey);
      });
    }
  };

  tripPrograms.forEach((program) => visit(program));
  return [...missing];
}
