import React, { Component } from "react";
import Slider from "../src/slider";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class EventsBehaviour extends Component {
  render() {
    const settings = {
      speedP: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      infinite: true,
      swipeToSlide: true,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2> EventsBehaviour </h2>
        <Slider {...settings}>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
          <div className="block_slide">
            <a href={"//www.google.com"} draggable={false}>
              <img src="http://via.placeholder.com/270x300"></img>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
