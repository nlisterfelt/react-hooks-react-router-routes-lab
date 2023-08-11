import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsJSX = actors.map(actor=>{
    const movieLI = actor.movies.map(movie=><li key={movie}>{movie}</li>)
    return (
      <div key={actor.name}>
        <h3>
          {actor.name}
        </h3>
        <ul>
          {movieLI}
        </ul>
      </div>)
    })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsJSX}
    </div>
  )
}

export default Actors;
