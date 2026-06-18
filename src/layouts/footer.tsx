import Image from "next/image";
import {
  ArrowRight,
  Camera,
  CircleDot,
  Globe2,
  Mail,
  Quote,
  Smile,
  X,
} from "lucide-react";

const footerLinks = ["À propos", "FAQ", "Contact"];
const socialLinks = [
  { label: "LinkedIn", Icon: Mail },
  { label: "Instagram", Icon: Camera },
  { label: "X", Icon: X },
  { label: "Site web", Icon: Globe2 },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-white px-4 pt-8 pb-6 text-black"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-415px] size-[640px] -translate-x-1/2 rounded-full border border-zinc-300 md:top-[-520px] md:size-[780px] xl:top-[-705px] xl:size-[1040px]" />

      <div className="relative mx-auto h-[700px] max-w-[1180px] md:h-[545px] xl:h-[680px]">
        <div className="relative z-20 mx-auto max-w-[560px] text-center">
          <div className="flex items-center justify-center gap-2 text-[13px] font-semibold">
            Témoignage
            <Smile className="size-4" strokeWidth={2.3} aria-hidden="true" />
          </div>

          <div className="mt-5 flex items-start justify-center gap-2">
            <Quote
              className="mt-1 size-6 shrink-0 rotate-180 text-black"
              strokeWidth={2.4}
              aria-hidden="true"
            />
            <p className="max-w-[520px] text-center text-[17px] font-medium leading-[1.18] md:text-[18px]">
              Avec notre expertise en hospitalité, Propass crée bien plus
              qu&apos;un séjour : un parcours confortable, relaxant et mémorable
              à Kinshasa.
            </p>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="relative size-10 overflow-hidden rounded-[8px] bg-zinc-200">
              <Image
                src="/images/propass-testimonial-profile.jpg"
                alt="Portrait du client Amani Kalombo"
                fill
                sizes="40px"
                className="object-cover object-center"
              />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold">Amani Kalombo</p>
              <p className="text-[11px] font-medium text-zinc-400">
                Client premium chez Propass
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5">
            <CircleDot
              className="size-2.5 text-black"
              strokeWidth={3}
              aria-hidden="true"
            />
            <span className="size-1 rounded-full bg-zinc-300" />
            <span className="size-1 rounded-full bg-zinc-300" />
          </div>
        </div>

        <div className="absolute left-[20px] top-[295px] z-30 rounded-[14px] border border-white bg-white p-1.5 shadow-[0_12px_34px_rgba(0,0,0,0.08)] md:left-[110px] md:top-[150px] md:p-2 xl:left-[150px] xl:top-[180px] xl:p-2.5">
          <div className="relative h-[118px] w-[118px] overflow-hidden rounded-[10px] bg-zinc-200 md:h-[140px] md:w-[136px] xl:h-[178px] xl:w-[178px]">
            <Image
              src="/images/propass-footer-room.jpg"
              alt="Chambre d'hôtel lumineuse avec lit et rideaux"
              fill
              sizes="(max-width: 768px) 118px, 178px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="absolute right-[26px] top-[400px] z-30 rounded-[14px] border border-white bg-white p-1.5 shadow-[0_12px_34px_rgba(0,0,0,0.08)] md:right-[176px] md:top-[310px] md:p-2 xl:right-[260px] xl:top-[365px] xl:p-2.5">
          <div className="relative h-[105px] w-[96px] overflow-hidden rounded-[10px] bg-zinc-200 md:h-[110px] md:w-[98px] xl:h-[145px] xl:w-[126px]">
            <Image
              src="/images/propass-footer-suite.jpg"
              alt="Suite d'hôtel tropicale avec lits et voilage"
              fill
              sizes="(max-width: 768px) 96px, 126px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <h2 className="absolute left-1/2 top-[365px] z-10 w-full -translate-x-1/2 whitespace-nowrap text-center font-sans text-[clamp(38px,8.45vw,116px)] font-medium leading-none text-black md:top-[280px] xl:top-[325px]">
          PROPASS- CONTACT
        </h2>

        <div className="absolute left-1/2 top-[475px] z-20 w-full max-w-[440px] -translate-x-1/2 text-center md:top-[390px] xl:top-[500px]">
          <nav className="flex items-center justify-center gap-6 text-xs font-semibold">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="inline-flex items-center gap-2 hover:text-zinc-600"
              >
                {link}
                <ArrowRight
                  className="size-3"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <p className="mx-auto mt-4 max-w-[400px] text-xs font-medium leading-5 text-zinc-500">
            Avec notre soin du détail et notre accueil chaleureux, nous créons
            des séjours qui vont au-delà d&apos;une chambre.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            {socialLinks.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-zinc-200 bg-white text-black transition-colors hover:bg-zinc-50"
              >
                <Icon className="size-4" strokeWidth={2.1} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-between gap-3 text-[11px] font-medium text-black md:flex-row">
          <p>Helpline: +243 900 000 000</p>
          <p>© 2026 Propass Hotel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
