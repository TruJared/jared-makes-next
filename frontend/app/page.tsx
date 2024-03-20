import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";

import Experience from "../components/Experience";

import portraitImage from "public/images/about--compressed.webp";
import Nav from "../components/Nav";

export const metadata: Metadata = {
	title: "Hello.",
	description:
		"I'm Jared Truscott. A developer who is passionate about UX, efficiency, and building the future of e-commerce and the web.",
	openGraph: {
		images: ["/images/og_image.png"],
	},
};

export default function Home() {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://www.jaredmakes.com" />
			</Head>

			<Nav heading="Hello." path="/" />
			<div className="mt-16 lg:mt-0">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<Image
								src={portraitImage}
								alt=""
								className="aspect-square rounded-xl"
								placeholder="blur"
								priority
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						{/* <h1 className="text-4xl sm:text-5xl mb-6">Hello.</h1> */}
						<h2 className="h5">
							I&apos;m Jared Truscott. A developer who is passionate about UX,
							efficiency, and building the future of e-commerce and the web.
						</h2>
						<div className="mt-6 space-y-7 text-base leading-relaxed">
							<p>
								My journey into the world of web development began at the
								intersection of automation and user experience. My earliest
								experiences as a developer were building automation tools,
								marketing apps, and even a crypto miner for Amazon Alexa. Since
								then I&apos;ve focused more on front-end development. I leverage
								my 20 years in the sales and service industry to build
								e-commerce sites that apply the latest technologies and create
								exceptional shop-from-home user experiences.
							</p>

							<p>
								In e-commerce the best user experiences are the ones that are
								the most intuitive, performant, and seamless. I&apos;m currently
								exploring a variety of technologies to build even faster sites
								that get out of the way and let the user focus on what matters
								most: The product. Lately, I&apos;ve been building with, React,
								NextJS, Astro, Tailwind CSS, Sanity, Big Commerce and Shopify in
								an effort to explore the future of e-commerce.
							</p>

							<p>
								When not slinging code, I try to unplug myself from the keyboard
								and spend time with my family or biking through the mountains of
								Pennsylvania. I find that many of my best ideas come to me when
								I&apos;m not thinking about work, but enjoying the many trails
								around my home. It&apos;s not uncommon for me wake up early on a
								Saturday or Sunday and bike 30+ miles up the side of a mountain
								and come home with new ideas and fresh perspectives.
							</p>
						</div>
					</div>
					<div className="lg:pl-20">
						<Experience />
					</div>
				</div>
			</div>
		</>
	);
}
