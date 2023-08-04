import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import sanity from "../../../lib/sanity";

// generate routes at build time
export async function generateStaticParams() {
  const slugs = await sanity.fetch(
    `*[_type == 'post'] {...slug{"url":current}}`
  );

  return slugs.map((slug: { url: string }) => ({
    slug: slug.url,
  }));
}

// generate 404 if slug not found
export const dynamicParams = false;

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const query = `*[_type == 'post' && slug.current == '${slug}'] {
    publishedAt, title, body,
    mainImage{...asset->{"url":path}}
  }`;

  const post = await sanity.fetch(query).then((res: any) => res[0]);

  return (
    <>

      <h1>{post.title}</h1>
      {/* <Image
        src={post.mainImage?.url}
        alt={post.title}
        width={500}
        height={500}
      /> */}
      <div>{post.body}</div>
    </>
  );
}
