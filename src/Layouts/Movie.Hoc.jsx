import React from "react";

// ------ Import Movie Navigation Bar ---------
import MovieNavBar from "../Components/NavigationBar/MovieNavBar.Component";

const MovieHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavBar />
        <Component {...props} />
      </div>
    );
  };

export default MovieHoc;
