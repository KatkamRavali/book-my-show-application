import React, { useContext, useEffect, useState } from "react";

// ----- Import Movie Layout Page -------
import MovieHoc from "../Layouts/Movie.Hoc";

// -------- Import Params ---------
import { useParams } from "react-router-dom";

// ----- Import Axios -------
import axios from "axios";

// ---- Import Movie Context -----------
import { MovieContext } from "../Context/Movie.Context";

// -------- Import Slider -------------
import Slider from "react-slick";

// ------- Import React Icons -------
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// ------- Import Poster Slider -----------
import PosterSlider from "../Components/PosterSliders/PosterSlider.Component";

// ----- Import Movie Hero Page ------------
import MovieHero from "../Components/MovieHero/MovieHero.Component";

// ------- Import Cast Component -------
import Cast from "../Components/Cast/Cast.Component";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommandedMovies, setRecommandedMovies] = useState([]);

  // -------- Cast -----------
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  // ------ Similar Movies -------
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  // ------- Recommended Movies --------
  useEffect(() => {
    const requestRecommandedMovies = async () => {
      const getRecommandedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommandedMovies(getRecommandedMovies.data.results);
    };
    requestRecommandedMovies();
  }, [id]);

  // ------ Request Movie ----------
  useEffect(() => {
    const requestMovie = async () => {
      const getMovieDate = await axios.get(`/movie/${id}`);
      setMovie(getMovieDate.data);
    };
    requestMovie();
  }, [id]);

  const settingsCast = {
    infinte: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },
    ],
  };

  const settings = {
    infinte: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      {/*  ------------ Movie Hero [Image] -------- */}
      <MovieHero />

      {/* -------- About The Movie [Movie Details] ------- */}
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the Movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* -------- Offers --------- */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>

          {/* ----------- Visa Stream and Film Pass Offer ------ */}
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* ----- Visa Stream Offer  */}
            <div
              className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed 
                            border-2 rounded-md"
            >
              {/* ----- Icon ---- */}
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              {/* ---- Content ------ */}
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            {/* ---- Film Pass Offer ---- */}
            <div
              className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed 
                            border-2 rounded-md"
            >
              {/* ---- Icon ---- */}
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              {/* ---- Context ---- */}
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold"> Film Pass </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/*---------- Recommended Movie Sliders --------- */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            poster={recommandedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* ---------- Cast Slider -------- */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl md-4 py-5">
            Cast and Crew
          </h2>
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <PosterSlider
          config={settings}
          title="BMS XCLUSIVE Movies"
          poster={recommandedMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieHoc(MoviePage);
