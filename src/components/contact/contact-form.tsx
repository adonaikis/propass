"use client";

import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Phone,
  RotateCcw,
  Send,
  UserRound,
} from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("mailto:contact@propass.cd");
  const panel = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!panel.current || !submitted) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(panel.current, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        panel.current,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
      );
    },
    { scope: panel, dependencies: [submitted], revertOnUpdate: true },
  );

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = String(data.get("subject") ?? "Demande de contact");
    const message = String(data.get("message") ?? "");
    const body = [
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Téléphone : ${phone || "Non renseigné"}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:contact@propass.cd?subject=${encodeURIComponent(
      `[Propass] ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    setSubmitted(true);
    window.setTimeout(() => window.location.assign(href), 220);
  };

  return (
    <section
      id="contact-form"
      className="bg-white px-4 py-16 text-black md:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              Votre demande
            </span>
            <h2 className="mt-3 max-w-[650px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Dites-nous comment vous aider
            </h2>
          </div>
          <p className="max-w-[340px] text-xs font-medium leading-5 text-zinc-600">
            Complétez le formulaire. Votre application de messagerie ouvrira un
            e-mail déjà préparé pour notre équipe.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div ref={panel} data-animate="reveal">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-start justify-center border-t border-black pt-8">
                <span className="grid size-13 place-items-center rounded-full bg-black text-white">
                  <CheckCircle2 className="size-6" strokeWidth={2} />
                </span>
                <p className="mt-7 text-[10px] font-semibold uppercase text-zinc-500">
                  Message préparé
                </p>
                <h3 className="mt-3 max-w-[520px] font-heading text-[34px] font-medium leading-none">
                  Votre messagerie est prête à envoyer la demande
                </h3>
                <p className="mt-5 max-w-[500px] text-xs font-medium leading-5 text-zinc-600">
                  Vérifiez le contenu de l’e-mail puis confirmez son envoi. Si
                  rien ne s’est ouvert, utilisez le bouton ci-dessous.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={mailtoHref}
                    className="inline-flex h-11 items-center gap-3 rounded-full bg-black pl-6 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
                  >
                    Ouvrir ma messagerie
                    <span className="grid size-8 place-items-center rounded-full bg-white text-black">
                      <Mail className="size-4" strokeWidth={2.2} />
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-300 px-5 text-xs font-semibold transition-colors hover:bg-zinc-50"
                  >
                    <RotateCcw className="size-4" strokeWidth={2} />
                    Nouveau message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submitMessage}
                className="border-t border-black pt-8"
              >
                <div className="grid gap-x-7 gap-y-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                      <UserRound className="size-3.5" strokeWidth={2} />
                      Nom complet
                    </span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Votre nom"
                      className="mt-2 h-11 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none placeholder:text-zinc-400 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                      <Mail className="size-3.5" strokeWidth={2} />
                      E-mail
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="vous@exemple.com"
                      className="mt-2 h-11 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none placeholder:text-zinc-400 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                      <Phone className="size-3.5" strokeWidth={2} />
                      Téléphone
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+243 ..."
                      className="mt-2 h-11 w-full border-b border-zinc-300 bg-transparent px-0 text-xs outline-none placeholder:text-zinc-400 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase text-zinc-500">
                      <MessageSquareText className="size-3.5" strokeWidth={2} />
                      Sujet
                    </span>
                    <select
                      required
                      name="subject"
                      defaultValue="Réservation"
                      className="mt-2 h-11 w-full border-b border-zinc-300 bg-white px-0 text-xs outline-none focus:border-black"
                    >
                      <option>Réservation</option>
                      <option>Chambre et séjour</option>
                      <option>Billet de voyage</option>
                      <option>Restauration</option>
                      <option>Auberge</option>
                      <option>Autre demande</option>
                    </select>
                  </label>
                </div>

                <label className="mt-8 block">
                  <span className="text-[10px] font-semibold uppercase text-zinc-500">
                    Votre message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre demande..."
                    className="mt-3 w-full resize-none border border-zinc-300 bg-transparent p-4 text-xs leading-5 outline-none placeholder:text-zinc-400 focus:border-black"
                  />
                </label>

                <label className="mt-6 flex items-start gap-3 text-[10px] font-medium leading-4 text-zinc-600">
                  <input
                    required
                    type="checkbox"
                    className="mt-0.5 size-4 accent-black"
                  />
                  J’accepte que Propass utilise ces informations pour répondre
                  à ma demande.
                </label>

                <button
                  data-magnetic="6"
                  type="submit"
                  className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-black pl-6 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  Préparer le message
                  <span className="grid size-8 place-items-center rounded-full bg-white text-black">
                    <Send className="size-4" strokeWidth={2.3} />
                  </span>
                </button>
              </form>
            )}
          </div>

          <aside
            data-animate="reveal"
            data-tilt="2"
            className="overflow-hidden rounded-[6px] bg-black p-4 text-white lg:sticky lg:top-16"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-zinc-900">
              <Image
                src="/images/propass-services-ticket.png"
                alt="Conseillère Propass échangeant avec un voyageur"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center grayscale"
              />
            </div>
            <div className="px-2 pt-6 pb-3">
              <p className="text-[10px] font-semibold uppercase text-white/45">
                Réponse personnalisée
              </p>
              <h3 className="mt-3 max-w-[390px] font-heading text-[27px] font-medium leading-none">
                Un interlocuteur pour suivre votre demande
              </h3>
              <p className="mt-5 max-w-[400px] text-[11px] font-medium leading-4 text-white/55">
                Notre équipe centralise les questions liées au séjour, aux repas
                et au voyage pour vous répondre clairement.
              </p>
              <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-semibold">
                <span className="text-white/45">Délai habituel</span>
                <span className="flex items-center gap-2">
                  Moins de 24 h
                  <ArrowRight className="size-3.5" strokeWidth={2} />
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
