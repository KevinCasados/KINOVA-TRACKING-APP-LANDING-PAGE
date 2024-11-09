"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.webp";
import springImage from "@/assets/spring.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/Button";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] pb-24"
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <article className="section-heading relative text-center">
          <h2 id="cta-heading" className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="Decorative blue star"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
            loading="lazy"
          />
          <motion.img
            src={springImage.src}
            alt="Decorative blue spring"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
            loading="lazy"
          />
        </article>
        
        <article className="mt-10 flex justify-center gap-2">
          <Button aria-label="Get the app for free">Get for Free</Button>
          <button className="btn btn-text gap-1" aria-label="Learn more about the app">
            <span>Learn more</span> <ArrowIcon className="h-5 w-5" />
          </button>
        </article>
      </div>
    </section>
  );
};
