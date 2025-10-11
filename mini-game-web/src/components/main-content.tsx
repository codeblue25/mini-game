import backgroundImage from "@/assets/background.svg";

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
        flex flex-col
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full">{children}</div>
    </section>
  );
}
