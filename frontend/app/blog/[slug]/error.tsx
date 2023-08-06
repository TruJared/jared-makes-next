"use client";

import Image from "next/image";
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
        <Image
          className="mx-auto my-5 rounded-xl"
          src="/images/this_is_fine.jpg"
          alt="This is fine meme"
          width={500}
          height={500}
        />

        <h4 className="my-14">
          Looks like this blog page doesn&apos;t exist. No worries just use the
          magic button below to return to the blog posts page.
        </h4>
        {/* <h5>Error: {error.message}</h5> */}

        <button
          className="mt-16 text-white bg-accent-6"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => (window.location.href = "/blog")
          }
        >
          Magic Button
        </button>
      </div>
    </div>
  );
}
