import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";

const tabs = ["Hôtel", "Chambre", "Hôtel de luxe"];

export default function HospitalityExcellence() {
  return (
    <section
      id="excellence"
      className="bg-white px-4 py-16 text-black md:py-20"
    >
      <div
        data-animate="stagger"
        className="mx-auto grid max-w-[1180px] gap-12 min-[900px]:grid-cols-[430px_420px] min-[900px]:items-center min-[900px]:justify-center min-[900px]:gap-20 min-[1180px]:grid-cols-[560px_500px] min-[1180px]:justify-between min-[1180px]:gap-0"
      >
        <div data-animate-item>
          <div className="mb-7 flex items-center gap-2">
            {tabs.map((tab) => {
              const isActive = tab === "Chambre";

              return (
                <button
                  key={tab}
                  data-magnetic="3"
                  type="button"
                  className={`h-7 rounded-full border px-3 text-[11px] font-medium transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-zinc-200 bg-white text-black hover:bg-zinc-50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <article
            data-tilt="2"
            className="grid min-h-[276px] gap-5 rounded-[24px] bg-zinc-50 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:grid-cols-[186px_1fr] min-[1180px]:min-h-[342px] min-[1180px]:grid-cols-[245px_1fr] min-[1180px]:gap-6 min-[1180px]:p-4"
          >
            <div className="relative min-h-[250px] overflow-hidden rounded-[10px] bg-zinc-200 min-[1180px]:min-h-[310px] min-[1180px]:rounded-[14px]">
              <Image
                data-parallax="4"
                src="/images/propass-excellence-room.jpg"
                alt="Chambre confortable avec grande baie vitrée"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1180px) 186px, 245px"
                className="scale-[1.06] object-cover object-center"
              />
            </div>

            <div className="flex min-h-[250px] flex-col justify-between py-4 pr-2 min-[1180px]:min-h-[310px] min-[1180px]:py-5">
              <div>
                <h2 className="max-w-[230px] text-[23px] font-medium leading-[1.12] min-[1180px]:max-w-[260px] min-[1180px]:text-[27px]">
                  Chambres confortables avec un soin excellent
                </h2>
                <p className="mt-7 max-w-[230px] text-xs font-medium leading-5 text-zinc-600 min-[1180px]:max-w-[260px] min-[1180px]:text-[13px]">
                  Service rapide, assistance sur place et conciergerie virtuelle
                  pour rendre chaque séjour simple et agréable.
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <a
                    data-magnetic="5"
                    href="#"
                    className="mb-8 inline-flex h-8 items-center gap-2 rounded-full bg-black pl-4 pr-1 text-[10px] font-semibold text-white transition-colors hover:bg-zinc-800"
                  >
                    Voir détails
                    <span className="grid size-6 place-items-center rounded-full bg-white text-black">
                      <ArrowUpRight
                        className="size-3"
                        strokeWidth={2.7}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                  <p className="text-sm font-medium">
                    1 <span className="text-zinc-400">/ 5</span>
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <button
                    data-magnetic="5"
                    type="button"
                    className="grid size-10 place-items-center rounded-full border border-zinc-300 bg-white text-black transition-colors hover:bg-zinc-100"
                    aria-label="Chambre précédente"
                  >
                    <ArrowLeft
                      className="size-5"
                      strokeWidth={2.1}
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    data-magnetic="5"
                    type="button"
                    className="grid size-10 place-items-center rounded-full bg-black text-white transition-colors hover:bg-zinc-800"
                    aria-label="Chambre suivante"
                  >
                    <ArrowRight
                      className="size-5"
                      strokeWidth={2.1}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div data-animate-item className="min-[900px]:pt-3">
          <h2 className="max-w-[390px] font-heading text-[35px] font-medium leading-[1.05] tracking-normal min-[1180px]:max-w-[500px] min-[1180px]:text-[44px]">
            Découvrez l’excellence hôtelière. Des séjours de confiance
            <span className="ml-3 inline-flex h-8 w-28 translate-y-[-4px] items-center justify-end rounded-full border border-black px-3">
              <ArrowRight
                className="size-6"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>
          </h2>

          <div className="mt-8 grid gap-7 sm:grid-cols-[138px_1fr] sm:items-center min-[1180px]:mt-10 min-[1180px]:grid-cols-[180px_1fr] min-[1180px]:gap-9">
            <div className="relative h-[165px] overflow-hidden rounded-[16px] bg-zinc-200 min-[1180px]:h-[205px] min-[1180px]:rounded-[20px]">
              <Image
                data-parallax="4"
                src="/images/propass-excellence-lounge.jpg"
                alt="Salon chaleureux avec poêle et vue sur la forêt"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1180px) 138px, 180px"
                className="scale-[1.06] object-cover object-center"
              />
            </div>

            <div className="max-w-[240px] min-[1180px]:max-w-[280px]">
              <Asterisk
                data-float="4"
                className="size-8 text-black min-[1180px]:size-10"
                strokeWidth={2.4}
                aria-hidden="true"
              />
              <p className="mt-3 text-xs font-medium leading-5 text-zinc-700 min-[1180px]:text-[13px]">
                Nos prestations premium offrent une gamme complète de services :
                chambres modernes, expériences sur mesure et assistance 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
