import Project1 from '../project/project1/page';

const projects = [
  { tab: 'Project 1', content: <Project1 /> },
];

export default projects;

// `app/project/project1/page.js`: 첫 번째 프로젝트 컴포넌트
export default function Project1() {
  return (
    <div>
      <h1>HTML + CSS + JavaScript를 이용한 웹사이트 만들기</h1>
      <img src="/image/HTML.png" alt="HTML" width="70%" height="70%" />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ul>
          <li>주제: HTML/CSS/JavaScript를 이용한 웹사이트 제작</li>
          <li>제작 기간: 2023.06.14 ~ 2023.06.21</li>
          <p><a href="https://github.com/N-yujeong/INTRODUCE">GitHub 이동</a></p>
        </ul>
      </fieldset>
    </div>
  );
}