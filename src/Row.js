import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import requests from "./requests";
//re-listen 29:10, 54:40 of the tutorial!
// very important isLArgeRo!!!!!!!!!!
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //when the row appears on screen, i make a PULL req to tmdb RIGHT when the row loads
  //categories are based on the fetchURL
  //so when row loads, we run this useEffect
  useEffect(() => {
    // if empty [], then run once when row loads, and never run again, if [abcd], then run once, then every time if abcd changes

    //We cant make useEffect as async, so make a function inside useEffect and make it ASYNC!
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //basically appen+ding
      //   console.log(request.data.results); // to check the data structure that we get.
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]); // very very important!!!!!!!!!! if different url passed, so it wouldn't re-renders
  //fetchUrl is outside the block

  console.log(movies);
  // they are hori scrollables

  //Adding youtube popups for trailers
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //,
      autoplay: 1, //this will play the video as soon as we click the poster and the popup is shown
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <YouTube id="v8bZVdTgXoY" opts={opts} />
      {/* it will have title (NF originals, trending, category, etc.) then have Container containing the bunch of posters */}
    </div>
  );
}

export default Row;
