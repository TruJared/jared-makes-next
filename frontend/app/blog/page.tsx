import Link from "next/link";
import Header from "../../components/Heading";
import Tags from "../../components/Tags";
// async function getDadJoke() {
//   const res = await fetch("https://icanhazdadjoke.com/", {
//     headers: { Accept: "application/json" },
//     next: {revalidate: 10}
//   });

//   return res.json();
// }

const sampleData = [
  {
    id: 1,
    title: "Blog Post 1 is a really long title",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: [{ title: "Tech" }, { title: "CSS" }],
  },
  {
    id: 2,
    title: "Blog Post 2",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: [{ title: "Not Tech" }],
  },
  {
    id: 3,
    title: "Blog Post 3",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: [{ title: "Next" }, { title: "JavaScript" }, { title: "Tech" }],
  },
  {
    id: 4,
    title: "Blog Post 4 is a little long too",
    snippet:
      "This is my first blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Dummy text here. And some more dummy text please.",
    category: [
      { title: "Next" },
      { title: "React" },
      { title: "JavaScript" },
      { title: "Transformers" },
      { title: "Git" },
    ],
  },
];

const tags = sampleData
  .map((post) => post.category)
  .flat()
  .filter((v, i, a) => a.indexOf(v) === i);

//todo reding time

export default async function BlogPosts() {
  // const { joke } = await getDadJoke();
  return (
    <>
      <Header title={"Blog"} />
      <div className="mx-auto flex flex-col justify-between items-start">
        <div className="my-3 flex flex-row flex-wrap justify-start items-start">
          {tags.map((tag) => (
            <button className="bg-accent-4 text-sm font-bold py-1 px-2 mr-3 my-2 hover:bg-accent-5 hover:text-white hover:border-accent-3text-white ">
              {tag.title}
            </button>
          ))}
        </div>
        <div className="mt-5 pr-10">
          {sampleData.map((post) => (
            <div className="max-w-4xl p-3 my-2">
              <Link
                className="no-underline"
                href={`/blog/${encodeURI(
                  post.title.toLowerCase().replaceAll(" ", "-")
                )}`}
              >
                <h2 className="font-semibold mb-3">{post.title}</h2>
                <p className="text-white text-justify bg-accent">
                  {post.snippet} ...{" "}
                  <span className="underline">read more</span>
                </p>
                <div className="m-2 hover:cursor-not-allowed">
                  <Tags tags={post.category} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
