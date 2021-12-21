import styles from "./Header.module.css";
// import picture from "../../Images/musicgirl.png"


export const Header = () => { 
 const API_Id = process.env.REACT_APP_Application_ID
 console.log(API_Id)

 return(
  <div className={styles.NavbarCont}>
  <div></div>
  <div className={styles.HeaderText}>
    <h3>Your favorite tunes</h3>
    <p>All<span className={styles.Sun}><i class="fas fa-sun"></i></span>and all<span className={styles.Moon}><i class="fas fa-moon"></i></span></p>
  </div>
</div>
 )
  
};

