import React, { ReactNode } from "react";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
