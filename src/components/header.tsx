import { useState } from "react";
import SettingModal from "@/components/setting-modal";
import TrophyModal from "@/components/trophy-modal";

export default function Header() {
  const [openSetting, setOpenSetting] = useState(false);
  const [openTrophy, setOpenTrophy] = useState(false);

  const toggleSetting = () => {
    setOpenSetting((prev) => !prev);
  };
  const toggleTrophy = () => {
    setOpenTrophy((prev) => !prev);
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
          <button>상점</button>
        </div>
      </header>

      {openSetting && <SettingModal onClose={toggleSetting} />}
      {openTrophy && <TrophyModal onClose={toggleTrophy} />}
    </>
  );
}
