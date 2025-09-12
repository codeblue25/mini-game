import { ModalBase } from "@/components/modal-base";

export default function SettingModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalBase onClose={onClose} title="설정">
      <div className="space-y-4">
        <label className="flex items-center justify-between gap-4">
          <span>배경음악</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>

        <label className="flex items-center justify-between gap-4">
          <span>효과음</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
      </div>
    </ModalBase>
  );
}
