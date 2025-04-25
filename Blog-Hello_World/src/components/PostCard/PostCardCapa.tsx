import { ImgHTMLAttributes } from "react";

const PostCardCapa = ({ ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img {...rest} />;
};

export default PostCardCapa;
