import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { Link } from "react-router-dom";

interface UserCardProps {
  user: 
        { id: number;
          name: string; 
          email: string; 
          address: { city: string } 
        };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="user-card">
      <h3 className="username">{user.name}</h3>
      <p className="email">Email: {user.email}</p>
      <p className="city">City: {user.address.city}</p>
      <button><Link to={`/edit-user/${user.id}`} className="edit-button">Edit</Link></button>
      <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
    </div>
  );
};

export default UserCard;
