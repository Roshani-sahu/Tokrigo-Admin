import React, { useMemo } from "react";

type DailyActivity = {
  date: string;
  count: number;
};

interface BusyPeriodsHeatMapProps {
  data?: DailyActivity[];
  title?: string;
  showStats?: boolean;
}

const generateStaticData = (): DailyActivity[] => {
  const data: DailyActivity[] = [];
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);

  let currentDate = new Date(startOfYear);
  while (currentDate.getFullYear() === today.getFullYear() && currentDate <= today) {
    data.push({
      date: currentDate.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 5) + 1,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

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

const BusyPeriodsHeatMap: React.FC<BusyPeriodsHeatMapProps> = ({
  data = generateStaticData(),
  title = "Busy Periods",
  showStats = true,
}) => {
  const scrollbarStyleId = "heatmap-scrollbar-style";

  React.useEffect(() => {
    if (!document.getElementById(scrollbarStyleId)) {
      const style = document.createElement("style");
      style.id = scrollbarStyleId;
      style.textContent = `
        .heatmap-scroll::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .heatmap-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .heatmap-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .heatmap-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const { weeks, stats, monthLabels } = useMemo(() => {
    const activityMap = new Map<string, number>();
    data.forEach((item) => {
      activityMap.set(item.date, item.count);
    });

    const today = new Date();
    const year = today.getFullYear();
    const startOfYear = new Date(year, 0, 1);

    const weeks: (DailyActivity | null)[][][] = [];
    let currentWeek: (DailyActivity | null)[][] = [[], [], [], [], [], [], []];
    let currentDate = new Date(startOfYear);
    const monthLabels: Array<{ month: string; weekIndex: number }> = [];
    let lastMonth = -1;

    while (currentDate.getFullYear() === year) {
      const dayOfWeek = currentDate.getDay();
      const dateStr = currentDate.toISOString().split("T")[0];
      const count = activityMap.get(dateStr) || 0;
      const currentMonth = currentDate.getMonth();

      if (currentMonth !== lastMonth) {
        monthLabels.push({
          month: currentDate.toLocaleDateString("en-US", { month: "short" }),
          weekIndex: weeks.length,
        });
        lastMonth = currentMonth;
      }

      currentWeek[dayOfWeek].push({
        date: dateStr,
        count,
      });

      if (dayOfWeek === 6) {
        weeks.push(currentWeek);
        currentWeek = [[], [], [], [], [], [], []];
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.some((day) => day.length > 0)) {
      weeks.push(currentWeek);
    }

    const totalActivity = data.reduce((sum, item) => sum + item.count, 0);
    const avgActivity = Math.round(totalActivity / data.length);
    const maxActivity = Math.max(...data.map((d) => d.count), 1);

    return {
      weeks,
      stats: {
        total: totalActivity,
        average: avgActivity,
        max: maxActivity,
      },
      monthLabels,
    };
  }, [data]);

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const formatDateFull = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-heading">{title}</h2>

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
      {showStats && (
        <div className="flex items-center gap-8 mb-6 text-sm">
          <p className="text-gray-500">
            Total activity:
            <span className="ml-1 font-semibold text-gray-700">
              {stats.total}
            </span>
          </p>

          <p className="text-gray-500">
            Average daily:
            <span className="ml-1 font-semibold text-gray-700">
              {stats.average}
            </span>
          </p>

          <p className="text-gray-500">
            Peak activity:
            <span className="ml-1 font-semibold text-gray-700">
              {stats.max}
            </span>
          </p>
        </div>
      )}

      {/* Heatmapp */}
      <div className="overflow-x-auto max-w-[900px] heatmap-scroll">
        <div className="flex gap-4">
          {/* Day labels */}
          <div className="flex flex-col space-y-5 gap-1 pt-6">
            {dayLabels.map((day) => (
              <div
                key={day}
                className="w-10 h-6 flex items-center justify-center text-xs font-medium text-gray-600"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div>
            {/* Month labels */}
            <div className="flex gap-14 mb-2 pl-20">
              {monthLabels.map((label, idx) => (
                <div
                  key={idx}
                  className="text-xs font-semibold text-gray-600"
                  style={{
                    marginLeft: idx === 0 ? 0 : `${(label.weekIndex - monthLabels[idx - 1].weekIndex) * 7}px`,
                    width: "30px",
                  }}
                >
                  {label.month}
                </div>
              ))}
            </div>

            {/* Grid of weeks and days */}
            <div className="flex gap-1 ">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col space-y-5 gap-1">
                  {week.map((day, dayIndex) => (
                    <div key={`${weekIndex}-${dayIndex}`}>
                      {day.length > 0 ? (
                        <div
                          className={`w-6 h-6 rounded-sm cursor-pointer transition-all hover:ring-2 hover:ring-offset-1 hover:ring-green-400 ${intensityColor(
                            day[0].count
                          )}`}
                          title={`${formatDateFull(day[0].date)}: ${day[0].count} activities`}
                        />
                      ) : (
                        <div className="w-6 h-6" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusyPeriodsHeatMap;
