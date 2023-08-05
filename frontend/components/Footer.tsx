import Link from "next/link";
import clsx from "clsx";

import { GitHubIcon, ThreadsIcon, MailIcon } from "../components/SocialIcons";

function SocialLink({ className = null, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium fill-accent-6 no-underline transition-all duration-200 ease-in-out hover:fill-accent-5"
      >
        <Icon className="h-5 w-5 flex-none " />
        <span className="ml-2">{children}</span>
      </Link>
    </li>
  );
}

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <ul
      role="list"
      className="text-sm flex flex-row flex-wrap items-center justify-start gap-4 mt-12 mb-5 max-w-5xl mx-auto"
    >
      <SocialLink href="https://github.com/trujared" icon={GitHubIcon}>
        Follow on GitHub
      </SocialLink>
      {/* <SocialLink href="#" icon={ThreadsIcon}>
        Trujared
      </SocialLink> */}
      <SocialLink href="mailto:jared@jaredmakes.com" icon={MailIcon}>
        Jared@jaredmakes.com
      </SocialLink>
      <p className="md:ml-auto">
        © {currentYear} Jared Truscott. All rights reserved.
      </p>
    </ul>
  );
}
