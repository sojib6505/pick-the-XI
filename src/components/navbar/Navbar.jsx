
export default function Navbar() {
  return (
     <>
      <div className="flex justify-between items-center py-5">
        <div>
            <img src="../../src/assets/images/logo.png" alt="logo.png" />
        </div>
        <div className="flex gap-10 items-center">
            <ul className="flex gap-10 text-xl font-bold">
                <li><a href="#">Home</a></li>
                <li><a href="#">Fixture</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Schedules</a></li>
            </ul>
            <div className="font-bold text-xl py-1 px-4 border border-gray-200 rounded-sm">
                <p>Coin</p>
            </div>
        </div>
      </div>
     </>
  )
}
