import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Routes from './components/routes';

function App() {

  const [user, setUser] = useState('1234');

  useEffect(() => {
    console.log(`app.js useEffect: ${user}`);
  }, [user]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav user={user} />
        </header>
        <Routes user={user}>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
