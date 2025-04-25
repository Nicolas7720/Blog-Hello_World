import React from "react";

type PostModeloCapaProps = React.HTMLAttributes<HTMLDivElement> & {
  fotoCapa: string;
};

export const PostModeloCapa = ({ fotoCapa, ...rest }: PostModeloCapaProps) => {
  return <div {...rest} style={{ backgroundImage: `url(${fotoCapa})` }}></div>;
};
