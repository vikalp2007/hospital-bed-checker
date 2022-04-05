import { DoubleBubble } from "react-spinner-animated";
import React from "react";
import "react-spinner-animated/dist/index.css";

const Loading = ({msg}) => {
  return (
    <DoubleBubble
      text={msg}
      width={"200px"}
      height={"200px"}
      center={true}
    />
  );
};

export default Loading;
