import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import requests from "./requests";
//re-listen 29:10, 54:40 of the tutorial!
// very important isLArgeRo!!!!!!!!!!
import "./Row.css";
import movieTrailer from "movie-trailer";

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

  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    console.log("Enter popup click: Movie :", movie);
    if (trailerUrl) {
      setTrailerUrl("");
      console.log("Popup closed");
    } else {
      movieTrailer(movie?.original_title || "") //if name given, the module will automatically search for trailer on youtube, THEN we get a URL as added .then below
        .then((url) => {
          //https://www.youtube.com/watch?v=D6TtASxc6d4
          // basically using something similar to REGEX below
          console.log(
            "movie name:",
            movie?.original_title || "",
            "and url found:",
            url
          );
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(`Error caught!!!!! :`, error));
      console.log("Popup opened");
    }
  };

  //Adding youtube popups for trailers
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://www.youtube.com/watch?v=D6TtASxc6d4,
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
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* if we have trailer url then only show the video*/}
      {/* it will have title (NF originals, trending, category, etc.) then have Container containing the bunch of posters */}
    </div>
  );
}

export default Row;
