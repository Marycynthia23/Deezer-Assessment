import { Header } from "../../Header/Header";
import { SideBar } from "../../SideBar/SideBar";
import styles from "./PrivateLayout.module.css";

export const PrivateLayout = (props) =>{
    const PlaceHolder = () => (
        <div className={styles.PageEmptyPlaceholder}>Search</div>
      );

    const GetPageContent = () => !props.children ? <PlaceHolder/> : props.children;

    return (
        <div>
        <div className={styles.HeaderCont}>
          <Header />
        </div>
        <div className={styles.Layout}>
          <aside className={styles.SidebarCont}>
            <SideBar />
          </aside>
          <main class={styles.PageContent}>
            <div className={styles.Body}>
              <GetPageContent />
            </div>
          </main>
        </div>
      </div>
    );
}