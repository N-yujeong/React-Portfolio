"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // 쿠키 설정 라이브러리

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "yujeong" && password === "1234") {
      Cookies.set("isLoggedIn", "true", { expires: 1 }); // 로그인 상태 쿠키 설정
      setIsLoggedIn(true);
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  const handleLogout = () => {
    Cookies.remove("isLoggedIn"); // 로그아웃 시 쿠키 삭제
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    router.push("/"); // 홈으로 이동
  };

  return (
    <main>
      <div className="photo-section">
        <h3>남유정을 소개합니다</h3>
        <img src="/image/index.jpg" alt="my_photo" />
      </div>

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