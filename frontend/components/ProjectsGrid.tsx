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
      {projects.map((project, i) => (
        <div
          className="w-[400px] md:w-[250px] lg:w-[200px] p-3 lg:p-0 mx-auto"
          key={i}
        >
          <Link className="text-white no-underline" href={project.url}>
            <Image
              className="border-2 border-accent-3 rounded-xl w-[300px] md:w-[250px] lg:w-[200px]"
              src={project.mainImage.url + "?w=300&h=300&fit=crop&auto=format"}
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU1uC4BgABtAEbO2PbOQAAAABJRU5ErkJggg=="
              }
              placeholder="blur"
              alt=""
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
            <div className="w-[300px] mt-2 p-1 md:w-[250px] lg:w-[200px]">
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
