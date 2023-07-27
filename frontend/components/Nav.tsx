"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export interface NavProps {
  heading?: string | null;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Nav({ heading = null }: NavProps) {
  const pathName = usePathname() === "/" ? "/home" : usePathname();
  const headingBorder = heading ? " border-b border-accent-3" : "justify-between";

  return (
    <>
      <div
        className={clsx(
          "flex flex-wrap justify-end mt-2 mb-10 md:justify-between",
          headingBorder
        )}
      >
        {heading === null ? (
          <Image src={"/images/favicon.png"} alt="" width={75} height={75} />
        ) : (
          <h1>{heading}</h1>
        )}

        <ul className="flex row items-center justify-center flex-wrap mt-1 ml-10 pr-1">
          {navigation.map(({ name, href }, index) => {
            const isCurrent = "/" + name.toLowerCase() === pathName;
            return (
              <li className={isCurrent ? "hidden" : "px-2"} key={index}>
                <Link href={href}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
