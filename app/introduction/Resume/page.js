import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div id="resume" className={styles.resume}>
      <h2>1. 기초 자료</h2>
      <table>
        <tbody>
          <tr>
            <td rowSpan="4">
              <img src="/image/index.jpg" alt="프로필 사진" />
            </td>
            <td>성명</td>
            <td>남유정</td>
            <td>한문</td>
            <td className="name">南侑廷</td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td colSpan="3">041108-4030326</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td colSpan="3">1108dbwjd@gmail.com</td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td colSpan="3">010-8608-7396</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}