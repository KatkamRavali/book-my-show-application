import React, { useState, useContext } from "react";

// ----- Import Context ---------
import { MovieContext } from "../../Context/Movie.Context";

// ------- Import Payment Modal -------
import Payment from "../PaymentModal/Payment.Component";

const MovieInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(",");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };

  return (
    <>
      <Payment setIsOpen={setIsOpen} isOpen={isOpen} price={price} />

      <div className="flex flex-col gap-8">
        <h1 className="text-black text-5xl font-bold">
          {movie.original_title}
        </h1>

        <div className="text-black flex flex-col gap-2 font-bold text-1xl">
          <h4> 4.4k Rating </h4>
          <h4> Kannada , English , Hindi , Telugu , Tamil </h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>

        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button
            onClick={rentMovie}
            className="bg-red-500 py-3 text-white font-semibold rounded-lg"
          >
            Rent $149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-500 py-3 text-white font-semibold rounded-lg"
          >
            Buy $999
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInformation;
