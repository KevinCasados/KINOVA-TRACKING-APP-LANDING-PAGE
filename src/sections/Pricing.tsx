"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, index }) => {
  const isPopular = tier.popular;
  const isInverse = tier.inverse;
  
  const cardClasses = twMerge(
    "card",
    isInverse && "border-black bg-gradient-to-b from-[#190d2e] to-[#3d1a71] shadow-[0px_0px_12px_#8c45ff] text-white"
  );
  
  const buttonClasses = twMerge(
    "btn btn-primary mt-[30px] w-full",
    isInverse && "border-white bg-white text-black"
  );

  return (
    <section className={cardClasses} aria-labelledby={`tier-title-${index}`}>
      <article className="flex justify-between items-center">
        <h3 id={`tier-title-${index}`} className={isInverse ? "text-lg font-bold text-white/60" : "text-lg font-bold bg-gradient-to-b from-black to-[#001e80] bg-clip-text"}>
          {tier.title}
        </h3>
        {isPopular && (
          <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
            <motion.span
              className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] bg-clip-text font-medium text-transparent [background-size:200%]"
              animate={{ backgroundPositionX: "100%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                duration: 1,
              }}
            >
              Popular
            </motion.span>
          </div>
        )}
      </article>

      <article className="mt-[30px] flex items-baseline gap-1">
        <span className="text-4xl font-bold leading-none tracking-tighter">
          ${tier.monthlyPrice}
        </span>
        <span className="font-bold tracking-tight text-black/80">
          /month
        </span>
      </article>

      <button className={buttonClasses} aria-label={`Sign up for ${tier.title} plan`}>
        {tier.buttonText}
      </button>

      <ul className="mt-8 flex flex-col gap-5">
        {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-4 text-sm">
            <CheckIcon className="h-6 w-6" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const Pricing = () => {
  return (
    <section className="py-24" aria-labelledby="pricing-heading">
      <div className="container">
        <article className="section-heading text-center">
          <h2 id="pricing-heading" className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </article>

        <article className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </article>
      </div>
    </section>
  );
};