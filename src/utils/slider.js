import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";

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

  const data = [
    {
      img: "https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "First title",
    },
    {
      img: "https://images.unsplash.com/photo-1627660692856-bc032e058cc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Second title",
    },
    {
      img: "https://images.unsplash.com/photo-1627492945203-7813d8502706?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Third title",
    },
    {
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      title: "Fourth title",
    },
    {
      img: "https://images.unsplash.com/photo-1627903460997-527ec3c1467d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Fifth title",
    },
    {
      img: "https://images.unsplash.com/photo-1627838879686-cad0b36e8344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      title: "Sixth title",
    },
  ];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <div className="carousel">
      <Slider
        className="first-slider"
        asNavFor={nav1}
        ref={(slider) => (slider2 = slider)}
        centerMode={true}
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        vertical={true}
        arrows={false}
        swipe={false}
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
        slidesToShow={1}
        centerMode={true}
        vertical={true}
        fade={true}
        arrows={false}
        swipe={false}
        ref={(slider) => (slider1 = slider)}
      >
        {data.map((item, inx)=>(
                  <div key={inx}>
                  <SliderCard title={item.title} img={item.img} />
                </div>
        ))}
        
      </Slider>
    </div>
  );
};

export default Carousel;
