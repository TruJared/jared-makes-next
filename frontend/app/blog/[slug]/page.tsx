import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import sanity from "../../../lib/sanity";

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
		title: post?.title,
		description: post?.snippet,
		openGraph: {
			title: post?.title,
			description: post?.snippet,
			images: [
				`https://cdn.sanity.io/${post?.mainImage.url}?w=1200&h=630&fit=max&auto=format`,
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

	// remove warnings
	marked.use({
  mangle: false,
  headerIds: false,
});

	const { slug } = params;
	const query = `*[_type == 'post' && slug.current == '${slug}'] {
    publishedAt, title, body, "snippet":excerpt,
    mainImage{...asset->{"url":path}}
  }`;

	const post = await sanity.fetch(query).then((res: any) => res[0]);

	if (!post || !post.title) return notFound();

	const body = DOMPurify.sanitize(marked.parse(post?.body));

	return (
		<>
			<article
				className={`
      mt-2
      mb-32
      mx-auto
      min-h-screen
      prose
      text-white/90
      prose-headings:text-secondary-200
      prose-h1:p-0.5
      prose-a:text-secondary-200
      prose-strong:text-white
      prose-img:rounded-xl
      prose-img:border-2
      prose-img:border-accent-3
      marker:prose-li:text-white/90
      prose-li:text-white/90
      prose-ul:text-white/90
      prose-ol:text-white/90
      prose-img:mx-auto
      prose-img:shadow-md
      prose-video:mx-auto
      prose-p:text-white/80
      prose-p:text-lg
			prose-code:text-white
			prose-code:p-1
      `}
			>
				<Link className="float-right ml-3" href="/blog">
					All Posts
				</Link>
				<h1>{post?.title}</h1>

				<Image
					src={
						"https://cdn.sanity.io/" +
						post?.mainImage.url +
						"?w=300&h=300&fit=crop&auto=format"
					}
					alt={post?.title}
					width={300}
					height={300}
					blurDataURL={
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU1uC4BgABtAEbO2PbOQAAAABJRU5ErkJggg=="
					}
					placeholder="blur"
					priority
				/>
				<div dangerouslySetInnerHTML={{ __html: body }}></div>
				<Link className="float-right" href="/blog">
					All Posts
				</Link>
			</article>
		</>
	);
}
