import Image from "next/image";
import { ArrowDown, Camera, Images, UsersRound } from "lucide-react";

const highlights = [
  { label: "Notre équipe", value: "Agents", Icon: UsersRound },
  { label: "Nos espaces", value: "Chambres", Icon: Images },
  { label: "Nos moments", value: "Restauration", Icon: Camera },
];

export default function GalleryHero() {
  return (
    <section
      id="top"
      data-hero
      className="relative mx-auto min-h-[670px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-black text-white"
    >
      <div data-hero-media className="absolute inset-[-16px]">
        <Image
          src="/images/propass-gallery-team.png"
          alt="Équipe d'agents de l'hôtel Propass"
          fill
          preload
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-center grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <div
        data-hero-copy
        className="relative z-10 flex min-h-[670px] flex-col px-5 pt-16 pb-6 sm:px-10 sm:pt-20 sm:pb-8 lg:px-12"
      >
        <div className="max-w-[760px]">
          <span className="text-[10px] font-semibold uppercase text-white/60">
            Propass en images
          </span>
          <h1 className="mt-6 font-heading text-[48px] font-medium leading-[0.92] text-white sm:text-[66px] lg:text-[80px]">
            Galerie Propass
          </h1>
          <p className="mt-6 max-w-[550px] text-xs font-medium leading-5 text-white/70 sm:text-[13px]">
            Rencontrez nos agents et explorez les chambres, la restauration et
            les espaces qui composent l’expérience Propass.
          </p>
          <a
            data-magnetic="7"
            href="#photos"
            className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Voir les photos
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowDown className="size-4" strokeWidth={2.3} />
            </span>
          </a>
        </div>

        <div className="mt-auto grid border-y border-white/30 sm:grid-cols-3">
          {highlights.map(({ label, value, Icon }, index) => (
            <div
              key={label}
              className={`flex min-h-[82px] items-center gap-4 py-4 sm:px-5 ${
                index > 0
                  ? "border-t border-white/30 sm:border-t-0 sm:border-l"
                  : ""
              }`}
            >
              <Icon className="size-4.5 shrink-0" strokeWidth={1.8} />
              <span>
                <span className="block text-[9px] font-semibold uppercase text-white/45">
                  {label}
                </span>
                <span className="mt-1 block text-xs font-semibold">{value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
