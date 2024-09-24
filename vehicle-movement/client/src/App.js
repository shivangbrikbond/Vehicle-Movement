

import React from 'react';
import './App.css'; // Assuming you have some styles here
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vehicle Movement Tracker</h1>
      </header>
      <main>
        <MapComponent />
      </main>
    </div>
  );
}

export default App;
