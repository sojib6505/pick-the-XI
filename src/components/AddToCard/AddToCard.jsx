import AddPlayer from "./AddPlayer";


export default function AddToCard({addCardPlayer,}) {
  return (
    <>
     <div>
       {addCardPlayer.map((player,idx) => <AddPlayer key={idx} player={player}></AddPlayer>)}
       <button className="py-3 px-5 font-bold bg-amber-300 rounded-xl">Add More</button>
     </div>

    </>
  )
}
