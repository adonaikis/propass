"use client";

import Image from "next/image";
import {
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Mail,
  Phone,
  UserRound,
  Users,
} from "lucide-react";
import { rooms } from "@/src/data/rooms";

type Step = 1 | 2 | 3;

const steps = ["Dates", "Chambre", "Coordonnées"];
const selectableRooms = rooms.slice(0, 3);

function getNightCount(arrival: string, departure: string) {
  if (!arrival || !departure) return 0;

  const start = new Date(`${arrival}T00:00:00`).getTime();
  const end = new Date(`${departure}T00:00:00`).getTime();
  return Math.max(0, Math.round((end - start) / 86_400_000));
}

export default function ReservationFlow() {
  const [step, setStep] = useState<Step>(1);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomId, setRoomId] = useState(selectableRooms[0].id);
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  const selectedRoom = rooms.find((room) => room.id === roomId) ?? rooms[0];
  const nights = useMemo(
    () => getNightCount(arrival, departure),
    [arrival, departure],
  );
  const total = (nights || 1) * selectedRoom.price;

  useGSAP(
    () => {
      if (!panel.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(panel.current.querySelector("[data-booking-panel]"), {
          clearProps: "all",
        });
        return;
      }

      gsap.fromTo(
        panel.current.querySelector("[data-booking-panel]"),
        { autoAlpha: 0, x: 20 },
        { autoAlpha: 1, x: 0, duration: 0.55, ease: "power3.out" },
      );
    },
    { scope: panel, dependencies: [step, completed], revertOnUpdate: true },
  );

  const validateDates = () => {
    if (!arrival || !departure) {
      setError("Sélectionnez une date d’arrivée et une date de départ.");
      return false;
    }

    if (nights < 1) {
      setError("La date de départ doit être après la date d’arrivée.");
      return false;
    }

    setError("");
    return true;
  };

  const goToRooms = () => {
    if (validateDates()) setStep(2);
  };

  const chooseRoom = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    setRoomId(id);
    gsap.fromTo(
      event.currentTarget,
      { scale: 0.98 },
      { scale: 1, duration: 0.4, ease: "back.out(2)", overwrite: true },
    );
  };

  const submitReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCompleted(true);
  };

  const reset = () => {
    setStep(1);
    setCompleted(false);
    setError("");
  };

  return (
    <section
      id="reservation"
      className="bg-white px-4 py-16 text-black md:py-20"
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              Votre réservation
            </span>
            <h2 className="mt-3 max-w-[610px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Trois étapes, aucune surprise
            </h2>
          </div>
          <p className="max-w-[330px] text-xs font-medium leading-5 text-zinc-600">
            Votre estimation se met à jour pendant que vous composez votre
            séjour.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-10">
          <form
            data-animate="reveal"
            onSubmit={submitReservation}
            className="border-t border-black pt-6"
          >
            <div className="grid grid-cols-3 gap-2 border-b border-zinc-200 pb-5">
              {steps.map((label, index) => {
                const number = (index + 1) as Step;
                const active = step === number && !completed;
                const done = step > number || completed;

                return (
                  <button
                    key={label}
                    type="button"
                    disabled={number > step || completed}
                    onClick={() => number < step && setStep(number)}
                    className="flex min-w-0 items-center gap-2 text-left disabled:cursor-default"
                  >
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full border text-[10px] font-semibold transition-colors ${
                        active || done
                          ? "border-black bg-black text-white"
                          : "border-zinc-300 text-zinc-400"
                      }`}
                    >
                      {done ? (
                        <Check className="size-3.5" strokeWidth={2.4} />
                      ) : (
                        number
                      )}
                    </span>
                    <span
                      className={`truncate text-[10px] font-semibold ${
                        active || done ? "text-black" : "text-zinc-400"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div ref={panel} className="min-h-[430px] pt-8">
              <div data-booking-panel>
                {completed ? (
                  <div className="flex min-h-[390px] flex-col items-start justify-center">
                    <span className="grid size-14 place-items-center rounded-full bg-black text-white">
                      <CheckCircle2
                        className="size-7"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    <p className="mt-7 text-[10px] font-semibold uppercase text-zinc-500">
                      Demande reçue · PRP-0626
                    </p>
                    <h3 className="mt-3 max-w-[520px] font-heading text-[34px] font-medium leading-none">
                      Votre séjour est prêt à être confirmé
                    </h3>
                    <p className="mt-5 max-w-[500px] text-xs font-medium leading-5 text-zinc-600">
                      Notre équipe vérifiera la disponibilité et vous contactera
                      avec la confirmation finale.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-8 h-10 rounded-full border border-zinc-300 px-5 text-xs font-semibold transition-colors hover:bg-zinc-50"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                ) : null}

                {!completed && step === 1 ? (
                  <div>
                    <h3 className="text-[22px] font-semibold">
                      Quand souhaitez-vous venir ?
                    </h3>
                    <p className="mt-2 text-xs font-medium text-zinc-500">
                      Sélectionnez vos dates et le nombre de voyageurs.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                          <CalendarDays className="size-3.5" strokeWidth={2} />
                          Arrivée
                        </span>
                        <input
                          type="date"
                          value={arrival}
                          onChange={(event) => setArrival(event.target.value)}
                          className="h-12 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none focus:border-black"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                          <CalendarDays className="size-3.5" strokeWidth={2} />
                          Départ
                        </span>
                        <input
                          type="date"
                          value={departure}
                          onChange={(event) => setDeparture(event.target.value)}
                          className="h-12 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none focus:border-black"
                        />
                      </label>

                      <label className="block sm:col-span-2 sm:max-w-[320px]">
                        <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                          <Users className="size-3.5" strokeWidth={2} />
                          Voyageurs
                        </span>
                        <select
                          value={guests}
                          onChange={(event) => setGuests(event.target.value)}
                          className="h-12 w-full border-b border-zinc-300 bg-white px-0 text-xs outline-none focus:border-black"
                        >
                          <option value="1">1 personne</option>
                          <option value="2">2 personnes</option>
                          <option value="3">3 personnes</option>
                          <option value="4">4 personnes</option>
                        </select>
                      </label>
                    </div>

                    <p
                      role="alert"
                      className="mt-5 min-h-5 text-xs font-medium text-black"
                    >
                      {error}
                    </p>

                    <button
                      data-magnetic="6"
                      type="button"
                      onClick={goToRooms}
                      className="mt-4 inline-flex h-11 items-center gap-3 rounded-full bg-black pl-6 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
                    >
                      Choisir une chambre
                      <span className="grid size-8 place-items-center rounded-full bg-white text-black">
                        <ArrowRight className="size-4" strokeWidth={2.3} />
                      </span>
                    </button>
                  </div>
                ) : null}

                {!completed && step === 2 ? (
                  <div>
                    <h3 className="text-[22px] font-semibold">
                      Quelle chambre vous convient ?
                    </h3>
                    <p className="mt-2 text-xs font-medium text-zinc-500">
                      Trois options sélectionnées selon votre séjour.
                    </p>

                    <div className="mt-7 space-y-3">
                      {selectableRooms.map((room) => {
                        const selected = room.id === roomId;
                        return (
                          <button
                            key={room.id}
                            type="button"
                            onClick={(event) => chooseRoom(event, room.id)}
                            className={`grid w-full grid-cols-[88px_1fr_auto] items-center gap-4 rounded-[6px] border p-2 text-left transition-colors sm:grid-cols-[118px_1fr_auto] ${
                              selected
                                ? "border-black bg-zinc-50"
                                : "border-zinc-200 hover:border-zinc-400"
                            }`}
                          >
                            <span className="relative h-[76px] overflow-hidden rounded-[4px] bg-zinc-200 sm:h-[88px]">
                              <Image
                                src={room.image}
                                alt=""
                                fill
                                sizes="118px"
                                className="object-cover object-center"
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-semibold">
                                {room.name}
                              </span>
                              <span className="mt-1 block text-[10px] font-medium text-zinc-500">
                                {room.categoryLabel} · {room.rating}/5
                              </span>
                            </span>
                            <span className="text-right text-xs font-semibold">
                              ${room.price}
                              <span className="block text-[9px] font-medium text-zinc-400">
                                / nuit
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-300 px-4 text-xs font-semibold"
                      >
                        <ArrowLeft className="size-4" strokeWidth={2.2} />
                        Retour
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex h-10 items-center gap-2 rounded-full bg-black pl-5 pr-2 text-xs font-semibold text-white"
                      >
                        Continuer
                        <ArrowRight className="size-4" strokeWidth={2.2} />
                      </button>
                    </div>
                  </div>
                ) : null}

                {!completed && step === 3 ? (
                  <div>
                    <h3 className="text-[22px] font-semibold">
                      Comment pouvons-nous vous joindre ?
                    </h3>
                    <p className="mt-2 text-xs font-medium text-zinc-500">
                      Ces informations servent uniquement à confirmer votre
                      demande.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                          <UserRound className="size-3.5" strokeWidth={2} />
                          Nom complet
                        </span>
                        <input
                          required
                          name="name"
                          autoComplete="name"
                          className="h-12 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none focus:border-black"
                          placeholder="Votre nom"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                          <Mail className="size-3.5" strokeWidth={2} />
                          E-mail
                        </span>
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          className="h-12 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none focus:border-black"
                          placeholder="vous@exemple.com"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                          <Phone className="size-3.5" strokeWidth={2} />
                          Téléphone
                        </span>
                        <input
                          required
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          className="h-12 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none focus:border-black"
                          placeholder="+243 ..."
                        />
                      </label>

                      <label className="block">
                        <span className="mb-3 block text-[10px] font-semibold uppercase text-zinc-500">
                          Demande particulière
                        </span>
                        <input
                          name="request"
                          className="h-12 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none focus:border-black"
                          placeholder="Transfert, arrivée tardive..."
                        />
                      </label>
                    </div>

                    <label className="mt-7 flex items-start gap-3 text-[10px] font-medium leading-4 text-zinc-600">
                      <input
                        required
                        type="checkbox"
                        className="mt-0.5 size-4 accent-black"
                      />
                      J’accepte d’être contacté au sujet de cette demande de
                      réservation.
                    </label>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-300 px-4 text-xs font-semibold"
                      >
                        <ArrowLeft className="size-4" strokeWidth={2.2} />
                        Retour
                      </button>
                      <button
                        type="submit"
                        className="inline-flex h-11 items-center gap-3 rounded-full bg-black pl-6 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
                      >
                        Envoyer la demande
                        <span className="grid size-8 place-items-center rounded-full bg-white text-black">
                          <Check className="size-4" strokeWidth={2.4} />
                        </span>
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </form>

          <aside
            data-animate="reveal"
            className="overflow-hidden rounded-[6px] bg-black p-4 text-white lg:sticky lg:top-4"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-zinc-900">
              <Image
                key={selectedRoom.image}
                src={selectedRoom.image}
                alt={selectedRoom.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover object-center"
              />
            </div>

            <div className="px-2 pt-6 pb-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase text-white/45">
                    Votre choix
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {selectedRoom.name}
                  </h3>
                </div>
                <p className="text-sm font-semibold">${selectedRoom.price}</p>
              </div>

              <div className="mt-6 space-y-3 border-y border-white/15 py-5 text-xs font-medium">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/45">Dates</span>
                  <span className="text-right">
                    {arrival && departure
                      ? `${arrival} → ${departure}`
                      : "À sélectionner"}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/45">Voyageurs</span>
                  <span>{guests}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/45">Nuits</span>
                  <span>{nights || "—"}</span>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase text-white/45">
                    Estimation
                  </p>
                  <p className="mt-2 text-[10px] font-medium text-white/45">
                    Hors services optionnels
                  </p>
                </div>
                <p className="font-heading text-[30px] font-medium">${total}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
