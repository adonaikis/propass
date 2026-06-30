"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Building2, ChevronDown, CircleDollarSign, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";

const locations = [
  { label: "Kinshasa", value: "kinshasa" },
  { label: "Gombe", value: "gombe" },
  { label: "Ngaliema", value: "ngaliema" },
  { label: "Kintambo", value: "kintambo" },
];

const accommodationTypes = [
  { label: "Tous les hébergements", value: "all" },
  { label: "Chambre essentielle", value: "essential" },
  { label: "Hôtel de luxe", value: "deluxe" },
  { label: "Suite premium", value: "suite" },
];

const priceRanges = [
  { label: "Tous les budgets", value: "all" },
  { label: "$120 - $180", value: "120-180" },
  { label: "$120 - $260", value: "120-260" },
  { label: "$180 - $260", value: "180-260" },
  { label: "$260 - $350", value: "260-350" },
];

const searchFields = [
  {
    label: "Localisation",
    name: "location",
    options: locations,
    icon: MapPin,
  },
  {
    label: "Type",
    name: "category",
    options: accommodationTypes,
    icon: Building2,
  },
  {
    label: "Prix",
    name: "price",
    options: priceRanges,
    icon: CircleDollarSign,
  },
] as const;

export default function Hero() {
  const router = useRouter();
  const [location, setLocation] = useState("kinshasa");
  const [category, setCategory] = useState("deluxe");
  const [price, setPrice] = useState("120-260");

  const values = { location, category, price };
  const setters = {
    location: setLocation,
    category: setCategory,
    price: setPrice,
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({ location, category });

    if (price !== "all") {
      const [minPrice, maxPrice] = price.split("-");
      params.set("minPrice", minPrice);
      params.set("maxPrice", maxPrice);
    }

    router.push(`/chambres?${params.toString()}#chambres`);
  };

  return (
    <section
      id="top"
      data-hero
      className="relative mx-auto min-h-[560px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden rounded-[22px] bg-black lg:h-[calc(100vh-58px)] lg:max-h-[720px]"
    >
      <Image
        data-hero-media
        src="/PHOTO-PROPASS/propas-1 (14).jpg"
        alt="Façade principale de Propass à Kinshasa"
        fill
        sizes="100vw"
        preload
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/42" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.48)_100%)]" />

      <div
        data-hero-copy
        className="absolute inset-x-0 top-[52%] z-10 -translate-y-1/2 px-5 text-center text-white sm:px-10"
      >
        <h1 className="mx-auto max-w-5xl font-heading text-4xl font-medium leading-[1.02] text-white md:text-[40px] lg:text-[58px]">
          Découvrez Propass, comparez les offres et réservez votre séjour
          parfait
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-xs font-medium leading-4 text-white md:text-[13px]">
          Trouvez un séjour d&apos;exception à Kinshasa et réservez des chambres
          élégantes, un confort raffiné et un accueil chaleureux en quelques
          secondes.
        </p>
      </div>

      <form
        data-hero-search
        onSubmit={submitSearch}
        className="absolute inset-x-4 bottom-3 z-20 rounded-[20px] bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:inset-x-5 sm:p-6"
      >
        <div className="grid gap-5 min-[860px]:grid-cols-[1fr_1fr_1fr_0.72fr] min-[860px]:items-end min-[860px]:gap-6">
          {searchFields.map((field) => {
            const Icon = field.icon;

            return (
              <label key={field.label} data-hero-field className="block">
                <span className="mb-3 block text-sm font-medium text-black">
                  {field.label}
                </span>
                <span className="relative block">
                  <Icon
                    className="pointer-events-none absolute top-1/2 left-5 z-10 size-4 -translate-y-1/2 text-zinc-400"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <select
                    name={field.name}
                    value={values[field.name]}
                    onChange={(event) => setters[field.name](event.target.value)}
                    className="h-10 w-full appearance-none rounded-md border border-zinc-200 bg-white pr-10 pl-12 text-sm text-black outline-none transition-colors hover:border-zinc-300 focus:border-black"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-black"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </label>
            );
          })}

          <button
            data-hero-field
            data-magnetic="6"
            data-pulse
            className="h-10 rounded-md bg-black px-4 text-xs font-semibold whitespace-nowrap text-white transition-colors hover:bg-zinc-800 min-[860px]:mt-8"
            type="submit"
          >
            Rechercher
          </button>
        </div>
      </form>
    </section>
  );
}
