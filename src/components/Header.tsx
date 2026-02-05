import Logo from "../assets/logo.svg";
import Budgeting from "../assets/Budgeting.svg"
import Calendar from "../assets/calendar.svg"
import Shop from "../assets/shop.svg"
import Wallet from "../assets/wallet.svg"
import ActivityLog from "../assets/Activity Log.svg"
import { useState } from "react";
import { BudgetingModal } from "../features/dashboard/components/BudgetingModal";
import { CalendarPopover } from "./CalendarPopover";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <>
      <div className="bg-brand-green flex justify-between px-[78px] py-[28px] relative z-50">
        <img src={Logo} />

        <div className="flex gap-x-[20px]">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer"
          >
            <img src={Budgeting} alt="Budgeting" />
          </button>
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className={`cursor-pointer p-2 rounded-lg transition-colors ${
              isCalendarOpen ? "bg-white/10" : ""
            }`}
          >
            <img src={Calendar} alt="Calendar" />
          </button>
          <img src={ActivityLog} alt="" />
          <img src={Wallet} alt="" />
          <img src={Shop} alt="" />
          <div className="w-[40px] h-[40px] bg-brand-light rounded-[200px] flex items-center justify-center">
            <h1 className="text-brand-green text-[23px] font-medium">D</h1>
          </div>
        </div>

        <CalendarPopover
          isOpen={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)}
        />
      </div>

      <BudgetingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
