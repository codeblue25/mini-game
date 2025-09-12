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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "dialog"}
        tabIndex={-1}
        className={`relative w-[92vw] max-w-md max-h-[82vh] overflow-auto rounded-2xl
                    bg-white shadow-xl ring-1 ring-black/10
                    p-5 outline-none transition
                    ${className}`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full px-2 py-1 text-sm
                     bg-gray-100 hover:bg-gray-200 active:scale-95"
          aria-label="닫기"
        >
          ✕
        </button>

        {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
