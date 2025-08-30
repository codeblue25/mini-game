export default function MainContent() {
  return (
    <section
      className="
        w-full lg:w-1/2 md:w-3/4 max-w-[600px] mx-auto h-svh
        flex items-center justify-center text-center
        overflow-hidden
        px-4
        pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
        bg-blue-50
      "
    >
      <div className="w-full">
        <h1 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px]">
          Hello !
        </h1>
      </div>
    </section>
  );
}
