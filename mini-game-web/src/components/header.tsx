import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingModal from "@/components/setting-modal";
import TrophyModal from "@/components/trophy-modal";

export default function Header() {
  const navigate = useNavigate();

  const [openSetting, setOpenSetting] = useState(false);
  const [openTrophy, setOpenTrophy] = useState(false);

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
      <header className="w-full sticky top-0 z-10 flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur border-b">
        <div>
          <button onClick={toggleSetting}>설정</button>
        </div>
        <div>
          <span>내 골드: 1,000</span>
        </div>
        <div>
          <button onClick={toggleTrophy}>업적</button>
          <button onClick={moveToGatcha}>상점</button>
        </div>
      </header>

      {openSetting && <SettingModal onClose={toggleSetting} />}
      {openTrophy && <TrophyModal onClose={toggleTrophy} />}
    </>
  );
}
