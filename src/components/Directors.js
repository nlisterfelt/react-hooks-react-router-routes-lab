import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsJSX = directors.map(director=>{
    const movieLI = director.movies.map(movie=><li key={movie}>{movie}</li>)
    return (
      <div key={director.name}>
        <h3>
          {director.name}
        </h3>
        <ul>
          {movieLI}
        </ul>
      </div>)
    })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsJSX}
    </div>
  )
}

export default Directors;
