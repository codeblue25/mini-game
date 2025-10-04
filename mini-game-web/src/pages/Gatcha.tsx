import Header from "@/components/header";
import { useNavigate } from "react-router-dom";

export default function Gatcha() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="h-full flex flex-col items-center justify-center">
        <h1>상점 페이지</h1>
        <span>재료 해금(랜덤뽑기) 및 나의 재료 목록 확인</span>
        <button onClick={() => navigate(-1)}>뒤로</button>
      </div>
    </>
  );
}
