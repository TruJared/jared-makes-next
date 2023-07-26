"use client";
export default function Error(error:any) {
  return (
    <>
      <h1 className="text-7xl uppercase">OMG Everything Is On Fire 🔥 </h1>
      <h2>{error.message}</h2>
    </>
  );
}
