import Project1 from "../project/project1/page.js";
import Project2 from "../project/project2/page.js";
import Project3 from "../project/project3/page.js";

const projects = [
  {
    tab: "Project1",                            // 메뉴 버튼
    content: <Project1></Project1>,    // 컴포넌트
  },
  {
    tab: "Project2",
    content: <Project2></Project2>,
  },
  {
    tab: "Project3",
    content: <Project3></Project3>,
  },
];

export default projects;