export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts',{ next: {revalidate: 60 * 60} }).then((res) => res.json())
  const posts = [{ slug: "hello-world" }, { slug: "hello-world-2" }];

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default function BlogPost() {
  return <h1>Blog Post</h1>;
}
