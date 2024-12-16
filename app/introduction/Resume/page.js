import styles from './Resume.module.css’;    // 본 세그먼트의 스타일

const Resume = () => {
  return (
    <>
      <div className={styles.resume}>
        <em className={styles.em}>1. 기초 자료</em>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td rowSpan="6">사 진</td>
              <td style={{ backgroundColor: "#e3fcff" }}>성 명</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className={styles.pledge}>
          <p>위의 사실이 틀림이 없음을 서약합니다.</p>
          <p>작성일 2023년 10월 25일</p>
          <p>작성자 (인)</p>
        </div>
      </div>
    </>
  );
};

export default Resume;