import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = ({ text, textIcon = null, link = null }) => {
  const texto = text != null && text != "" ? text : "Default";
  return (
    <Link to={link != null ? link : "#"} className="item parentAside" replace>
      <span>{texto}</span>
      {textIcon == null ? (
        <i className="fas fa-question" />
      ) : (
        <i className={textIcon} />
      )}
    </Link>
  );
};

export default ItemMenu;
