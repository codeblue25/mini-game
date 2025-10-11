import rewardIcon from "@/assets/reward.svg";

export default function Header() {
  return (
    <header className="w-full sticky top-10 z-10 flex items-center justify-center">
      <div className=" rounded-[16px] bg-red-500 text-white flex items-center justify-center py-1 px-2">
        <img src={rewardIcon} className="w-6 h-6" />
        <span className="px-1">000k</span>
      </div>
    </header>
  );
}
