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

  return (
    <div className="h-screen  flex justify-center items-center text-black  ">
      <Users users={users} />
      <UsersForm setUsers={setUsers} />
    </div>
  );
};

export default App;
