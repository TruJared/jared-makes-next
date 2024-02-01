'use client'
import Nav from "../../components/Nav";
import FilterableBlogPosts from "../../components/FilterableBlogPosts";

import { Metadata } from "next";
import sanity from "../../lib/sanity";

export const metadata: Metadata = {
  title: "Blog - Jared Makes",
  description:
    "Jared occasionally writes about web development, programming, and other things.",
  openGraph: {

    images: ["/images/og_image.png"],
  },
};

async function getPosts() {

  return sanity
    .fetch(
      `*[_type == "post"] | order(publishedAt desc) {
          publishedAt, title, "snippet":excerpt,
          slug{"url":current},
          mainImage{...asset->{"url":path}},
          tags[]->{title}
        }`)
}



export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Nav heading={"Blog"} path="/blog" />
      <div className="mt-16 min-h-screen">
          <FilterableBlogPosts allPosts={posts} />
      </div>
    </>
  );
}
