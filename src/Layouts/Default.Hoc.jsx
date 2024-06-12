import React from "react";
import NavigationBar from "../Components/NavigationBar/Navigation.Component";

const DefaultHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavigationBar />
        <Component {...props} />
        <div> Footer Part </div>
      </div>
    );
  };

export default DefaultHoc;
