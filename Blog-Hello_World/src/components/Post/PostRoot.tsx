import React, { ReactNode } from "react";

interface PostRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const PostRoot = ({ children, ...rest }: PostRootProps) => {
  return <div {...rest}>{children}</div>;
};

export default PostRoot;
