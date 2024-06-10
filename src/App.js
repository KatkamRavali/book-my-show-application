import "./App.css";

// ------- React Slick Slides ---------
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ------- Import Router and Routes ----------
// import { Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hellow this is my Book My Show Application
      </h1>
    </div>

    /**
     * <Router>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:id" element={<MoviePage />}></Route>
        <Route path="/plays" element={<PlayPage />}></Route>
      </Router>
     */
  );
}

export default App;
