import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  CalendarClock,
  Headphones,
  LockKeyhole,
} from "lucide-react";

const benefits: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Meilleur tarif direct",
    description: "Un prix clair, sans commission ajoutée au dernier moment.",
    Icon: BadgeDollarSign,
  },
  {
    title: "Dates flexibles",
    description:
      "Modifiez votre demande avec notre équipe selon les disponibilités.",
    Icon: CalendarClock,
  },
  {
    title: "Assistance humaine",
    description: "Une personne vous accompagne avant et pendant votre séjour.",
    Icon: Headphones,
  },
  {
    title: "Données protégées",
    description: "Vos informations restent confidentielles et sécurisées.",
    Icon: LockKeyhole,
  },
];

export default function ReservationBenefits() {
  return (
    <section id="benefits" className="bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-white/45">
              Réserver en direct
            </span>
            <h2 className="mt-3 max-w-[560px] font-heading text-[34px] font-medium leading-[1.02] md:text-[46px]">
              Plus simple, plus clair, plus proche
            </h2>
          </div>
          <p className="max-w-[320px] text-xs font-medium leading-5 text-white/55">
            Une réservation sans détour, avec les informations utiles dès le
            départ.
          </p>
        </div>

        <div
          data-animate="stagger"
          className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
        >
          {benefits.map(({ title, description, Icon }) => (
            <article
              data-animate-item
              key={title}
              className="border-t border-white/20 pt-5"
            >
              <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mt-7 text-sm font-semibold">{title}</h3>
              <p className="mt-3 max-w-[240px] text-[11px] font-medium leading-4 text-white/50">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
