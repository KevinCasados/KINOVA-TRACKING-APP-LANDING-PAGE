/** @format */

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinova Tracking - Optimize Your Tracking Processes",
  description: "Kinova Tracking Landing Page - Enhance your tracking and monitoring capabilities with Kinova's advanced solutions. Join us to improve efficiency and visibility.",
  keywords: ["Kinova Tracking", "tracking solutions", "monitoring tools", "real-time tracking", "efficiency", "process optimization"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kinova Tracking - Optimize Your Tracking Processes",
    description: "Discover Kinova Tracking solutions to enhance your monitoring and visibility. Join us to leverage advanced tracking technologies.",
    url: "https://dynamic-wisp-441a6e.netlify.app/",
    images: [
      {
        url: "https://dynamic-wisp-441a6e.netlify.app/_next/static/media/logo-kinova-sin-fondo.2f39047e.png",
        width: 800,
        height: 600,
        alt: "Kinova Tracking Solutions",
      },
    ],
    siteName: "Kinova Tracking",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Enlace canónico */}
        <link rel="canonical" href="https://dynamic-wisp-441a6e.netlify.app/" />
        
        {/* Datos estructurados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kinova Tracking",
              "url": "https://dynamic-wisp-441a6e.netlify.app/",
              "logo": "https://dynamic-wisp-441a6e.netlify.app/_next/static/media/logo-kinova-sin-fondo.2f39047e.png",
              "sameAs": [
                "https://www.facebook.com/kinova",
                "https://www.instagram.com/kinova",
                "https://www.linkedin.com/company/kinova"
              ]
            })
          }}
        />
      </head>
      <body className={`${dmSans.className} bg-[#EAEEFE] antialiased`}>
        {children}
      </body>
    </html>
  );
}
