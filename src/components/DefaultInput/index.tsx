import styles from './styles.module.css';
import { ComponentProps } from 'react';

type DefaultInputProps = {
   id: string;
   labelText?: string;
} & ComponentProps<'input'>;

export function DefaultInput ({
   id,
   labelText,
   type,
   ...props
}: DefaultInputProps) {
   const { input } = styles;

   return (
      <>
         {labelText && <label htmlFor={id}>{labelText}</label>}
         
         <input className={input} type={type} id={id} {...props}/>
      </>
   );
}