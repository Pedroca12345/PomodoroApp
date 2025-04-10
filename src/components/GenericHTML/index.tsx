import { ReactNode } from "react";
import styles from './styles.module.css';

type GenericHTMLProps = {
  children: ReactNode;
}

export function GenericHTML ({ children }: GenericHTMLProps) {

  const { genericHTML } = styles;

  return <div className={genericHTML}>{children}</div>;
}