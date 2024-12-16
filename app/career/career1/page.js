import styles from './Career.module.css';

const Career1 = () => {
    return (
        <div className={styles.container}>
            <fieldset>
                <legend>흑화돗</legend>
                <ul>
                    <li>근무기간: 2023.10 ~ 재직중</li>
                    <li>담당업무: 고기 굽기, 고객 응대, 매장 청소, 홀 서빙 등</li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>레이지먼데이</legend>
                <ul>
                    <li>근무기간: 2023.08 ~ 재직중</li>
                    <li>담당업무: 음료 제조, 고객 응대, 매장 관리 등</li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>메가커피</legend>
                <ul>
                    <li>근무기간: 2023.06 ~ 2024.03</li>
                    <li>담당업무: 음료 제조, 고객 응대, 매장 관리 등</li>
                </ul>
            </fieldset>
        </div>
    );
};

export default Career1;