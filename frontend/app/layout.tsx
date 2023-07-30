import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const fontFamily = Montserrat({ subsets: ["latin"] });

// todo - add metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
