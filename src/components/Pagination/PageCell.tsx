import React from "react";

type Props = {
  style: object;
  content: number;
};

const PageCell = ({ style, content }: Props) => {
  return <button style={style}>{content}</button>;
};

export default PageCell;
