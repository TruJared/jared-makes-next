import Nav from "../../components/Nav";
import FilterableBlogPosts from "../../components/FilterableBlogPosts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Jared Makes",
  description:
    "Jared occasionally writes about web development, programming, and other things.",
  openGraph: {

    images: ["/images/og_image.png"],
  },
};



export default async function BlogPage() {

  return (
    <>
      <Nav heading={"Blog"} path="/blog" />
      <div className="mt-24 md:mt-16 min-h-screen">
        <FilterableBlogPosts />
      </div>
    </>
  );
}
