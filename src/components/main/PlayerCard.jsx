
export default function PlayerCard(player) {
   const {playerId,name,country,image,role,battingType,bowlingType,biddingPrice} = player.player
    return (
        <>
            <div className="p-5 border border-gray-200 rounded-xl hover:bg-gray-200 ">
                <div ><img className="w-full h-[250px]" src={image} alt="" /></div>
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 pb-4">
                    <p className="text-gray-500 font-bold">{country}</p>
                    <p className="px-5 bg-gray-200 rounded-sm">{role}</p>
                </div>
                <div>
                    <h3 className="font-bold">Rating</h3>
                    <div>
                        <div className="flex justify-between mb-2 mt-2">
                            <p className="font-bold">{battingType}</p>
                            <p className="font-bold text-gray-400">{bowlingType}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Price:{biddingPrice}</p>
                            <button className="py-1 px-2 bg-gray-300 rounded-sm cursor-pointer font-bold hover:bg-amber-300">Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
