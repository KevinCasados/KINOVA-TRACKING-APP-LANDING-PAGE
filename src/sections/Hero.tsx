"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.webp";
import cylinderImage from "@/assets/cylinder.webp";
import noodleImage from "@/assets/noodle.webp";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/Button";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#EAEEFE_100%)] pb-20 pt-8 md:overflow-x-clip md:pb-10 md:pt-5"
      aria-labelledby="hero-heading"
    >
      <section className="container">
        <article className="md:flex md:items-center">
          <article className="md:w-[478px]">
            <p className="tag">Version 2.0 is here</p>
            <h1 id="hero-heading" className="md:tex-7xl mt-6 bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010d3e]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <Button aria-label="Get the app for free">Get for Free</Button>
              <button className="btn btn-text gap-1" aria-label="Learn more about the app">
                <span>Learn more</span> <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </article>
          <article className="mt-20 md:relative md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src={cogImage.src}
              alt="Rotating cog image as decorative element"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
              animate={{
                translateY: [-30, 30],
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.img
              className="hidden md:absolute md:-left-32 md:-top-8 md:block"
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder shape image as decorative element"
              loading="lazy"
              style={{ translateY }}
            />
            <motion.img
              src={noodleImage.src}
              alt="Decorative noodle shape image"
              loading="lazy"
              width={220}
              className="hidden lg:absolute lg:left-[448px] lg:top-[524px] lg:block lg:rotate-[30deg]"
              style={{ translateY, rotate: 30 }}
            />
          </article>
        </article>
      </section>
    </section>
  );
};