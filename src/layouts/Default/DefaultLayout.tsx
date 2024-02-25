import React, { ReactNode } from "react";
import style from "./Default.module.scss";
import NavBar from "@/components/Navbar/Navbar";
import CarouselComponent from "@/components/Carousel/Carousel";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <CarouselComponent />
      <div className={style.body}>{children}</div>
    </>
  );
};

export default DefaultLayout;
