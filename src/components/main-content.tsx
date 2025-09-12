export default function MainContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section
      className="
        w-full lg:w-1/2 md:w-3/4 max-w-[600px] mx-auto h-svh
        flex items-center justify-center text-center
        overflow-hidden
        pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
        bg-blue-50 border-2 border-indigo-500
      "
    >
      <div className="w-full">{children}</div>
    </section>
  );
}
