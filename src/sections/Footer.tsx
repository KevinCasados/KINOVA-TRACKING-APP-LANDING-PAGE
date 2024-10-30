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
      <div className="container">
        <div className="before:content-[' '] relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full">
          <Image src={Logo} alt="Sass Logo" height={60} className="relative" />
        </div>
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Customers</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Help</Link>
          <Link href="/">Careers</Link>
        </nav>
        <div className="mt-6 flex justify-center gap-6">
          <SocialX />
          <SocialYoutube />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPinterest />
        </div>
        <p className="mt-6">
          &copy; 2024 Kinova, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
