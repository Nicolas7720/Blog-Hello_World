import React, { ReactNode } from "react";

type PostModeloTituloProps = React.HTMLAttributes<HTMLHeadingElement> & {
  nivel: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

const PostModeloTitulo = ({
  nivel,
  children,
  ...rest
}: PostModeloTituloProps) => {
  const Tag = `h${nivel}` as `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;

  return <Tag {...rest}>{children}</Tag>;
};

export default PostModeloTitulo;
