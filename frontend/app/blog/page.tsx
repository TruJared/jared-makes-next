"use client";
import { Metadata } from "next";
import Link from "next/link";
import sanity from "../../lib/sanity";
import Tags from "../../components/Tags";
import Nav from "../../components/Nav";
import { Key, useEffect, useState } from "react";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Blog - Jared Makes",
  description:
    "I'm Jared Truscott. A developer who is passionate about UX, efficiency, and building the future of e-commerce and the web.",
  openGraph: {
    title: "Blog - Jared Makes",
    description:
      "I'm Jared Truscott. A developer who is passionate about UX, efficiency, and building the future of e-commerce and the web.",
    images: ["/images/og_image.png"],
  },
};

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (posts.length < 1 || filters.length < 1) {
      sanity
        .fetch(
          `*[_type == "post"] | order(publishedAt) {
  publishedAt, title, "snippet":excerpt,
  slug{"url":current},
  mainImage{...asset->{"url":path}},
  tags[]->{title}
}`
        )
        .then((data: any) => {
          const uniqueTags = data
            .map((post: { tags: any }) => post.tags)
            .flat()
            .map((o: { title: any }) => o.title)
            .filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i);
          setTags(uniqueTags);
          setPosts(data);
        })
        .catch((err) => console.error(err));
      return;
    }

    const filteredPosts = posts.filter((post: any) =>
      post.tags.some((tag: any) => filters.includes(tag.title))
    );
    setPosts(filteredPosts);
  }, [filters]);

  const handleClick = (e: any) => {
    const filter = e.target.innerText;
    if (filters.includes(filter)) {
      setFilters(filters.filter((f: string) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <>
      <Nav heading={"Blog"} />
      <div className="my-24 md:my-16">
        <div className="mx-auto flex flex-col justify-between items-start">
          <p className="block underline-offset-2 -mb-5">Filters</p>
          <div className="my-3 flex flex-row flex-wrap justify-start items-start">
            {tags.map((tag: string[], i: Key) => (
              <button
                className={clsx(
                  filters.includes(tag)
                    ? "bg-accent-5 border-primary-600 hover:text-white"
                    : "bg-accent-4 border-white hover:text-white",
                  "text-sm font-bold py-1 px-2 mr-3 my-2"
                )}
                onClick={handleClick}
                key={i}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="mt-5 pr-10">
            {posts.map((post: any, i: Key) => (
              <div className="max-w-4xl p-3 my-2" key={i}>
                <Link className="no-underline" href={`/blog/${post.slug.url}`}>
                  <h2 className="font-semibold text-2xl mb-1">{post.title}</h2>
                  <p className="text-white tracking-wide leading-6 border-t-2 border-accent-3 pt-2 px-3">
                    {post.snippet} ...{" "}
                    <span className="underline">read more</span>
                  </p>
                  <div className="mx-3 my-1 hover:cursor-not-allowed">
                    <Tags tags={post.tags} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
