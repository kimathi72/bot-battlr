import React, {useState}  from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './Style.css'


function App() {
  const [botsArmy, setBotsArmyList] = useState([]);
  function addBotToArmy(props){
    console.log(props)
    
    setBotsArmyList([...botsArmy, props])

    
    
  }
  return (
    <>
      <YourBotArmy botsArmy = {botsArmy}/>
      <BotCollection handleBot = {addBotToArmy}/>
    </>
  );
}

export default App;
