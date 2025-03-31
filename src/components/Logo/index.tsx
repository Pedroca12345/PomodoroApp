import styles from './styles.module.css';
import { TimerIcon } from 'lucide-react';

export function Logo () {

   const { logo, logoLink } = styles;

   return (
      <div className={logo}>
         <a className={logoLink} href="#">
            <TimerIcon />
            <span>Pomodoro</span>
         </a>
      </div>
   );
}