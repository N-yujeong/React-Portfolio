import styles from "./Career.module.css";

const Career1 = () => {
  const careers = [
    {
      title: "흑화돗",
      details: [
        "근무기간: 2023.10 ~ 재직중",
        "담당업무: 고기 굽기, 고객 응대, 매장 청소, 홀 서빙 등",
      ],
    },
    {
      title: "레이지먼데이",
      details: [
        "근무기간: 2023.08 ~ 재직중",
        "담당업무: 음료 제조, 고객 응대, 매장 관리 등",
      ],
    },
    {
      title: "메가커피",
      details: [
        "근무기간: 2023.06 ~ 2024.03",
        "담당업무: 음료 제조, 고객 응대, 매장 관리 등",
      ],
    },
    {
      title: "라디오베이",
      details: [
        "근무기간: 2023.07 ~ 2023.09",
        "담당업무: 고객 응대, 홀 서빙, 설거지 등",
        "기타: 단기알바",
      ],
    },
    {
      title: "보배반점",
      details: [
        "근무기간: 2022.12 ~ 2023.04",
        "담당업무: 홀 서빙, 배달 포장 등",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {careers.map((career, index) => (
        <fieldset key={index} className={styles.fieldset}>
          <legend className={styles.legend}>{career.title}</legend>
          <ul className={styles.list}>
            {career.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </fieldset>
      ))}
    </div>
  );
};

export default Career1;