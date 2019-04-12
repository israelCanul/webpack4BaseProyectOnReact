import React from "react";

const ItemMenu = ({ text, textIcon = null }) => {
  const texto = text != null && text != "" ? text : "Default";
  return (
    <a className="item parentAside">
      <span>{texto}</span>
      {textIcon == null ? (
        <i className="fas fa-question" />
      ) : (
        <i className={textIcon} />
      )}
    </a>
  );
};

export default ItemMenu;
