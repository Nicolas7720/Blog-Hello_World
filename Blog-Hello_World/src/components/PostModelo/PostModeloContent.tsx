import React, { ReactNode } from "react";

interface PostModeloContentProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const PostModeloContent = ({ children, ...rest }: PostModeloContentProps) => {
  return <article {...rest}>{children}</article>;
};

export default PostModeloContent;
