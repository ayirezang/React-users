import React, { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { FiType } from "react-icons/fi";
import { v4 as uuid } from "uuid";

const UsersForm = ({ handleAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenChange = (e) => {
    setGen(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newContact = { name, email, gen, id: uuid() };
    console.log(newContact);
    handleAddContact(newContact);
    setUsers((prevUsers) => [...prevUsers, newContact]);
    setName("");
    setEmail("");
    setGen("");
  };

  return (
    <div className=" ">
      <h1 className="uppercase mb-2">usersform</h1>
      <form className=" space-y-4" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <MdPerson />
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <HiOutlineEnvelope />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <FiType />
          <input
            type="text"
            className="grow"
            placeholder="Gen"
            value={gen}
            onChange={handleGenChange}
          />
        </label>
        <button className="btn btn-primary w-full" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
