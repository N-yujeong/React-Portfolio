import styles from "./Career.module.css";

function Career1() {
return (
    <div className={styles.container}>
    <h1>아르바이트 및 인턴</h1>
    <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>아르바이트</legend>
        <ul className={styles.list}>
            <li>아르바이트에 대한 내용을 작성</li>
            <li>아르바이트에 대한 내용을 작성</li>
        </ul>
    </fieldset>

    <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>인턴</legend>
        <ul className={styles.list}>
            <li>인턴에 대한 내용을 작성</li>
            <li>인턴에 대한 내용을 작성</li>
        </ul>
        </fieldset>
    </div>
    );
};

export default Career1;