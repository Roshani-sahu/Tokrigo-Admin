

const heatmapData = [
  { day: "Mon", values: [1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2] },
  { day: "Tue", values: [2, 3, 4, 4, 3, 3, 2, 3, 4, 4, 3, 2] },
  { day: "Wed", values: [1, 2, 3, 3, 2, 2, 1, 2, 3, 3, 2, 1] },
  { day: "Thu", values: [2, 3, 4, 4, 4, 3, 2, 3, 4, 4, 3, 2] },
  { day: "Fri", values: [3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3] },
  { day: "Sat", values: [2, 3, 3, 4, 3, 3, 2, 3, 3, 4, 3, 2] },
  { day: "Sun", values: [1, 2, 2, 3, 2, 2, 1, 2, 2, 3, 2, 1] },
];

const intensityColor = (value: number) => {
  switch (value) {
    case 4:
      return "bg-green-600";
    case 3:
      return "bg-green-500";
    case 2:
      return "bg-green-300";
    default:
      return "bg-green-200";
  }
};

const BusyPeriodsHeatMap = () => {
  return (
   <div className="bg-white rounded-xl shadow-sm p-6">

  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-semibold text-[#585858] text-sm">
      Busy Periods
    </h2>

    {/* Legend */}
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span>Less</span>
      <div className="flex gap-1">
        <span className="w-3 h-3 rounded-sm bg-green-200" />
        <span className="w-3 h-3 rounded-sm bg-green-300" />
        <span className="w-3 h-3 rounded-sm bg-green-400" />
        <span className="w-3 h-3 rounded-sm bg-green-500" />
        <span className="w-3 h-3 rounded-sm bg-green-600" />
      </div>
      <span>High</span>
    </div>
  </div>

  {/* Subtext */}
  <p className="text-xs text-gray-500 mb-6">
    Highest activity:
    <span className="font-medium text-gray-700 ml-1">10AM–2PM</span>
    <span className="ml-3 text-green-600 font-medium">
      Avg daily shipment: 172 +3%
    </span>
  </p>

  {/* Heatmap */}
  <div className="space-y-4">
    {heatmapData.map((row) => (
      <div key={row.day} className="flex items-center gap-4">
        
        {/* Day label */}
        <span className="w-10 text-xs text-gray-500">
          {row.day}
        </span>

        {/* Cells */}
        <div className="grid grid-cols-12 gap-[25px]">
          {row.values.map((value, i) => (
            <div
              key={i}
              className={`w-[24px] h-[24px] rounded ${intensityColor(value)}`}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default BusyPeriodsHeatMap;