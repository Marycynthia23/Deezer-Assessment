import styles from './MusicPreview.module.css'
import banner from '../../Images/Yababuluku.jpeg'

export const MusicPreview = () => (
    <div className={styles.PreviewContainer}>
        <div className={styles.web}>
            <img src={banner} alt="banner"/>
            <div className={styles.MusicPlay}>
                <h2>Music Title</h2>
                <p>Arists names</p>
                <div className={styles.Controls}>
                    <div><i class="fas fa-step-forward"></i></div>
                    <div><i class="fas fa-play-circle 7x"></i></div>
                    <div><i class="fas fa-step-forward"></i></div>
                </div>
                {/* <div>
                    <audio ref="" src="" controls autoPlay/>
                </div> */}
            </div>
            
        </div>
        <div className={styles.mobile}>
                <img src={banner} alt="banner"/>

                <div className={styles.Controls}>
                    <div><i class="fas fa-step-forward"></i></div>
                    <div><i class="fas fa-play-circle 7x"></i></div>
                    <div><i class="fas fa-step-forward"></i></div>
                </div>
                
            </div>
    </div>
)