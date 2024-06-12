import React from "react";
import MovieNavBar from "../Components/NavigationBar/MovieNavBar.Component";

const MovieHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavBar />
        <Component {...props} />
        <div> Footer Part </div>
      </div>
    );
  };

export default MovieHoc;
