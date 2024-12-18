import React, { useState } from "react";
import Users from "./Components/Users";
import UsersForm from "./Components/UsersForm";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "joe",

      email: "wat@gmail.com",

      gen: "30",
    },
    {
      name: "mat",
      email: "zatt@gmail.com",
      gen: "30",
    },
  ]);
  const handleAddContact = (newContact) => {
    setUsers((preUsers) => [...preUsers, newContact]);
  };

  return (
    <div className="h-screen  flex justify-center items-center gap-5 text-black  ">
      <Users users={users} />
      <UsersForm handleAddContact={handleAddContact} />
    </div>
  );
};

export default App;
