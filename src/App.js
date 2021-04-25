import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/* make navigation/header and banner */}
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

/*

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


*/

/*

  const [login, setLogin] = useState("")

  const boolChoice = ["Yes", "No"]

  function checkUser(item) {
    if (item === "Yes"){
      setLogin("Welcome Abhiram!");
    }
    else {
      setLogin("Welcome non-Abhiram!");
    }
  }

  return (
    <div className="App">
      <h1> Hello! Are you Abhiram?</h1>
      <ul>
        { boolChoice.map((item) => {
          return (
            <li
            key={item}
            onClick = { () => checkUser(item) }
            style={{padding:"1rem"}}>
              {item}
            </li>
          )
        })
      }
      </ul>
      <div>
      {login}
      </div>
    </div>
  );
*/
