import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserPage from "./pages/UserPage";  // Updated import
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserPage />} />  {/* Updated route */}
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/edit-user/:id" element={<EditUserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
