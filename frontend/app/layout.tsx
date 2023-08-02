import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Footer from "../components/Footer";

const fontFamily = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello.",
  description: "I'm Jared Truscott. A developer who is passionate about usability, efficiency, and building the future of e-commerce and the web.",
  openGraph: {
    title: "Hello.",
    description: "I'm Jared Truscott. A developer who is passionate about usability, efficiency, and building the future of e-commerce and the web.",
    images: ['/images/og_image.png']
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={fontFamily.className}>
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
