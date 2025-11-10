import AddPlayer from "./AddPlayer";


export default function AddToCard({addCardPlayer, delPlayer}) {
  return (
    <>
     <div>
       {addCardPlayer.map((player,idx) => <AddPlayer key={idx} player={player} delPlayer={delPlayer}></AddPlayer>)}
       <button className="py-3 px-5 font-bold bg-amber-300 rounded-xl">Add More</button>
     </div>

    </>
  )
}
