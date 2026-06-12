import Image from "next/image";
import { HoldingCard } from "./components/holding-card";
import { SiteNav } from "./components/site-nav";
import holdingClipper from "../public/holding-clipper.jpg";
import holdingEducation from "../public/holding-education.jpg";
import holdingAkasta from "../public/holding-akasta.jpg";
import holdingGym from "../public/holding-gym.jpg";
import logoKonten from "../public/logos/konten.png";
import logoTws from "../public/logos/tws.png";
import logoAkasta from "../public/logos/akasta.png";
import logoAkastaHero from "../public/logos/akasta-hero.png";
import logoFitxgym from "../public/logos/fitxgym.png";

const heroLogos = [
  { src: logoTws, alt: "Trade With Suli", className: "h-7 lg:h-8" },
  { src: logoKonten, alt: "Konten.com", className: "h-6 lg:h-7" },
  { src: logoAkastaHero, alt: "Akasta Bali", className: "h-7 lg:h-9" },
  { src: logoFitxgym, alt: "FitX Gym", className: "h-6 lg:h-7" },
];

const holdings = [
  {
    image: holdingClipper,
    logo: logoKonten,
    logoAlt: "Konten.com",
    logoClassName: "h-7 lg:h-9",
    description:
      "Marketplace clipping di Indonesia yang menghubungkan brand dengan content clipper.",
  },
  {
    image: holdingEducation,
    logo: logoTws,
    logoAlt: "Trade With Suli",
    logoClassName: "h-10 lg:h-12",
    description:
      "Indonesia’s largest crypto and trading education community, with 200K+ members across Discord and Instagram.",
  },
  {
    image: holdingAkasta,
    logo: logoAkasta,
    logoAlt: "Akasta Bali",
    logoClassName: "h-24 lg:h-32",
    description:
      "Akasta is where Indonesian flavors come together with stunning live performances, creating something you truly experience.",
  },
  {
    image: holdingGym,
    logo: logoFitxgym,
    logoAlt: "FitX Gym",
    logoClassName: "h-8 lg:h-10",
    description: "Premium & affordable 24-hour gym.",
  },
];

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-medium">OROVA</span>
      <span className="font-normal"> GROUP</span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col font-display">
      <SiteNav />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-neutral-950 px-6 pb-16 pt-40 sm:px-10 lg:px-20 lg:pb-20">
        {/* Backdrop placeholder — swap for a hero image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-br from-neutral-700 via-neutral-900 to-black"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-tr from-black via-black/60 to-transparent"
        />

        <div className="relative flex w-full flex-col gap-y-12 lg:flex-row lg:items-end lg:justify-between lg:gap-x-12">
          <h1 className="max-w-2xl text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            Built with patience. Held with conviction.
          </h1>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 lg:shrink-0 lg:justify-end lg:gap-x-16">
            {heroLogos.map((logo) => (
              <Image
                key={logo.alt + logo.src.src}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- About */}
      <section
        id="about"
        className="bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-32"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
          <div className="relative aspect-square w-full max-w-147 shrink-0 overflow-hidden border border-black/20 bg-neutral-100">
            <Image
              src="/about.jpg"
              alt="The Orova Group community gathered together"
              fill
              sizes="(min-width: 1024px) 588px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-normal leading-tight text-black sm:text-4xl lg:text-5xl">
              Built to outlast
              <br className="hidden sm:block" /> the moment it was made in.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-black/80 lg:text-xl">
              Trends pass through markets like weather. We build companies
              designed to stand through all of it — strong enough to survive the
              storms, and patient enough to deserve the clear days.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Holdings */}
      <section id="portfolio" className="bg-linear-128 from-black to-blue-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 pb-12 pt-24 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-20 lg:pb-14 lg:pt-40">
          <h2 className="text-4xl font-normal text-white lg:text-5xl">
            What we hold.
          </h2>
          <p className="text-lg text-white/90 sm:text-right lg:text-xl">
            Our Holding Companies
          </p>
        </div>

        <div className="flex flex-col bg-black [&>*:not(:first-child)]:-mt-px">
          {holdings.map((company) => (
            <HoldingCard
              key={company.logoAlt}
              image={company.image}
              logo={company.logo}
              logoAlt={company.logoAlt}
              logoClassName={company.logoClassName}
              description={company.description}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- Contact */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-20">
        <Image
          src="/contact-bg.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-between gap-16">
          <h2 className="max-w-3xl text-4xl font-medium leading-tight text-black sm:text-5xl lg:text-7xl">
            Good things start with a short message.
          </h2>
          <div className="flex flex-col gap-5">
            <p className="max-w-xs text-lg text-black/80 lg:text-xl">
              Both of our companies began as conversations. Yours might too.
            </p>
            <a
              href="mailto:official@orovagroup.id"
              className="inline-flex w-fit items-center rounded-full border border-black px-5 py-2 text-lg text-black transition-colors hover:bg-black hover:text-white lg:text-xl"
            >
              official@orovagroup.id
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Footer */}
      <footer className="border-t border-black/20 bg-white px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Wordmark className="text-2xl text-black lg:text-3xl" />
          <p className="text-sm text-black/40 sm:text-right lg:text-xl">
            © 2026 Orova Group. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
