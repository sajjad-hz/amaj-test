import React from "react";
import Button from "../utils/Button";
import exportIcon from '../components/assets/icons/Export.png'
import Image from "../components/assets/pictures/1.jpg";
import "./SliderCard.scss";

const SliderCard = () => {
  return (
    <div className="slider-card">
      <div
        className="slider-card__left"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className="slider-right">
        <div className="card-header">
          <span>23 feb, 2021</span>
          <span>Sold</span>
        </div>
        <div className="card-body">
          <div className="card-body__title">
            <span>First man</span>
            <span>Histoy</span>
          </div>
          <div className="card-body__text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              vel. Repellendus ex facere modi, officia suscipit doloribus quo
              exercitationem voluptatum quae quia voluptatem, facilis eveniet ad
              temporibus sit iusto, expedita officiis laudantium tempore error
              sed fugit quod similique porro. Maiores.
            </span>
          </div>
          <div className="card-body__footer">
            <span>Sold for</span>
            <span>299$</span>
          </div>
          <div className="card-btns">
            <Button size="btn-large">Make an Offer</Button>
            <img src={exportIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
