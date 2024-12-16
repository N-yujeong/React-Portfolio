import Image from "next/image";
import styles from "./Project.module.css";

function Project1() {
  return (
    <div className={styles.container}>
      <h1>ReacJs를 이용한 Frontend Web</h1>
      <Image src="/image/react.png" alt="react" width={500} height={300} />

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>프로젝트 개요</legend>
        <ul className={styles.list}>
          <li>프로젝트에 대한 내용을 작성</li>
          <li>프로젝트에 대한 내용을 작성</li>
          <li>프로젝트에 대한 내용을 작성</li>
          <li>프로젝트에 대한 내용을 작성</li>
          <li>프로젝트에 대한 내용을 작성</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Project1;