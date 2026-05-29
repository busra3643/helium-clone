type ProductRowProps = {
  name: string;
  category: string;
  revenue: string;
  competition: string;
  competitionColor: string;
};

export default function ProductRow({
  name,
  category,
  revenue,
  competition,
  competitionColor,
}: ProductRowProps) {
  return (
    <tr className="border-b border-gray-800">
      <td className="py-4">{name}</td>
      <td>{category}</td>
      <td>{revenue}</td>
      <td className={competitionColor}>
        {competition}
      </td>
    </tr>
  );
}
