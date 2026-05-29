export default function Header() {
    return (
        <div className="flex items-center justify-between mb-10">
            <div>
                <h1 className="text-4x1 font-bold">Dashboard</h1>
                <p className="text-gray-400 mt-2">
                    Analyze Amazon opportunities
                </p>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-x1 font-medium transition">
                Upgrade
            </button>
        </div>
    );
}