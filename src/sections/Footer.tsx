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
          <Image src={Logo} alt="Kinova company logo" height={60} className="relative" loading="lazy" />
        </article>
        
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center" aria-label="Footer navigation">
          <Link className="hover:text-white transition-all" href="/">About</Link>
          <Link className="hover:text-white transition-all" href="/">Features</Link>
          <Link className="hover:text-white transition-all" href="/">Customers</Link>
          <Link className="hover:text-white transition-all" href="/">Pricing</Link>
          <Link className="hover:text-white transition-all" href="/">Help</Link>
          <Link className="hover:text-white transition-all" href="/">Careers</Link>
        </nav>
        
        <nav className="mt-6 flex justify-center gap-6">
          <Link href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <SocialX className="hover:text-white transition-all" alt="Kinova Facebook social network icon" loading="lazy" />
          </Link>
          <Link href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <SocialYoutube className="hover:text-white transition-all" alt="Kinova Youtube social network icon" loading="lazy" />
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <SocialInsta className="hover:text-white transition-all" alt="Kinova Instagram social network icon" loading="lazy" />
          </Link>
          <Link href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <SocialLinkedIn className="hover:text-white transition-all" alt="Kinova Linkedin social network icon" loading="lazy" />
          </Link>
          <Link href="https://www.pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
            <SocialPinterest className="hover:text-white transition-all" alt="Kinova Pinterest social network icon" loading="lazy" />
          </Link>
        </nav>
        
        <address className="mt-6 not-italic">
          &copy; 2024 Kinova, Inc. All rights reserved.
        </address>
      </section>
    </footer>
  );
};
