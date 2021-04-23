import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Row from './Row';
import requests from './requests';

function App() {

  return(
  <div className="App">
    <Row title ="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
  </div>);
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