import MainContent from "@/components/main-content";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section className="w-screen h-dvh overflow-hidden bg-red-50 flex items-center justify-center safe-area">
      <MainContent>
        <Outlet />
      </MainContent>
    </section>
  );
}
