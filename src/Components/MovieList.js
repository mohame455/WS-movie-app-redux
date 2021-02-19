import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../js/action";
import MovieCard from "./MovieCard";
import { Button } from "react-bootstrap";
import AddMovie from "./AddMovie";
import { useState } from "react";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  const tabStar = useSelector((state) => state.starReducer.tabStar);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid">
      <div className="header">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {tabStar.map((star) => (
            <span
              className={star.isColored ? "gold" : "star"}
              key={star.id}
              onClick={() => dispatch(changeColor(star.id))}
            >
              {star.icon}
            </span>
          ))}
        </div>
        <Button variant="secondary" onClick={handleShow}>
          Add movie
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-around ml-4">
        {movies
          .filter((movie) => movie.title.toUpperCase().includes(search.toUpperCase()))
          .filter(
            (movie) =>
              movie.rate >= tabStar.filter((star) => star.isColored).length
          )
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </div>
      <AddMovie handleClose={handleClose} show={show} />
    </div>
  );
};

export default MovieList;
