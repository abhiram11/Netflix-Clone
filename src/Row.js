import React, { useState, useEffect } from 'react'
import axios from "./axios";
import requests from './requests';
//re-listen 29:10 of the tutorial!

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
    console.log(request); // to check the data structure that we get.
    return request;
}

fetchData();

}, [] )

    return (
        <div>
            <h2>{title}</h2>
            {/* it will have title (NF originals, trending, category, etc.) then have Container containing the bunch of posters */}
        </div>
    )
}

export default Row;