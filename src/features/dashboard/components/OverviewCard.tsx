interface StatItem {
  label: string;
  value: string;
}

interface OverviewCardProps {
  title: string;
  icon: string;
  stats: StatItem[];
}

export const OverviewCard = ({ title, icon, stats }: OverviewCardProps) => {
  return (
    <div className="bg-white rounded-[16px] border-[0.5px] border-[#e4e4e4] w-full">
      <div className="flex justify-between items-center px-[16px] py-[13px] border-b-[0.5px] border-[#e4e4e4] bg-[#F9FAFB]">
        <div className="flex items-center gap-[8px] ">
          <img src={icon} alt="" className="w-[20px] h-[20px]" />
          <h2 className="text-[#344054] text-[14px] font-semibold">{title}</h2>
        </div>
        <button className="text-[#4545FE] text-[12px] font-medium flex items-center gap-1">
          View all
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 9L7.5 6L4.5 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between px-[16px] py-[20px]">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex flex-col ">
            <span className="text-[#525252] text-[14px] font-medium">
              {stat.label}
            </span>
            <span className="text-[#141414] text-[24px] font-semibold">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
