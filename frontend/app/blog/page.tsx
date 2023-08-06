"use client";
import Link from "next/link";
import sanity from "../../lib/sanity";
import Tags from "../../components/Tags";
import Nav from "../../components/Nav";
import { Key, useEffect, useState } from "react";
import clsx from "clsx";

export default function BlogPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (posts.length < 1 || filters.length < 1) {
      sanity
        .fetch(
          `*[_type == "post"] | order(publishedAt desc) {
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
          setAllPosts(data);
          setPosts(data);
        })
        .catch((err) => console.error(err));
      return;
    }

    const filteredPosts = allPosts.filter((post: any) =>
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
      <Nav heading={"Blog"} path='/blog'/>
      <div className="mt-24 md:mt-16 min-h-screen">
        <div className="mx-auto flex flex-col justify-between items-start">
          {/* <p className="block underline-offset-2 -mb-2">
            Applied Filters: {filters.length == 0 ? "None" : filters.join(", ")}
          </p>
          <div className="my-3 flex flex-row flex-wrap justify-start items-start">
            {tags.map((tag: string[], i: Key) => (
              <button
                className={clsx(
                  filters.includes(tag)
                    ? "bg-accent-5 border-white hover:text-white"
                    : "bg-accent-4 border-primary-600 hover:text-white",
                  "text-sm font-bold py-1 px-2 mr-3 my-2"
                )}
                onClick={handleClick}
                key={i}
              >
                {tag}
              </button>
            ))}
          </div> */}
          <div className="mt-5 pr-10">
            {posts.map((post: any, i: Key) => (
              <div className="max-w-4xl p-3 my-2" key={i}>
                <Link className="no-underline" href={`/blog/${post.slug.url}`}>
                  <h2 className="font-semibold text-2xl mb-1">{post.title}</h2>
                  <p className="text-sm text-secondary-300 mb-1 ml-2">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
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
