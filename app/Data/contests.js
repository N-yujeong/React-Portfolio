import Contest1 from "../contest/contest1/page.js";
import Contest2 from "../contest/contest2/page.js";
import Contest3 from "../contest/contest3/page.js";

const contests = [
  {
    tab: "공모전(1)",                              // 메뉴 버튼
    content: <Contest1></Contest1>,     // 컴포넌트
  },
  {
    tab: "공모전(2)",
    content: <Contest2></Contest2>,
  },
  {
    tab: "공모전(3)",
    content: <Contest3></Contest3>,
  },
];

export default contests;