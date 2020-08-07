import React, { useState } from "react";
import MovieCard from "./MovieCard";

function Search() {
  //States
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  //API Calls
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=0de8b751cea5ca506ba89c89a36f9f80&query=${query}`;

    const res = await fetch(url);

    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((findData) => {
        setMovies(findData.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="search">
        <h2 className="title"> The Movie Search</h2>
        <h4 className="subTitle">Search for any of your favorite movies</h4>
        <form name="form" onSubmit={searchMovies}>
          <div className="search-bar">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="input"
              placeholder="Search Movie"
            />
            <button className="button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="cards-list">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            rating={movie.vote_average}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            description={movie.overview}
            id={movie.id}
          />
        ))}
      </div>
    </>
  );
}

export default Search;
