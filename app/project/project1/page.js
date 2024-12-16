import styles from "./Project.module.css";

const Project1 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HTML + CSS + JavaScript를 이용한 웹사이트 만들기</h1>
      <img
        src="/image/HTML.png"
        alt="HTML"
        className={styles.image}
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>프로젝트 개요</legend>
        <ul className={styles.list}>
          <li>주제: HTML/CSS + JavaScript를 이용한 웹사이트 제작</li>
          <li>제작 기간: 2023.06.14 ~ 2023.06.21 (8일)</li>
        </ul>
        <a
          href="https://github.com/N-yujeong/INTRODUCE"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub 이동
        </a>
      </fieldset>
    </div>
  );
};

export default Project1;