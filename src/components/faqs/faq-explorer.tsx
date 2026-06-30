"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  ArrowDown,
  BedDouble,
  CircleHelp,
  ConciergeBell,
  Minus,
  Plus,
  Search,
  type LucideIcon,
} from "lucide-react";

type Category = "Toutes" | "Réservation" | "Chambres" | "Services";

type Faq = {
  id: string;
  category: Exclude<Category, "Toutes">;
  question: string;
  answer: string;
};

const categories: { label: Category; Icon: LucideIcon }[] = [
  { label: "Toutes", Icon: CircleHelp },
  { label: "Réservation", Icon: ConciergeBell },
  { label: "Chambres", Icon: BedDouble },
  { label: "Services", Icon: Search },
];

const faqs: Faq[] = [
  {
    id: "confirmation",
    category: "Réservation",
    question: "Quand ma réservation est-elle confirmée ?",
    answer:
      "Après votre demande, notre équipe vérifie la disponibilité et vous transmet une confirmation avec le tarif final et les prochaines étapes.",
  },
  {
    id: "dates",
    category: "Réservation",
    question: "Puis-je modifier mes dates après la demande ?",
    answer:
      "Oui. Contactez-nous dès que possible : nous ajusterons le séjour selon les disponibilités et les conditions du tarif choisi.",
  },
  {
    id: "payment",
    category: "Réservation",
    question: "Quels moyens de paiement sont acceptés ?",
    answer:
      "Les moyens disponibles sont précisés lors de la confirmation. Notre équipe vous indique toujours le montant, la devise et l’échéance avant le règlement.",
  },
  {
    id: "cancellation",
    category: "Réservation",
    question: "Comment fonctionne l’annulation ?",
    answer:
      "Les conditions dépendent du tarif et de la période du séjour. Elles sont communiquées clairement avant que votre réservation soit validée.",
  },
  {
    id: "check-in",
    category: "Chambres",
    question: "À quelle heure peut-on arriver et repartir ?",
    answer:
      "Les horaires standards sont confirmés avec votre chambre. Une arrivée anticipée ou un départ tardif peut être organisé selon la disponibilité.",
  },
  {
    id: "breakfast",
    category: "Chambres",
    question: "Le petit déjeuner est-il inclus ?",
    answer:
      "Il est inclus dans certaines offres et peut être ajouté aux autres séjours. Le détail figure dans la proposition reçue avant confirmation.",
  },
  {
    id: "wifi",
    category: "Chambres",
    question: "Le Wi-Fi est-il disponible dans les chambres ?",
    answer:
      "Oui, une connexion Wi-Fi est disponible dans les chambres et les espaces communs de l’établissement.",
  },
  {
    id: "special-request",
    category: "Chambres",
    question: "Comment signaler une demande particulière ?",
    answer:
      "Précisez votre besoin dans le formulaire de réservation : accessibilité, transfert, lit supplémentaire ou arrivée tardive seront étudiés par l’équipe.",
  },
  {
    id: "travel-ticket",
    category: "Services",
    question: "Propass peut-il m’aider à acheter un billet de voyage ?",
    answer:
      "Oui. Indiquez le départ, la destination, la date et le nombre de passagers depuis la page Services. L’équipe vérifie ensuite les options adaptées.",
  },
  {
    id: "restaurant",
    category: "Services",
    question: "La restauration est-elle ouverte aux visiteurs ?",
    answer:
      "La restauration accueille les résidents et les visiteurs selon les horaires et la capacité du jour. Une réservation préalable est recommandée.",
  },
  {
    id: "hostel",
    category: "Services",
    question: "Puis-je réserver l’auberge pour une seule nuit ?",
    answer:
      "Oui. Les courts séjours et les escales sont acceptés selon la disponibilité des chambres au moment de la demande.",
  },
  {
    id: "support",
    category: "Services",
    question: "Une assistance est-elle disponible pendant mon séjour ?",
    answer:
      "Oui. L’équipe Propass reste joignable pour les demandes liées à la chambre, aux repas et à l’organisation du voyage.",
  },
];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("Toutes");
  const [openId, setOpenId] = useState("confirmation");
  const list = useRef<HTMLDivElement>(null);

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return faqs.filter((faq) => {
      const matchesCategory =
        category === "Toutes" || faq.category === category;
      const matchesSearch =
        !normalizedQuery ||
        normalize(`${faq.question} ${faq.answer} ${faq.category}`).includes(
          normalizedQuery,
        );

      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  useGSAP(
    () => {
      if (!list.current) return;

      const rows = list.current.querySelectorAll("[data-faq-row]");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(rows, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        rows,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.48,
          stagger: 0.045,
          ease: "power3.out",
        },
      );
    },
    { scope: list, dependencies: [category], revertOnUpdate: true },
  );

  const selectCategory = (nextCategory: Category) => {
    setCategory(nextCategory);
    const first =
      nextCategory === "Toutes"
        ? faqs[0]
        : faqs.find((faq) => faq.category === nextCategory);
    setOpenId(first?.id ?? "");
  };

  return (
    <>
      <section
        id="top"
        data-hero
        className="relative mx-auto min-h-[590px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-black text-white"
      >
        <div data-hero-media className="absolute inset-[-16px]">
          <Image
            src="/images/propass-trusted-lobby.jpg"
            alt="Salon Propass calme destiné à l'accueil des voyageurs"
            fill
            preload
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="object-cover object-center grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div
          data-hero-copy
          className="relative z-10 flex min-h-[590px] flex-col items-center justify-center px-5 py-14 text-center sm:px-10"
        >
          <span className="text-[10px] font-semibold uppercase text-white/60">
            Centre d’aide Propass
          </span>
          <h1 className="mt-5 max-w-[770px] font-heading text-[45px] font-medium leading-[0.92] sm:text-[62px] lg:text-[74px]">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="mt-5 max-w-[520px] text-xs font-medium leading-5 text-white/70">
            Recherchez une réponse sur votre réservation, votre chambre ou nos
            services.
          </p>

          <div className="mt-8 flex h-14 w-full max-w-[620px] items-center rounded-[6px] bg-white p-1.5 text-black shadow-[0_16px_50px_rgba(0,0,0,0.2)]">
            <Search className="ml-3 size-4 shrink-0 text-zinc-400" strokeWidth={2} />
            <label className="min-w-0 flex-1">
              <span className="sr-only">Rechercher dans les questions</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex. modifier mes dates"
                className="h-11 w-full bg-transparent px-3 text-xs font-medium outline-none placeholder:text-zinc-400"
              />
            </label>
            <a
              data-magnetic="5"
              href="#answers"
              aria-label="Voir les réponses"
              className="grid size-11 shrink-0 place-items-center rounded-[4px] bg-black text-white transition-colors hover:bg-zinc-800"
            >
              <ArrowDown className="size-4" strokeWidth={2.3} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[9px] font-semibold text-white/55">
            <span>Recherches fréquentes :</span>
            {["annulation", "petit déjeuner", "billet"].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="border-b border-white/35 pb-0.5 transition-colors hover:border-white hover:text-white"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="answers" className="bg-white px-4 py-16 text-black md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div
            data-animate="reveal"
            className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase text-zinc-500">
                Questions fréquentes
              </span>
              <h2 className="mt-3 max-w-[650px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
                Les réponses essentielles
              </h2>
            </div>
            <p className="max-w-[330px] text-xs font-medium leading-5 text-zinc-600">
              {filteredFaqs.length} réponse
              {filteredFaqs.length === 1 ? "" : "s"} correspondant à votre
              recherche.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
            <aside data-animate="reveal" className="lg:sticky lg:top-6 lg:self-start">
              <p className="text-[9px] font-semibold uppercase text-zinc-400">
                Filtrer par sujet
              </p>
              <div className="mt-4 grid grid-cols-2 border-t border-zinc-200 sm:grid-cols-4 lg:grid-cols-1">
                {categories.map(({ label, Icon }) => {
                  const selected = category === label;

                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectCategory(label)}
                      className={`flex min-h-12 items-center gap-3 border-b border-zinc-200 px-2 text-left text-[11px] font-semibold transition-colors lg:px-0 ${
                        selected
                          ? "bg-black px-4 text-white lg:px-4"
                          : "hover:bg-zinc-50 lg:hover:px-4"
                      }`}
                    >
                      <Icon className="size-4 shrink-0" strokeWidth={1.8} />
                      {label}
                    </button>
                  );
                })}
              </div>
            </aside>

            <div ref={list} data-animate="reveal" className="border-b border-zinc-200">
              {filteredFaqs.map((faq) => {
                const open = openId === faq.id;
                const contentId = `faq-answer-${faq.id}`;

                return (
                  <article key={faq.id} data-faq-row className="border-t border-zinc-200">
                    <button
                      type="button"
                      data-pulse
                      aria-expanded={open}
                      aria-controls={contentId}
                      onClick={() => setOpenId(open ? "" : faq.id)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span>
                        <span className="mb-2 block text-[9px] font-semibold uppercase text-zinc-400">
                          {faq.category}
                        </span>
                        <span className="text-sm font-semibold transition-colors group-hover:text-zinc-600">
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full border transition-colors ${
                          open
                            ? "border-black bg-black text-white"
                            : "border-zinc-300 group-hover:border-black"
                        }`}
                      >
                        {open ? (
                          <Minus className="size-4" strokeWidth={2} />
                        ) : (
                          <Plus className="size-4" strokeWidth={2} />
                        )}
                      </span>
                    </button>
                    <div
                      id={contentId}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[670px] pb-7 text-xs font-medium leading-5 text-zinc-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}

              {filteredFaqs.length === 0 ? (
                <div data-faq-row className="border-t border-zinc-200 py-12">
                  <CircleHelp className="size-7" strokeWidth={1.7} />
                  <h3 className="mt-5 text-lg font-semibold">Aucune réponse trouvée</h3>
                  <p className="mt-3 max-w-[470px] text-xs font-medium leading-5 text-zinc-500">
                    Essayez un autre mot-clé ou sélectionnez la catégorie
                    « Toutes ».
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      selectCategory("Toutes");
                    }}
                    className="mt-6 h-10 rounded-full border border-zinc-300 px-5 text-xs font-semibold transition-colors hover:bg-zinc-50"
                  >
                    Réinitialiser
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
