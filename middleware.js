import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  // 로그인 상태가 아니면 홈 페이지로 리다이렉트
  if (!isLoggedIn || isLoggedIn.value !== "true") {
    const url = request.nextUrl.clone();
    url.pathname = "/"; // 홈 페이지로 이동
    url.searchParams.set("error", "unauthorized"); // 경고창을 위한 쿼리 파라미터 추가
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // 로그인 상태라면 정상 접근
}

// 보호할 경로 지정
export const config = {
  matcher: ["/introduction", "/project", "/career", "/contest"], // 보호된 경로
};