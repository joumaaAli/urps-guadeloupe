import React, { ReactNode } from "react";
import style from "./Auth.module.scss";

const AuthLayout = ({ children }) => {
  return <div className={style["main"]}>{children}</div>;
};

export default AuthLayout;
