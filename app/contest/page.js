'use client'     // 클라이언트 컴포넌트

import { useState } from "react";
import contests from "../Data/contests";

function Contest() {
  const [index, setIndex] = useState(0);
  
  // 버튼 클릭 시 index를 변경하는 함수
  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div id="contest">
      {contests.map((contest, idx) => (
        <button 
          key={idx} // 각 버튼에 고유한 key 추가
          onClick={contentChange} 
          value={idx}
        >
          {contest.tab}
        </button>
      ))}
      {contests[index].content}
    </div>
  );
};

export default Contest;