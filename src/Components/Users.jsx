import React from "react";

const Users = ({ users }) => {
  return (
    <div className=" h-screen flex  justify-center items-center gap-5">
      {users.map((user) => {
        return (
          <div className="flex  flex-col space-y-4 p-4 rounded-md border ">
            <p>Name: {user.name}</p>
            <p>Email:{user.email}</p>
            <p>Gen:{user.gen}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
