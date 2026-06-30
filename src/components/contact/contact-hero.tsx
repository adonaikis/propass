import Image from "next/image";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";

const quickContacts = [
  {
    label: "Téléphone",
    value: "+243 900 000 000",
    href: "tel:+243900000000",
    Icon: Phone,
  },
  {
    label: "E-mail",
    value: "contact@propass.cd",
    href: "mailto:contact@propass.cd",
    Icon: Mail,
  },
  {
    label: "Adresse",
    value: "Kinshasa, RDC",
    href: "#map",
    Icon: MapPin,
  },
];

export default function ContactHero() {
  return (
    <section
      id="top"
      data-hero
      className="relative mx-auto min-h-[650px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-black text-white"
    >
      <div data-hero-media className="absolute inset-[-16px]">
        <Image
          src="/images/propass-trusted-building.jpg"
          alt="Façade d'une adresse Propass à Kinshasa"
          fill
          preload
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-center grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-black/68" />

      <div
        data-hero-copy
        className="relative z-10 flex min-h-[650px] flex-col px-5 pt-16 pb-6 sm:px-10 sm:pt-20 sm:pb-8 lg:px-12"
      >
        <div className="max-w-[750px]">
          <span className="text-[10px] font-semibold uppercase text-white/60">
            Nous sommes à votre écoute
          </span>
          <h1 className="mt-6 font-heading text-[47px] font-medium leading-[0.92] text-white sm:text-[64px] lg:text-[78px]">
            Contactez Propass
          </h1>
          <p className="mt-6 max-w-[540px] text-xs font-medium leading-5 text-white/70 sm:text-[13px]">
            Une réservation, un service ou une demande particulière : échangez
            directement avec notre équipe à Kinshasa.
          </p>
          <a
            data-magnetic="7"
            href="#contact-form"
            className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Envoyer un message
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowDown className="size-4" strokeWidth={2.3} />
            </span>
          </a>
        </div>

        <div className="mt-auto grid border-y border-white/30 sm:grid-cols-3">
          {quickContacts.map(({ label, value, href, Icon }, index) => (
            <a
              key={label}
              href={href}
              className={`group flex min-h-[82px] items-center gap-4 py-4 transition-colors hover:bg-white hover:px-4 hover:text-black sm:px-5 sm:hover:px-6 ${
                index > 0
                  ? "border-t border-white/30 sm:border-t-0 sm:border-l"
                  : ""
              }`}
            >
              <Icon className="size-4.5 shrink-0" strokeWidth={1.8} />
              <span className="min-w-0">
                <span className="block text-[9px] font-semibold uppercase opacity-50">
                  {label}
                </span>
                <span className="mt-1 block truncate text-[10px] font-semibold sm:text-[11px]">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
