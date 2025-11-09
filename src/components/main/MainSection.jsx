import PlayerCard from "./PlayerCard";
import { useEffect, useState } from "react"
export default function MainSection({addCard}) {
     const [players ,setPlayers] = useState([])
     const [showAvailable, setAvailable] = useState(true)
          useEffect(()=>{
            fetch('./player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
          },[])
    return (
        <>
            <div className="flex justify-between mb-10">
                <h3 className="text-2xl font-bold">Available Players</h3>
                <div className="rounded-2xl border border-gray-100">
                    <button onClick={()=>setAvailable(true)} className={` py-2 px-5 rounded-l-xl font-bold ${showAvailable? 'bg-amber-300':'hover:bg-amber-100'}`}>Available</button>
                    <button onClick={()=>setAvailable(false)} className={`py-2 px-5 rounded-r-xl font-bold ${!showAvailable ? 'bg-amber-300':'hover:bg-amber-100'}`}>Selected</button>
                </div>
            </div>
          {showAvailable ? (
             <div className="grid grid-cols-3 gap-5 mb-10 ">
            {players.map(player => <PlayerCard key={player.playerId} addCard={addCard} player={player}></PlayerCard>)}
           </div>
          ) : (
              <div className="p-2  rounded-xl text-center mb-5">
          <h3 className="text-xl font-semibold text-gray-600">
            Selected players 
          </h3>
        </div>
          )}
        </>
    )
}
