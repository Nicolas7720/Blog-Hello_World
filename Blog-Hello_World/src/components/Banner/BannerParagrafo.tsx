import React from "react";

interface BannerParagrafoProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const BannerParagrafo = ({ text, ...rest }: BannerParagrafoProps) => {
  return <p {...rest}>{text}</p>;
};

export default BannerParagrafo;
