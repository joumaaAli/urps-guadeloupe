import { HandleLogout } from "@/services/userServices";
import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <h1>Admin Layout</h1>
      {children}
      <Button onClick={HandleLogout}>Log out</Button>
    </div>
  );
};

export default AdminLayout;
