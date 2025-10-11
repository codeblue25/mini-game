// src/pages/Result.tsx
import { useEffect, useState } from "react";
import { getLatestGameSession, CreateGameSessionRes } from "@/api/game_session";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/header";
import Floating from "@/components/floating";

export default function Result() {
  const [session, setSession] = useState<CreateGameSessionRes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Play 페이지에서 전달된 상태 확인
  const playState = location.state as {
    count?: number;
    session?: CreateGameSessionRes;
    error?: boolean;
    errorMessage?: string;
  } | null;

  // ⚠️ 실제 로그인/스토어에서 가져오세요
  const userId = 1;

  useEffect(() => {
    let aborted = false;

    // Play 페이지에서 에러가 발생한 경우
    if (playState?.error) {
      setError(playState.errorMessage || "게임 결과 저장에 실패했습니다.");
      setLoading(false);
      return;
    }

    // Play 페이지에서 세션이 전달된 경우 (저장 성공)
    if (playState?.session) {
      setSession(playState.session);
      setLoading(false);
      return;
    }

    // 직접 접근한 경우 또는 세션을 다시 가져와야 하는 경우
    (async () => {
      try {
        const s = await getLatestGameSession(userId);
        if (!aborted) {
          setSession(s);
        }
      } catch (e: any) {
        console.error("최신 게임 세션 조회 실패:", e);
        if (!aborted) {
          setError("결과를 불러오는 데 실패했습니다.");
        }
      } finally {
        if (!aborted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      aborted = true;
    };
  }, [userId, playState]);

  if (loading) {
    return (
      <>
        <div className="relative w-full h-full flex flex-col">
          <Header />
          <div className="flex-1 bg-green-200 flex items-center justify-center relative">
            <Floating />
            <div className="text-center">
              <div className="h-10 w-10 mx-auto mb-4 rounded-full border-2 border-gray-900 border-t-transparent animate-spin" />
              <p className="text-sm text-gray-600">결과를 불러오는 중…</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error || !session) {
    return (
      <>
        <div className="relative w-full h-full flex flex-col">
          <Header />
          <div className="flex-1 bg-green-200 flex items-center justify-center relative">
            <Floating />
            <div className="text-center">
              <h2 className="text-xl font-bold text-red-600 mb-2">에러</h2>
              <p className="text-sm text-gray-500">
                {error ?? "세션 데이터가 없습니다."}
              </p>
              <button
                onClick={() => navigate("/ready")}
                className="mt-4 px-5 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-95"
              >
                다시하기
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative w-full h-full flex flex-col">
        <Header />
        <div className="flex-1 bg-green-200 flex items-center justify-center relative">
          <Floating />
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-2">Game Over</h2>
            <p className="text-lg mb-4">
              최종 클릭 수:{" "}
              <span className="font-mono font-semibold">{session.clicks}</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              게임 시간: {session.durationMs / 1000}초
            </p>
            <p className="text-xs text-gray-400 mb-6">
              게임 ID: {session.id} | 시작:{" "}
              {new Date(session.startedAt).toLocaleTimeString()}
            </p>
            <button
              onClick={() => navigate("/ready")}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-95"
            >
              다시하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
