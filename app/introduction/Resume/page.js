import styles from './Resume.module.css'; // 스타일 import

const Resume = () => {
  return (
    <>
      <div className={styles.resume}>
        <em className={styles.em}>1. 기초 자료</em>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td rowSpan="4">
                <img src="/image/index.jpg" width="95%" height="95%" alt="사진" />
              </td>
              <td style={{ backgroundColor: '#e3fcff' }}>성 명</td>
              <td>남유정</td>
              <td style={{ backgroundColor: '#e3fcff' }}>한 문</td>
              <td className={styles.name}>南侑廷</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#e3fcff' }}>주민등록번호</td>
              <td colSpan="3">041108-4030326</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#e3fcff' }}>E-mail</td>
              <td colSpan="3">1108dbwjd@gmail.com</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#e3fcff' }}>전화번호</td>
              <td> - </td>
              <td style={{ backgroundColor: '#e3fcff' }}>휴대폰</td>
              <td>010-8608-7396</td>
            </tr>
          </tbody>
        </table>

        <em className={styles.em}>2. 학력사항</em>
        <table>
          <tbody>
            <tr>
              <th style={{ backgroundColor: '#e3fcff' }}>기간</th>
              <th style={{ backgroundColor: '#e3fcff' }}>상세내용</th>
              <th style={{ backgroundColor: '#e3fcff' }}>비고</th>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>곤지암 초등학교</td>
              <td>2017년 2월 졸업</td>
            </tr>
            <tr>
              <td>중학교</td>
              <td>곤지암 중학교</td>
              <td>2019년 12월 졸업</td>
            </tr>
            <tr>
              <td>고등학교</td>
              <td>초월 고등학교</td>
              <td>2023년 1월 졸업</td>
            </tr>
            <tr>
              <td>대학교</td>
              <td>가천대학교</td>
              <td>컴퓨터공학전공 2학년 재학 중</td>
            </tr>
          </tbody>
        </table>

        <em className={styles.em}>3. 경력사항</em>
        <table>
          <tbody>
            <tr>
              <th style={{ backgroundColor: '#e3fcff' }}>기간</th>
              <th style={{ backgroundColor: '#e3fcff' }}>관련</th>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <em className={styles.em}>4. 개인능력 및 장단점</em>
        <table>
          <tbody>
            <tr>
              <td rowSpan="2" style={{ backgroundColor: '#e3fcff' }}>자격증 및 포상</td>
              <td colSpan="3">네트워크관리사 2급 (필기)</td>
              <td>한국산업인력공단</td>
            </tr>
            <tr>
              <td colSpan="3">운전면허증 2종 보통</td>
              <td>경찰청</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.pledge}>
        <p>위의 사실이 틀림이 없음을 서약합니다.</p>
        <p>작성일 2023년 10월 25일</p>
        <p>작성자 (인)</p>
      </div>
    </>
  );
};

export default Resume;