import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';
import { TimerIcon } from 'lucide-react';

export function Logo () {

   const { logo, logoLink } = styles;

   return (
      <div className={logo}>
         <RouterLink className={logoLink} href="/">
            <TimerIcon />
            <span>Pomodoro</span>
         </RouterLink>
      </div>
   );
}