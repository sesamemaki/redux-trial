"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAllUsers,
  getUsersError,
  getUsersStatus,
  fetchUsers,
  userDelete,
} from "../features/usersSlice/usersSlice";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  let content;

  if (usersStatus === "loading") {
    <p>Loading...</p>;
  } else if (usersStatus === "succeeded") {
    content = (
      <div className="flex flex-col justify-items-center items-center mt-3">
        <table className="table-auto w-4/6">
          <thead>
            <tr>
              <th className="border border-orange-300">Name</th>
              <th className="border border-orange-300">Email</th>
              <th className="border border-orange-300">Phone</th>
              <th className="border border-orange-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="rounded-full border-2 border-orange-300 p-1 "
                    onClick={() => handleUserDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (usersStatus === "failed") {
    <p>{error}</p>;
  }

  const handleUserDelete = (userId) => {
    dispatch(userDelete(userId));
  };

  return <div>{content}</div>;
};

export default Users;
