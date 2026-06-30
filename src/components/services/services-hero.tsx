import Image from "next/image";
import {
  ArrowDown,
  BedDouble,
  PlaneTakeoff,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const services: {
  number: string;
  label: string;
  detail: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    number: "01",
    label: "Billets de voyage",
    detail: "Avion, bus ou bateau",
    href: "#billets",
    Icon: PlaneTakeoff,
  },
  {
    number: "02",
    label: "Restauration",
    detail: "Sur place ou à emporter",
    href: "#restauration",
    Icon: UtensilsCrossed,
  },
  {
    number: "03",
    label: "Auberge",
    detail: "Repos avant le départ",
    href: "#auberge",
    Icon: BedDouble,
  },
];

export default function ServicesHero() {
  return (
    <section
      id="top"
      data-hero
      className="relative mx-auto min-h-[690px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-black text-white sm:min-h-[670px]"
    >
      <div data-hero-media className="absolute inset-[-16px]">
        <Image
          src="/images/propass-services-ticket.png"
          alt="Un passager reçoit son billet de voyage au comptoir Propass"
          fill
          preload
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-[53%_center] grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-black/62" />

      <div
        data-hero-copy
        className="relative z-10 flex min-h-[690px] flex-col px-5 pt-16 pb-5 sm:min-h-[670px] sm:px-9 sm:pt-20 sm:pb-7 lg:px-12"
      >
        <div className="max-w-[720px]">
          <span className="text-[10px] font-semibold uppercase text-white/70">
            Voyager · Dîner · Dormir
          </span>
          <h1 className="mt-5 font-heading text-[48px] font-medium leading-[0.92] text-white sm:text-[64px] lg:text-[80px]">
            Services Propass
          </h1>
          <p className="mt-6 max-w-[510px] text-xs font-medium leading-5 text-white/78 sm:text-[13px]">
            Trois services essentiels pour accompagner chaque passager, du
            billet jusqu’au repos.
          </p>
        </div>

        <div className="mt-auto">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase text-white/65">
            Découvrir les services
            <ArrowDown className="size-3.5" strokeWidth={2.2} />
          </p>
          <div className="grid border-y border-white/30 sm:grid-cols-3">
            {services.map(({ number, label, detail, href, Icon }, index) => (
              <a
                key={label}
                href={href}
                data-magnetic="4"
                className={`group flex min-h-[94px] items-center gap-4 py-4 transition-colors hover:bg-white hover:px-4 hover:text-black sm:px-5 sm:hover:px-6 ${
                  index > 0
                    ? "border-t border-white/30 sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <span className="text-[9px] font-semibold text-current opacity-55">
                  {number}
                </span>
                <Icon
                  className="size-5 shrink-0"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold">{label}</span>
                  <span className="mt-1 block text-[10px] font-medium opacity-55">
                    {detail}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
