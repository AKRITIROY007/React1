import React from "react";
import Movie from "./Movie";

const MOVIELIST = () => {
  const movies = [
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      rating: "8.7",
      poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      rating: "8.8",
      poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      title: "Avengers Endgame",
      director: "Russo Brothers",
      rating: "8.4",
      poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },

    {
      title: "3 Idiots",
      director: "Rajkumar Hirani",
      rating: "8.4",
      poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    },

    {
      title: "Jawan",
      director: "Atlee",
      rating: "7.0",
      poster: "https://image.tmdb.org/t/p/w500/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
    },

    {
      title: "KGF Chapter 2",
      director: "Prashanth Neel",
      rating: "8.3",
      poster: "https://image.tmdb.org/t/p/w500/khNvH8gSpB9T7MqUUM2G8h7M2Je.jpg",
    },

    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      rating: "9.0",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },

    {
      title: "Dangal",
      director: "Nitesh Tiwari",
      rating: "8.3",
      poster: "https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hDDGwP4S6cH.jpg",
    },

    {
      title: "Pushpa",
      director: "Sukumar",
      rating: "7.6",
      poster: "https://image.tmdb.org/t/p/w500/u5r77WaI4WQxGed3G3QvSWZPBTL.jpg",
    },

    {
      title: "Bahubali",
      director: "S. S. Rajamouli",
      rating: "8.0",
      poster: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    },
  ];
  return (
    <>
      {movies.map((item, index) => (
        <Movie key={index} {...item} />
      ))}
    </>
  );
};

export default MOVIELIST;
