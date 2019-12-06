import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { fetchAstronauts } from './controllers/astronauts_api';
import { fetchIssLocation} from './controllers/iss_location_api';
import { MAX_ISS_LOCATIONS } from './constants';

import Nav from './components/nav';
import Routes from './components/routes';

import dotenv from 'dotenv';
dotenv.config();


function App() {

  // TODO: set default to null when auth is implemented
  const [user, setUser] = useState(null);
  const [astronauts, setAstronauts] = useState(null);
  const [issLocationArray, setIssLocationArray] = useState([]);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    console.log(`app.js useEffect: ${user}`);

    if (user) {
      // Fetch the people in space array from API and stuff it in a state var
      // The state update will trigger a re-render of the UI
      fetchAstronauts(handleAstronautsUpdate);

      // Set an interval timer to grab ISS location every few seconds
      if (!timer) {
        setTimer(setInterval(() => {
          fetchIssLocation(handleIssLocationUpdate);
        }, 5000));  
      }
    }
  }, [user]);

  const getUser = (userData) => {
    // See if a token exists, if so, update the user data
    console.log(`getUser`)
    let token = localStorage.getItem('googleToken');
    if (token) {
      console.log(`token found`)
      if (!user) {
        setUser(userData);
      }
    } else {
      if (user) {
        console.log(`setting user to null`)
        setUser(null);
      }
    }
  }

  /** This is the callback sent to the fetchAstronauts() API handler */
  const handleAstronautsUpdate = (astronautsArray) => {
    setAstronauts(astronautsArray);
  }

  /** This is the callback sent to the fetchIssLocation() API handler */
  const handleIssLocationUpdate = (issLocation) => {
    let tempArr = [...issLocationArray];
    if (tempArr.length === MAX_ISS_LOCATIONS) {
      tempArr.shift(); // throw away extra values when the array is full
    }
    tempArr.push(issLocation);
    setIssLocationArray(tempArr);
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav user={user} updateUser={getUser} timer={timer} />
        </header>
        <Routes user={user} updateUser={getUser} astronauts={astronauts} issLocationArray={issLocationArray} >
        </Routes>
      </div>
    </Router>
  );
}

export default App;
