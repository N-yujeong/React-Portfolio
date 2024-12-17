'use client'; // 클라이언트 컴포넌트

import { useState } from "react";
import contests from "../Data/contests";

function Contest() {
  const [index, setIndex] = useState(contests.length > 0 ? 0 : -1); // 초기 상태 검증

  const contentChange = (event) => {
    setIndex(Number(event.target.value)); // 문자열을 숫자로 변환
  };

  return (
    <div id="contest">
      {/* 버튼 목록 */}
      {contests.map((contest, idx) => (
        <button
          key={contest.id || idx} // 고유 key
          onClick={contentChange}
          value={idx}
        >
          {contest.tab}
        </button>
      ))}

      {/* 선택된 콘텐츠 렌더링 */}
      {contests.length > 0 && contests[index]?.content}
    </div>
  );
}

export default Contest;