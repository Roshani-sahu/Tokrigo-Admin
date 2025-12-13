interface Props {
  title: string;
  value: string;
  trend?: string;
}

const StatCard = ({ title, value, trend }: Props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
      {trend && (
        <p className="text-green-600 text-xs mt-1">{trend}</p>
      )}
    </div>
  );
};

export default StatCard;
