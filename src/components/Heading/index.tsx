import styles from './styles.module.css';
import { ReactNode } from 'react';

type HeadingProps = {
   children: ReactNode;
};

export function Heading ({ children }: HeadingProps) {
   const { heading } = styles;
   return (
      <h1 className={ heading }>{children}</h1>
   );
}