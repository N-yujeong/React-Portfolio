import styles from './Career.module.css';

const Career2 = () => {
  return (
    <div className={styles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>네트워크 관리사 2급</legend>
        <ul className={styles.list}>
          <li>자격의 종류: 공인민간자격</li>
          <li>자격발급기관: 한국정보통신자격협회</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Career2;