import "./App.css";

// ------- React Slick Slides ---------
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ------- Import Router and Routes ----------
import { Routes, Route } from "react-router-dom";

// ------- Import Pages ------------
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";
import PlayPage from "./Pages/Play.Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/plays" element={<PlayPage />}></Route>
    </Routes>
  );
}

export default App;
