export const studioPhone = { display: "098617 29966", international: "+919861729966" };

export type Service = {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  eyebrow: string;
};

export const services: Service[] = [
  {
    id: "manicure",
    name: "Signature Manicures",
    short: "Everyday elegance, perfectly polished.",
    description: "Thoughtful nail prep, shaping and a polished finish tailored to your style.",
    image: "/images/service-manicure.webp",
    eyebrow: "01 / THE CLASSICS",
  },
  {
    id: "extensions",
    name: "Nail Extensions",
    short: "A little extra length, a lot of confidence.",
    description: "Beautifully shaped extensions for a soft, natural look or a bold statement.",
    image: "/images/service-tools.webp",
    eyebrow: "02 / THE TRANSFORMATIONS",
  },
  {
    id: "nail-art",
    name: "Creative Nail Art",
    short: "Tiny details. Endless possibilities.",
    description: "Hand-painted details, embellishments, florals and one-of-a-kind designs.",
    image: "/images/service-charms.webp",
    eyebrow: "03 / THE ARTISTRY",
  },
  {
    id: "press-ons",
    name: "Custom Press-On Nails",
    short: "Statement nails, made to wear your way.",
    description: "Personalised nail looks for special moments or whenever inspiration strikes.",
    image: "/images/service-pressons.webp",
    eyebrow: "04 / THE COLLECTION",
  },
];

export const gallery = [
  { image: "/images/gallery/henna-red-tips.webp", alt: "Red and gold French tips on henna-decorated hands" },
  { image: "/images/gallery/blue-gold-accents.webp", alt: "Dark blue nails with gold accents" },
  { image: "/images/gallery/pink-florals.webp", alt: "Shimmery pink nails with white floral accents" },
  { image: "/images/gallery/black-french-tips.webp", alt: "Black French tips with tiny black hearts" },
  { image: "/images/gallery/glossy-red.webp", alt: "Glossy red manicure with jewel accents" },
  { image: "/images/gallery/green-chrome.webp", alt: "Iridescent green and pink chrome nails" },
];

export const reviews = [
  {
    service: "Signature Manicure",
    rating: 5,
    quote: "The shape was exactly what I wanted, and the sheer pink finish looked so clean.",
  },
  {
    service: "Creative Nail Art",
    rating: 5,
    quote: "I brought a photo of tiny daisies, and the artist helped me pick colours that worked beautifully together.",
  },
  {
    service: "Custom Press-On Nails",
    rating: 5,
    quote: "The sizing felt right on every finger, and the little pearl accents were my favourite part.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "The Studio", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
