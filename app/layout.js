import Link from "next/link";
import './globals.css'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <header>
          김창복의 portfolio
          <br />
          "준비된 개발자"
        </header>

        <div className="container">
          <nav>
            <Link href="/introduction">나의 소개</Link>
            <Link href="/project">프로 젝트</Link>
            <Link href="/contest">공 모 전</Link>
            <Link href="/career">나의 경력</Link>
          </nav>
          <main>
              {children}
          </main>
        </div>
        <footer>
          <i>
            Copyright 2023. 지은이 all rights reserved.
            <br />
            연락처 : 010-8906-3946
          </i>
        </footer>
      </body>
    </html>
  );
}