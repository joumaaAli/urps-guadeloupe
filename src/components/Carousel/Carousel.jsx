import Carousel from "react-bootstrap/Carousel";
import HeaderImage from "@/utils/img/prem_image_slider_bis.jpg";
import HeaderImage2 from "@/utils/img/deux_image_slider_bis.jpg";
import HeaderImage3 from "@/utils/img/trois_image_slider_bis.jpg";
import Image from "next/image";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={HeaderImage}
          alt="Facebook Cover Image"
        />
        <Carousel.Caption className="h-100 w-100 px-0 d-flex flex-column align-items-start justify-content-start">
          <h3
            style={{
              fontSize: "60px",
              color: "#ff8c69",
              whiteSpace: "nowrap",
              margin: "0",
            }}
          >
            Titre sur la <br></br>première photo
          </h3>
          <p>Texte éventuel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={HeaderImage2}
          alt="Facebook Cover Image"
        />
        <Carousel.Caption className="h-100 w-100 px-0 d-flex flex-column align-items-start justify-content-start">
          <h3
            style={{
              fontSize: "60px",
              color: "#001f3f",
              whiteSpace: "nowrap",
              margin: "0",
              font: "Montserrat",
            }}
          >
            Titre sur la <br></br>deuxième photo
          </h3>
          <p>Texte éventuel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={HeaderImage3}
          alt="Facebook Cover Image"
        />
        <Carousel.Caption className="h-100 w-100 px-0 d-flex flex-column align-items-start justify-content-start">
          <h3
            style={{
              fontSize: "60px",
              color: "gray",
              whiteSpace: "nowrap",
              margin: "0",
            }}
          >
            Titre sur la <br></br>troisième photo
          </h3>
          <p>Texte qu'ils veulent écrire ici.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
