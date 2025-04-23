import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer () {
   const { footer } = styles;

   return (
      <footer className={footer}>
         <Link to="/about-pomodoro/">Entenda a técnica de Pomodoro</Link>
      </footer>
   )
}