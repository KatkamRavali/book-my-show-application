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

// ----- Import Axios [Second Method]---------
import axios from "axios";

// ----- [Second Method]---------
/*
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "8e720c7c93d8a30423a89863d7a66e6c";
*/

// ------ [Third Method] --------
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
