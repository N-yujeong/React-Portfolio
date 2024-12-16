import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div>
      <div>
        <em className={styles.em}>1. 기초 자료</em>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td rowSpan="4" className={styles.photo}>
                <img src="/image/index.jpg" alt="Profile" />
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
              <td>-</td>
              <td style={{ backgroundColor: '#e3fcff' }}>휴대폰</td>
              <td>010-8608-7396</td>
            </tr>
          </tbody>
        </table>
      </div>

      <em className={styles.em}>2. 학력사항</em>
      <table className={styles.table}>
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
      <table className={styles.table}>
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
      <table className={styles.table}>
        <tbody>
          <tr>
            <td rowSpan="2" style={{ backgroundColor: '#e3fcff' }}>자격증</td>
            <td colSpan="3">네트워크관리사 2급</td>
            <td>한국산업인력공단</td>
          </tr>
          <tr>
            <td colSpan="3">운전면허증 2종 보통</td>
            <td>경찰청</td>
          </tr>
          <tr>
            <td rowSpan="3" style={{ backgroundColor: '#e3fcff' }}>컴퓨터능력</td>
            <td colSpan="2">HTML(HTML5)</td>
            <td style={{ backgroundColor: '#e3fcff' }}>상/중/하</td>
            <td>상</td>
          </tr>
          <tr>
            <td colSpan="2">CSS(CSS3)</td>
            <td style={{ backgroundColor: '#e3fcff' }}>상/중/하</td>
            <td>상</td>
          </tr>
          <tr>
            <td colSpan="2">JavaScript</td>
            <td style={{ backgroundColor: '#e3fcff' }}>상/중/하</td>
            <td>중</td>
          </tr>
          <tr>
            <td rowSpan="2" style={{ backgroundColor: '#e3fcff' }}>취미</td>
            <td colSpan="2">게임</td>
            <td style={{ backgroundColor: '#e3fcff' }}>특기</td>
            <td>피아노</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.pledge}>
        <br/>
        <p>위의 사실이 틀림이 없음을 서약합니다.</p>
        <p>작성일 2023년 10월 25일</p>
        <p>남유정 (인)</p>
      </div>
    </div>
  );
};

export default Resume;