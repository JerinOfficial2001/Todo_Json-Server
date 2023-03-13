import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };
  return (
    <div className="ui celled list">
      {contacts?.map((contact) => {
        return (
          <ContactCard contact={contact} clickHandler={deleteContactHandler} />
        );
      })}
    </div>
  );
};

export default ContactList;
