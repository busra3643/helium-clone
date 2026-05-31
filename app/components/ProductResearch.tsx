
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

          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}