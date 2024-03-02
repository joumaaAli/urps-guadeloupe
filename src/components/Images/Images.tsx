import React from "react";
import Image from "next/image";
import Gallery1 from "../../utils/img/1.jpg";
import Gallery2 from "../../utils/img/6.jpg";
import Gallery3 from "../../utils/img/7.jpg";
import Gallery4 from "../../utils/img/4.jpg";
import Gallery5 from "../../utils/img/3.jpg";
import Gallery6 from "../../utils/img/2.jpg";

export function ImageGallery() {
  return (
    <div className="container py-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
        Nos actualités
      </h2>
      <div className="row">
        <div className="col-md-4 px-2">
          <div className="my-3">
            <Image src={Gallery1} className="img-fluid" alt="" />
          </div>
          <div className="my-3">
            <Image src={Gallery2} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <Image src={Gallery3} className="img-fluid" alt="" />
          </div>
          <div className="my-3">
            <Image src={Gallery4} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <Image src={Gallery5} className="img-fluid" alt="" />
          </div>
          <div className="my-3">
            <Image src={Gallery6} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
