"use client";

import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  ArrowRight,
  BusFront,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Plane,
  Ship,
  Ticket,
  Users,
  type LucideIcon,
} from "lucide-react";

type Transport = "Avion" | "Bus" | "Bateau";

type SearchResult = {
  transport: Transport;
  origin: string;
  destination: string;
  date: string;
  passengers: string;
};

const transportOptions: { label: Transport; Icon: LucideIcon }[] = [
  { label: "Avion", Icon: Plane },
  { label: "Bus", Icon: BusFront },
  { label: "Bateau", Icon: Ship },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

export default function TicketService() {
  const [transport, setTransport] = useState<Transport>("Avion");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [error, setError] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const resultPanel = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!result || !resultPanel.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(resultPanel.current, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        resultPanel.current,
        { autoAlpha: 0, y: 24, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
        },
      );
    },
    { dependencies: [result], revertOnUpdate: true },
  );

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!origin.trim() || !destination.trim() || !date) {
      setError("Renseignez le départ, la destination et la date.");
      return;
    }

    setError("");
    setResult({
      transport,
      origin: origin.trim(),
      destination: destination.trim(),
      date,
      passengers,
    });
  };

  return (
    <section id="billets" className="bg-white px-4 py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              01 · Billets de voyage
            </span>
            <h2 className="mt-3 max-w-[670px] font-heading text-[36px] font-medium leading-[0.98] md:text-[52px]">
              Trouvez votre prochain départ
            </h2>
          </div>
          <p className="max-w-[340px] text-xs font-medium leading-5 text-zinc-600">
            Une demande simple pour comparer les options disponibles et être
            accompagné jusqu’à l’émission du billet.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[6px] bg-black lg:grid-cols-[1.08fr_0.92fr]">
          <form
            data-animate="reveal"
            onSubmit={submit}
            className="p-5 text-white sm:p-9 lg:p-11"
          >
            <fieldset>
              <legend className="text-[10px] font-semibold uppercase text-white/50">
                Moyen de transport
              </legend>
              <div className="mt-4 grid grid-cols-3 border border-white/20 p-1">
                {transportOptions.map(({ label, Icon }) => {
                  const active = transport === label;

                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setTransport(label)}
                      className={`flex h-10 items-center justify-center gap-2 text-[10px] font-semibold transition-colors ${
                        active
                          ? "bg-white text-black"
                          : "text-white/65 hover:text-white"
                      }`}
                    >
                      <Icon className="size-3.5" strokeWidth={2} />
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-9 grid gap-x-7 gap-y-8 sm:grid-cols-2">
              <label className="block">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-white/50">
                  <MapPin className="size-3.5" strokeWidth={2} />
                  Départ
                </span>
                <input
                  value={origin}
                  onChange={(event) => setOrigin(event.target.value)}
                  className="mt-2 h-11 w-full border-b border-white/25 bg-transparent px-0 text-xs text-white outline-none placeholder:text-white/35 focus:border-white"
                  placeholder="Ex. Kinshasa"
                />
              </label>

              <label className="block">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-white/50">
                  <MapPin className="size-3.5" strokeWidth={2} />
                  Destination
                </span>
                <input
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  className="mt-2 h-11 w-full border-b border-white/25 bg-transparent px-0 text-xs text-white outline-none placeholder:text-white/35 focus:border-white"
                  placeholder="Ex. Lubumbashi"
                />
              </label>

              <label className="block">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-white/50">
                  <CalendarDays className="size-3.5" strokeWidth={2} />
                  Date du voyage
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="mt-2 h-11 w-full border-b border-white/25 bg-transparent px-0 text-xs text-white outline-none focus:border-white [color-scheme:dark]"
                />
              </label>

              <label className="block">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-white/50">
                  <Users className="size-3.5" strokeWidth={2} />
                  Passagers
                </span>
                <select
                  value={passengers}
                  onChange={(event) => setPassengers(event.target.value)}
                  className="mt-2 h-11 w-full border-b border-white/25 bg-black px-0 text-xs text-white outline-none focus:border-white"
                >
                  <option value="1">1 passager</option>
                  <option value="2">2 passagers</option>
                  <option value="3">3 passagers</option>
                  <option value="4">4 passagers</option>
                  <option value="5">5 passagers</option>
                </select>
              </label>
            </div>

            <p role="alert" className="mt-5 min-h-5 text-xs text-white/75">
              {error}
            </p>

            <button
              data-magnetic="6"
              type="submit"
              className="mt-4 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Préparer ma demande
              <span className="grid size-8 place-items-center rounded-full bg-black text-white">
                <ArrowRight className="size-4" strokeWidth={2.3} />
              </span>
            </button>
          </form>

          <div
            data-animate="reveal"
            className="relative min-h-[430px] overflow-hidden border-t border-white/15 lg:border-t-0 lg:border-l"
          >
            <Image
              src="/images/propass-services-ticket.png"
              alt="Conseillère Propass remettant un billet à un passager"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-black/42" />

            {result ? (
              <div
                ref={resultPanel}
                className="absolute inset-x-5 bottom-5 rounded-[6px] bg-white p-5 text-black sm:inset-x-8 sm:bottom-8 sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-10 place-items-center rounded-full bg-black text-white">
                    <CheckCircle2 className="size-5" strokeWidth={2} />
                  </span>
                  <span className="text-[9px] font-semibold uppercase text-zinc-400">
                    Demande prête
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3 font-heading text-[22px] font-medium leading-none sm:text-[26px]">
                  <span className="truncate">{result.origin}</span>
                  <ArrowRight className="size-5 shrink-0" strokeWidth={1.8} />
                  <span className="truncate">{result.destination}</span>
                </div>
                <div className="mt-5 grid grid-cols-3 border-t border-zinc-200 pt-4 text-[10px] font-semibold">
                  <span>{result.transport}</span>
                  <span>{formatDate(result.date)}</span>
                  <span className="text-right">
                    {result.passengers} passager
                    {result.passengers === "1" ? "" : "s"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="absolute inset-x-6 bottom-7 text-white sm:inset-x-8 sm:bottom-9">
                <Ticket className="size-7" strokeWidth={1.7} />
                <p className="mt-4 max-w-[330px] font-heading text-[28px] font-medium leading-none">
                  Votre trajet commence ici
                </p>
                <p className="mt-3 text-[10px] font-medium text-white/65">
                  Réponse et accompagnement par notre équipe.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
