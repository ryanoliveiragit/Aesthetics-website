import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgModel2 from '../../assets/modelo2.png'
import imgModel4 from '../../assets/Modelo4.png'
import imgModel3 from '../../assets/modelo3.png'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgModel4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Skin cleansing</h3>
          <p>A recurring care for your skin.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgModel3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Botulinum Toxin</h3>
          <p>Prevention of expression wrinkles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgModel2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Laser waxing</h3>
          <p>
          Painless and fast.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Slider;