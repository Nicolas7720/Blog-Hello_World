import React, { ReactNode } from "react";

interface PostCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const PostCardRoot = ({ children, ...rest }: PostCardRootProps) => {
  return <div {...rest}>{children}</div>;
};

export default PostCardRoot;
