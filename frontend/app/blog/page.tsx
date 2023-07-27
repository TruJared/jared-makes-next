import Link from "next/link";
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
    title: "Blog Post 1",
    snippet: "This is my first blog post",
    category: "Tech",
  },
  {
    id: 2,
    title: "Blog Post 2",
    snippet: "This is my second blog post",
    category: "Not Tech",
  },
  {
    id: 3,
    title: "Blog Post 3",
    snippet: "This is my third blog post",
    category: "Not Tech",
  },
  {
    id: 4,
    title: "Blog Post 4",
    snippet: "This is my fourth blog post",
    category: "Not Tech",
  },
];

export default async function BlogPosts() {
  // const { joke } = await getDadJoke();
  return (
    <>
      <h1 className="mt-2 mb-9">Blog</h1>
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
        <div className="my-3 flex flex-row flex-wrap items-start self-start">
          {sampleData.map((post) => (
            <button className="bg-accent-4 text-sm font-bold py-1 px-2 mx-2">
              {post.category}
            </button>
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-between items-start">
          {sampleData.map((post) => (
            <div className="my-9">
              <h2>
                <Link
                  href={`/${encodeURI(
                    post.title.toLowerCase().replaceAll(" ", "-")
                  )}`}
                >
                  {post.title}
                </Link>
              </h2>
              <p>
                <Link
                  href={`/${encodeURI(
                    post.title.toLowerCase().replaceAll(" ", "-")
                  )}`}
                >
                  {post.snippet} ... read more
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
