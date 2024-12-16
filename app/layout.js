import './globals.css';

export const metadata = {
    title: '남유정의 Portfolio',
    description: '끊임없이 발전하는 개발자',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <header>
                    남유정의 Portfolio
                    <br />
                    "끊임없이 발전하는 개발자"
                </header>
                <div className="container">
                    <nav>
                        <a href="/introduction">나의 소개</a>
                        <a href="/project">프로젝트</a>
                        <a href="/contest">공모전</a>
                        <a href="/career">나의 경력</a>
                    </nav>
                    <main>{children}</main>
                </div>
                <footer>
                    Copyright 2024. 지은이 all rights reserved.
                    <br />
                    연락처 : 010-8608-7396
                </footer>
            </body>
        </html>
    );
}