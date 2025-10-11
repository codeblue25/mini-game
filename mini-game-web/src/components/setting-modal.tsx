import { ModalBase } from "@/components/modal-base";
import { useEffect, useState } from "react";
import soundIcon from "@/assets/sound.svg";
import musicIcon from "@/assets/music.svg";
import userIcon from "@/assets/user.svg";

export default function SettingModal({ onClose }: { onClose: () => void }) {
  const [backgroundMusic, setBackgroundMusic] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [nickname, setNickname] = useState("기본설정된닉네임");

  useEffect(() => {
    const saved = localStorage.getItem("nickname") || "";
    setNickname(saved);
  }, []);

  const handleApply = () => {
    // TODO:설정 저장 로직
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const saveNickname = async () => {
    localStorage.setItem("nickname", nickname.trim());
    try {
      // 토스 로그인 사용자 정보에서 userKey 가져오기
      const tossUser = localStorage.getItem("toss_user");
      let userKey: string | undefined;

      console.log("[DEBUG] tossUser from localStorage:", tossUser);

      if (tossUser) {
        try {
          const parsedUser = JSON.parse(tossUser);
          userKey = parsedUser.userKey;
          console.log("[DEBUG] Extracted userKey:", userKey);

          // Alert으로 디버그 정보 표시
          if (!userKey) {
            alert(
              `[DEBUG] toss_user는 있지만 userKey가 없습니다.\ntoss_user 일부: ${tossUser.substring(
                0,
                100
              )}...`
            );
          }
        } catch (err) {
          console.error("토스 사용자 정보 파싱 실패:", err);
          alert(`[DEBUG] toss_user 파싱 실패: ${err}`);
        }
      } else {
        console.log("[DEBUG] No toss_user in localStorage");
        alert(
          "[DEBUG] localStorage에 toss_user가 없습니다.\n토스 로그인을 먼저 해주세요."
        );
      }

      console.log(
        "[DEBUG] Sending to API - nickname:",
        nickname,
        "userKey:",
        userKey
      );
      const user = await createUser({ nickname, userKey });
      console.log("닉네임 저장 성공:", user);
      alert(
        `닉네임 '${nickname}'(으)로 저장되었습니다!${
          userKey ? "\n✓ userKey와 함께 저장됨" : "\n✗ userKey 없이 저장됨"
        }`
      );
    } catch (err: any) {
      console.error("닉네임 저장 실패:", err);
      const errorMsg =
        err?.response?.data?.error || err?.message || "알 수 없는 오류";
      alert(`닉네임 저장에 실패했습니다.\n오류: ${errorMsg}`);
    }
  };

  return (
    <ModalBase onClose={onClose} title="설정">
      <div className="space-y-6">
        <div className="space-y-4">
          {/* 배경음 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
                <img src={soundIcon} className="w-6 h-6" />
              </div>
              <span className="text-gray-700">배경음</span>
            </div>
            <button
              onClick={() => setBackgroundMusic(!backgroundMusic)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                backgroundMusic ? "bg-red-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  backgroundMusic ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* 효과음 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
                <img src={musicIcon} className="w-6 h-6" />
              </div>
              <span className="text-gray-700">효과음</span>
            </div>
            <button
              onClick={() => setSoundEffects(!soundEffects)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                soundEffects ? "bg-red-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  soundEffects ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 사용자 정보 */}
        <div className="space-y-3">
          <div className="flex items-top gap-3">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
              <img src={userIcon} className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-semibold text-gray-800"
                maxLength={20}
              />
              <div className="text-sm text-gray-500 mb-1">
                USERKEY : 0000000
              </div>
            </div>
            <button
              className="h-[42px] px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
              onClick={saveNickname}
            >
              변경
            </button>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3">
          <button
            onClick={handleCancel}
            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            적용
          </button>
        </div>
      </div>
    </ModalBase>
  );
}
