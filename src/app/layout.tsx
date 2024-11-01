/** @format */

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinova Tracking Landing Page",
  description: "Created by Kinova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={`${dmSans.className} bg-[#EAEEFE] antialiased`}>
        {children}
      </body>
    </html>
  );
}
