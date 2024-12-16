import styles from "./Contest.module.css";

const Contest2 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>컴투스 글로벌 게임개발 공모전 '컴:온 2024'</h1>
      <img
        src="/image/contest2.png"
        alt="컴투스 글로벌 게임개발 공모전"
        className={styles.image}
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>공모전 개요</legend>
        <ul className={styles.list}>
          <li>
            <strong>주최·주관</strong>
            <ul className={styles.subList}>
              <li>컴투스, 게임문화재단</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>참가대상</strong>
            <ul className={styles.subList}>
              <li>중학생, 고등학생, 대학생, 일반인</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>시상내역</strong>
            <ul className={styles.subList}>
              <li>상금(총상금: 4,000만원 / 1위: 2,000만원)</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>접수방법</strong>
            <ul className={styles.subList}>
              <li>온라인접수</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>접수기간</strong>
            <ul className={styles.subList}>
              <li>2024.11.19 ~ 2024.12.30</li>
            </ul>
          </li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest2;