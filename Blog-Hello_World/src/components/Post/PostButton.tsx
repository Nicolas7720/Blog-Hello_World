import { ButtonHTMLAttributes, ReactNode } from "react";

interface PostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const PostButton = ({ children, ...rest }: PostButtonProps) => {
  return <button {...rest}>{children}</button>;
};

export default PostButton;
