import React, { Component } from "react";
import Slider from "react-slick";

import Img1Carrosel from "../../assets/firmbee-com-2mc2B5iX6as-unsplash.jpg";
import Img2Carrosel from "../../assets/indivar-kaushik-Fz7X8GSwBvY-unsplash.jpg";
import Img3Carrosel from "../../assets/maxim-ilyahov-0aRycsfH57A-unsplash.jpg";
import { CarroselContainer } from "./styles";

class Carrosel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };

    return (
      <CarroselContainer>
        <Slider {...settings}>
          <div>
            <img src={Img1Carrosel} alt="" />
          </div>
          <div>
            <img src={Img2Carrosel} alt="" />
          </div>
          <div>
            <img src={Img3Carrosel} alt="" />
          </div>
        </Slider>
      </CarroselContainer>
    );
  }
}

export default Carrosel;
