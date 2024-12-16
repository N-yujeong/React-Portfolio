import Resume from "../introduction/Resume/page";
import SelfIntro from "../introduction/SelfIntro/page";

const intros = [
  {
    tab: "이력서",                            // 메뉴 버튼
    content: <Resume></Resume>,   // 컴포넌트 
  },
  {
    tab: "자기소개서",
    content: <SelfIntro></SelfIntro>,
  },
];

export default intros;