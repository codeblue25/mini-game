import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { appLogin } from "@apps-in-toss/web-framework";

export default function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    async function login() {
      try {
        const { authorizationCode, referrer } = await appLogin();
        console.log("Logged in:", authorizationCode, referrer);
      } catch (error) {
        alert("error" + error);
      }
    }
    login();
  }, []);

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
