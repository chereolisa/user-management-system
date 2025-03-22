import React from "react";
import UserForm from "../components/UserForm";
import "../index.css"; // Import global styles

const EditUserPage: React.FC = () => {
  return (
    <>
      <h1>Edit User</h1>
      <p style={{textAlign: "center", fontSize: "1.5rem", marginBottom: "20px"}}>Edit User Details</p>
      <div className="container">
        <UserForm />
      </div>
    </>
  );
};

export default EditUserPage;
