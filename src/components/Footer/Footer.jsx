import { ContactInfo } from "../Contact/ContactInfo";

function Footer() {
  return (
    <div className="bg-dark text-light py-5 shadow">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex justify-content-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
