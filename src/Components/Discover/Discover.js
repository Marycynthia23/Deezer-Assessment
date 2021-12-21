import { PrivateLayout } from '../../HOC/Layout/PrivateLayout/PrivateLayout'
import {Cards}  from '../Cards/Cards';
import { MusicPreview } from '../MusicPreview';
import { PlayLists } from '../PlayLists';
import styles from './Discover.module.css'

export const Discover = () => {
    return (
      <PrivateLayout>
        <div className={styles.Discover}>
          {/* <MusicPreview/> */}
          <Cards/>
          <PlayLists/>
        </div>
      </PrivateLayout>
    );
  };