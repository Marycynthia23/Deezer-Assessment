import styles from "./Nav.module.css";
import {Link} from 'react-router-dom'

export const Nav = () => (
  <div className={styles.NavbarCont}>
  
      <ul className={styles.NavMenu}>
      <div className={styles.SidebarList}>
        <Link to="/" style={{textDecoration:"none"}}><a href="/" className={styles.SidebarLink}>
        <li><i class="fas fa-headphones"></i></li>
          <span>Discover</span>
        </a></Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/search" style={{textDecoration:"none"}}><a href="/" className={styles.SidebarLink}>
        <li><i class="fas fa-search"></i> </li>
          <span>Search</span>
        </a></Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/favourites" style={{textDecoration:"none"}}><a href="/favourites" className={styles.SidebarLink}>
        <li><i class="fas fa-heart"></i></li>
          <span>Favourites</span>
        </a></Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/playlist" style={{textDecoration:"none"}}><a href="/" className={styles.SidebarLink}>
        <li><i class="far fa-play-circle"></i> </li>
          <span>PlayList</span>
        </a></Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/chart" style={{textDecoration:"none"}}><a href="/" className={styles.SidebarLink}>
        <li><i class="far fa-chart-bar"></i></li>
          <span>Charts</span>
        </a></Link>
      </div>


        {/* <li><a href="***"><i class="fas fa-headphones"></i> Discover</a></li>
        <li><a href="***"><i class="fas fa-search"></i> Search</a></li>
        <li><a href="***"><i class="fas fa-heart"></i> Favourites</a></li>
        <li><a href="***"><i class="far fa-play-circle"></i> PlayList</a></li>
        <li><a href="***"><i class="far fa-chart-bar"></i> Charts</a></li> */}
      </ul>
    
  </div>
);
