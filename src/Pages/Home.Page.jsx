import React, { useState } from "react";

// -------- Default Layout Page ---------
import DefaultHoc from "../Layouts/Default.Hoc";

// -------- Components ------------
import EntertainmentCardComponent from "../Components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSliders/PosterSlider.Component";

const HomePage = () => {
  const [recommandedMovies, setRecommandedMovies] = useState([]);
  const [stream, setStream] = useState([]);
  const [premiere, setPremiere] = useState([]);

  return (
    <>
      {/* ---------- HeroCarousel ---------- */}
      <HeroCarousel />

      {/* ------- Entertainment Card ------- */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>

      {/* ---------- Poster Sliders for Recommended Movies ------------ */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subject="List of Recommended Movies"
          posters={recommandedMovies}
          isDark={false}
        />
      </div>

      {/* ---------- Poster Sliders for Premiere Movies ------------ */}
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="Rupay" className="w-full h-full" />
          </div>
          <PosterSlider
            title="Premiere Movies"
            subject="Brand new premiere movies"
            posters={premiere}
            isDark={true}
          />
        </div>
      </div>

      {/* ---------- Poster Sliders for Online Streaming Events ------------ */}
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          subject="Online Streaming Events"
          posters={stream}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultHoc(HomePage);
