import React, { useState } from "react";
import MonthTable from "./MonthTable";

interface CalendarProps {
  specificDate: boolean;
  daysRange: number; 
}

const Calendar = ({ specificDate,daysRange }: CalendarProps) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekDayNameMap: { [key: string]: string } = {
    Sun: "S",
    Mon: "M",
    Tue: "T",
    Wed: "W",
    Thu: "T",
    Fri: "F",
    Sat: "S",
  };
  const months = [0, 1, 2, 3, 4, 5];
  const [selectedDate, setSelectedDate] = useState<string | null>(''); // Initialize selected date with specificDate prop

  const handleDateSelect = (date: string) => {
    if (selectedDate === date) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <div className="calendar-container">
      <div className="weekdays">
        {weekdays.map((day) => (
          <div key={day} className={`weekday ${day === "Sun" ? "sunday" : ""}`}>
            {weekDayNameMap[day]}
          </div>
        ))}
      </div>
      {months.map((month, index) => (
        <MonthTable
          key={index}
          month={month}
          year={2024}
          selectedDate={selectedDate}
          daysRange={daysRange}
          onDateSelect={handleDateSelect}
        />
      ))}
    </div>
  );
};

export default Calendar;
