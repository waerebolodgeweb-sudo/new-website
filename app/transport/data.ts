const bookMessage = `Hello Waerebo Lodge! 🌿\n\nI'd like to arrange transport for my trip.\n\nPlease share availability and options. Thank you!`;

export const transportShowcase = {
  titleHead: "Waerebo Lodge ",
  titleTail: "Transport",
  subtitle:
    "Effortless travel solutions for your mountain journey. We handle the driving so you can enjoy the view. From scenic overland car transfers to quick rides to the Dintor terminal, we make sure you reach your trekking starting line on time and stress-free.",
  heroImage: "/trip/stop-1.jpg",
  buttonLabel: "Book Transport",
  bookHref: `https://wa.me/6285339021145?text=${encodeURIComponent(bookMessage)}`,
  href: "/transport",
  thumbnails: [
    {
      src: "/trip/stop-1.jpg",
      alt: "Trek stop on the way to Waerebo village",
    },
    {
      src: "/trip/stop-2.jpg",
      alt: "Group at the trailhead",
    },
    {
      src: "/home/contact-us.jpg",
      alt: "Scenic overland transfer",
    },
    {
      src: "/about/tile-nusa-molas.jpg",
      alt: "Local scenery on the route",
    },
  ],
};
