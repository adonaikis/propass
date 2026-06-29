"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, type MouseEvent } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowUpRight, Heart, Star } from "lucide-react";
import { rooms, type Room, type RoomCategory } from "@/src/data/rooms";

type Filter = "all" | RoomCategory;

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
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set());
  const grid = useRef<HTMLDivElement>(null);

  const visibleRooms = useMemo(
    () =>
      activeFilter === "all"
        ? rooms
        : rooms.filter((room) => room.category === activeFilter),
    [activeFilter],
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
    { scope: grid, dependencies: [activeFilter], revertOnUpdate: true },
  );

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
        </div>
      </div>
    </section>
  );
}
