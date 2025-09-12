import Header from "@/components/header";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  const moveToReady = () => {
    navigate("/ready");
  };

  return (
    <>
      <header className="w-full sticky top-0 z-10">
        <Header />
      </header>

      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <button
          onClick={() => moveToReady()}
          className="
            font-semibold text-[24px] sm:text-[28px] md:text-[32px]
            px-6 py-3 rounded-2xl
            bg-indigo-600 text-white shadow
            hover:bg-indigo-700 active:scale-95
            transition
          "
        >
          Game Start !
        </button>
      </div>
    </>
  );
}
