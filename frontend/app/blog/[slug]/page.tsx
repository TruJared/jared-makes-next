import sanity from "../../../lib/sanity";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts',{ next: {revalidate: 60 * 60} }).then((res) => res.json())
//   const paths = await sanity.fetch(
//     `*[_type == "post" && defined(slug.current)][].slug.current`
//   );
//   return paths.map((path: [string]) => ({
//     slug: path,
//   }));
// }
const sampleData = [
  {
    id: 1,
    title: "Blog Post 1 is a really long title",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: ["Tech", "CSS"],
  },
  {
    id: 2,
    title: "Blog Post 2",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: ["Not Tech"],
  },
  {
    id: 3,
    title: "Blog Post 3",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: ["Next", "JavaScript", "Tech"],
  },
  {
    id: 4,
    title: "Blog Post 4 is a little long too",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: ["Next", "React", "JavaScript", "Transformers", "Git"],
  },
];

// generate 404 if slug not found
export const dynamicParams = false;

export async function generateStaticParams() {
  return sampleData.map((post) =>
    post.title.toLowerCase().replaceAll(" ", "-")
  );
}

export default async function BlogPost({ params }: any) {
  const { slug } = params;

  // fetch blog post from sanity

  return <h1>Title</h1>;
}
