import styles from './Title.module.css'


export const Title = () => (
    <div>
        <div className={styles.SubTitles}>
            <h3>RELEASED THIS WEEK</h3>
            <div className={styles.Line}></div>
            <div>
                <span className={styles.ArrowLeft}><i class="fas fa-chevron-left"></i></span>
                <span className={styles.ArrowRight}><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>
    </div>
  );