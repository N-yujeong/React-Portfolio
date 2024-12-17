// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  // 로그인 상태가 없는 경우 홈 페이지로 리디렉션
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// 경로 설정: 모든 페이지에 대해 동작하도록 설정
export const config = {
  matcher: ["/introduction", "/project", "/contest", "/career"], // 보호할 경로들
};