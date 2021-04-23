import React, { useState, useEffect } from 'react'
import axios from "./axios";
import requests from './requests';
//re-listen 29:10 of the tutorial!

const baseUrl = "https://image.tmdb.org/t/p/original/";


function Row ( {title, fetchUrl} ) {

    
  const [movies, setMovies] = useState([]);
//when the row appears on screen, i make a PULL req to tmdb RIGHT when the row loads
//categories are based on the fetchURL
//so when row loads, we run this useEffect
  useEffect( () => {      
// if empty [], then run once when row loads, and never run again, if [abcd], then run once, then every time if abcd changes
  
//We cant make useEffect as async, so make a function inside useEffect and make it ASYNC!
        async function fetchData() {

            const request = await axios.get(fetchUrl);
            //basically appen+ding
            console.log(request.data.results); // to check the data structure that we get.
            setMovies(request.data.results);
            return request;
        }

    fetchData();

    }, [fetchUrl] ) // very very important!!!!!!!!!! if different url passed, so it wouldn't re-renders
    //fetchUrl is outside the block

    console.log(movies)
    // they are hori scrollables
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
                    ))}
            </div>

            {/* it will have title (NF originals, trending, category, etc.) then have Container containing the bunch of posters */}
        </div>
    )
}

export default Row;