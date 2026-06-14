const bookMessage = `Hello Waerebo Lodge! 🌿\n\nI'd like to book a table / meal at the Waerebo Lodge Restaurant.\n\nPlease share availability. Thank you!`;

export const restaurantShowcase = {
  titleHead: "Waerebo Lodge ",
  titleTail: "Restaurant",
  subtitle:
    "Taste the true flavors of Flores at our lodge. Curated by our co-founder, our kitchen serves up comforting local meals, trail-ready lunch boxes, and authentic local dishes. We even love it when guests share recipes from their home countries.",
  heroImage: "/restaurant/hero.jpg",
  buttonLabel: "Book Restaurant",
  bookHref: `https://wa.me/6285339021145?text=${encodeURIComponent(bookMessage)}`,
  href: "/restaurant",
  thumbnails: [
    {
      src: "/restaurant/dining-hall.jpg",
      alt: "Open-air dining hall with guests sharing a long table",
    },
    {
      src: "/restaurant/chef.jpg",
      alt: "Isabela serving traditional Flores dishes to guests",
    },
    {
      src: "/restaurant/cuisine.jpg",
      alt: "A platter of freshly cooked local Flores cuisine",
    },
    {
      src: "/restaurant/shared-table.jpg",
      alt: "Guests sharing a meal overlooking the rice fields",
    },
  ],
};
