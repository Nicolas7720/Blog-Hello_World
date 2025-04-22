import { ReactNode } from "react";

interface PostTituloProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}
const PostTitulo = ({ children, ...rest }: PostTituloProps) => {
  return <h2 {...rest}>{children}</h2>;
};

export default PostTitulo;
