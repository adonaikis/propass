"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

type Category = "all" | "team" | "rooms" | "restaurant" | "spaces";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  aspect: string;
  position?: string;
};

const filters: { label: string; value: Category }[] = [
  { label: "Toutes", value: "all" },
  { label: "Équipe", value: "team" },
  { label: "Chambres", value: "rooms" },
  { label: "Restauration", value: "restaurant" },
  { label: "Espaces", value: "spaces" },
];

const galleryImages: GalleryImage[] = [
  {
    id: "team-portrait",
    src: "/PHOTO-PROPASS/sec.jpg",
    alt: "Agente Propass au bureau d'accueil",
    title: "L’accueil Propass",
    category: "team",
    categoryLabel: "Équipe",
    aspect: "aspect-[16/10]",
  },
  {
    id: "team-at-work",
    src: "/PHOTO-PROPASS/secretaire.jpg",
    alt: "Agente Propass travaillant au bureau d'accueil",
    title: "Une équipe disponible",
    category: "team",
    categoryLabel: "Équipe",
    aspect: "aspect-[4/3]",
  },
  {
    id: "signature-room",
    src: "/PHOTO-PROPASS/chambre100$1.jpg",
    alt: "Chambre Propass lumineuse avec lit double",
    title: "Chambre Premium",
    category: "rooms",
    categoryLabel: "Chambres",
    aspect: "aspect-[16/10]",
  },
  {
    id: "white-room",
    src: "/PHOTO-PROPASS/chambre100$.jpg",
    alt: "Chambre Propass avec grand lit et linge clair",
    title: "Chambre Double",
    category: "rooms",
    categoryLabel: "Chambres",
    aspect: "aspect-[4/5]",
  },
  {
    id: "twin-room",
    src: "/PHOTO-PROPASS/chambre70$.jpg",
    alt: "Chambre Propass claire avec plusieurs couchages",
    title: "Chambre Familiale",
    category: "rooms",
    categoryLabel: "Chambres",
    aspect: "aspect-[4/3]",
  },
  {
    id: "restaurant-tables",
    src: "/PHOTO-PROPASS/resto2.jpg",
    alt: "Tables dressées dans le restaurant Propass",
    title: "La salle de restauration",
    category: "restaurant",
    categoryLabel: "Restauration",
    aspect: "aspect-[3/2]",
  },
  {
    id: "restaurant-breakfast",
    src: "/PHOTO-PROPASS/resto1.jpg",
    alt: "Tables préparées pour le petit déjeuner Propass",
    title: "Le petit déjeuner",
    category: "restaurant",
    categoryLabel: "Restauration",
    aspect: "aspect-[4/5]",
  },
  {
    id: "restaurant-counter",
    src: "/PHOTO-PROPASS/resto.jpg",
    alt: "Comptoir et espace de restauration Propass",
    title: "Le comptoir",
    category: "restaurant",
    categoryLabel: "Restauration",
    aspect: "aspect-[4/5]",
  },
  {
    id: "essential-room",
    src: "/PHOTO-PROPASS/chambre50$.jpg",
    alt: "Chambre Propass avec lit double et linge orange",
    title: "Chambre Essentielle",
    category: "rooms",
    categoryLabel: "Chambres",
    aspect: "aspect-[4/5]",
  },
  {
    id: "warm-room",
    src: "/PHOTO-PROPASS/chambre1.jpg",
    alt: "Chambre Propass chaleureuse avec plusieurs couchages",
    title: "Chambre Confort",
    category: "rooms",
    categoryLabel: "Chambres",
    aspect: "aspect-[4/3]",
  },
  {
    id: "event-hall",
    src: "/PHOTO-PROPASS/salle2.jpg",
    alt: "Grande salle de réception Propass avec scène",
    title: "La salle de réception",
    category: "spaces",
    categoryLabel: "Espaces",
    aspect: "aspect-[4/5]",
  },
  {
    id: "main-building",
    src: "/PHOTO-PROPASS/propas-1 (14).jpg",
    alt: "Façade principale du bâtiment Propass",
    title: "La façade principale",
    category: "spaces",
    categoryLabel: "Espaces",
    aspect: "aspect-[3/2]",
  },
  {
    id: "guest-house",
    src: "/PHOTO-PROPASS/devantmaisonpas.jpg",
    alt: "Maison de passage au cœur du jardin Propass",
    title: "La maison de passage",
    category: "spaces",
    categoryLabel: "Espaces",
    aspect: "aspect-[4/5]",
  },
  {
    id: "heritage-building",
    src: "/PHOTO-PROPASS/vue-entré.jpg",
    alt: "Bâtiment historique Propass vu depuis le jardin",
    title: "Le bâtiment historique",
    category: "spaces",
    categoryLabel: "Espaces",
    aspect: "aspect-[4/5]",
  },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const grid = useRef<HTMLDivElement>(null);
  const lightbox = useRef<HTMLDivElement>(null);

  const visibleImages = useMemo(
    () =>
      filter === "all"
        ? galleryImages
        : galleryImages.filter((image) => image.category === filter),
    [filter],
  );

  const selectedImage =
    selectedIndex === null ? null : visibleImages[selectedIndex];

  useGSAP(
    () => {
      if (!grid.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(grid.current.children, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        grid.current.children,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.055,
          ease: "power3.out",
        },
      );
    },
    { scope: grid, dependencies: [filter], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      if (!lightbox.current || !selectedImage) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(lightbox.current, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        lightbox.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        lightbox.current.querySelector("[data-lightbox-image]"),
        { scale: 0.96, y: 16 },
        { scale: 1, y: 0, duration: 0.5, ease: "power3.out" },
      );
    },
    {
      scope: lightbox,
      dependencies: [selectedImage?.id],
      revertOnUpdate: true,
    },
  );

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % visibleImages.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + visibleImages.length) % visibleImages.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage, visibleImages.length]);

  const selectFilter = (nextFilter: Category) => {
    setFilter(nextFilter);
    setSelectedIndex(null);
  };

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + visibleImages.length) % visibleImages.length,
    );
  };

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % visibleImages.length,
    );
  };

  return (
    <section id="photos" className="bg-white px-4 py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              Collection visuelle
            </span>
            <h2 className="mt-3 max-w-[650px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Explorez chaque univers
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrer la galerie"
            className="flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-zinc-200 bg-zinc-50 p-1"
          >
            {filters.map((item) => {
              const active = filter === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectFilter(item.value)}
                  className={`h-8 shrink-0 rounded-full px-4 text-[10px] font-semibold transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "text-zinc-600 hover:bg-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div ref={grid} className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visibleImages.map((image, index) => (
            <article
              key={image.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-[6px]"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Agrandir : ${image.title}`}
                className={`group relative block w-full overflow-hidden bg-zinc-200 text-left ${image.aspect}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-[filter,transform] duration-700 group-hover:scale-105 group-hover:grayscale ${
                    image.position ?? "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/35" />
                <span className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white text-black opacity-0 transition-[opacity,transform] group-hover:rotate-6 group-hover:opacity-100">
                  <Maximize2 className="size-4" strokeWidth={2} />
                </span>
                <span className="absolute inset-x-4 bottom-4 translate-y-3 text-white opacity-0 transition-[opacity,transform] group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-[9px] font-semibold uppercase text-white/60">
                    {image.categoryLabel}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    {image.title}
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          ref={lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 p-4 text-white sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedIndex(null);
          }}
        >
          <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-5 border-b border-white/15 pb-4">
            <div>
              <p className="text-[9px] font-semibold uppercase text-white/45">
                {selectedImage.categoryLabel} · {(selectedIndex ?? 0) + 1} /{" "}
                {visibleImages.length}
              </p>
              <p className="mt-1 text-sm font-semibold">{selectedImage.title}</p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Fermer la galerie"
              className="grid size-10 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-black"
            >
              <X className="size-5" strokeWidth={2} />
            </button>
          </div>

          <div className="relative mx-auto flex min-h-0 w-full max-w-[1400px] flex-1 items-center justify-center py-5">
            <button
              type="button"
              onClick={previousImage}
              aria-label="Photo précédente"
              className="absolute left-0 z-10 grid size-10 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105 sm:size-12"
            >
              <ArrowLeft className="size-5" strokeWidth={2} />
            </button>

            <div
              data-lightbox-image
              className="group relative h-full w-[calc(100%-104px)] overflow-hidden rounded-[6px] sm:w-[calc(100%-144px)]"
            >
              <Image
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain transition-[filter] duration-700 group-hover:grayscale"
              />
            </div>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Photo suivante"
              className="absolute right-0 z-10 grid size-10 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105 sm:size-12"
            >
              <ArrowRight className="size-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
