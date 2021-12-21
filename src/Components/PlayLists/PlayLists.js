import styles from './PlayLists.module.css'
import picture from '../../Images/woman.png';
// import { Cards } from '../Cards/Cards';


export const PlayLists = () => (
    <div>
        <div className={styles.SubTitles}>
            <h3>FEATURED PLAYLISTS</h3>
            <div className={styles.Line}></div>
            <div>
                <span className={styles.ArrowLeft}><i class="fas fa-chevron-left"></i></span>
                <span className={styles.ArrowRight}><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>

    </div>
  );