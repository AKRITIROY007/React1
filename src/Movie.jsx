import React from "react";

const Movie = (props) => {
  const { title, director, rating, poster } = props;
  return (
    <>
      <h1>{title}</h1>
      <h2>{director}</h2>
      <h3>{rating}</h3>
          <img src={poster} alt={title} width="200px" />
    </>
  );
};

export default Movie;
