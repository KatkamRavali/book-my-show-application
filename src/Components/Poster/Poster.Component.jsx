import React from "react";

// ---- Import Link ------
import { Link } from "react-router-dom";

// ------ Movie Poster -------
const MoviePoster = (props) => {
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

// ------ Play Poster [Anaganaga]-------
const PlayPoster = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/anaganaga/ET00371711"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
  // return <div>{props.original_title}</div>;
};

// ------ Play Poster [Open Mic -Poetry, Storytelling]-------
const PlayPoster1 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/open-mic-poetry-storytelling/ET00398746"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
  // return <div>{props.original_title}</div>;
};

// ------ Play Poster [Milli]-------
const PlayPoster2 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/milli/ET00401390"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
  // return <div>{props.original_title}</div>;
};

// ------ Play Poster [Parboni 2024- 'Natyotsav']-------
const PlayPoster3 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/praboni-2024-natyotsav/ET00399129"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// ------ Play Poster [REFUND & MUNDADUGU by Samahaara]-------
const PlayPoster4 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/refund-mundadugu-by-samahaara/ET00401864"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// --------- Play Poster [Middle Class Melodies] -----------
const PlayPoster5 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/middle-class-melodies/ET00402007"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// --------- Play Poster [Olakhlat Ka Sir?] -----------
const PlayPoster6 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/olakhlat-ka-sir/ET00402036"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// --------- Play Poster [Ajaramaram - Telugu Play] -----------
const PlayPoster7 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/ajaramaram-telugu-play/ET00401995"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// --------- Play Poster [EK KAHANI SUNOGE] -----------
const PlayPoster8 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/ek-kahani-sunoge/ET00401524"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// --------- Play Poster [Udhaar Ka Pati] -----------
const PlayPoster9 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/marnoparant-and-toba-tek-singh/ET00402026"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// --------- Play Poster [Marnoparant and Toba tek Singh] -----------
const PlayPoster10 = (props) => {
  return (
    <div>
      <a
        href="https://in.bookmyshow.com/plays/marnoparant-and-toba-tek-singh/ET00402026"
        target="_self"
        rel="noreferrer"
      >
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          {/* ----- Image Display ---- */}
          <div className="w-full h-full">
            <img
              src={props.src}
              alt="Poster"
              className="w-full h-full rounded-md object-cover object-center"
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
      </a>
    </div>
  );
};

// ----- Poster -----
const Poster = (props) => {
  if (props.isPlay) {
    return <PlayPoster {...props} />;
  } else if (props.isPlay1) {
    return <PlayPoster1 {...props} />;
  } else if (props.isPlay2) {
    return <PlayPoster2 {...props} />;
  } else if (props.isPlay3) {
    return <PlayPoster3 {...props} />;
  } else if (props.isPlay4) {
    return <PlayPoster4 {...props} />;
  } else if (props.isPlay5) {
    return <PlayPoster5 {...props} />;
  } else if (props.isPlay6) {
    return <PlayPoster6 {...props} />;
  } else if (props.isPlay7) {
    return <PlayPoster7 {...props} />;
  } else if (props.isPlay8) {
    return <PlayPoster8 {...props} />;
  } else if (props.isPlay9) {
    return <PlayPoster9 {...props} />;
  } else if (props.isPlay10) {
    return <PlayPoster10 {...props} />;
  } else {
    return <MoviePoster {...props} />;
  }
};

export default Poster;
