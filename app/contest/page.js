'use client'     // 클라이언트 컴포넌트

import { useState } from "react";
import contests from "../Data/contests";

function Contest() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div id="contest">
      {contests.map((contest, index) => (
        <button onClick={contentChange} value={index}>
          {contest.tab}
        </button>
      ))}
      {contests[index].content}
    </div>
  );
}

export default Contest;