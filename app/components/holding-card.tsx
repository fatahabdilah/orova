"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

type HoldingCardProps = {
  image: StaticImageData;
  imageMobile: StaticImageData;
  logo: StaticImageData;
  logoAlt: string;
  logoClassName: string;
  description: string;
};

export function HoldingCard({
  image,
  imageMobile,
  logo,
  logoAlt,
  logoClassName,
  description,
}: HoldingCardProps) {
  return (
    <motion.article
      className="group relative flex min-h-64 w-full flex-col justify-end overflow-hidden bg-black lg:block lg:aspect-11/5 lg:min-h-0"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: false, amount: 0.6 }}
    >
      {/* ---- Mobile / tablet: image + frosted gradient + bottom content ---- */}
      <Image
        src={imageMobile}
        alt={logoAlt}
        fill
        sizes="50vw"
        className="object-cover lg:hidden"
      />
      <div
        aria-hidden
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 45%)",
          maskImage: "linear-gradient(to bottom, transparent, black 45%)",
        }}
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-b from-black/0 to-black/15 backdrop-blur-md lg:hidden"
      />
      <div className="relative z-10 flex flex-col items-start gap-2.5 bg-gradient-to-b from-black/0 to-black/50 px-4 pb-4 pt-10 sm:gap-3 sm:px-6 sm:pb-6 lg:hidden">
        <Image
          src={logo}
          alt={logoAlt}
          className={`${logoClassName} w-auto object-contain`}
        />
        <p className="text-xs leading-snug text-white sm:text-sm">
          {description}
        </p>
      </div>

      {/* ---- Desktop: full-width image that blurs + content row on scroll ---- */}
      <motion.div
        variants={{
          hidden: { filter: "blur(0px)", scale: 1 },
          shown: { filter: "blur(10px)", scale: 1.08 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 hidden will-change-transform lg:block"
      >
        <Image
          src={image}
          alt={logoAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        aria-hidden
        variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 hidden bg-black/45 lg:block"
      />
      <div className="absolute inset-0 hidden lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 xl:px-20">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="shrink-0"
        >
          <Image
            src={logo}
            alt={logoAlt}
            className={`${logoClassName} w-auto object-contain`}
          />
        </motion.div>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="max-w-159 text-xl leading-relaxed text-white 2xl:text-2xl"
        >
          {description}
        </motion.p>
      </div>
    </motion.article>
  );
}
