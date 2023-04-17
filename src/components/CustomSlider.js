import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
export default function CustomSlider(props) {
  const { type } = props
  console.log(type)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>

      <div>
        <img
          className="w-100 p-1"
          src={type === 'florist' ? '/images/listing/florist-1.jpg' : type === 'photographer' ? '/images/listing/photographer-1.jpg' : ""}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="w-100 p-1"
          src={type === 'florist' ? '/images/listing/florist-2.jpg' : type === 'photographer' ? '/images/listing/photographer-2.jpg' : ""}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="w-100 p-1"
          src={type === 'florist' ? '/images/listing/florist-3.jpg' : type === 'photographer' ? '/images/listing/photographer-3.jpg' : ""}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="w-100 p-1"
          src={type === 'florist' ? '/images/listing/florist-1.jpg' : type === 'photographer' ? '/images/listing/photographer-1.jpg' : ""}
          alt="First slide"
        />
      </div>

    </Slider>
  );
}