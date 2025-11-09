
export default function Banner({clamCoin}) {
  return (
    <div className=" bg-cover bg-center rounded-xl mb-10" style={{backgroundImage:"url('../../src/assets/images/banner-bg.png')"}}>
        <div className="p-20 flex flex-col items-center gap-5">
            <div><img src="../../src/assets/images/banner-main.png" alt="" /></div>
            <h1 className="text-2xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-xl text-white">Beyond Boundaries Beyond Limits</p>
           <div className="border border-amber-300 rounded-sm">
             <button onClick={clamCoin} className="font-bold border-4 border-gray-800 py-2 px-5 rounded-sm  bg-amber-300 cursor-pointer hover:text-xl">Claim Free Credit</button>
           </div>
        </div>

    </div>
  )
}
