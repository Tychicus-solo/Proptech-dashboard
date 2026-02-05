
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData } from "../data";
import { MetricCard } from "./MetricCard";
import Upward from "../../../assets/upward.svg";
import Downward from "../../../assets/downward.svg";

export const SalesChart = () => {
  return (
    <div className="bg-white border border-[#e4e4e4] rounded-[12px] p-[24px] flex flex-col h-[325px]">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-[#1D2939] text-[16px] font-bold">
            Sales Overview
          </h2>
          <p className="text-[#667085] text-[12px] mt-1">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button className="text-[12px] font-semibold border border-[#E4E7EC] px-[24px] py-[10px] rounded-[75px] text-[#344054] hover:bg-gray-50 transition-colors">
            View Transactions
          </button>
          <div className="flex items-center gap-6 pr-2">
            {["1 Week", "1 Month", "1 Year"].map((tab) => (
              <button
                key={tab}
                className={`text-[12px] font-semibold transition-all ${
                  tab === "1 Year"
                    ? "text-[#3D3D3D] bg-[#F5F5F5] px-3 py-1 rounded-md"
                    : "text-[#98A2B3]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-8 flex-1">
        <div className="h-[180px] w-[50%]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={salesData}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F2F4F7"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#98A2B3", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#98A2B3", fontSize: 12 }}
                ticks={[0, 10, 20, 30, 40, 50]}
                tickFormatter={(value) => (value === 0 ? "0" : `${value}m`)}
              />
              <Tooltip
                cursor={{ fill: "#F9FAFB" }}
                contentStyle={{ borderRadius: "8px", border: "none" }}
              />
              <Bar
                dataKey="value1"
                fill="#4545FE"
                radius={[2, 2, 0, 0]}
                barSize={6}
              />
              <Bar
                dataKey="value2"
                fill="#12B76A"
                radius={[2, 2, 0, 0]}
                barSize={6}
              />
              <Bar
                dataKey="value3"
                fill="#F04438"
                radius={[2, 2, 0, 0]}
                barSize={6}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-x-[16px] gap-y-[14px] w-[50%] pt-0">
          <MetricCard
            label="Total Inflow"
            value="₦120,000,000.00"
            colorClass="text-[#4545FE]"
            icon={Upward}
          />
          <MetricCard
            label="MRR"
            value="₦50,000,000.00"
            colorClass="text-[#12B76A]"
            icon={Upward}
          />
          <MetricCard
            label="Commission Revenue"
            value="₦200,000,000.00"
            colorClass="text-[#0E9384]"
            icon={Upward}
          />
          <MetricCard
            label="GMV"
            value="₦100,000,000.00"
            colorClass="text-[#F04438]"
            icon={Downward}
          />
        </div>
      </div>
    </div>
  );
};
