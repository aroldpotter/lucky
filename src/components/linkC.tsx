import React from "react";
import { ILinkData } from "../data";

interface ILinkC {
  item: ILinkData;
  index: number;
}

const LinkC: React.FC<ILinkC> = ({ item, index }) => {
  return (
    <div className="link" key={index}>
      <div className="logo">
        <img src={item.link} alt="slack" />
      </div>
      <div className="link-title">
        <p>{item.text}</p>
        <h2> {item.address}</h2>
      </div>
    </div>
  )
}

export default LinkC;