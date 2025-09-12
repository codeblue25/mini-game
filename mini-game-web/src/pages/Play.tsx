import Header from "@/components/header";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

type Phase = "playing" | "done";

export default function Play() {
  const [phase, setPhase] = useState<Phase>("playing");
  const [count, setCount] = useState(0);

  // 카운트다운(3 → 2 → 1 → null)
  const [countdown, setCountdown] = useState<3 | 2 | 1 | null>(3);

  const [started, setStarted] = useState(false);

  const DURATION = 4000;
  const [msLeft, setMsLeft] = useState(DURATION);
  const endAtRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    const now = performance.now();
    const left = Math.max(0, endAtRef.current - now);
    setMsLeft(left);
    if (left > 0) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setPhase("done");
      setStarted(false);
    }
  }, []);

  const startPlayWindow = useCallback(() => {
    setStarted(true);
    setMsLeft(DURATION);
    endAtRef.current = performance.now() + DURATION;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    let t1: number | undefined;
    let t2: number | undefined;
    let t3: number | undefined;

    setCountdown(3);
    t1 = window.setTimeout(() => setCountdown(2), 1000);
    t2 = window.setTimeout(() => setCountdown(1), 2000);
    t3 = window.setTimeout(() => {
      setCountdown(null);
      startPlayWindow();
    }, 3000);

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (t3) clearTimeout(t3);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startPlayWindow]);

  const onClick = useCallback(() => {
    if (phase !== "playing" || !started) return;
    setCount((c) => c + 1);
  }, [phase, started]);

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (phase !== "playing" || !started) return;
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        setCount((c) => c + 1);
      }
    },
    [phase, started]
  );

  const secLeft = useMemo(() => (msLeft / 1000).toFixed(2), [msLeft]);

  return (
    <>
      {phase === "done" && <Header />}

      <main className="w-full min-h-svh flex items-center justify-center">
        {phase === "playing" ? (
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm text-gray-500">
              {started ? (
                <>
                  남은 시간: <span className="font-mono">{secLeft}s</span>
                </>
              ) : (
                "곧 시작합니다…"
              )}
            </p>

            <button
              onClick={onClick}
              className="w-64 h-64 rounded-full border-2 border-indigo-500 bg-white shadow
                     flex items-center justify-center text-5xl font-bold active:scale-95 transition"
              aria-pressed={started}
            >
              {countdown !== null ? countdown : "CLICK"}
            </button>

            {/* 현재 카운트 */}
            <div className="text-xl">
              클릭 수: <span className="font-mono">{count}</span>
            </div>
          </div>
        ) : (
          <section className="text-center">
            <h2 className="text-3xl font-extrabold mb-2">Game Over</h2>
            <p className="text-lg mb-4">
              최종 클릭 수:{" "}
              <span className="font-mono font-semibold">{count}</span>
            </p>
            <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-95">
              다시하기
            </button>
          </section>
        )}
      </main>
    </>
  );
}
