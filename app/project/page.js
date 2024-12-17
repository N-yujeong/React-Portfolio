'use client'; // 클라이언트 컴포넌트

import { useState } from "react";
import projects from "../Data/projects";

function Project() {
  const [index, setIndex] = useState(0);

  // 버튼 클릭 시 index를 변경하는 함수
  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div id="project">
      {projects.map((project, idx) => (
        <button 
          key={idx} // 각 버튼에 고유한 key 추가
          onClick={contentChange} 
          value={idx}
        >
          {project.tab}
        </button>
      ))}
      {projects[index]?.content} {/* index 값에 대한 안전한 접근 */}
    </div>
  );
}

export default Project;