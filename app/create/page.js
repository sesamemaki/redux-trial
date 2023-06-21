"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdd } from "../features/usersSlice/usersSlice";

const AddUser = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);

  const handleSubmit = () => {
    if (name && email) {
      dispatch(userAdd(name, email, phone));
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  const canSave = Boolean(name) && Boolean(email) && Boolean(phone);

  return (
    <div className="flex flex-col justify-items-center items-center">
      <form className="flex flex-col w-6/8 m-4 p-4 border border-orange-300 items-center justify-items-center  rounded-xl">
        <label>Name </label>
        <input
          className="border border-orange-300"
          type="text"
          value={name}
          onChange={onNameChange}
        />
        <label>Phone</label>
        <input
          className="border border-orange-300"
          value={phone}
          onChange={onPhoneChange}
        />
        <label>Email</label>
        <input
          className="border border-orange-300"
          type="test"
          value={email}
          onChange={onEmailChange}
        />
        <button
          onClick={handleSubmit}
          className=" w-2/5 rounded-full border-2 border-orange-300 mt-3 "
          disabled={!canSave}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
