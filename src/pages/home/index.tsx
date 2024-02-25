import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ImageGallery } from "@/components/Images/Images";
import { Reviews } from "@/components/Reviews/Reviews";
import About from "@/components/About/About";
import Welcome from "@/components/Welcome/Welcome";

const HomePage = () => {
  return (
    <div className="w-100 d-flex py-2 flex-column align-items-center">
      <Welcome />
      <About />
      <ImageGallery />
      <Reviews />
    </div>
  );
};

export default HomePage;
