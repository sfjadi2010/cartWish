import React from "react";
import "./LinkWithIcons.css";

const LinkWithIcons = ({ title, emoji, link }) => {
  return (
    <>
      <a href={link} className="align_center">
        {title} <img src={emoji} alt={`${title} Icon`} className="link_emoji" />
      </a>
    </>
  );
};

export default LinkWithIcons;
