import BarChart from "../../../assets/barchart.svg";
import Trend from "../../../assets/trend-up.svg";
import Settings from "../../../assets/setting.svg";

interface BudgetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BudgetingModal = ({ isOpen, onClose }: BudgetingModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-[24px] w-[438px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">

        <div className="bg-[#0B1B2B] h-[200px] relative flex items-center justify-center">

          <div className="w-[80px] h-[80px] rounded-[16px] border-2 border-white/20 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1 p-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-1.5 bg-white rounded-full opacity-80"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 space-y-8 px-[47px]">
          <div className="space-y-6">
            <ModalItem
              icon={<img src={Settings} className="w-[24px] h-[24px]" />}
              title="Set up annual budgets by account category"
              description="Allocate funds across income and expense lines with full visibility."
            />
            <ModalItem
              icon={<img src={Trend} className="w-[24px] h-[24px]" />}
              title="Track actuals vs budget in real time"
              description="See how your community is performing against plan, month by month."
            />
            <ModalItem
              icon={<img src={BarChart} className="w-[24px] h-[24px]" />}
              title="Adjust figures and forecast with ease"
              description="Edit amounts, apply percentage changes, or roll forward last year’s data all in one place."
            />
          </div>

          <button className="w-full bg-[#18181B] text-white py-4 rounded-full font-semibold text-[16px] hover:bg-black transition-all">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalItem = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="">{icon}</div>
    <div>
      <h4 className="text-[16px] font-bold text-[#1D2939] leading-tight">
        {title}
      </h4>
      <p className="text-[14px] text-[#667085] mt-1">{description}</p>
    </div>
  </div>
);
