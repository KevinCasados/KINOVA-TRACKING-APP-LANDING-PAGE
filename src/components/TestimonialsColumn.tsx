"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface ColumnData {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

interface TestimonialsColumnProps {
  columnData: ColumnData[];
  className?: string;
  duration?: number;
}

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  columnData,
  className = "",
  duration = 10,
}) => {
  return (
    <section className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{ translateY: "-50%" }}
        transition={{
          repeat: Infinity,
          duration,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {Array.from({ length: 2 }).map((_, outerIndex) => (
          <React.Fragment key={outerIndex}>
            {columnData.map(({ text, imageSrc, name, username }, index) => (
              <article key={`${outerIndex}-${index}`} className="card">
                <p>{text}</p>
                <article className="mt-5 flex items-center gap-2">
                  <Image
                    src={imageSrc}
                    alt={`Avatar of ${name}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium leading-5 tracking-tight">
                      {name}
                    </span>
                    <span className="leading-5 tracking-tight">{username}</span>
                  </div>
                </article>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsColumn;