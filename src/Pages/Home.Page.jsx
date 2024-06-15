import React, { useEffect, useState } from "react";

// ------ Import Axios -----
import axios from "axios";

// -------- Default Layout Page ---------
import DefaultHoc from "../Layouts/Default.Hoc";

// -------- Components ------------
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSliders/PosterSlider.Component";

const HomePage = () => {
  const [recommandedMovies, setRecommandedMovies] = useState([]);
  const [stream, setStream] = useState([]);
  const [premiere, setPremiere] = useState([]);

  //  -------- Recommended movies ---------
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        // "https://api.themoviedb.org/3/movie/top_rated?api_key=8e720c7c93d8a30423a89863d7a66e6c"
        "/movie/top_rated"
      );
      setRecommandedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  // -------- Premiere Movies ----------
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        // "https://api.themoviedb.org/3/movie/popular?api_key=8e720c7c93d8a30423a89863d7a66e6c"
        "/movie/popular"
      );
      setPremiere(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  //  -------- Stream Movies -------
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        // ------ [First Method] -------
        // "https://api.themoviedb.org/3/movie/upcoming?api_key=8e720c7c93d8a30423a89863d7a66e6c"
        "/movie/upcoming"
      );
      setStream(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      {/* ---------- HeroCarousel ---------- */}
      <HeroCarousel />

      {/* ------- Entertainment Card ------- */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      {/* ---------- Poster Sliders for Recommended Movies ------------ */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          poster={recommandedMovies}
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
            subtitle="Brand new premiere movies"
            poster={premiere}
            isDark={true}
          />
        </div>
      </div>

      {/* ---------- Poster Sliders for Online Streaming Events ------------ */}
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Streaming Events"
          poster={stream}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultHoc(HomePage);
