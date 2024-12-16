import styles from "./Contest.module.css";

const Contest3 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>2024 코드스프링 홈페이지 공모전</h1>
      <img
        src="/image/contest3.png"
        alt="2024 코드스프링 홈페이지 공모전"
        className={styles.image}
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>공모전 개요</legend>
        <ul className={styles.list}>
          <li>
            <strong>주최·주관</strong>
            <ul className={styles.subList}>
              <li>코드스프링</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>참가대상</strong>
            <ul className={styles.subList}>
              <li>대학생</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>시상내역</strong>
            <ul className={styles.subList}>
              <li>상금+상품 (총상금: 450만원 / 1위: 200만원 / 기념품)</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>접수방법</strong>
            <ul className={styles.subList}>
              <li>이메일접수, 온라인접수</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>접수기간</strong>
            <ul className={styles.subList}>
              <li>2024.10.02 ~ 2024.11.15</li>
            </ul>
          </li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest3;