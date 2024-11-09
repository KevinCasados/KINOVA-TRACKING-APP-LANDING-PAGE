"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12" aria-label="Trusted by these brands">
      <article className="container">
        <article 
          className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
          role="img"
        >
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} className="logo-ticker-image" alt="Acme - Partner brand - Logo" loading="lazy" />
            <Image src={quantumLogo} className="logo-ticker-image" alt="Quantum - Partner brand - Logo" loading="lazy" />
            <Image src={echoLogo} className="logo-ticker-image" alt="Echo - Partner brand - Logo" loading="lazy" />
            <Image src={celestialLogo} className="logo-ticker-image" alt="Celestial - Partner brand - Logo" loading="lazy" />
            <Image src={pulseLogo} className="logo-ticker-image" alt="Pulse - Partner brand - Logo" loading="lazy" />
            <Image src={apexLogo} className="logo-ticker-image" alt="Apex - Partner brand - Logo" loading="lazy" />

            {/* Segundo conjunto de logos para animación */}
            <Image src={acmeLogo} className="logo-ticker-image" alt="Acme - Partner brand - Logo" loading="lazy" />
            <Image src={quantumLogo} className="logo-ticker-image" alt="Quantum - Partner brand - Logo" loading="lazy" />
            <Image src={echoLogo} className="logo-ticker-image" alt="Echo - Partner brand - Logo" />
            <Image src={celestialLogo} className="logo-ticker-image" alt="Celestial - Partner brand - Logo" loading="lazy" />
            <Image src={pulseLogo} className="logo-ticker-image" alt="Pulse - Partner brand - Logo" loading="lazy" />
            <Image src={apexLogo} className="logo-ticker-image" alt="Apex - Partner brand - Logo" loading="lazy" />
          </motion.div>
        </article>
      </article>
    </section>
  );
};
