import React from "react";

type HeatmapRow = {
  day: string;
  values: number[];
};

const heatmapData: HeatmapRow[] = [
  { day: "Mon", values: [2, 3, 4, 4, 5, 5, 5, 4, 5, 3, 5, 5, 5, 4, 3] },
  { day: "Tue", values: [3, 3, 3, 4, 5, 5, 5, 2, 5, 4, 3, 5, 4, 3, 3] },
  { day: "Wed", values: [3, 3, 4, 4, 5, 5, 5, 4, 5, 4, 5, 5, 5, 3, 4] },
  { day: "Thu", values: [3, 3, 3, 4, 4, 5, 5, 4, 5, 3, 3, 4, 3, 4, 5] },
  { day: "Fri", values: [2, 3, 4, 4, 5, 5, 4, 4, 4, 5, 3, 4, 4, 5, 4] },
  { day: "Sat", values: [2, 2, 3, 3, 4, 4, 4, 5, 4, 3, 4, 4, 4, 4, 5] },
  { day: "Sun", values: [2, 2, 2, 3, 4, 4, 4, 2, 4, 3, 4, 5, 4, 4, 3] },
];

const hours = [
  "06", "07", "08", "09", "10", "11", "12",
  "13", "14", "15", "16", "17", "18", "19", "20"
];

const intensityColor = (value: number): string => {
  switch (value) {
    case 5:
      return "bg-green-600";
    case 4:
      return "bg-green-500";
    case 3:
      return "bg-green-400";
    case 2:
      return "bg-green-300";
    default:
      return "bg-green-200";
  }
};

const BusyPeriodsHeatMap: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-heading">
          Busy Periods
        </h2>

        {/* Legend */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="w-5 h-5 rounded bg-green-200" />
            <span className="w-5 h-5 rounded bg-green-300" />
            <span className="w-5 h-5 rounded bg-green-400" />
            <span className="w-5 h-5 rounded bg-green-500" />
            <span className="w-5 h-5 rounded bg-green-600" />
          </div>
          <span>High</span>
        </div>
      </div>

      {/* Sub Header */}
      <div className="flex items-center gap-8 mb-6 text-sm">
        <p className="text-gray-500">
          Highest activity:
          <span className="ml-1 font-semibold text-gray-700">
            10AM–2PM
          </span>
        </p>

        <p className="text-gray-500">
          Average daily shipment:
          <span className="ml-1 font-semibold text-gray-700">
            172
          </span>
          <span className="ml-2 text-green-600 font-semibold">
            +3% ↗
          </span>
        </p>
      </div>

      {/* Heatmap */}
      <div className="space-y-5 overflow-x-scroll">
        {heatmapData.map((row) => (
          <div key={row.day} className="flex items-center gap-5 md:gap-6">
            
            {/* Day label */}
            <span className="w-4 md:w-10 text-sm text-gray-600">
              {row.day}
            </span>

            {/* Cells */}
<div
  className="grid gap-3 "
  style={{ gridTemplateColumns: "repeat(15, 20px)" }}
>              {row.values.map((value, index) => (
                <div
                  key={index}
                  className={`w-7 h-7  rounded ${intensityColor(value)}`}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Hours row */}
        <div className="flex gap-4 md:gap-2 mt-3 ml-10 md:ml-16">
          {hours.map((hour) => (
            <span
              key={hour}
              className="w-6 text-center text-sm text-gray-500"
            >
              {hour}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BusyPeriodsHeatMap;
