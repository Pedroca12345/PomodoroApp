import styles from './styles.module.css';

export function Footer () {
   const { footer } = styles;

   return (
      <footer className={footer}>
         <a href="">Entenda a técnica de Pomodoro</a>
      </footer>
   )
}