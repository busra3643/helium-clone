export default function ProductResearch() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        Product Research
      </h1>

      <p className="text-gray-400">
        Search Amazon product opportunities
      </p>

      <div className="bg-[#1F2937] rounded-2xl p-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter product keyword..."
            className="flex-1 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#1F2937] p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Portable Blender</h3>
          <p className="text-gray-400 mt-2">Revenue: $12,400</p>
          <p className="text-green-400">Competition: Low</p>
        </div>

        <div className="bg-[#1F2937] p-6 rounded-2xl">
          <h3 className="text-xl font-bold">LED Desk Lamp</h3>
          <p className="text-gray-400 mt-2">Revenue: $9,200</p>
          <p className="text-yellow-400">Competition: Medium</p>
        </div>

        <div className="bg-[#1F2937] p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Pet Hair Remover</h3>
          <p className="text-gray-400 mt-2">Revenue: $15,600</p>
          <p className="text-red-400">Competition: High</p>
        </div>
      </div>
    </div>
  );
}