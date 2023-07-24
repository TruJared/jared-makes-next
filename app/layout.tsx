import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Nav from "@/components/Nav";

const fontFamily = Montserrat({ subsets: ["latin"] });

// todo - add metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navigation = [
  { name: "Home", href: "/", isCurrent: true },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <div className="max-w-7xl mx-auto">
        <Nav params={navigation} />
        {children}
        </div>
      </body>
    </html>
  );
}
