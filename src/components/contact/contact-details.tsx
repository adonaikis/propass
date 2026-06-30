import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

const details: {
  number: string;
  label: string;
  value: string;
  href?: string;
  Icon: LucideIcon;
}[] = [
  {
    number: "01",
    label: "Appelez-nous",
    value: "+243 900 000 000",
    href: "tel:+243900000000",
    Icon: Phone,
  },
  {
    number: "02",
    label: "Écrivez-nous",
    value: "contact@propass.cd",
    href: "mailto:contact@propass.cd",
    Icon: Mail,
  },
  {
    number: "03",
    label: "Retrouvez-nous",
    value: "Kinshasa, RDC",
    href: "#map",
    Icon: MapPin,
  },
  {
    number: "04",
    label: "Assistance",
    value: "24 h / 24 · 7 j / 7",
    Icon: Clock3,
  },
];

export default function ContactDetails() {
  return (
    <section className="bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div data-animate="stagger" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {details.map(({ number, label, value, href, Icon }) => {
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-white/35">
                    {number}
                  </span>
                  <span className="grid size-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:bg-white group-hover:text-black">
                    <Icon className="size-4" strokeWidth={1.8} />
                  </span>
                </div>
                <p className="mt-9 text-[10px] font-semibold uppercase text-white/45">
                  {label}
                </p>
                <p className="mt-2 text-xs font-semibold">{value}</p>
              </>
            );

            return href ? (
              <a
                key={label}
                data-animate-item
                href={href}
                className="group border-t border-white/25 pt-5 transition-colors hover:border-white"
              >
                {content}
              </a>
            ) : (
              <article
                key={label}
                data-animate-item
                className="group border-t border-white/25 pt-5"
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
