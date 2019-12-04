import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './components/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
