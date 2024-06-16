import React from "react";

// ---- Import Link ------
import { Link } from "react-router-dom";

const Poster = (props) => {
  console.log(props);
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        {/* ----- Image Display ---- */}
        <div className="h-40 md:h-80">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="Poster"
            className="w-full h-full rounded-md"
          />
        </div>

        {/* ------ Title Display ----- */}
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
      </div>
    </Link>
  );
  // return <div>{props.original_title}</div>;
};

export default Poster;
