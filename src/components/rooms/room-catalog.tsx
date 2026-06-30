"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowUpRight, Heart, MapPin, Star, X } from "lucide-react";
import {
  rooms,
  type Room,
  type RoomCategory,
  type RoomLocation,
} from "@/src/data/rooms";

type Filter = "all" | RoomCategory;
type LocationFilter = "all" | "kinshasa" | RoomLocation;
type PriceRange = { min: number; max: number } | null;

const filters: { label: string; value: Filter }[] = [
  { label: "Toutes", value: "all" },
  { label: "Essentielles", value: "essential" },
  { label: "Deluxe", value: "deluxe" },
  { label: "Suites", value: "suite" },
];

function RoomCard({
  room,
  favorite,
  onFavorite,
}: {
  room: Room;
  favorite: boolean;
  onFavorite: (event: MouseEvent<HTMLButtonElement>, id: string) => void;
}) {
  return (
    <article className="group min-w-0" data-catalog-card>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-zinc-200">
        <Image
          src={room.image}
          alt={room.alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 rounded-full border border-white/70 bg-black/20 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
          {room.categoryLabel}
        </span>

        <button
          type="button"
          aria-label={
            favorite
              ? `Retirer ${room.name} des favoris`
              : `Ajouter ${room.name} aux favoris`
          }
          aria-pressed={favorite}
          onClick={(event) => onFavorite(event, room.id)}
          className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white text-black transition-colors hover:bg-zinc-100"
        >
          <Heart
            className={`size-4 ${favorite ? "fill-black" : "fill-transparent"}`}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>

        <Link
          href="#booking"
          aria-label={`Réserver ${room.name}`}
          className="absolute right-3 bottom-3 grid size-10 place-items-center rounded-full bg-black text-white transition-transform group-hover:rotate-45"
        >
          <ArrowUpRight
            className="size-5"
            strokeWidth={2.3}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[17px] font-semibold leading-tight">
            {room.name}
          </h3>
          <p className="mt-2 max-w-[270px] text-[11px] font-medium leading-4 text-zinc-500">
            {room.description}
          </p>
          <p className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-zinc-500">
            <Star
              className="size-3 fill-black text-black"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            {room.rating}
            <span className="mx-1 text-zinc-300">·</span>
            <MapPin className="size-3" strokeWidth={1.8} aria-hidden="true" />
            {room.locationLabel}
          </p>
        </div>
        <p className="shrink-0 text-right text-sm font-semibold">
          ${room.price}
          <span className="block text-[9px] font-medium text-zinc-400">
            par nuit
          </span>
        </p>
      </div>
    </article>
  );
}

export default function RoomCatalog() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [locationFilter, setLocationFilter] =
    useState<LocationFilter>("all");
  const [priceRange, setPriceRange] = useState<PriceRange>(null);
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set());
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const applyUrlFilters = () => {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category");
      const location = params.get("location");
      const minPrice = Number(params.get("minPrice"));
      const maxPrice = Number(params.get("maxPrice"));

      const validCategory: Filter = ["essential", "deluxe", "suite"].includes(
        category ?? "",
      )
        ? (category as RoomCategory)
        : "all";

      const validLocation: LocationFilter = [
        "kinshasa",
        "gombe",
        "ngaliema",
        "kintambo",
      ].includes(location ?? "")
        ? (location as Exclude<LocationFilter, "all">)
        : "all";

      setActiveFilter(validCategory);
      setLocationFilter(validLocation);
      setPriceRange(
        Number.isFinite(minPrice) &&
          Number.isFinite(maxPrice) &&
          minPrice > 0 &&
          maxPrice >= minPrice
          ? { min: minPrice, max: maxPrice }
          : null,
      );
    };

    applyUrlFilters();
    window.addEventListener("popstate", applyUrlFilters);
    return () => window.removeEventListener("popstate", applyUrlFilters);
  }, []);

  const visibleRooms = useMemo(
    () =>
      rooms.filter((room) => {
        const matchesCategory =
          activeFilter === "all" || room.category === activeFilter;
        const matchesLocation =
          locationFilter === "all" ||
          locationFilter === "kinshasa" ||
          room.location === locationFilter;
        const matchesPrice =
          !priceRange ||
          (room.price >= priceRange.min && room.price <= priceRange.max);

        return matchesCategory && matchesLocation && matchesPrice;
      }),
    [activeFilter, locationFilter, priceRange],
  );

  useGSAP(
    () => {
      if (!grid.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(grid.current.children, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        grid.current.children,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
        },
      );
    },
    {
      scope: grid,
      dependencies: [activeFilter, locationFilter, priceRange],
      revertOnUpdate: true,
    },
  );

  const hasFilters =
    activeFilter !== "all" || locationFilter !== "all" || priceRange !== null;

  const locationLabel =
    locationFilter === "kinshasa"
      ? "Kinshasa"
      : rooms.find((room) => room.location === locationFilter)?.locationLabel;

  const categoryLabel = filters.find(
    (filter) => filter.value === activeFilter,
  )?.label;

  const clearFilters = () => {
    setActiveFilter("all");
    setLocationFilter("all");
    setPriceRange(null);
    window.history.replaceState(null, "", "/chambres#chambres");
  };

  const toggleFavorite = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

    gsap.fromTo(
      event.currentTarget,
      { scale: 0.82 },
      { scale: 1, duration: 0.5, ease: "back.out(2.5)", overwrite: true },
    );
  };

  return (
    <section id="chambres" className="bg-white px-4 py-16 text-black md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              Notre collection
            </span>
            <h2 className="mt-3 font-heading text-[34px] font-medium leading-none md:text-[46px]">
              Trouvez votre chambre
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrer les chambres"
            className="flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-zinc-200 bg-zinc-50 p-1"
          >
            {filters.map((filter) => {
              const active = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`h-8 shrink-0 rounded-full px-4 text-[10px] font-semibold transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "text-zinc-600 hover:bg-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {hasFilters ? (
          <div
            data-animate="reveal"
            className="mt-7 flex flex-col gap-4 border-y border-zinc-200 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold">
              <span className="text-zinc-400">Recherche active :</span>
              {locationLabel ? (
                <span className="rounded-full border border-zinc-200 px-3 py-1">
                  {locationLabel}
                </span>
              ) : null}
              {activeFilter !== "all" ? (
                <span className="rounded-full border border-zinc-200 px-3 py-1">
                  {categoryLabel}
                </span>
              ) : null}
              {priceRange ? (
                <span className="rounded-full border border-zinc-200 px-3 py-1">
                  ${priceRange.min} - ${priceRange.max}
                </span>
              ) : null}
              <span className="text-zinc-500">
                {visibleRooms.length} résultat
                {visibleRooms.length === 1 ? "" : "s"}
              </span>
            </div>

            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex w-fit items-center gap-2 text-[10px] font-semibold transition-colors hover:text-zinc-500"
            >
              <X className="size-3.5" strokeWidth={2} />
              Effacer les filtres
            </button>
          </div>
        ) : null}

        <div
          ref={grid}
          className="mt-10 grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              favorite={favorites.has(room.id)}
              onFavorite={toggleFavorite}
            />
          ))}

          {visibleRooms.length === 0 ? (
            <div className="py-10 sm:col-span-2 lg:col-span-3">
              <h3 className="font-heading text-[26px] font-medium">
                Aucun séjour ne correspond à ces critères
              </h3>
              <p className="mt-3 max-w-[480px] text-xs font-medium leading-5 text-zinc-500">
                Élargissez la zone, la catégorie ou le budget pour afficher
                davantage de chambres.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 h-10 rounded-full bg-black px-5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Voir toutes les chambres
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
