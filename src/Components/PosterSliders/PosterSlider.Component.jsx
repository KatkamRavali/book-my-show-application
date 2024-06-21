import React from "react";

// ---- Import Slider -----
import Slider from "react-slick";

// ---- Import Poster Component ------
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
  const { poster, title, subtitle, isDark, config } = props;
  const settings = {
    infinte: true,
    speed: 500,
    slidesToShow: 5,
    sildesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          sildesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          sildesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>

        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>

      {config && (
        <Slider {...config}>
          {poster.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
      {!config && (
        <Slider {...settings}>
          {poster.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default PosterSlider;
