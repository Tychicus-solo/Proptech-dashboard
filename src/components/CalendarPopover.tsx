import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import { createPortal } from "react-dom";
import { useState } from "react";

interface CalendarPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarPopover = ({ isOpen, onClose }: CalendarPopoverProps) => {
  const [selectedDate, setSelectedDate] = useState(16);

  if (!isOpen) return null;

  const days = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

  const calendarWeeks = [
    [29, 30, 31, "Nov 1", 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, "DEC 1"],
  ];

  return createPortal(
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

      {/* Calendar Sidebar */}
      <div className="fixed right-0 top-[100px] bottom-0 z-50 w-[486px] pointer-events-auto">
        <div className="h-full bg-black shadow-2xl overflow-auto border-l border-[#333333]">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#2A2A2A]">
            <button
              onClick={onClose}
              className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} strokeWidth={2} />
              <span className="text-[17px] font-semibold">Calendar</span>
            </button>

            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Calendar Body */}
          <div className="px-8 py-8">
            {/* Month Navigation */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <button className="text-white/60 hover:text-white transition-colors">
                <ChevronLeft size={20} strokeWidth={2} />
              </button>

              <h2 className="text-[18px] font-bold text-white min-w-[160px] text-center tracking-tight">
                November 2023
              </h2>

              <button className="text-white/60 hover:text-white transition-colors">
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>

            <div className="border border-[#2A2A2A] rounded-lg overflow-hidden">
              <div className="grid grid-cols-7 bg-black border-b border-[#2A2A2A]">
                {days.map((day, index) => (
                  <div
                    key={day}
                    className={`
                      h-12 flex items-center justify-center 
                      text-[10px] font-bold tracking-[0.08em] text-[#6B7280]
                      ${index < 6 ? "border-r border-[#2A2A2A]" : ""}
                    `}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {calendarWeeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7">
                  {week.map((day, dayIndex) => {
                    const dayNum =
                      typeof day === "string" ? parseInt(day) || day : day;
                    const isCurrentMonth =
                      typeof day === "number" &&
                      day <= 30 &&
                      (weekIndex > 0 || dayIndex >= 3);
                    const isSelected =
                      dayNum === selectedDate && isCurrentMonth;
                    const isPrevNextMonth = !isCurrentMonth;
                    const isFirstDay = day === "Nov 1";
                    const isLastDay = day === "DEC 1";
                    const isLastRow = weekIndex === calendarWeeks.length - 1;
                    const isLastCol = dayIndex === 6;

                    return (
                      <div
                        key={dayIndex}
                        className={`
                          relative h-16 flex items-center justify-center
                          bg-black
                          ${!isLastCol ? "border-r border-[#2A2A2A]" : ""}
                          ${!isLastRow ? "border-b border-[#2A2A2A]" : ""}
                        `}
                      >
                        <button
                          onClick={() =>
                            typeof dayNum === "number" &&
                            isCurrentMonth &&
                            setSelectedDate(dayNum)
                          }
                          className={`
                            w-10 h-10 flex items-center justify-center
                            text-[14px] font-medium rounded-lg
                            transition-all duration-150
                            ${
                              isSelected
                                ? "bg-[#2F6BFF] text-white"
                                : isPrevNextMonth
                                ? "text-[#404040] hover:text-[#606060] hover:bg-[#1A1A1A]"
                                : "text-[#E5E5E5] hover:bg-[#1A1A1A] hover:text-white"
                            }
                          `}
                        >
                          {isFirstDay || isLastDay ? (
                            <span className="text-[11px] font-semibold">
                              {day}
                            </span>
                          ) : (
                            dayNum
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};
