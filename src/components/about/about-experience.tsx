"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  ArrowUpRight,
  BedDouble,
  ConciergeBell,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const experiences: {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Un accueil disponible",
    eyebrow: "Dès votre arrivée",
    description:
      "Une équipe présente, un échange direct et des réponses rapides pour commencer le séjour sans attente inutile.",
    image: "/PHOTO-PROPASS/sec.jpg",
    alt: "Agente Propass disponible au bureau d'accueil",
    Icon: ConciergeBell,
  },
  {
    title: "Un repos sans compromis",
    eyebrow: "Pendant votre séjour",
    description:
      "Des chambres calmes, des équipements essentiels et une attention discrète qui respecte votre rythme.",
    image: "/PHOTO-PROPASS/chambre100$1.jpg",
    alt: "Chambre Propass lumineuse avec lit double",
    Icon: BedDouble,
  },
  {
    title: "Un service qui s’adapte",
    eyebrow: "À chaque moment",
    description:
      "Restauration, transport ou besoin particulier : chaque demande est coordonnée depuis un seul point de contact.",
    image: "/PHOTO-PROPASS/resto2.jpg",
    alt: "Restaurant Propass préparé pour le service",
    Icon: UtensilsCrossed,
  },
];

export default function AboutExperience() {
  const [active, setActive] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const experience = experiences[active];

  useGSAP(
    () => {
      if (!panel.current) return;

      const targets = panel.current.querySelectorAll("[data-experience-content]");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.58,
          stagger: 0.06,
          ease: "power3.out",
        },
      );
    },
    { scope: panel, dependencies: [active], revertOnUpdate: true },
  );

  return (
    <section className="bg-white px-4 py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              L’expérience Propass
            </span>
            <h2 className="mt-3 max-w-[660px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Présents quand cela compte
            </h2>
          </div>
          <p className="max-w-[330px] text-xs font-medium leading-5 text-zinc-600">
            Sélectionnez un moment du séjour pour découvrir notre manière de
            vous accompagner.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[6px] bg-zinc-100 lg:grid-cols-[1.08fr_0.92fr]">
          <div
            ref={panel}
            role="tabpanel"
            id="experience-panel"
            className="relative min-h-[430px] overflow-hidden sm:min-h-[520px]"
          >
            <div data-experience-content className="absolute inset-0">
              <Image
                key={experience.image}
                src={experience.image}
                alt={experience.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover object-center grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-black/25" />
            <div
              data-experience-content
              className="absolute inset-x-5 bottom-5 max-w-[440px] rounded-[6px] bg-white p-5 sm:inset-x-auto sm:left-7 sm:bottom-7 sm:p-6"
            >
              <p className="text-[9px] font-semibold uppercase text-zinc-400">
                {experience.eyebrow}
              </p>
              <h3 className="mt-3 font-heading text-[25px] font-medium leading-none sm:text-[30px]">
                {experience.title}
              </h3>
              <p className="mt-4 text-[11px] font-medium leading-4 text-zinc-500">
                {experience.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-black p-5 text-white sm:p-8 lg:p-10">
            <div role="tablist" aria-label="Moments de l'expérience Propass">
              {experiences.map(({ title, Icon }, index) => {
                const selected = index === active;

                return (
                  <button
                    key={title}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="experience-panel"
                    onClick={() => setActive(index)}
                    className={`group grid w-full grid-cols-[28px_1fr_auto] items-center gap-3 border-t py-6 text-left transition-colors ${
                      selected
                        ? "border-white text-white"
                        : "border-white/20 text-white/45 hover:text-white"
                    }`}
                  >
                    <span className="text-[9px] font-semibold">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold">{title}</span>
                    <Icon
                      className="size-4 transition-transform group-hover:scale-110"
                      strokeWidth={1.8}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-auto border-t border-white/20 pt-7">
              <p className="max-w-[330px] text-[11px] font-medium leading-4 text-white/45">
                Hébergement, restauration et voyage réunis dans une expérience
                continue.
              </p>
              <Link
                data-magnetic="6"
                href="/services"
                className="mt-6 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Découvrir nos services
                <span className="grid size-8 place-items-center rounded-full bg-black text-white">
                  <ArrowUpRight className="size-4" strokeWidth={2.3} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
