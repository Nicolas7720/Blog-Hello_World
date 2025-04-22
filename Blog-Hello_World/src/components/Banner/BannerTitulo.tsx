import React from "react";

interface BannerTituloProps extends React.HTMLAttributes<HTMLHeadElement> {
  text: string;
}
const BannerTitulo = ({ text, ...rest }: BannerTituloProps) => {
  return <h1 {...rest}>{text}</h1>;
};

export default BannerTitulo;
