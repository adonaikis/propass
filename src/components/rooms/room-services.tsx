import type { LucideIcon } from "lucide-react";
import { Coffee, ConciergeBell, ShieldCheck, Wifi } from "lucide-react";

const services: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Wi-Fi haut débit",
    description: "Une connexion stable dans chaque chambre et espace lounge.",
    Icon: Wifi,
  },
  {
    title: "Conciergerie 24/7",
    description: "Une équipe disponible pour vos demandes et déplacements.",
    Icon: ConciergeBell,
  },
  {
    title: "Petit déjeuner",
    description: "Service matinal en salle ou directement dans votre chambre.",
    Icon: Coffee,
  },
  {
    title: "Séjour sécurisé",
    description:
      "Accès contrôlé, assistance sur place et confidentialité assurée.",
    Icon: ShieldCheck,
  },
];

function ServiceItem({ title, description, Icon }: (typeof services)[number]) {
  return (
    <article data-animate-item className="border-t border-zinc-200 pt-5">
      <Icon
        className="size-6 text-black"
        strokeWidth={1.8}
        aria-hidden="true"
      />
      <h3 className="mt-7 text-sm font-semibold">{title}</h3>
      <p className="mt-3 max-w-[245px] text-[11px] font-medium leading-4 text-zinc-500">
        {description}
      </p>
    </article>
  );
}

export default function RoomServices() {
  return (
    <section
      id="room-services"
      className="bg-white px-4 py-16 text-black md:py-20"
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              Toujours inclus
            </span>
            <h2 className="mt-3 max-w-[560px] font-heading text-[34px] font-medium leading-[1.02] md:text-[46px]">
              Le confort ne s’arrête pas à la chambre
            </h2>
          </div>
          <p className="max-w-[330px] text-xs font-medium leading-5 text-zinc-600">
            Des services simples, disponibles et pensés pour vous faire gagner
            du temps.
          </p>
        </div>

        <div
          data-animate="stagger"
          className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
        >
          {services.map((service) => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
