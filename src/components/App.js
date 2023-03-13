import React, { useEffect, useState } from "react";
import api from "../api/Contact";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  //retriveContacts
  const retriveContacts = async () => {
    const response = await api.get("./contact");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    setContacts([...contacts, { id: Math.random(), ...contact }]);
    const request = {
      id: parseInt(Math.random()),
      ...contact,
    };
    const response = await api.post("/contact", request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contact/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const getAllContact = async () => {
      const allContact = await retriveContacts();
      if (allContact) setContacts(allContact);
    };
    getAllContact();
  }, []);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
