import styles from "./UserInfo.module.css";
import woman from '../../../Images/woman.png'


export const UserInfo = () => (
  <div className={styles.NavbarCont}>
    <div className={styles.UserCont}>
    <div className={styles.Avatar}>
      <img src={woman} alt="user"/>
    </div>
    </div>
    <p className={styles.UserName}>Nneoma Onuoha</p>
  </div>
);
