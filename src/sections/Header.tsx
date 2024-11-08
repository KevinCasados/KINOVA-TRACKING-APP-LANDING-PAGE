/** @format */

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo-kinova.svg";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <aside className="flex items-center justify-center bg-black py-3 text-sm text-white md:gap-3">
        <p className="hidden text-white/60 md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free.</p>
          <ArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
        </div>
      </aside>
      
      <section className="py-5">
        <article className="container">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Kinova Home">
              <Logo alt="Kinova company logo" className="h-10 w-10" loading="lazy" />
            </Link>

            <button aria-label="Open menu" className="h-5 w-5 md:hidden">
              <MenuIcon />
            </button>

            <nav className="hidden items-center gap-6 text-black/60 md:flex" aria-label="Main navigation">
              <Link className="hover:bg-gradient-to-b from-black to-[#001e80] bg-clip-text" href="/">About</Link>
              <Link className="hover:bg-gradient-to-b from-black to-[#001e80] bg-clip-text" href="/">Features</Link>
              <Link className="hover:bg-gradient-to-b from-black to-[#001e80] bg-clip-text" href="/">Customers</Link>
              <Link className="hover:bg-gradient-to-b from-black to-[#001e80] bg-clip-text" href="/">Updates</Link>
              <Link className="hover:bg-gradient-to-b from-black to-[#001e80] bg-clip-text" href="/">Help</Link>
              <Button aria-label="Get the app for free">Get for Free</Button>
            </nav>
          </div>
        </article>
      </section>
    </header>
  );
};