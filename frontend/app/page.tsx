import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-[13.5rem] uppercase text-center p-1 my-3 md:text-[12rem]">
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
      <p className="my-5">hello world</p>
      <button className="m-2">basic button</button>
      <button className="bg-accent-1 m-2">accent 1</button>
      <button className="bg-accent-2 m-2">accent 2</button>
      <button className="bg-accent-3 m-2">accent 3</button>
      <button className="bg-accent-4 m-2">accent 4</button>
      <button className="bg-accent-5 m-2">accent 5</button>
      <button className="bg-accent-6 m-2">accent 6</button>

    </main>
  );
}
