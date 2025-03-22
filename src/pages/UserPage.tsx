import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/userSlice";
import { RootState, AppDispatch } from "../store/store";
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";
import "../index.css"; // Import global styles

const UserPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;

  return (
    <>
    <h1>Users</h1>
    <div>
      <p style={{textAlign: "center", fontSize: "1.5rem", marginBottom: "10px"}}>User List</p>
      <div>
        <button className="add-button">
        <Link to="/add-user" className="button">
          Add User
        </Link>
        </button>
      </div>
      <div className="container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
    </>
  );
};

export default UserPage;
