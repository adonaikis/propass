"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const questions = [
  {
    question: "Quand ma réservation est-elle confirmée ?",
    answer:
      "Après votre demande, notre équipe vérifie la disponibilité et vous envoie une confirmation avec les prochaines étapes.",
  },
  {
    question: "Puis-je modifier mes dates ?",
    answer:
      "Oui. Contactez-nous dès que possible : nous adapterons le séjour selon les disponibilités et les conditions du tarif choisi.",
  },
  {
    question: "Le petit déjeuner est-il inclus ?",
    answer:
      "Il est inclus dans certaines catégories et peut être ajouté aux autres chambres avant la confirmation finale.",
  },
  {
    question: "Comment signaler une demande particulière ?",
    answer:
      "La dernière étape du formulaire contient un champ dédié. Accessibilité, transfert ou arrivée tardive : précisez simplement votre besoin.",
  },
];

export default function ReservationFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white px-4 py-16 text-black md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div data-animate="reveal">
          <span className="text-[10px] font-semibold uppercase text-zinc-500">
            Avant de réserver
          </span>
          <h2 className="mt-3 max-w-[420px] font-heading text-[36px] font-medium leading-[0.98] md:text-[48px]">
            Les réponses essentielles
          </h2>
          <p className="mt-6 max-w-[330px] text-xs font-medium leading-5 text-zinc-600">
            Tout ce qu’il faut savoir pour avancer sereinement.
          </p>
        </div>

        <div data-animate="reveal" className="border-b border-zinc-200">
          {questions.map((item, index) => {
            const open = openIndex === index;
            const contentId = `reservation-faq-${index}`;

            return (
              <div key={item.question} className="border-t border-zinc-200">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold">{item.question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-zinc-300">
                    {open ? (
                      <Minus
                        className="size-4"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        className="size-4"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
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
                    <p className="max-w-[580px] pb-6 text-xs font-medium leading-5 text-zinc-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
