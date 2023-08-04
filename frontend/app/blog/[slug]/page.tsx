import sanity from "../../../lib/sanity";
import { notFound } from "next/navigation";

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

  // fetch blog post from sanity

  return <h1>test</h1>;
}
