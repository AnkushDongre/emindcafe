import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/images/logo/emind-cafe-logo.jpg";
function CardCarousel() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    
 
    return (
      <div className="container pt-5">
        <Slider {...settings}>
          <div>
            <img src={logo} width={150} alt="Credit to Joshua Earle on Unsplash" />
          </div>
          <div>
            <img src={logo} width={150} alt="Credit to Alisa Anton on Unsplash" />
          </div>
          <div>
            <img src={logo} width={150} alt="Credit to Igor Ovsyannykov on Unsplash" />
          </div>
          <div>
            <img
              src={logo} width={150}
              alt="Credit to Pierre Châtel-Innocenti on Unsplash"
            />
          </div>
          <div> 
            <img src={logo} width={150} alt="Credit to Richard Nolan on Unsplash" />
          </div>
          <div>
            <img src={logo} width={150} alt="Credit to Cristina Gottardi on Unsplash" />
          </div>
        </Slider>
      </div>
    );
  }


export default CardCarousel;
