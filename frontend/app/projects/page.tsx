import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
const projects = [
  {
    name: "Astro Shop",
    description:
      "Hyper-performant e-commerce demo site built with Astro, Tailwind, and React.",
    link: "https://astro-shop-jm.vercel.app/",
  },
  {
    name: "Astro Shop",
    description:
      "Hyper-performant e-commerce demo site built with Astro, Tailwind, and React.",
    link: "https://astro-shop-jm.vercel.app/",
  },
  {
    name: "Amazon Alexa",
    description:
      "I assisted on a series of projects for Voice Focused, a company that focused on disrupting the voice assistant market.",
    link: "https://vimeo.com/309762069?embedded=true&source=vimeo_logo&owner=93600914",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header title={"Projects"} />
      <div className="mx-auto flex flex-col justify-between items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 pr-10">
          {projects.map((project) => (
            <div className="max-w-4xl p-3 my-2">
              <Link className="no-underline" href={project.link}>
                <h3 className="font-semibold mb-3">{project.name}</h3>
                <Image
                  src={`/images/${project.name
                    .replace(/ /g, "")
                    .toLowerCase()}.webp`}
                  alt=""
                  width={300}
                  height={300}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
