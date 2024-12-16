import Contest1 from "../contest/contest1/page.js";
import Contest2 from "../contest/contest2/page.js";
import Contest3 from "../contest/contest3/page.js";

const contests = [
  {
    tab: "Contest1",                              // 메뉴 버튼
    content: <Contest1></Contest1>,     // 컴포넌트
  },
  {
    tab: "Contest2",
    content: <Contest2></Contest2>,
  },
  {
    tab: "Contest3",
    content: <Contest3></Contest3>,
  },
];

export default contests;