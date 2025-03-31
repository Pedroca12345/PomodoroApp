import styles from './styles.module.css';
import { ComponentProps, ReactNode } from 'react';

type DefaultButtonProps = {
   icon: ReactNode;
   color?: "purple" | "red";
} & ComponentProps<'button'>;

export function DefaultButton ({icon, color = 'purple', ...props} : DefaultButtonProps) {
   const { button } = styles;

   return (
      <>
         <button className={`${button} ${styles[color]}`} {...props}>
            {icon}
         </button>
      </>
   )
}