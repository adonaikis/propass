"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CalendarDays, Users } from "lucide-react";

export default function RoomBooking() {
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConfirmed(true);
  };

  return (
    <section id="booking" className="bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-white/50">
              Votre prochain séjour
            </span>
            <h2 className="mt-3 max-w-[610px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Choisissez vos dates, nous préparons le reste
            </h2>
          </div>
          <p className="max-w-[310px] text-xs font-medium leading-5 text-white/55">
            Annulation flexible et confirmation rapide selon les disponibilités.
          </p>
        </div>

        <form
          data-animate="reveal"
          onSubmit={handleSubmit}
          className="mt-12 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-[1fr_1fr_0.8fr_auto] md:items-end"
        >
          <label className="block">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-white/50">
              <CalendarDays
                className="size-3.5"
                strokeWidth={2}
                aria-hidden="true"
              />
              Arrivée
            </span>
            <input
              required
              type="date"
              className="h-11 w-full border-b border-white/30 bg-transparent px-0 text-xs text-white outline-none [color-scheme:dark] focus:border-white"
            />
          </label>

          <label className="block">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-white/50">
              <CalendarDays
                className="size-3.5"
                strokeWidth={2}
                aria-hidden="true"
              />
              Départ
            </span>
            <input
              required
              type="date"
              className="h-11 w-full border-b border-white/30 bg-transparent px-0 text-xs text-white outline-none [color-scheme:dark] focus:border-white"
            />
          </label>

          <label className="block">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-white/50">
              <Users className="size-3.5" strokeWidth={2} aria-hidden="true" />
              Voyageurs
            </span>
            <select className="h-11 w-full border-b border-white/30 bg-black px-0 text-xs text-white outline-none focus:border-white">
              <option>1 personne</option>
              <option>2 personnes</option>
              <option>3 personnes</option>
              <option>4 personnes</option>
            </select>
          </label>

          <button
            data-magnetic="7"
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold whitespace-nowrap text-black transition-colors hover:bg-zinc-100"
          >
            Vérifier
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowUpRight
                className="size-4"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </span>
          </button>
        </form>

        <p
          aria-live="polite"
          className="mt-5 min-h-5 text-xs font-medium text-white/65"
        >
          {confirmed
            ? "Vos dates sont prêtes. Notre équipe vous contactera pour confirmer la chambre."
            : "Meilleur tarif disponible en réservation directe."}
        </p>
      </div>
    </section>
  );
}
