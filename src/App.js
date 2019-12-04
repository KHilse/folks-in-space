import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Nav from './components/nav';
import Routes from './components/routes';

import dotenv from 'dotenv';
dotenv.config();



function App() {

  // TODO: set default to null when auth is implemented
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(`app.js useEffect: ${user}`);
  }, [user]);

  const getUser = (userData) => {
    // See if a token exists, if so, update the user data
    let token = localStorage.getItem('serverToken');
    if (token) {
      setUser(userData);
    } else {
      setUser(null);
    }
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav user={user} updateUser={getUser} />
        </header>
        <Routes user={user} updateUser={getUser} >
        </Routes>
      </div>
    </Router>
  );
}

export default App;
