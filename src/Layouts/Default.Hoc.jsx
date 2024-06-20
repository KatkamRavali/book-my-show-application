import React from "react";

// --- Import Navigation Bar Component -----
import NavigationBar from "../Components/NavigationBar/Navigation.Component";

const DefaultHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavigationBar />
        <Component {...props} />
      </div>
    );
  };

export default DefaultHoc;
