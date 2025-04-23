import styles from './styles.module.css';
import { HistoryIcon, HomeIcon, MoonIcon, Settings, SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = "dark" | "light";

export function Menu() {

   const [theme, setTheme] = useState<AvailableThemes>(() => {
      const storageTheme = (localStorage.getItem("theme") as AvailableThemes) || "dark";

      return storageTheme;
   });

   const nextThemeIcon = {
      dark: <SunIcon />,
      light: <MoonIcon />
   };

   function handleTheme(
      event : React.MouseEvent<HTMLAnchorElement, MouseEvent>,
   ) {
      event.preventDefault();

      setTheme(prevTheme => {
         const nextTheme = prevTheme === "dark" ? "light" : "dark";
         return nextTheme;
      });
   }

   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
   }, [theme]);

   return (
      <nav className={styles.menu}>
         <RouterLink 
            className={styles.menuLink} 
            href="/" 
            aria-label='Ir para o início' 
            title='Ir para o início'
         >
            <HomeIcon />
         </RouterLink>
         <RouterLink 
            className={styles.menuLink} 
            href="/history" 
            aria-label='Ir para o histórico' 
            title='Ir para o histórico'
         >
            <HistoryIcon />
         </RouterLink>
         <RouterLink 
            className={styles.menuLink} 
            href="/settings" 
            aria-label='Ir para as configurações' 
            title='Ir para as configurações'
         >
            <span><Settings /></span>
         </RouterLink>
         <a 
            className={styles.menuLink} 
            href="#" 
            aria-label='Mudar o tema' 
            title='Mudar o tema' 
            onClick={handleTheme}
         >
            {nextThemeIcon[theme]}
         </a>
      </nav>
   );
}