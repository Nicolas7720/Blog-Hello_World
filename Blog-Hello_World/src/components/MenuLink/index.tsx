import { LinkHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
  to: string;
}

const MenuLink = ({ children, to, ...rest }: MenuLinkProps) => {
  return (
    <Link {...rest} to={to}>
      {children}
    </Link>
  );
};

export default MenuLink;
