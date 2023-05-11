import React from "react";



function BotCard({bot, fn}){
  
   
 
function handleArmyBot (e){
  console.log(bot)
  console.log(e.target.parentNode.parentNode.parentNode)
  fn(bot)
}
  return(
    <article id={bot.id} onClick={handleArmyBot}  className="card">
      <div className="card-header">
        <img src={bot.avatar_url}/>
      </div>
      <div className="card-body">
        <h3 >{bot.name}</h3>
        <small>{bot.catchphrase}</small>
      </div>
      
      <div  className="card-footer">
        <span ><i className="fa fa-heartbeat"/>{bot.health}</span>
        <span ><i className="fa fa-bolt"/>{bot.damage}</span>
        <span ><i className="fa fa-shield"/>{bot.armor}</span>
      </div>
      </article>
    )
    


}
export default BotCard;