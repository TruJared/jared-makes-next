import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import {Analytics} from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";

import Footer from "../components/Footer";
import clsx from "clsx";

const fontFamily = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello.",
  description:
    "I'm Jared Truscott. A developer who is passionate about UX, efficiency, and building the future of e-commerce and the web.",
  openGraph: {
    title: "Hello.",
    description:
      "I'm Jared Truscott. A developer who is passionate about UX, efficiency, and building the future of e-commerce and the web.",
    images: ["/images/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx("min-h-screen max-w-5xl mx-auto", fontFamily.className)}
      >
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
