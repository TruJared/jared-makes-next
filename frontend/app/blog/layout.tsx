export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="mb-6">Layout</h1>
      {children}
    </>
  );
}
