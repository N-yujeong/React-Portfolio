import styles from "./Contest.module.css";

const Contest1 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>2024년 공공데이터 활용 경진대회</h1>
      <img
        src="/image/contest1.png"
        alt="공공데이터 활용 경진대회"
        className={styles.image}
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>공모전 개요</legend>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>응모주제</strong>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                한국체육산업개발(주) 공공데이터를 활용한 우수사례 발굴을 통해
                사회적 가치 창출 및 대국민 개방 수요를 반영하기 위한 공모전
              </li>
              <li className={styles.listItem}>
                1개 분야(웹/앱 개발 및 실감형 콘텐츠 구축 등 활용사례)
              </li>
            </ul>
          </li>
          <br/>
          <li className={styles.listItem}>
            <strong>응모자격</strong>
            <ul className={styles.list}>
              <li className={styles.listItem}>공공데이터에 관심 있는 국민 누구나 가능</li>
            </ul>
          </li>
          <br/>
          <li className={styles.listItem}>
            <strong>시상내역</strong>
            <ul className={styles.list}>
              <li className={styles.listItem}>최우수상 1점 (200만원), 우수상 1점 (100만원), 장려상 1점 (50만원)</li>
            </ul>
          </li>
          <br/>
          <li className={styles.listItem}>
            <strong>접수방법</strong>
            <ul className={styles.list}>
              <li className={styles.listItem}>전자우편 (kyk@ksponco.or.kr)을 통해 접수</li>
              <li className={styles.listItem}>제출 서류: 참가신청서 1부(기획서 포함), 개인정보 동의서 1부</li>
            </ul>
          </li>
          <br/>
          <li className={styles.listItem}>
            <strong>접수기간</strong>
            <ul className={styles.list}>
              <li className={styles.listItem}>2024.10.22(월) ~ 11.22(금) 18:00까지</li>
            </ul>
          </li>
          <br/>
          <li className={styles.listItem}>
            <strong>문의처</strong>
            <ul className={styles.list}>
              <li className={styles.listItem}>kyk@ksponco.or.kr</li>
            </ul>
          </li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest1;