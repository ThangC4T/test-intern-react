import React from "react";
import Slider from "react-slick";

const SimpleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h2> Sample Slider </h2>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300" alt="slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;

// Thêm dòng này để biến file thành module
export {};
