import React, { ReactNode } from "react";
interface PostModeloRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PostModeloRoot = ({ children, ...rest }: PostModeloRootProps) => {
  return <div {...rest}>{children}</div>;
};

export default PostModeloRoot;
