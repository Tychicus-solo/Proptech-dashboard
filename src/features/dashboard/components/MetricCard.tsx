
interface MetricCardProps {
  label: string;
  value: string;
  colorClass: string;
  icon: string;
  percentage?: string;
}

export const MetricCard = ({
  label,
  value,
  colorClass,
  icon,
  percentage = "2.5%",
}: MetricCardProps) => {
  return (
    <div className="relative flex flex-col gap-1 border border-[#F4F4F5] rounded-[12px] px-[15px] py-[13px] bg-white overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-[4px]"
        style={{ backgroundColor: colorClass }}
      />

      <div className="flex items-center gap-2 mt-2">
        <h3
          className="text-[19px] font-bold tracking-tight"
          style={{ color: colorClass }}
        >
          {value}
        </h3>
      </div>

      <div className="flex items-center gap-1.5">
        <p className="text-[10px] text-[#3D3D3D] font-medium">{label}</p>
        <img src={icon} alt="" className="w-4 h-4 object-contain" />
        <span className="text-[10px] text-[#3D3D3D] font-medium">
          {percentage}
        </span>
      </div>
    </div>
  );
};