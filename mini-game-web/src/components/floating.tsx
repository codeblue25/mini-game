import { useState } from "react";
import { useNavigate } from "react-router-dom";
import settingIcon from "@/assets/setting.svg";
import trophyIcon from "@/assets/trophy.svg";
import shopIcon from "@/assets/shop.svg";
import TrophyModal from "./trophy-modal";
import SettingModal from "./setting-modal";

export default function Floating() {
  const [openSetting, setOpenSetting] = useState(false);
  const [openTrophy, setOpenTrophy] = useState(false);
  const navigate = useNavigate();

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
      <div className="absolute left-4 top-40 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
        <button
          className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center"
          onClick={toggleSetting}
        >
          <img src={settingIcon} alt="설정" />
        </button>
        <button
          className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center"
          onClick={toggleTrophy}
        >
          <img src={trophyIcon} alt="업적" />
        </button>
        <button
          className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center"
          onClick={moveToGatcha}
        >
          <img src={shopIcon} alt="상점" />
        </button>
      </div>

      {openSetting && <SettingModal onClose={toggleSetting} />}
      {openTrophy && <TrophyModal onClose={toggleTrophy} />}
    </>
  );
}
