import { ButtonHTMLAttributes, ReactNode } from "react";

interface PostCardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const PostCardButton = ({ children, ...rest }: PostCardButtonProps) => {
  return <button {...rest}>{children}</button>;
};

export default PostCardButton;
