import React, { ReactNode } from "react";
import style from "./Default.module.scss";
import NavBar from "@/components/Navbar/Navbar";
import CarouselComponent from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <CarouselComponent />
      <div className={style.body}>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
