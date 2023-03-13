import React from "react";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;
  return (
    <div className="items">
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        onClick={() => clickHandler(id)}
        className="trash alternate outline icon"
      ></i>
    </div>
  );
};

export default ContactCard;
