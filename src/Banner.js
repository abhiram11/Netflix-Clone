import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]); //since refresh gives new movie

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //randomly select one from the titles
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  //truncate extra content by "last word..."

  function truncate(text, maxTolerateLen) {
    return text?.length > maxTolerateLen
      ? text.substr(0, maxTolerateLen - 1) + "..."
      : text;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {/* find edge cases below, replace GIANT IF ELSE Statements! ? is called optional chaining! */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" /> {/*make an invisible banner */}
      {/* header has bgImage, title, div > 2 buttons, descriptions */}
    </header>
  );
}

export default Banner;
