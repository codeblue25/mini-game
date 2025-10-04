import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { appLogin } from "@apps-in-toss/web-framework";
import SettingModal from "@/components/setting-modal";
import TrophyModal from "@/components/trophy-modal";

export default function Start() {
  const navigate = useNavigate();

  const [openSetting, setOpenSetting] = useState(false);
  const [openTrophy, setOpenTrophy] = useState(false);

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

  const toggleSetting = () => {
    setOpenSetting((prev) => !prev);
  };
  const toggleTrophy = () => {
    setOpenTrophy((prev) => !prev);
  };
  const moveToGatcha = () => {
    navigate("/gatcha");
  };

  return (
    <>
      <div className="relative w-full h-full flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="absolute left-4 top-1/4 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
            <button
              onClick={toggleSetting}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur border shadow hover:bg-white transition-colors"
              title="설정"
            >
              설정
            </button>
            <button
              onClick={toggleTrophy}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur border shadow hover:bg-white transition-colors"
              title="업적"
            >
              업적
            </button>
            <button
              onClick={moveToGatcha}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur border shadow hover:bg-white transition-colors"
              title="상점"
            >
              상점
            </button>
          </div>

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
      </div>

      {openSetting && <SettingModal onClose={toggleSetting} />}
      {openTrophy && <TrophyModal onClose={toggleTrophy} />}
    </>
  );
}
