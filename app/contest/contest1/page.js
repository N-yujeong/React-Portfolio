import Image from "next/image";
import styles from "./Contest.module.css";

function Contest1() {
  return (
    <div className={styles.container}>
      <h1>공모전입니다.</h1>
      <Image src="/image/contest1.png" alt="contest1" width={500} height={300} />
      
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>공모전 개요</legend>
        <ul className={styles.list}>
          <li>공모전에 대한 내용을 작성</li>
          <li>공모전에 대한 내용을 작성</li>
          <li>공모전에 대한 내용을 작성</li>
          <li>공모전에 대한 내용을 작성</li>
          <li>공모전에 대한 내용을 작성</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest1;