const StatCard = ({ title, value, icon }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-2">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );

  export default StatCard

