const jobs = [
  {
    title: "Web Developer",
    company: "Mojo Active",
    link: "https://mojoactive.com",
    timeRange: "2022-Present",
    description:
      "As a web developer at Mojo Active I am responsible for creating, updating and maintaining websites for clients. This includes designing and developing new features, fixing bugs, and optimizing for performance and scalability. ",
  },
  {
    title: "Web Developer",
    company: "Online Stores",
    link: "https://onlinestores.com",
    timeRange: "2019 - 2021",
    description:
      "As a web developer at Online Stores, I was first tasked with migrating and converting their 8 Magento sites to Big Commerce. After the successful migration I continued to maintain the sites and add new features.",
  },
  {
    title: "Store Manager/Business Owner",
    company: "Multiple Locations",
    timeRange: "1997 - 2019",
    description:
      "I previously worked at, and ran stores for such companies as Barnes & Noble, GameStop, Pac-Sun, and Advance Auto Parts. Having found myself without any more growth opportunities, I eventually decided it was time to bring my knowledge to e-commerce.",
  },
];

export default function Experience() {
  return (
    <section className="pb-6 mx-auto max-w-5xl sm:px-6">
      <div className="grid grid-cols-1 gap-y-8 items-baseline">
        <h2 className="text-xl text-secondary-300 opacity-80">
          Career Snapshot
        </h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-10">
            {jobs.map((j) => (
              <li className="flex flex-col items-start">
                <div className="flex flex-row justify-between items-baseline pl-2 w-full border-l-2 border-accent-6">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center">
                      {j.link && (
                        <a
                          href={j.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3 className="text-base font-semibold tracking-tight sm:max-w-none sm:text-lg max-w-[20ch]">
                            {j.company}
                          </h3>
                        </a>
                      )}
                      {!j.link && (
                        <h3 className="text-base font-semibold tracking-tight opacity-80 sm:max-w-none sm:text-lg max-w-[20ch] ">
                          {j.company}
                        </h3>
                      )}
                    </div>

                    <h2 className="text-sm tracking-tight sm:max-w-none sm:text-base max-w-[20ch] text-white/50">
                      {j.title}
                    </h2>
                  </div>
                  <time className="text-sm text-white/50">{j.timeRange}</time>
                </div>

                <p className="z-10 mt-4 text-sm text-white/80 max-w-[75ch]">
                  {j.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
