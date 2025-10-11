import { useEffect, useRef } from "react";

export function ModalBase({
  onClose,
  title,
  children,
  className = "",
}: {
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pb-8">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "dialog"}
        tabIndex={-1}
        className={`relative w-[92vw] max-w-md max-h-[82vh] overflow-auto rounded-3xl
                    bg-white shadow-xl
                    outline-none transition
                    ${className}`}
      >
        {/* 상단 핸들바 */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>

        <div className="px-6 pb-6">
          {title && (
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              {title}
            </h3>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
