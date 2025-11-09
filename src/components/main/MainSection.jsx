import PlayerCard from "./PlayerCard";
import { useEffect, useState } from "react"
export default function MainSection() {
     const [players ,setPlayers] = useState([])
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
                    <button className="py-2 px-5 hover:bg-amber-300 rounded-l-xl font-bold">Available</button>
                    <button className="py-2 px-5 hover:bg-amber-300 rounded-r-xl font-bold">Selected</button>
                </div>
            </div>
           <div className="grid grid-cols-3 gap-5 mb-10">
            {players.map(player => <PlayerCard key={player.playerId} player={player}></PlayerCard>)}
           </div>
        </>
    )
}
