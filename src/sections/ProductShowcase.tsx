"use client";
import productImage from "@/assets/product-image.webp";
import pyramidImage from "@/assets/pyramid.webp";
import tubeImage from "@/assets/tube.webp";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
      aria-labelledby="product-showcase-heading"
    >
      <article className="container">
        <article className="section-heading text-center">
          <div className="flex justify-center">
            <p className="tag">Boost productivity</p>
          </div>
          <h2 id="product-showcase-heading" className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </article>
        
        <article className="relative flex justify-center mt-10">
          <Image
            src={productImage}
            alt="Main product view showcasing tracking features"
            className="mt-10"
            loading="lazy"
          />
          <motion.img
            src={pyramidImage.src}
            alt="Decorative pyramid shape image"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{ translateY }}
            loading="lazy"
          />
          <motion.img
            src={tubeImage.src}
            alt="Decorative tube shape image"
            height={248}
            width={248}
            className="absolute -left-36 bottom-24 hidden md:block"
            style={{ translateY }}
            loading="lazy"
          />
        </article>
      </article>
    </section>
  );
};