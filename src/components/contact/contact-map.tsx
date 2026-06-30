import Link from "next/link";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";

const mapUrl =
  "https://maps.google.com/maps?q=Kinshasa%2C%20DRC&t=&z=13&ie=UTF8&iwloc=&output=embed";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Kinshasa%2C+Democratic+Republic+of+the+Congo";

export default function ContactMap() {
  return (
    <section id="map" className="bg-zinc-50 px-4 py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase text-zinc-500">
              Carte interactive
            </span>
            <h2 className="mt-3 max-w-[620px] font-heading text-[36px] font-medium leading-[0.98] md:text-[50px]">
              Retrouvez-nous à Kinshasa
            </h2>
          </div>
          <p className="max-w-[340px] text-xs font-medium leading-5 text-zinc-600">
            Explorez la carte, zoomez et ouvrez l’itinéraire directement dans
            Google Maps.
          </p>
        </div>

        <div
          data-animate="reveal"
          className="mt-12 overflow-hidden rounded-[6px] border border-zinc-200 bg-white"
        >
          <iframe
            title="Carte interactive de Kinshasa"
            src={mapUrl}
            width="100%"
            height="520"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block min-h-[440px] w-full grayscale contrast-[1.08]"
          />

          <div className="flex flex-col gap-5 border-t border-zinc-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-black text-white">
                <MapPin className="size-4.5" strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-semibold">Propass · Kinshasa</p>
                <p className="mt-1 text-[10px] font-medium text-zinc-500">
                  République démocratique du Congo
                </p>
              </div>
            </div>

            <Link
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-zinc-300 px-5 text-xs font-semibold transition-colors hover:bg-zinc-50"
            >
              <Navigation className="size-4" strokeWidth={2} />
              Ouvrir l’itinéraire
              <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
