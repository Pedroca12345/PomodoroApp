import { ReactNode } from "react";
import styles from './styles.module.css';

type ContainerProps = {
   children: ReactNode;
};

export function Container({ children }: ContainerProps) {

   const { container, content } = styles;

   return (
      <div className={container}>
         <div className={content}>

            {children}

         </div>
      </div>
   );
}