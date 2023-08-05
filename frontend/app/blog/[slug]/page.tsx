import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
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

export async function generateMetadata(
  {
    params,
  }: {
    params: { slug: string };
  },
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const query = `*[_type == 'post' && slug.current == '${slug}'] {
    publishedAt, title, body, "snippet":excerpt,
    mainImage{...asset->{"url":path}}
  }`;

  const post = await sanity.fetch(query).then((res: any) => res[0]);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.snippet,
    openGraph: {
      title: post.title,
      description: post.snippet,
      images: [
        `https://cdn.sanity.io/${post.mainImage.url}?w=1200&h=630&fit=max`,
        ...previousImages,
      ],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const query = `*[_type == 'post' && slug.current == '${slug}'] {
    publishedAt, title, body, "snippet":excerpt,
    mainImage{...asset->{"url":path}}
  }`;

  const post = await sanity.fetch(query).then((res: any) => res[0]);
  const body = DOMPurify.sanitize(marked.parse(post.body));

  return (
    <article
      className={`
      mt-2
      mb-20
      mx-auto
      prose
      text-white/90
      prose-headings:text-secondary-200
      prose-h1:p-0.5
      prose-a:text-secondary-200
      prose-strong:text-white
      prose-code:text-white
      prose-img:rounded-xl
      prose-img:border-2
      prose-img:border-accent-3
      marker:prose-li:text-white/90
      prose-li:text-white/90
      prose-ul:text-white/90
      prose-ol:text-white/90
      prose-pre:rounded-xl
      prose-pre:border
      prose-pre:border-white/20
      prose-pre:bg-accent-5
      prose-pre:shadow-md
      prose-pre:overflow-x-auto
      prose-pre:font-mono
      prose-pre:m-5
      prose-img:mx-auto
      prose-img:shadow-md
      prose-video:mx-auto
      prose-p:text-white/80
      prose-p:text-lg
      `}
    >
      <Link className="float-right ml-3" href="/blog">
        All Posts
      </Link>
      <h1>{post.title}</h1>

      <Image
        src={"https://cdn.sanity.io/" + post.mainImage.url}
        alt={post.title}
        width={400}
        height={400}
        blurDataURL={
          "https://cdn.sanity.io/" + post.mainImage.url + "?w=50&h=50&blur=1000"
        }
      />
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      <Link className="float-right" href="/blog">
        All Posts
      </Link>
    </article>
  );
}
