import React, { useState } from "react";

function AddContact({ addContactHandler }) {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const add = () => {
    if (data.name === "" && data.email === "") {
      alert("Muditu yelathaium fill panuda boomer uh");
    } else {
      console.log(data);
      addContactHandler(data);
      setData({
        name: "",
        email: "",
      });
    }
  };

  return (
    <div className="ui main">
      <h1>Add Contact</h1>
      <div className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Email</label>

          <input
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            type="Email"
            name="email"
            placeholder="Email"
          />
        </div>
        <button onClick={add} className="ui button blue">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddContact;
