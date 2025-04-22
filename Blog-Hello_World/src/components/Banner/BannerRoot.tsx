import React, { ReactNode } from "react";

interface BannerRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const BannerRoot = ({ children, ...rest }: BannerRootProps) => {
  return <div {...rest}>{children}</div>;
};

export default BannerRoot;
