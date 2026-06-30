import {
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const values: {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Attention",
    description:
      "Comprendre le besoin réel avant de proposer une réponse ou un service.",
    Icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Clarté",
    description:
      "Des informations simples, des tarifs lisibles et aucun détail laissé au hasard.",
    Icon: Eye,
  },
  {
    number: "03",
    title: "Confiance",
    description:
      "Une présence fiable, des espaces protégés et un accompagnement constant.",
    Icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Exigence",
    description:
      "Soigner chaque interaction pour maintenir une expérience cohérente et fluide.",
    Icon: Sparkles,
  },
];

export default function AboutValues() {
  return (
    <section className="bg-black px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-white/45">
              Nos engagements
            </span>
            <h2 className="mt-4 max-w-[650px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Quatre principes, une même manière de recevoir
            </h2>
          </div>
          <p className="max-w-[320px] text-xs font-medium leading-5 text-white/55">
            Nos choix, nos espaces et notre service suivent les mêmes repères,
            à chaque étape du séjour.
          </p>
        </div>

        <div
          data-animate="stagger"
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
        >
          {values.map(({ number, title, description, Icon }) => (
            <article
              key={title}
              data-animate-item
              className="group border-t border-white/30 pt-5 transition-colors hover:border-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold text-white/35">
                  {number}
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:bg-white group-hover:text-black">
                  <Icon className="size-4" strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="mt-10 text-sm font-semibold">{title}</h3>
              <p className="mt-3 max-w-[245px] text-[11px] font-medium leading-4 text-white/45">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
