import { ImgHTMLAttributes } from "react";

const BannerImagem = ({ ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div>
      <img {...rest} />
    </div>
  );
};

export default BannerImagem;
