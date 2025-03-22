import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../store/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const users = useSelector((state: RootState) => state.users.users);
  
  const existingUser = users.find((user) => user.id === Number(id));

  const [name, setName] = useState(existingUser?.name || "");
  const [email, setEmail] = useState(existingUser?.email || "");
  const [city, setCity] = useState(existingUser?.address.city || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { id: existingUser ? existingUser.id : Date.now(), name, email, address: { city } };

    existingUser ? dispatch(updateUser(user)) : dispatch(addUser(user));
    
    navigate("/users");
  };

  return (
    <form className="add-new-user" onSubmit={handleSubmit}>
      <label>Name: </label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Users' Name" />
      <br />
      <label>Email: </label><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Users' Email" />
      <br />
      <label>City: </label><input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter Users' City" />
      <br />
      <button type="submit">{existingUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
