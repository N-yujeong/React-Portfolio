'use client'     // 클라이언트 컴포넌트

import { useState } from "react";
import intros from "../Data/intros";  // 데이터 파일 

function Introduction() {
  const [index, setIndex] = useState(0);

  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      {intros.map((intro, idx) => (
        <button key={idx} onClick={contentChange} value={idx}>
          {intro.tab}
        </button>
      ))}      <br /> <br />

       <div>{intros[index]?.content}</div>
    </div>
  );
}
export default Introduction;