
export default function TopSection() {
  return (
    <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Available Players</h3>
        <div className="rounded-2xl border border-gray-100">
            <button className="py-2 px-5 hover:bg-amber-300 rounded-l-xl font-bold">Available</button>
            <button className="py-2 px-5 hover:bg-amber-300 rounded-r-xl font-bold">Selected</button>
        </div>
    </div>
  )
}
