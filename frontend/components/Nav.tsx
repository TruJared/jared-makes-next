import Link from "next/link";
import Image from "next/image";

export interface NavProps {
  params: {
    name: string;
    href: string;
    isCurrent?: boolean;
  }[];
}

export default function Nav({ params }: NavProps) {
  return (
    <nav className="flex row justify-between flex-wrap mx-auto p-3">
      <Image className='pl-1' src={"/images/favicon.png"} alt="" width={75} height={75} />
      <ul className="flex row items-center justify-center flex-wrap pr-1">
        {params.map(({ name, href, isCurrent }, index) => (
          <li className="px-3" key={index}>
            <Link
              className={isCurrent ? "text-white no-underline" : ""}
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
