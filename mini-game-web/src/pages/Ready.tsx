import { useNavigate } from "react-router-dom";

export default function Ready() {
  const navigate = useNavigate();

  const moveToPlay = () => {
    navigate("/play");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>게임 준비 페이지</h1>
      <span>떡볶이 재료 선택</span>

      <button
        onClick={moveToPlay}
        className="px-4 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-95"
      >
        떡볶이 만들러 가기
      </button>
    </div>
  );
}
