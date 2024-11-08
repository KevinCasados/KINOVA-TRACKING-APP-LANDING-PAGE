import Logo from "@/assets/logo-kinova-sin-fondo.png";
import Image from "next/image";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPinterest from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <section className="container">
        <article className="before:content-[' '] relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full">
          <Image src={Logo} alt="Kinova company logo" height={60} className="relative" />
        </article>
        
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center" aria-label="Footer navigation">
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Customers</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Help</Link>
          <Link href="/">Careers</Link>
        </nav>
        
        <nav className="mt-6 flex justify-center gap-6">
          <Link href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <SocialX alt="Kinova Facebook social network icon" />
          </Link>
          <Link href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <SocialYoutube alt="Kinova Youtube social network icon" />
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <SocialInsta alt="Kinova Instagram social network icon" />
          </Link>
          <Link href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <SocialLinkedIn alt="Kinova Linkedin social network icon" />
          </Link>
          <Link href="https://www.pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
            <SocialPinterest alt="Kinova Pinterest social network icon" />
          </Link>
        </nav>
        
        <address className="mt-6 not-italic">
          &copy; 2024 Kinova, Inc. All rights reserved.
        </address>
      </section>
    </footer>
  );
};
