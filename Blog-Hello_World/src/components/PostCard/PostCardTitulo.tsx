import { ReactNode } from "react";

interface PostCardTituloProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}
const PostCardTitulo = ({ children, ...rest }: PostCardTituloProps) => {
  return <h2 {...rest}>{children}</h2>;
};

export default PostCardTitulo;
