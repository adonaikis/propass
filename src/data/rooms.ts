export type RoomCategory = "essential" | "deluxe" | "suite";
export type RoomLocation = "gombe" | "ngaliema" | "kintambo";

export type Room = {
  id: string;
  name: string;
  category: RoomCategory;
  categoryLabel: string;
  location: RoomLocation;
  locationLabel: string;
  image: string;
  alt: string;
  price: number;
  rating: string;
  description: string;
};

export const rooms: Room[] = [
  {
    id: "horizon",
    name: "Chambre Horizon",
    category: "deluxe",
    categoryLabel: "Deluxe",
    location: "gombe",
    locationLabel: "Gombe",
    image: "/images/propass-about-window.jpg",
    alt: "Chambre avec grande baie vitrée et vue sur la ville",
    price: 185,
    rating: "4,9",
    description: "Vue urbaine, lit king-size et espace lounge.",
  },
  {
    id: "jardin",
    name: "Chambre Jardin",
    category: "essential",
    categoryLabel: "Essentielle",
    location: "ngaliema",
    locationLabel: "Ngaliema",
    image: "/images/propass-trusted-room.jpg",
    alt: "Chambre lumineuse ouverte sur un jardin tropical",
    price: 140,
    rating: "4,8",
    description: "Calme, lumière naturelle et balcon végétalisé.",
  },
  {
    id: "signature",
    name: "Suite Signature",
    category: "suite",
    categoryLabel: "Suite",
    location: "gombe",
    locationLabel: "Gombe",
    image: "/images/propass-excellence-room.jpg",
    alt: "Suite contemporaine avec coin salon et vue panoramique",
    price: 320,
    rating: "5,0",
    description: "Suite spacieuse, salon privé et service premium.",
  },
  {
    id: "lumiere",
    name: "Chambre Lumière",
    category: "essential",
    categoryLabel: "Essentielle",
    location: "kintambo",
    locationLabel: "Kintambo",
    image: "/images/propass-best-golden.jpg",
    alt: "Chambre blanche lumineuse avec plantes et lit confortable",
    price: 120,
    rating: "4,7",
    description: "Atmosphère douce et confort essentiel au quotidien.",
  },
  {
    id: "nocturne",
    name: "Suite Nocturne",
    category: "suite",
    categoryLabel: "Suite",
    location: "ngaliema",
    locationLabel: "Ngaliema",
    image: "/images/propass-trusted-suite.jpg",
    alt: "Suite calme avec grand lit près d'une fenêtre",
    price: 240,
    rating: "4,8",
    description: "Ambiance feutrée et tranquillité absolue.",
  },
  {
    id: "atelier",
    name: "Chambre Atelier",
    category: "deluxe",
    categoryLabel: "Deluxe",
    location: "kintambo",
    locationLabel: "Kintambo",
    image: "/images/propass-footer-room.jpg",
    alt: "Chambre d'hôtel moderne avec bureau et lumière naturelle",
    price: 165,
    rating: "4,8",
    description: "Pensée pour travailler, se reposer et ralentir.",
  },
];
