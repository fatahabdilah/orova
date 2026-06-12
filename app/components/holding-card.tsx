"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

type HoldingCardProps = {
  image: StaticImageData;
  logo: StaticImageData;
  logoAlt: string;
  logoClassName: string;
  description: string;
};

export function HoldingCard({
  image,
  logo,
  logoAlt,
  logoClassName,
  description,
}: HoldingCardProps) {
  return (
    <motion.article
      className="group relative flex w-full items-center overflow-hidden bg-black min-h-76 sm:min-h-96 md:min-h-112 lg:aspect-11/5 lg:min-h-0"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: false, amount: 0.6 }}
    >
      {/* Background image (fills the card, zoom-cropped) — blurs on scroll-in */}
      <motion.div
        variants={{
          hidden: { filter: "blur(0px)", scale: 1 },
          shown: { filter: "blur(10px)", scale: 1.08 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={image}
          alt={logoAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Darkening tint for legibility */}
      <motion.div
        aria-hidden
        variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 bg-black/45"
      />

      {/* Reveal: logo (left) + description (right). Drives card height on mobile. */}
      <div className="relative z-10 flex w-full flex-col gap-5 px-6 py-8 sm:gap-6 sm:px-8 sm:py-10 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-0 xl:px-20">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            shown: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:shrink-0"
        >
          <Image
            src={logo}
            alt={logoAlt}
            className={`${logoClassName} w-auto object-contain`}
          />
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 24 },
            shown: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="max-w-xl text-base leading-relaxed text-white sm:text-lg lg:max-w-159 lg:text-xl 2xl:text-2xl"
        >
          {description}
        </motion.p>
      </div>
    </motion.article>
  );
}
