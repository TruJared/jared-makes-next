// async function getDadJoke() {
//   const res = await fetch("https://icanhazdadjoke.com/", {
//     headers: { Accept: "application/json" },
//     next: {revalidate: 10}
//   });

//   return res.json();
// }

export default async function BlogPosts() {
  // const { joke } = await getDadJoke();
  return <h1 className="text-center">Blog Posts</h1>;
}
