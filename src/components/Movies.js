import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesJSX = movies.map(movie=>{
    const genreLI = movie.genres.map(genre=><li key={genre}>{genre}</li>)
    return (
      <div key={movie.title}>
        <h3>
          {movie.title}
        </h3>
        <p>time: {movie.time}</p>
        <ul>
          {genreLI}
        </ul>
      </div>)
    })
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesJSX}
    </div>
  )
}

export default Movies;
