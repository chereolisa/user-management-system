import React from "react";
import UserForm from "../components/UserForm";
import "../index.css";

const AddUserPage: React.FC = () => {
  return (
    <>
    <h1>Add New User</h1>
    <p style={{textAlign: "center", fontSize: "1.5rem", marginBottom: "20px"}}>User Form</p>
    <div className="container">
      <UserForm />
    </div>
    </>
  );
};

export default AddUserPage;
