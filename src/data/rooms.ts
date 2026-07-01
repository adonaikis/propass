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
    image: "/PHOTO-PROPASS/chambre100$1.jpg",
    alt: "Chambre Propass avec lit double et espace près de la fenêtre",
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
    image: "/PHOTO-PROPASS/chambre70$.jpg",
    alt: "Chambre Propass claire avec plusieurs couchages",
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
    image: "/PHOTO-PROPASS/chambre100$.jpg",
    alt: "Chambre Propass avec grand lit et linge soigneusement préparé",
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
    image: "/PHOTO-PROPASS/chambre50$.jpg",
    alt: "Chambre Propass avec lit double et linge orange",
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
    image: "/PHOTO-PROPASS/chambre1.jpg",
    alt: "Chambre Propass chaleureuse avec deux couchages",
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
    image: "/PHOTO-PROPASS/chambre70$.jpg",
    alt: "Chambre Propass lumineuse avec lits en bois",
    price: 165,
    rating: "4,8",
    description: "Pensée pour travailler, se reposer et ralentir.",
  },
];
