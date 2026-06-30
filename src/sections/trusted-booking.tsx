import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  CircleDot,
  Heart,
  Music2,
  Package,
  Sparkles,
} from "lucide-react";

const partners: { name: string; Icon: LucideIcon; className?: string }[] = [
  { name: "Dropbox", Icon: Box },
  { name: "Creative Market", Icon: Sparkles, className: "font-serif" },
  { name: "deliveroo", Icon: Package },
  { name: "amazon", Icon: ArrowRight },
  { name: "asana", Icon: CircleDot },
  { name: "amazon", Icon: ArrowRight },
  { name: "asana", Icon: CircleDot },
  { name: "amazon", Icon: ArrowRight },
  { name: "Spotify", Icon: Music2 },
  { name: "amazon", Icon: ArrowRight, className: "opacity-45" },
];

const galleryImages = [
  {
    src: "/PHOTO-PROPASS/chambre100$1.jpg",
    alt: "Chambre Propass lumineuse avec lit double",
    className:
      "h-[210px] md:mt-8 md:h-[160px] md:w-[158px] min-[1180px]:mt-11 min-[1180px]:h-[205px] min-[1180px]:w-[205px]",
  },
  {
    src: "/PHOTO-PROPASS/derrier.jpg",
    alt: "Entrée d'un bâtiment Propass entourée de palmiers",
    className:
      "h-[210px] md:mt-0 md:h-[145px] md:w-[95px] min-[1180px]:h-[190px] min-[1180px]:w-[125px]",
  },
  {
    src: "/PHOTO-PROPASS/sec.jpg",
    alt: "Agente Propass au bureau d'accueil",
    className:
      "h-[210px] md:mt-12 md:h-[168px] md:w-[168px] min-[1180px]:mt-14 min-[1180px]:h-[218px] min-[1180px]:w-[218px]",
  },
  {
    src: "/PHOTO-PROPASS/salle2.jpg",
    alt: "Grande salle de réception Propass",
    className:
      "h-[210px] md:mt-16 md:h-[124px] md:w-[94px] min-[1180px]:mt-[72px] min-[1180px]:h-[160px] min-[1180px]:w-[125px]",
  },
  {
    src: "/PHOTO-PROPASS/resto2.jpg",
    alt: "Restaurant Propass préparé pour le service",
    className:
      "h-[210px] md:mt-8 md:h-[126px] md:w-[150px] min-[1180px]:mt-11 min-[1180px]:h-[165px] min-[1180px]:w-[200px]",
  },
];

function PartnerLogo({
  name,
  Icon,
  className = "",
}: {
  name: string;
  Icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      data-animate-item
      className={`flex shrink-0 items-center gap-1.5 text-[11px] font-semibold leading-none text-zinc-700 opacity-80 ${className}`}
    >
      <Icon className="size-4" strokeWidth={2.3} aria-hidden="true" />
      <span>{name}</span>
    </div>
  );
}

function ImageTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      data-gallery-item
      data-tilt="3"
      className={`group relative overflow-hidden rounded-[10px] bg-zinc-200 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1180px) 18vw, 220px"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}

function CommunityCard({ className = "" }: { className?: string }) {
  return (
    <div
      data-gallery-item
      data-tilt="2"
      className={`relative overflow-hidden rounded-[12px] bg-black p-5 text-white ${className}`}
    >
      <div
        data-float="5"
        className="absolute -right-9 top-3 size-28 rounded-full border border-white/15"
      />
      <div
        data-float="3"
        className="absolute right-8 top-16 size-14 rounded-full border border-white/10"
      />

      <p className="relative max-w-[175px] text-[13px] font-medium leading-[1.08] min-[1180px]:text-[17px]">
        Rejoignez Propass et vivez des séjours inoubliables
      </p>

      <a
        data-magnetic="4"
        href="mailto:contact@propass.cd"
        className="relative mt-4 flex h-9 w-full items-center justify-between gap-3 rounded-full border border-white/80 px-4 text-[10px] font-medium transition-colors hover:bg-white hover:text-black"
      >
        contact@propass.cd
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-black">
          <ArrowUpRight
            className="size-4"
            strokeWidth={2.4}
            aria-hidden="true"
          />
        </span>
      </a>
    </div>
  );
}

export default function TrustedBooking() {
  return (
    <section id="trusted" className="bg-white px-4 py-14 text-black md:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div data-animate="reveal" className="flex justify-center">
          <a
            data-magnetic="5"
            href="#"
            className="inline-flex h-7 items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 text-[10px] font-medium text-black transition-colors hover:bg-zinc-50"
          >
            Explorer l&apos;hôtel
            <ArrowRight
              className="size-3"
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </a>
        </div>

        <h2
          data-animate="reveal"
          className="mx-auto mt-6 max-w-[800px] text-center font-heading text-[34px] font-medium leading-[0.98] tracking-normal sm:text-[40px] md:text-[42px] min-[1180px]:text-[56px]"
        >
          <span>
            Séjours sûrs, réservation fluide
            <span
              data-line
              className="mx-3 inline-block h-[2px] w-14 translate-y-[-0.18em] bg-black md:w-20"
            />
          </span>
          <span className="block">Explorez maintenant !</span>
        </h2>

        <p
          data-animate="reveal"
          className="mx-auto mt-6 max-w-[520px] text-center text-xs font-medium leading-5 text-zinc-700"
        >
          Découvrez les meilleurs hôtels près de vous en un geste, avec une
          réservation simple et un confort absolu.
        </p>

        <div data-animate="reveal" className="mt-8 flex flex-col items-center">
          <a
            data-magnetic="6"
            href="#"
            className="inline-flex h-11 items-center gap-4 rounded-full bg-black pl-6 pr-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Commencer
            <span className="grid size-8 place-items-center rounded-full bg-white text-black">
              <ArrowUpRight
                className="size-4"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </span>
          </a>
          <p className="mt-3 flex items-center gap-1 text-[10px] font-medium text-zinc-700">
            <Heart className="size-3" strokeWidth={2.2} aria-hidden="true" />
            Pause ou annulation possible à tout moment.
          </p>
        </div>

        <div
          data-animate="stagger"
          className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:flex-nowrap md:justify-between md:gap-x-5"
        >
          {partners.map((partner, index) => (
            <PartnerLogo
              key={`${partner.name}-${index}`}
              name={partner.name}
              Icon={partner.Icon}
              className={partner.className}
            />
          ))}
        </div>

        <div
          data-gallery="mobile"
          className="mt-9 grid gap-4 sm:grid-cols-2 md:hidden"
        >
          {galleryImages.slice(0, 3).map((image) => (
            <ImageTile
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-[210px]"
            />
          ))}
          <CommunityCard className="min-h-[175px]" />
          {galleryImages.slice(3).map((image) => (
            <ImageTile
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-[210px]"
            />
          ))}
        </div>

        <div
          data-gallery="desktop"
          className="mt-9 hidden items-start justify-between gap-3 md:flex min-[1180px]:gap-5"
        >
          {galleryImages.slice(0, 3).map((image) => (
            <ImageTile
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}

          <CommunityCard className="h-[138px] w-[168px] p-4 min-[1180px]:h-[178px] min-[1180px]:w-[220px] min-[1180px]:p-6" />

          {galleryImages.slice(3).map((image) => (
            <ImageTile
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
