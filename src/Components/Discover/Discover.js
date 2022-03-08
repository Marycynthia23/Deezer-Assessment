import { PrivateLayout } from '../../HOC/Layout/PrivateLayout/PrivateLayout'
import {Cards}  from '../Cards/Cards';
import styles from './Discover.module.css'

export const Discover = () => {
    return (
      <PrivateLayout>
        <div className={styles.Discover}>
          <Cards/>
        </div>
      </PrivateLayout>
    );
  };