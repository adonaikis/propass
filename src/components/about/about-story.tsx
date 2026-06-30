import Image from "next/image";
import { Asterisk, Quote } from "lucide-react";

const facts = [
  { value: "1", label: "contact dédié" },
  { value: "3", label: "services essentiels" },
  { value: "24/7", label: "présence continue" },
];

export default function AboutStory() {
  return (
    <section
      id="notre-histoire"
      className="overflow-hidden bg-white px-4 py-16 text-black md:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
          <div data-animate="reveal" className="lg:sticky lg:top-8">
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              Notre histoire
            </span>
            <h2 className="mt-4 max-w-[470px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Accueillir avec attention, servir avec justesse
            </h2>
            <p className="mt-7 max-w-[430px] text-xs font-medium leading-5 text-zinc-600">
              Propass est né d’une idée directe : réunir l’hébergement, la
              restauration et l’accompagnement du voyage dans une expérience
              claire. Chaque détail doit faire gagner du temps et apporter du
              calme.
            </p>

            <div className="mt-10 grid grid-cols-3 border-y border-zinc-200 py-6">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={index > 0 ? "border-l border-zinc-200 pl-4" : ""}
                >
                  <p className="font-heading text-[26px] font-medium">
                    {fact.value}
                  </p>
                  <p className="mt-2 max-w-[80px] text-[9px] font-semibold uppercase leading-3 text-zinc-400">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-animate="stagger" className="relative min-h-[720px] sm:min-h-[650px]">
            <div
              data-animate-item
              data-tilt="2"
              className="absolute left-0 top-0 h-[480px] w-[78%] overflow-hidden rounded-[6px] bg-zinc-200 sm:h-[560px]"
            >
              <div data-parallax="5" className="absolute inset-[-28px]">
                <Image
                  src="/images/propass-about-window.jpg"
                  alt="Espace Propass ouvert sur la ville"
                  fill
                  sizes="(max-width: 1024px) 78vw, 46vw"
                  className="object-cover object-center grayscale"
                />
              </div>
            </div>

            <div
              data-animate-item
              data-float="6"
              className="absolute right-0 top-[260px] z-10 w-[52%] rounded-[6px] border-[5px] border-white bg-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:top-[230px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                <Image
                  src="/images/propass-trusted-lobby.jpg"
                  alt="Salon d'accueil calme et lumineux"
                  fill
                  sizes="(max-width: 1024px) 52vw, 28vw"
                  className="object-cover object-center grayscale"
                />
              </div>
            </div>

            <blockquote
              data-animate-item
              className="absolute bottom-0 left-0 z-20 max-w-[390px] bg-black p-6 text-white sm:p-8"
            >
              <Quote className="size-6 rotate-180" strokeWidth={1.8} />
              <p className="mt-5 font-heading text-[23px] font-medium leading-[1.05] sm:text-[27px]">
                Le vrai confort commence lorsque tout paraît simple.
              </p>
              <div className="mt-6 flex items-center gap-3 text-[9px] font-semibold uppercase text-white/50">
                <Asterisk className="size-4" strokeWidth={2} />
                La vision Propass
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
