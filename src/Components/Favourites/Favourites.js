import { PrivateLayout } from '../../HOC/Layout/PrivateLayout/PrivateLayout'
import {Cards}  from '../Cards/Cards';
import styles from './Favourites.module.css'

export const Favourites = () => {
    return (
      <PrivateLayout>
        <div className={styles.Discover}>
          <Cards/>
        </div>
      </PrivateLayout>
    );
  };