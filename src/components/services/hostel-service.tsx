import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Coffee,
  ConciergeBell,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const amenities = [
  { label: "Wi-Fi inclus", Icon: Wifi },
  { label: "Accueil 24/7", Icon: ConciergeBell },
  { label: "Petit déjeuner", Icon: Coffee },
  { label: "Accès sécurisé", Icon: ShieldCheck },
];

export default function HostelService() {
  return (
    <section id="auberge" className="overflow-hidden bg-white px-4 py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              03 · Auberge
            </span>
            <h2 className="mt-3 max-w-[670px] font-heading text-[36px] font-medium leading-[0.98] md:text-[52px]">
              Posez vos bagages. Nous prenons le relais.
            </h2>
          </div>
          <p className="max-w-[340px] text-xs font-medium leading-5 text-zinc-600">
            Des chambres calmes et fonctionnelles pour une nuit, une escale ou
            un séjour prolongé.
          </p>
        </div>

        <div className="relative mt-12 min-h-[720px] sm:min-h-[650px] lg:min-h-[610px]">
          <div
            data-animate="reveal"
            className="absolute inset-x-0 top-0 h-[420px] overflow-hidden rounded-[6px] sm:h-[480px] lg:right-[24%] lg:h-[560px]"
          >
            <div data-parallax="5" className="absolute inset-[-30px]">
              <Image
                src="/images/propass-trusted-building.jpg"
                alt="Façade lumineuse de l'auberge Propass"
                fill
                sizes="(max-width: 1024px) 100vw, 76vw"
                className="object-cover object-center grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div
            data-float="6"
            className="absolute right-4 top-[330px] z-10 w-[190px] rounded-[6px] border-[5px] border-white bg-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:right-9 sm:top-[365px] sm:w-[245px] lg:right-0 lg:top-12 lg:w-[300px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
              <Image
                src="/images/propass-trusted-room.jpg"
                alt="Chambre double confortable de l'auberge Propass"
                fill
                sizes="(max-width: 640px) 190px, 300px"
                className="object-cover object-center grayscale"
              />
            </div>
          </div>

          <div
            data-animate="reveal"
            className="absolute inset-x-0 top-[500px] bg-white pt-7 sm:top-[535px] lg:bottom-0 lg:left-0 lg:right-auto lg:top-auto lg:w-[650px] lg:p-8"
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
              {amenities.map(({ label, Icon }) => (
                <div key={label} className="border-t border-zinc-200 pt-4">
                  <Icon className="size-5" strokeWidth={1.8} />
                  <p className="mt-3 text-[10px] font-semibold">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                data-magnetic="6"
                href="/chambres"
                className="inline-flex h-11 items-center gap-3 rounded-full bg-black pl-6 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Voir les chambres
                <span className="grid size-8 place-items-center rounded-full bg-white text-black">
                  <ArrowUpRight className="size-4" strokeWidth={2.3} />
                </span>
              </Link>
              <span className="text-[10px] font-semibold text-zinc-500">
                À partir de 95 $ / nuit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
