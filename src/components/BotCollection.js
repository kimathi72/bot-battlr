import React, {useState, useEffect} from "react";
import BotCard from "./BotCard";
import Pagination from "./Pagination";

function BotCollection ({handleBot}){
    const [botCollection, setBotCollection] = useState ([]);
    const [loading, setLoading] = useState(false)
    const [currentPage,setCurrentPage] = useState(1);
    const [botsPerPage, setBotsPerPage] = useState(4);

    useEffect(() =>{
        // fetch("http://localhost:8001/bots/")
        // .then(response => response.json())
        // .then(data => setBotCollection(data) )
        const fetchBots = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:8001/bots/");
            const data = await response.json();
            setBotCollection(data)
            setLoading(false)             
        } 
        fetchBots();
    }, [])

    const indexOfLastBot = currentPage * botsPerPage;
    const indexOfFirstBot = indexOfLastBot - botsPerPage;
    const currentBots = botCollection.slice(indexOfFirstBot, indexOfLastBot);

    const botList = [];
    function callBackfn (prop){
        console.log(prop)
    
        handleBot(prop)
    }
 
    for(const bot of currentBots){
        botList.push(<BotCard key={bot.id} bot={bot} fn={callBackfn}/>)
        
    }
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
    return (<>
    <div id="botCollection" className="container">
        {botList}
        </div>
        <Pagination botsPerPage={botsPerPage} totalBots={botCollection.length} paginate={paginate}/>
        
    </>
        
    )

}
export default BotCollection;