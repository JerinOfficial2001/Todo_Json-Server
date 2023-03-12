import React, { useState } from "react";

function AddContact({ addContactHandler }) {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const add = () => {
    if (data.name === "" && data.email === "") {
      alert("Muditu yelathaium fill panuda boomer uh");
      return;
    }
    console.log(data);
    addContactHandler(data);
    setData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="ui main">
      <h1>Add Contact</h1>
      <form
        onSubmit={(e) => {
          add();
          e.preventDefault();
        }}
        className="ui form"
      >
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
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
