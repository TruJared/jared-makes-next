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
];

export default async function BlogPosts() {
  // const { joke } = await getDadJoke();
  return (
    <>
      <h1 className="text-center mt-9">Blog</h1>
      <div className="my-3 flex flex-row flex-wrap">
        {sampleData.map((post) => (
          <button className="text-sm font-bold py-1 px-2">
            {post.category}
          </button>
        ))}
      </div>
    </>
  );
}
