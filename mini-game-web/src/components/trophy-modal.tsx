import { ModalBase } from "@/components/modal-base";
import { useState } from "react";
import experimentIcon from "@/assets/experiment.svg";
import streaimingIcon from "@/assets/streaming.svg";
import moneyIcon from "@/assets/money.svg";
import tapIcon from "@/assets/tap.svg";
import keyIcon from "@/assets/key.svg";
import arrowDownIcon from "@/assets/arrowDown.svg";

type Trophy = {
  id: string;
  title: string;
  desc: string;
  earned: boolean;
  expandDesc?: string;
  icon: string;
};

const sample: Trophy[] = [
  {
    id: "t1",
    title: "더 맛있는 떡볶이를 찾아서",
    desc: "나의 첫번째 떡볶이",
    earned: true,
    expandDesc: "레시피 3개 수집 완료! 🎉",
    icon: experimentIcon,
  },
  {
    id: "t2",
    title: "먹방 스트리머 인정",
    desc: "18분 플레이",
    earned: true,
    expandDesc: "18분 동안 떡볶이 만들기 완료! 📺",
    icon: streaimingIcon,
  },
  {
    id: "t3",
    title: "돈을 벌자",
    desc: "0개 조합 완성",
    earned: false,
    expandDesc: "돈 벌기 업적 진행 중... 💰",
    icon: moneyIcon,
  },
  {
    id: "t4",
    title: "탭탭탭",
    desc: "100회 이상 클릭",
    earned: false,
    expandDesc: "탭탭탭 업적 진행 중... 👆",
    icon: tapIcon,
  },
  {
    id: "t5",
    title: "업적 내용관련으로 채우기",
    desc: "추가 업적",
    earned: false,
    expandDesc: "추가 업적 진행 중... ⭐",
    icon: keyIcon,
  },
];

export default function TrophyModal({ onClose }: { onClose: () => void }) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

  return (
    <ModalBase onClose={onClose} title="업적">
      <div className="space-y-4">
        {/* 업적 목록 */}
        <div className="space-y-3">
          {sample.map((t) => (
            <div key={t.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
                      t.earned
                        ? "border border-red-500 bg-red-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <img src={t.icon} className="w-6 h-6" />
                  </div>
                  <span
                    className={`font-medium ${
                      t.earned ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {t.title}
                  </span>
                </div>
                {t.earned ? (
                  <button
                    onClick={() => toggleExpanded(t.id)}
                    className={`transition-transform duration-200 ${
                      isExpanded(t.id) ? "rotate-180" : ""
                    }`}
                  >
                    <img src={arrowDownIcon} className="w-5 h-5" />
                  </button>
                ) : (
                  <img src={arrowDownIcon} className="w-5 h-5 opacity-50" />
                )}
              </div>

              {/* 펼쳐진 설명 */}
              {t.earned && isExpanded(t.id) && t.expandDesc && (
                <div className="ml-14 pl-2 border-l-2 border-red-500">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">{t.expandDesc}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 버튼 */}
        <div className="pt-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </ModalBase>
  );
}
