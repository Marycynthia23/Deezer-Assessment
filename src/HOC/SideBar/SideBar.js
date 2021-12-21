import styles from "./SideBar.module.css";
import { UserInfo } from "./UserInfo";
import { Nav } from "./Nav";

export const SideBar = () => (
  <div className={styles.SidebarCont}>
    <UserInfo />
    <Nav />
  </div>
);
