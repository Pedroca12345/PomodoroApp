import styles from './styles.module.css';
import { HistoryIcon, HomeIcon, Settings, SunIcon } from 'lucide-react';

export function Menu () {

   return (
      <nav className={styles.menu}>
         <a className={styles.menuLink} href="#">
            <HomeIcon />
         </a>
         <a className={styles.menuLink} href="#">
            <HistoryIcon />
         </a>
         <a className={styles.menuLink} href="#">
            <span><Settings /></span>
         </a>
         <a className={styles.menuLink} href="#">
            <span><SunIcon /></span>
         </a>
      </nav>
   );
}