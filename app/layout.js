import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '남유정 Portfolio',
  description: '끊임없이 발전하는 개발자',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <h1>남유정의 Portfolio</h1>
          <p>"끊임없이 발전하는 개발자"</p>
        </header>
        <div className="container">
          <nav>
            <Link href="/introduction">나의 소개</Link>
            <Link href="/project">프로젝트</Link>
            <Link href="/contest">공모전</Link>
            <Link href="/career">나의 경력</Link>
          </nav>
          <main>{children}</main>
        </div>
        <footer>
          <p>Copyright 2024. 남유정 all rights reserved.</p>
          <p>연락처: 010-8608-7396</p>
        </footer>
      </body>
    </html>
  );
}