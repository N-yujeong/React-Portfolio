'use client'; // 클라이언트 컴포넌트

import { useState } from "react";
import careers from "../Data/careers";

function Careers() {
  const [index, setIndex] = useState(0);

  const contentChange = (event) => {
    setIndex(Number(event.target.value)); // value는 문자열이므로 숫자로 변환
  };

  return (
    <div id="career">
      {/* careers 배열을 순회하며 버튼을 생성 */}
      {careers.map((career, idx) => (
        <button 
          key={idx} // 고유한 key prop 추가
          onClick={contentChange} 
          value={idx}
        >
          {career.tab}
        </button>
      ))}
      {/* 선택된 인덱스에 해당하는 내용 출력 */}
      <div>{careers[index].content}</div>
    </div>
  );
}

export default Careers;