import Link from "next/link";
import {
  ArrowUpRight,
  BedDouble,
  CalendarCheck,
  PlaneTakeoff,
  type LucideIcon,
} from "lucide-react";

const guides: {
  number: string;
  title: string;
  description: string;
  href: string;
  action: string;
  Icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Préparer une réservation",
    description:
      "Choisissez vos dates, votre chambre et transmettez vos préférences.",
    href: "/reservation",
    action: "Réserver",
    Icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Comparer les chambres",
    description:
      "Consultez les équipements, les capacités et les tarifs disponibles.",
    href: "/chambres",
    action: "Voir les chambres",
    Icon: BedDouble,
  },
  {
    number: "03",
    title: "Organiser le voyage",
    description:
      "Billets, restauration ou auberge : rassemblez les services utiles.",
    href: "/services",
    action: "Voir les services",
    Icon: PlaneTakeoff,
  },
];

export default function FaqGuide() {
  return (
    <section className="bg-black px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-white/45">
              Aller plus loin
            </span>
            <h2 className="mt-4 max-w-[660px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Passez directement à l’action
            </h2>
          </div>
          <p className="max-w-[330px] text-xs font-medium leading-5 text-white/55">
            Retrouvez les pages utiles pour organiser chaque partie de votre
            passage chez Propass.
          </p>
        </div>

        <div data-animate="stagger" className="mt-14 grid gap-10 md:grid-cols-3 md:gap-7">
          {guides.map(({ number, title, description, href, action, Icon }) => (
            <article
              key={title}
              data-animate-item
              className="group border-t border-white/25 pt-5 transition-colors hover:border-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold text-white/35">
                  {number}
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:bg-white group-hover:text-black">
                  <Icon className="size-4" strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="mt-9 text-sm font-semibold">{title}</h3>
              <p className="mt-3 max-w-[300px] text-[11px] font-medium leading-4 text-white/45">
                {description}
              </p>
              <Link
                data-magnetic="5"
                href={href}
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold text-white transition-colors hover:text-white/65"
              >
                {action}
                <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
