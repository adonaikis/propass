import Link from "next/link";
import { ArrowUpRight, Check, Headphones, MessageSquareText } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Exprimez votre besoin",
    description: "Trajet, repas ou chambre : commencez par le service utile.",
    Icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Recevez la confirmation",
    description: "Notre équipe valide les détails, le tarif et la disponibilité.",
    Icon: Check,
  },
  {
    number: "03",
    title: "Restez accompagné",
    description: "Un contact unique vous suit avant et pendant votre passage.",
    Icon: Headphones,
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-zinc-50 px-4 py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div data-animate="reveal" className="max-w-[680px]">
          <span className="text-[10px] font-semibold uppercase text-zinc-500">
            Assistance Propass
          </span>
          <h2 className="mt-3 font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
            Un parcours clair, un seul interlocuteur
          </h2>
        </div>

        <div data-animate="stagger" className="mt-12 grid gap-9 md:grid-cols-3 md:gap-7">
          {steps.map(({ number, title, description, Icon }) => (
            <article key={title} data-animate-item className="border-t border-black pt-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-zinc-400">
                  {number}
                </span>
                <Icon className="size-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-9 text-sm font-semibold">{title}</h3>
              <p className="mt-3 max-w-[300px] text-[11px] font-medium leading-4 text-zinc-500">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div
          data-animate="reveal"
          className="mt-16 flex flex-col gap-7 rounded-[6px] bg-black px-5 py-9 text-white sm:px-9 md:flex-row md:items-center md:justify-between md:py-10"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase text-white/45">
              Besoin d’aide maintenant ?
            </p>
            <p className="mt-3 max-w-[560px] font-heading text-[27px] font-medium leading-none sm:text-[32px]">
              Notre équipe organise votre prochaine étape.
            </p>
          </div>
          <Link
            data-magnetic="7"
            href="/reservation"
            className="inline-flex h-11 w-fit shrink-0 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Parler à Propass
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowUpRight className="size-4" strokeWidth={2.3} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
