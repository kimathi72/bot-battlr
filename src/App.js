import React from 'react';
import logo from './logo.svg';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';


function App() {
  return (
    <div className="App">
      <YourBotArmy/>
      <BotCollection/>
    </div>
  );
}

export default App;
