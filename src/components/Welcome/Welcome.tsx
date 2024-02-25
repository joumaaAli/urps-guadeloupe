import React from "react";
import style from "./Welcome.module.scss";
import AboutImg from "../../utils/img/about-img.jpg";
import { ContactInfo } from "../Contact/ContactInfo";
import ContactImage from "../../utils/img/contact-img.jpg";
import Image from "next/image";

function Welcome() {
  return (
    <div className="home-page">
      <header
        className={`${style["header-class"]} h-100 min-vh-100 d-flex align-items-center text-light shad`}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="mb-0 text-black fw-bold">Welcome To</h2>
              <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                React Restaurant
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <Image
              src={AboutImg}
              className="image img-fluid w-50"
              alt="about img"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident voluptate aut dolore ullam quasi numquam quod molestias
              cum officiis perspiciatis?
            </p>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni
              animi tenetur eaque vel accusamus placeat quaerat ad. Similique
              quaerat qui doloribus assumenda deserunt tenetur quas suscipit
              officiis quod sequi?
            </p>
            <button type="button" className="btn btn-outline-success btn-lg">
              More About Us
            </button>
          </div>
        </div>
      </div>

      <div className={`${style["menu-section"]} py-5 text-light shadow`}>
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favorites</h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Food</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">English Breakfast</p>
                  <p className="fs-3 mx-2 text-success fw-nold">£12</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Spicy Beef</p>
                  <p className="fs-3 mx-2 text-success fw-nold">£15</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Saghetti Bolognese</p>
                  <p className="fs-3 mx-2 text-success fw-nold">£11</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Drinks</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Coffee</p>
                  <p className="fs-3 mx-2 text-success fw-nold">£2</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Juice</p>
                  <p className="fs-3 mx-2 text-success fw-nold">£1</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Spirits</p>
                  <p className="fs-3 mx-2 text-success fw-nold">£5</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <Image
                src={ContactImage}
                className=" image img-fluid w-50"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
