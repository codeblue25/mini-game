export default function MainContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section
      className="
        w-full md:w-3/4 lg:w-1/2 max-w-[600px] mx-auto
        h-full
        flex items-center justify-center text-center
        overflow-hidden
        bg-blue-50 border-2 border-indigo-500
      "
    >
      <div className="w-full">{children}</div>
    </section>
  );
}
