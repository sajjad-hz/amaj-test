import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SliderCard from './SliderCard';
import "./slider.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1 = [];
  let slider2 = [];

  const news = [
    "2 July 1969",
    "8 July 1969",
    "9 July 1969",
    "12 July 1969",
    "14 July 1969",
    "20 July 1969",
  ];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <div className='carousel'>
      <Slider
        className="first-slider"
        asNavFor={nav1}
        ref={(slider) => (slider2 = slider)}
        centerMode={true}
        slidesToShow={2}
        swipeToSlide={true}
        focusOnSelect={true}
        vertical={true}
        arrows={false}
      >
        {news.map((item, index) => (
          <div key={index} className="slider-scroll">
            <span className="slider-title">{item}</span>
          </div>
        ))}
      </Slider>

      <Slider
        className="second-slider"
        asNavFor={nav2}
        centerMode={true}
        fade={true}
        arrows={false}

        ref={(slider) => (slider1 = slider)}
      >
        <div>
          <SliderCard/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
