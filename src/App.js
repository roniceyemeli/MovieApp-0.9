import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddMovie from "./components/addmovie/AddMovie";
import Filter from "./components/filter/Filter";
import MovieList from "./components/movielist/MovieList";
import { moviedata } from "./data";
import DescriptionTrailer from "./components/description_trailer/DescriptionTrailer";

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (note) => {
    setRate(note);
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist, newMovie]);
  };

  return (
    <div>
      <Router>
        <Filter
          handleChange={handleChange}
          title={title}
          ratingChanged={ratingChanged}
          rate={rate}
        />


        <Route
          path="/"
          exact
          render={() => (
            <MovieList
              movielist={movielist.filter(
                (movie) =>
                  movie.title.toUpperCase().includes(title.toUpperCase()) &&
                  movie.rate >= rate
              )}
            />
          )}
        />
        <Route
          path="/:id"
          exact
          render={(props) => (
            <DescriptionTrailer {...props} movielist={movielist} />
          )}
        />
        <AddMovie handleAdd={handleAdd} />
      </Router>
    </div>
  );
}
export default App;
