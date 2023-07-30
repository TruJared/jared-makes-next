import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Heading";
import Nav from "../../components/Nav";
const projects = [
  {
    name: "Astro Shop",
    description:
      "Hyper-performant e-commerce demo site built with Astro, Tailwind, and React.",
    link: "https://astro-shop-jm.vercel.app/",
    stack: ["Astro", "Tailwind", "React"],
  },
  {
    name: "Astro Shop",
    description:
      "Hyper-performant e-commerce demo site built with Astro, Tailwind, and React.",
    link: "https://astro-shop-jm.vercel.app/",
    stack: ["Astro", "Tailwind", "React"],
  },
  {
    name: "Amazon Alexa",
    description:
      "I assisted on a series of projects for Voice Focused, a company that focused on disrupting the voice assistant market.",
    link: "https://vimeo.com/309762069",
    stack: ["Alexa", "Node", "AWS"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Nav heading={"Projects"} />

      <div className="flex flex-wrap justify-center md:justify-between">
        {projects.map((project) => (
          <div className="max-w-[400px] mt-2 mb-6 p-3 lg:p-0 lg:max-w-[300px]">
            <Link className="no-underline" href={project.link}>
              <h3 className="font-semibold">{project.name}</h3>
              <Image

                src={`/images/${project.name
                  .replace(/ /g, "")
                  .toLowerCase()}.webp`}
                alt=""
                width={400}
                height={400}
              />
              <div className="max-w-[400px] h-[150px] border-t border-accent-3 mt-5 p-1 lg:max-w-[300px] ">
                <p className="pb-2">{project.description}</p>
                <p>How it's made: {project.stack}</p>
              {project.link}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
