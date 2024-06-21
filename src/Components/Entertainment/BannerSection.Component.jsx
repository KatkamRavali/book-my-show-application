import React from "react";

// ------ Import Sliders -------
import Slider from "react-slick";

const BannerCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="Entertainment"
        />
      </div>
    </>
  );
};

const BannerCardSlider = () => {
  const BannerSectionImages = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1717053132740_aparnaci1240x300.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1717752202310_webcomdeycampaig.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg",
  ];

  const setting = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...setting}>
        {BannerSectionImages.map((image, index) => (
          <BannerCard src={image} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default BannerCardSlider;
