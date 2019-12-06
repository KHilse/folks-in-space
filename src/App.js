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

  useEffect(() => {
    if (user) {
      // Fetch the people in space array from API and stuff it in a state var
      fetchAstronauts(handleAstronautsUpdate);

      // Set a timer to grab ISS location every few seconds
      // The cb of the timeout updates issLocationArray, which is a useEffect dependency
      // This means that every 5 seconds the API call result will trigger a re-render and
      // set a new timeout here
      setTimeout(() => {
        fetchIssLocation(handleIssLocationUpdate);
      }, 5000);
    }
  }, [user, issLocationArray]);

  const getUser = (userData) => {
    // See if a token exists, if so, update the user data
    let token = localStorage.getItem('googleToken');
    if (token) {
      if (!user) {
        setUser(userData);
      }
    } else {
      if (user) {
        setUser(null);
      }
    }
  }

  /** This is the callback sent to the fetchAstronauts() API handler */
  const handleAstronautsUpdate = (astronautsArray) => {
    setAstronauts(astronautsArray);
  }

  /** This is the callback sent to the fetchIssLocation() API handler */
  const handleIssLocationUpdate = (newIssLocation) => {
    let tempArr = [...issLocationArray];
    if (tempArr.length === MAX_ISS_LOCATIONS) {
      tempArr.shift(); // throw away extra values when the array is full
    }
    tempArr.push(newIssLocation);
    setIssLocationArray(tempArr);
  }

  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav user={user} updateUser={getUser} />
        </header>
        <Routes user={user} updateUser={getUser} astronauts={astronauts} issLocationArray={issLocationArray} >
        </Routes>
      </div>
    </Router>
  );
}

export default App;
