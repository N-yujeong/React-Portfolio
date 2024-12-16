import Career1 from "../career/career1/page.js";
import Career2 from "../career/career2/page.js";

const careers = [
  {
    tab: "아르바이트 및 인턴",            // 메뉴 버튼
    content: <Career1></Career1>,    // 컴포넌트
  },
  {
    tab: "자격증 및 그외 스펙",
    content: <Career2></Career2>,
  },
];

export default careers;