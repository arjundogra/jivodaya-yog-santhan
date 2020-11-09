import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
  return (
    <div className="gallery">
      <Carousel className="carousel">
        <Carousel.Item interval={2000}>
          <img
            className="w-100"
            src="https://cdn.pixabay.com/photo/2017/08/02/11/44/sun-2571158_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/11/30/21/07/sunrise-3848628_1280.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/07/17/15/41/silhouette-2512805_1280.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div class="galleryImages" id="gallery">
        <div class="mb-3 pics animation all 2">
          <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
              alt="Card image cap"
            />
          </a>
        </div>

        <div class="mb-3 pics animation all 1">
          <a href="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
              alt="Card image cap"
            />
          </a>
        </div>

        <div class="mb-3 pics animation all 1">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
            alt="Card image cap"
          />
        </div>

        <div class="mb-3 pics animation all 2">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
            alt="Card image cap"
          />
        </div>

        <div class="mb-3 pics animation all 2">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
            alt="Card image cap"
          />
        </div>

        <div class="mb-3 pics animation all 1">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
