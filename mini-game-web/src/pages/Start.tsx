import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import Floating from "@/components/floating";

export default function Start() {
  const navigate = useNavigate();

  const moveToReady = () => {
    navigate("/ready");
  };

  return (
    <>
      <div className="relative w-full h-full flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Floating />
        </div>
        <div className="flex justify-center pb-8">
          <button
            onClick={() => moveToReady()}
            className="
            font-semibold text-[20px]
            px-6 py-3 rounded-2xl
            bg-red-500 text-white shadow
            active:scale-95
            transition
          "
          >
            시작하기
          </button>
        </div>
      </div>
    </>
  );
}
