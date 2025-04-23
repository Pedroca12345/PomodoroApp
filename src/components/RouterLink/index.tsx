import { Link } from "react-router";
import { ComponentProps, ReactNode } from "react";

type RouterLinkProps = { 
  children: ReactNode;
  href: string;
} & ComponentProps<'a'>;

export function RouterLink ({ href, children, ...props }: RouterLinkProps) {
  return <Link to={href} {...props}>{children}</Link>
}