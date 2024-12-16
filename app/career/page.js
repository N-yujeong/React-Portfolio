'use client'     // 클라이언트 컴포넌트

import { useState } from "react";
import careers from "../Data/careers";

function Carears() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  
  return (
    <div id="career">
      {careers.map((career, idx) => (
        <button 
          key={idx}        // 고유 key 추가
          onClick={contentChange} 
          value={idx}
        >
          {career.tab}
        </button>
      ))}
      {careers[index].content}
    </div>
  );
}

export default Carears;