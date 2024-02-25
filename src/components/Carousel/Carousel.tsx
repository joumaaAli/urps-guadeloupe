import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="w-100"
          src="https://www.urps.com.au/wp-content/uploads/2021/02/urps-new-logo-for-web-article.jpg"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://www.urps.com.au/wp-content/uploads/2021/02/urps-new-logo-for-web-article.jpg"
          className="w-100"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://www.urps.com.au/wp-content/uploads/2021/02/urps-new-logo-for-web-article.jpg"
          className="w-100"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
