import { ImgHTMLAttributes } from "react";

const PostCapa = ({ ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img {...rest} />;
};

export default PostCapa;
