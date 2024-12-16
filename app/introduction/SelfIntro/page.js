import styles from './Selfintro.module.css'; // 본 세그먼트의 스타일

const SelfIntro = () => {
    return (
        <div id="selfIntro" className={styles.selfIntro}>
            <section className={styles.division}>
                <h3 className={styles.heading}>자소서 쓰는 법</h3>
                <ul className={styles.list}>
                    <li>자기소개서에서 필수적으로 묻는 항목이 있습니다.</li>
                    <li>어떻게 살아왔는지 어떤 가치관을 가지고 자라왔는지를 작성</li>
                    <li>'성장과정'과 자신의 성격에 대한 평가('성격 장단점')</li>
                    <li>성격을 유추해 볼 수 있는 '취미와 특기'</li>
                    <li>'입사지원동기' 및 '입사 후 포부 및 장래계획'</li>
                </ul>
            </section>
        </div>
    );
};

export default SelfIntro;