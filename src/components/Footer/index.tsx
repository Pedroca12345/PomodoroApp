import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer () {
   const { footer } = styles;

   return (
      <footer className={footer}>
         <RouterLink href="/about-pomodoro/">Entenda a técnica de Pomodoro</RouterLink>
      </footer>
   )
}