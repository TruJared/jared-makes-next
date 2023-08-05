"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="h-screen text-center overflow-hidden">
        <h1 className="mt-32 text-5xl uppercase text-center md:mt-56 ">
          🔥Everything Is Fine🔥
        </h1>
        <h4 className="my-14">
          Looks like there&apos;s an error. No worries just use the magic button
          below to refresh the page.
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
