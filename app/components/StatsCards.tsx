export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-10">

      <div className="bg-[#1F2937] p-6 rounded-2xl">
        <p className="text-gray-400">Monthly Revenue</p>
        <h3 className="text-3xl font-bold mt-2">$48,320</h3>
      </div>

      <div className="bg-[#1F2937] p-6 rounded-2xl">
        <p className="text-gray-400">Products Tracked</p>
        <h3 className="text-3xl font-bold mt-2">1,284</h3>
      </div>

      <div className="bg-[#1F2937] p-6 rounded-2xl">
        <p className="text-gray-400">Competition Score</p>
        <h3 className="text-3xl font-bold mt-2">72/100</h3>
      </div>

    </div>
  );
}