"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="h-screen text-center -mb-20 overflow-hidden">
        <h1 className="mt-32 text-5xl uppercase text-center md:mt-56 ">🔥Everything Is Fine🔥</h1>
        <h4 className="my-14">
          Looks like there's an error. No worries just try the magic
          button below to turn the page off and back on again.
        </h4>
        <h5>Error: {error.message}</h5>

        <button
          className="mt-16 text-white bg-accent-6"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Magic Button
        </button>
      </div>
    </div>
  );
}
