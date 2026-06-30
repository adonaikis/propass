import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ConciergeBell, HandHeart, UtensilsCrossed } from "lucide-react";

const roles = [
  {
    title: "Accueil",
    description: "Une présence attentive dès votre arrivée.",
    Icon: HandHeart,
  },
  {
    title: "Conciergerie",
    description: "Un interlocuteur pour chaque demande.",
    Icon: ConciergeBell,
  },
  {
    title: "Restauration",
    description: "Un service précis, adapté à votre rythme.",
    Icon: UtensilsCrossed,
  },
];

export default function GalleryTeam() {
  return (
    <section className="bg-black px-4 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
        <div
          data-animate="reveal"
          data-tilt="2"
          className="relative aspect-[3/2] overflow-hidden rounded-[6px]"
        >
          <div data-parallax="4" className="absolute inset-[-28px]">
            <Image
              src="/images/propass-services-ticket.png"
              alt="Agente Propass accompagnant un voyageur"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-center grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-black/15" />
          <p className="absolute inset-x-5 bottom-5 border-t border-white/45 pt-4 text-[9px] font-semibold uppercase sm:inset-x-7 sm:bottom-7">
            Une équipe présente à chaque étape
          </p>
        </div>

        <div data-animate="reveal">
          <span className="text-[10px] font-semibold uppercase text-white/45">
            Derrière chaque image
          </span>
          <h2 className="mt-4 max-w-[500px] font-heading text-[38px] font-medium leading-[0.98] sm:text-[48px]">
            Des agents qui donnent vie à l’expérience
          </h2>
          <p className="mt-6 max-w-[470px] text-xs font-medium leading-5 text-white/55">
            L’hospitalité Propass repose sur des gestes simples : écouter,
            anticiper et rester disponible lorsque cela compte.
          </p>

          <div data-animate="stagger" className="mt-9 border-y border-white/20">
            {roles.map(({ title, description, Icon }) => (
              <div
                key={title}
                data-animate-item
                className="grid grid-cols-[28px_1fr] gap-3 border-b border-white/20 py-5 last:border-b-0"
              >
                <Icon className="size-4.5" strokeWidth={1.8} />
                <div>
                  <p className="text-xs font-semibold">{title}</p>
                  <p className="mt-1 text-[10px] font-medium text-white/45">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            data-magnetic="6"
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Contacter l’équipe
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowUpRight className="size-4" strokeWidth={2.3} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
