import React from "react";
import "./leftbar.scss";
import avatar from "../images/Screenshot 2025-05-21 123035.png";
import { ILinkData, linkData } from "../data";
import LinkC from "./linkC";

const Leftbar: React.FC = () => {
  return (
    <div className="left-bar">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <h1>James Lee</h1>
        <h3>James</h3>
        <p>Web | BlockChain | Bot | Mobile</p>
        <p>Development</p>
      </div>
      <div className="router">
          {
            linkData.map((item: ILinkData, index: number) => (
              <LinkC item={item} index={index}key={index} />
            ))
          }
      </div>
    </div>
  )
}

export default Leftbar;