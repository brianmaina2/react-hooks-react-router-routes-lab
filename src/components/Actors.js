import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}</div>;

  const actorData = actors.map((actor) => (
    <div key= {actor.name}>
      <h1>{actor.name}</h1>
      <ul>
        {actor.movies.map((movie) =>(
           <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return (
    <>
    <h1>Actors Page</h1>
    {actorData}
    </>

  )
}

export default Actors;
