
export default function AddPlayer({ player ,delPlayer }) {
    console.log(typeof(delPlayer))
    const { playerId, name, country, image, role, battingType, bowlingType, biddingPrice } = player
    return (
        <div className="flex justify-between items-center mb-5 py-2 px-5 border border-gray-300 rounded-xl">
            <div className="flex gap-10 ">
                <div><img className="w-20 rounded-xl" src={image} alt="" /></div>
                <div>
                    <h4 className="text-xl font-bold">{name}</h4>
                    <p className="text-gray-400 font-bold">{role}</p>
                </div>
            </div>
            <div>
               <button onClick={()=>delPlayer(player)} className="text-red-400 text-xl font-bold cursor-pointer">Delete</button>
            </div>
        </div>
    )
}
