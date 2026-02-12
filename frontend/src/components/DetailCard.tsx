interface DetailCardItem {
  label: string;
  value: number;
}

interface DetailCardProps {
  title: string;
  items: DetailCardItem[];
}

export default function DetailCard({ title, items }: DetailCardProps) {
  const maxValue = Math.max(...items.map((item) => item.value), 0);

  return (
    <div
      className="bg-white border-l-4 border-green-200 p-2.5 mt-3 w-3/4 shadow-md animate-[fadeSlide_3.00s_ease-out]"
    >
      <h4 className="text-[12px] font-semibold text-cream-500 mb-2 uppercase tracking-wide">
        {title}
      </h4>

      <div className="flex flex-col gap-1.5">
        {items.map((item) => {
          const widthPercent =
            maxValue > 0 ? (item.value / maxValue) * 100 : 0;

          return (
            <div
              key={item.label}
              className="grid grid-cols-[70px_1fr_35px] items-center gap-1 text-[12px]"
            >
              {/* Label */}
              <span className="text-black truncate font-bold">
                {item.label}
              </span>

              {/* Bar */}
              <div className="h-2 bg-coffee-300">
                <div
                  className="h-2 bg-green-200 transition-all duration-700 ease-out"
                  style={{ width: `${widthPercent}%` }}
                />
              </div>

              {/* Value */}
              <span className="text-black font-bold text-right">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
