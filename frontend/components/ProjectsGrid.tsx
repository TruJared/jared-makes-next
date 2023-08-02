import Image from "next/image";
import Link from "next/link";
import Tags from "./Tags";

interface ProjectsProps {
  projects: {
    title: string;
    description?: string;
    url: string;
    tags: { title: string }[];
    mainImage: {
      url: string;
      alt: string;
    };
  }[];
}

export default function ProjectsGrid({ projects }: ProjectsProps) {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 md:gap-10">
      {projects.map((project) => (
        <div className="w-[400px] md:w-[250px] lg:w-[200px] p-3 lg:p-0 mx-auto">
          <Link className="text-white no-underline" href={project.url}>
            <Image
              className="border-2 border-accent-3 rounded-xl w-[400px] md:w-[250px] lg:w-[200px]"
              src={project.mainImage.url + "?w=400&h=400&fit=crop&auto=format"}
              alt=""
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />
            <div className="w-[400px] mt-2 p-1 md:w-[250px] lg:w-[200px]">
              <h3 className="text-2xl font-semibold underline  sm:text-xl lg:text-base">
                {project.title}
              </h3>
              <p className="text-sm truncate">{project.url}</p>
              <p className="my-2">{project.description}</p>
              <Tags tags={project.tags} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
