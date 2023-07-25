import sanity from "../../../lib/sanity";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts',{ next: {revalidate: 60 * 60} }).then((res) => res.json())
  const paths = await sanity.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return paths.map((path: [string]) => ({
    slug: path,
  }));
}

export default async function BlogPost(context: any) {
  console.log(context);

  const { slug = "" } = context.params;
  const post = await sanity.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
  if (!post || !post?.slug?.current) { notFound() }
  return <h1>{post?.slug?.current}</h1>;
}
