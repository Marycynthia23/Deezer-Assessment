import { PrivateLayout } from '../../HOC/Layout/PrivateLayout/PrivateLayout'
import {Cards}  from '../Cards/Cards';
// import { MusicPreview } from '../MusicPreview';
import { PlayLists } from '../PlayLists';
import styles from './Favourites.module.css'

export const Favourites = () => {
    return (
      <PrivateLayout>
        <div className={styles.Discover}>
          {/* <MusicPreview/> */}
          <div>this is favourites</div>
          <Cards/>
          <PlayLists/>
        </div>
      </PrivateLayout>
    );
  };