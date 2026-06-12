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
      className="group relative w-full overflow-hidden bg-black"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: false, amount: 0.6 }}
    >
      {/* Background image — blurs + zooms once the card scrolls into view */}
      <motion.div
        variants={{
          hidden: { filter: "blur(0px)", scale: 1 },
          shown: { filter: "blur(10px)", scale: 1.08 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="will-change-transform"
      >
        <Image
          src={image}
          alt={logoAlt}
          sizes="100vw"
          className="block h-auto w-full object-cover"
        />
      </motion.div>

      {/* Darkening tint for legibility */}
      <motion.div
        aria-hidden
        variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 bg-black/45"
      />

      {/* Reveal: logo (left) + description (right), vertically centered */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-20">
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
          className="max-w-xl text-xl leading-relaxed text-white lg:max-w-159 lg:text-2xl"
        >
          {description}
        </motion.p>
      </div>
    </motion.article>
  );
}
