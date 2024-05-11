import React from "react";

interface MontTableProps {
  month: number;
  year: number;
  selectedDate: number | null; // Use the selectedDate prop passed from the Calendar component
  onDateSelect: (date: number) => void;
}

const MonthTable = ({ month, year, selectedDate, onDateSelect  }: MontTableProps) => {
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysArray: (number | null)[] = Array.from(
    { length: daysInMonth },
    (_, i) => i + 1
  );

  // Add empty days at the start
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.unshift(null);
  }

  const getDayOfWeek = (year: number, month: number, day: number | null) => {
    if (day) {
      const dayOfWeek = new Date(year, month, day).getDay();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // Array of day names
      return days[dayOfWeek];
    }
  };

  const handleClick = (day: number) => {
    onDateSelect(day); // Call the onDateSelect callback function from the Calendar component
  };

  const isInRange = (day: number | null) => {
    if (!day || !selectedDate) return false;
    const index = daysArray.indexOf(day);
    const selectedIndex = daysArray.indexOf(selectedDate);
    return (
      index >= selectedIndex &&
      index <= selectedIndex + 3 &&
      index !== 0 &&
      index !== daysArray.length - 1
    );
  };
  const isAtRangeBorder = (day: number | null) => {
    if (!day || !selectedDate) return false;
    const index = daysArray.indexOf(day);
    const selectedIndex = daysArray.indexOf(selectedDate);
    return index === selectedIndex || index === selectedIndex + 4;
  };
  return (
    <div className="calendar">
      <div className="month-name">
        {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
        {year}
      </div>
      <div className="days">
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`day ${getDayOfWeek(year, month, day) === "Sun" ? "sunday" : ""
              } ${ isInRange(day) ? "in-range" : ""}
              ${ isAtRangeBorder(day) ? "range-border" : ""
              }`}
          >
            <div
              className={`day-container ${ selectedDate === day ? "selected" : ""
                } `}
              onClick={() => handleClick(day as number)}
            >
              {day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthTable;
