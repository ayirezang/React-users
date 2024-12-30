import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <h1 className="text-center mb-20 uppercase">userlist</h1>
      <div className=" flex gap-5">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="flex flex-col space-y-4 p-4 rounded-md border "
            >
              <p>Name: {user.name}</p>
              <p>Email:{user.email}</p>
              <p>Gen:{user.gen}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
