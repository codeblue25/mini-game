import { ModalBase } from "@/components/modal-base";
import { useEffect, useState } from "react";

type Trophy = { id: string; title: string; desc: string; earned: boolean };

const sample: Trophy[] = [
  { id: "t1", title: "위대한 시작", desc: "나의 첫번째 떡볶이", earned: true },
  { id: "t2", title: "누적 플레이 타임", desc: "18분", earned: true },
  { id: "t3", title: "나의 레시피", desc: "0개 조합 완성", earned: false },
  {
    id: "t4",
    title: "보이지 않는 손(가락)",
    desc: "100회 이상 클릭",
    earned: false,
  },
];

export default function TrophyModal({ onClose }: { onClose: () => void }) {
  const [nickname, setNickname] = useState("user");

  useEffect(() => {
    const saved = localStorage.getItem("nickname") || "";
    setNickname(saved);
  }, []);

  const saveNickname = () => {
    localStorage.setItem("nickname", nickname.trim());
    alert("닉네임이 저장되었습니다!");
  };

  return (
    <ModalBase onClose={onClose} title="업적">
      <div className="flex items-center justify-between gap-4 mb-4">
        <label className="shrink-0">닉네임</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border outline-none focus:ring"
          maxLength={20}
        />
        <button
          onClick={saveNickname}
          className="px-3 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-95"
        >
          저장
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sample.map((t) => (
          <div
            key={t.id}
            className={`rounded-xl p-3 flex flex-col gap-1 transition
        ${
          t.earned
            ? "border border-emerald-400 bg-emerald-50 text-emerald-800"
            : "border border-gray-200 bg-gray-100 text-gray-400 opacity-70"
        }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{t.title}</h4>
            </div>
            <p className="text-sm opacity-80">{t.desc}</p>
          </div>
        ))}
      </div>
    </ModalBase>
  );
}
