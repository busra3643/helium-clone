import ProductRow from "./ProductRow";

const products = [
  {
    name: "Portable Blender",
    category: "Kitchen",
    revenue: "$12,400",
    competition: "Low",
    competitionColor: "text-green-400",
  },

  {
    name: "LED Desk Lamp",
    category: "Home",
    revenue: "$9,200",
    competition: "Medium",
    competitionColor: "text-yellow-400",
  },

  {
    name: "Pet Hair Remover",
    category: "Pets",
    revenue: "$15,600",
    competition: "High",
    competitionColor: "text-red-400",
  },
];

export default function ProductsTable() {
  return (
    <div className="bg-[#1F2937] rounded-2xl p-6">
      <h3 className="text-2xl font-bold mb-6">
        Trending Products
      </h3>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="pb-4">Product</th>
            <th className="pb-4">Category</th>
            <th className="pb-4">Revenue</th>
            <th className="pb-4">Competition</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.name}
              name={product.name}
              category={product.category}
              revenue={product.revenue}
              competition={product.competition}
              competitionColor={product.competitionColor}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}