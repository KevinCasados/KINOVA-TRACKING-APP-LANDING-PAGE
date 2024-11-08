import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface columnData {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

function TestimonialsColumn({
  columnData,
  className,
  duration,
}: {
  columnData: columnData[];
  className?: string;
  duration?: number;
}) {
  return (
    <section className={className} aria-label="Customer testimonials">
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{ translateY: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: duration || 10,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {columnData.map(({ text, imageSrc, name, username }, index) => (
              <article key={index} className="card" aria-label={`Testimonial from ${name}`}>
                <blockquote className="text">
                  {text}
                </blockquote>
                <figure className="mt-5 flex items-center gap-2">
                  <Image
                    src={imageSrc}
                    alt={`Profile picture of ${name}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <figcaption className="flex flex-col">
                    <h3 className="font-medium leading-5 tracking-tight">
                      {name}
                    </h3>
                    <p className="leading-5 tracking-tight">@{username}</p>
                  </figcaption>
                </figure>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}

export default TestimonialsColumn;