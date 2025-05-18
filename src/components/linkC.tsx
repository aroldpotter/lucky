import React from "react";
import { ILinkData } from "../data";

interface ILinkC {
  item: ILinkData;
  index: number;
}

const LinkC: React.FC<ILinkC> = ({ item, index }) => {
  const handleLink = () => {
    if (item.text === "Teams") {
      window.open("https://teams.live.com/l/invite/FBA58z-67BETqBD_wM");
    } else {
      return "#";
    }
  }
  return (
    <div className="link" key={index} onClick={handleLink}>
      <div className="logo">
        <img src={item.link} alt="slack" />
      </div>
      <div className="link-title">
        <p>{item.text}</p>
        <h2> {item.text === "Teams" ? "James(Click to join)" :item.address}</h2>
      </div>
    </div>
  )
}

export default LinkC;