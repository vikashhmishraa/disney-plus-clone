import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/slider-badging.jpg"  alt="badging" />
        </Wrap>
        <Wrap>
          <img src="/images/slider-badag.jpg"  alt="badag" />
        </Wrap>
        <Wrap>
          <img src="/images/slider-scale.jpg"  alt="scale" />
        </Wrap>
        <Wrap>
          <img src="/images/slider-scales.jpg"  alt="scales" />
        </Wrap>
      </Carousel>
    </>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  ui li button {
    margin-top: 51px;
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button::before {
    color: white;
  }

  button {
    z-index: 1;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    color: white;

    &:hover {
      border: 4px solid rgba(250, 250, 250, 0.8);
    }
  }
`;
