import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-[13.5rem] uppercase font-light text-center p-1 my-3 md:text-[12rem]">
        <span className="whitespace-nowrap">he</span>
        <span className="whitespace-nowrap">ll</span>o
      </h1>
      <h2 className="h5 my-3">
        I'm Jared Truscott.{" "}
        <span className="block h6 py-4">
          I conjure things on the web using cryptic writings, digital glyphs,
          tomes of knowledge, and lots of moxy.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
        {Array.from(Array(10).keys()).map((i) => (
          <img className="rounded-md border-2 border-amber-500 hover:scale-105 transition-all mx-auto" src={`https://picsum.photos/500/500?random=${i}`} />
        ))}
      </div>
    </main>
  );
}
