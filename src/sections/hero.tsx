import Image from "next/image";
import {
  Building2,
  ChevronDown,
  CircleDollarSign,
  MapPin,
} from "lucide-react";

const searchFields = [
  {
    label: "Localisation",
    value: "Kinshasa",
    icon: MapPin,
  },
  {
    label: "Type",
    value: "Hôtel de luxe",
    icon: Building2,
  },
  {
    label: "Prix",
    value: "$120 - $260",
    icon: CircleDollarSign,
  },
];

export default function Hero() {
  return (
    <section className="relative mx-auto min-h-[560px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden rounded-[22px] bg-black lg:h-[calc(100vh-58px)] lg:max-h-[720px]">
      <Image
        src="/images/propass-hero.jpg"
        alt="Hôtel moderne de luxe avec piscine au coucher du soleil"
        fill
        sizes="100vw"
        preload
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/42" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.48)_100%)]" />

      <div className="absolute inset-x-0 top-[52%] z-10 -translate-y-1/2 px-5 text-center text-white sm:px-10">
        <h1 className="mx-auto max-w-5xl font-heading text-4xl font-medium leading-[1.02] text-white md:text-[40px] lg:text-[58px]">
          Découvrez Propass, comparez les offres et réservez votre séjour parfait
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-xs font-medium leading-4 text-white md:text-[13px]">
          Trouvez un séjour d&apos;exception à Kinshasa et réservez des chambres élégantes,
          un confort raffiné et un accueil chaleureux en quelques secondes.
        </p>
      </div>

      <form className="absolute inset-x-4 bottom-3 z-20 rounded-[20px] bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:inset-x-5 sm:p-6">
        <div className="grid gap-5 min-[860px]:grid-cols-[1fr_1fr_1fr_0.72fr] min-[860px]:items-end min-[860px]:gap-6">
          {searchFields.map((field) => {
            const Icon = field.icon;

            return (
              <label key={field.label} className="block">
                <span className="mb-3 block text-sm font-medium text-black">
                  {field.label}
                </span>
                <button
                  className="flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-5 text-left text-sm text-black transition-colors hover:border-zinc-300"
                  type="button"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Icon className="size-4 shrink-0 text-zinc-400" strokeWidth={2} aria-hidden="true" />
                    <span className="truncate">{field.value}</span>
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-black" strokeWidth={2} aria-hidden="true" />
                </button>
              </label>
            );
          })}

          <button
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
