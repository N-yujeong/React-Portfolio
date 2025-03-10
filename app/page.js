"use client"; // 클라이언트 컴포넌트

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation"; // 라우터 및 쿼리 파라미터
import "./globals.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 초기값 false
  const router = useRouter();
  const searchParams = useSearchParams(); // URL 파라미터 확인

  // 쿠키 검사 후 로그인 상태 설정
  useEffect(() => {
    const cookieLogin = Cookies.get("isLoggedIn");
    if (cookieLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 비로그인 상태에서 경고창 표시 및 리다이렉트
  useEffect(() => {
    if (!isLoggedIn) {
      if (searchParams.get("error") === "unauthorized") {
        setTimeout(() => {
          alert("로그인 후 이용해주세요.");
          router.replace("/"); // 홈 페이지로 이동
        }, 0);
      }
    }
  }, [isLoggedIn, searchParams, router]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "yujeong" && password === "1234") {
      Cookies.set("isLoggedIn", "true", { expires: 1 }); // 쿠키 설정
      setIsLoggedIn(true);
      router.push("/"); // 로그인 후 홈으로 이동
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    router.replace("/"); // 로그아웃 후 홈 페이지로 이동
  };

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* 사진 섹션 */}
      <div className="photo-section">
        <h3>남유정을 소개합니다</h3>
        <img src="/image/index.jpg" alt="my_photo" />
      </div>

      {/* 로그인 폼 섹션 */}
      <div className="login-form">
        {!isLoggedIn ? (
          <form onSubmit={handleLogin}>
            <h2>로그인</h2>
            <label>
              아이디:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              비밀번호:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">로그인</button>
          </form>
        ) : (
          <div className="logged-in-container">
            <h2>환영합니다, {username}님!</h2>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        )}
      </div>
    </main>
  );
}