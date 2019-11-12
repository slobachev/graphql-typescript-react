import React from 'react';
import './App.css';
import LaunchListContainer from './components/LaunchList';
import LaunchProfileContainer from './components/LaunchProfile';

const App = () => {
  return (
    <div className="App">
      <LaunchListContainer />
      <LaunchProfileContainer />
    </div>
  );
}

export default App;
