import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";


function YourBotArmy ({botsArmy}){
    console.log(botsArmy)
   const botsArmyList = []
   const newArray = [];
   for (const bot of botsArmy){   
    botsArmyList.push(<BotCard key={bot.id} bot={bot} />)
    }

   
    return (
        <div className="bots container">
            <h3>Your Bot Army</h3>
            <div className="armyBots container-fluid">
            {botsArmyList}
            </div>
            
        </div>
        
    )
    

    // const [botsArmy, setBotsArmy] = useState([])
    // setBotsArmy([...botsArmy, bot])
    // const botsarmyList = [];
    // for (const botSoilder of botsArmy ){
    //     botsarmyList.push(<BotCard bot={botSoilder}/>)
    // }
    // return(
    //     <div id="yourBotArmy">
    //         {botsarmyList}
    //     </div>

    // )

}
export default YourBotArmy;