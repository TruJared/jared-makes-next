"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface NavProps {
  params: {
    name: string;
    href: string;
  }[];
}

export default function Nav({ params }: NavProps) {
  const pathName = usePathname() === "/" ? "/home" : usePathname();

  return (
    <nav className="flex row justify-between flex-wrap mx-auto py-1">
      <Image
        className="pl-1"
        src={"/images/favicon.png"}
        alt=""
        width={75}
        height={75}
      />
      <ul className="flex row items-center justify-center flex-wrap pr-1">
        {params.map(({ name, href }, index) => {
          const isCurrent = "/" + name.toLowerCase() === pathName;
          return (
            <li className="px-3" key={index}>
              <Link
                className={isCurrent ? "text-white no-underline" : ""}
                href={href}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
