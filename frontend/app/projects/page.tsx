import { Metadata } from "next";
import Nav from "../../components/Nav";
import sanity from "../../lib/sanity";
import ProjectsGrid from "../../components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects - Jared Makes",
  description: "I'm Jared Truscott. A developer who is passionate about usability, efficiency, and building the future of e-commerce and the web.",
  openGraph: {
    title: "Projects - Jared Makes",
    description: "I'm Jared Truscott. A developer who is passionate about usability, efficiency, and building the future of e-commerce and the web.",
    images: ['/images/og_image.png']
  },
};

export default async function ProjectsPage() {
  const projects = await sanity.fetch(`
  *[_type == 'project'] | order(category) { category, title, description,
   ...url{"url":current}, mainImage{...asset->{url}}, tags[]->{title}}`);

  const ols = await projects.filter((project) => project.category === "ols");
  const other = await projects.filter(
    (project) => project.category === "other"
  );
  const upcoming = await projects.filter(
    (project) => project.category === "upcoming"
  );


  return (
    <>
      <Nav heading={"Projects"} />
      {ols && (
        <div className="my-24 md:my-16">
          <h2 className="mb-4">Online Stores</h2>
          <p className="mb-8 ml-4">This is a suite of stores that a small team, and I migrated from Magento to Big Commerce. We were able to build these sites and migrate them in less than one year.</p>
          <ProjectsGrid projects={ols} />
        </div>
      )}
      {other && (
        <div className="my-24 md:my-16">
          <h2 className="mb-4">Other Projects</h2>
          <p className="mb-8 ml-4">While the bulk of my work involved building, migrating, maintaining the sites for online stores, I have still found time for some other fun projects..</p>
          <ProjectsGrid projects={other} />
        </div>
      ) }
      {upcoming && <ProjectsGrid projects={upcoming} />}
    </>
  );
}
