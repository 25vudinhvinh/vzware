import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import CalendarPopup from "../popups/CalendarPopup";

function Calendar() {
    const [showPopup, setShowPopup] = useState(false);

    const events = [
        { title: "Event 1", date: "2025-09-23" },
        { title: "Event 2", date: "2025-09-24" },
        { title: "Event 3", date: "2025-09-25" },
    ];

    return (
        <div className="m-3 relative">
            <div>
                <FullCalendar
                    locale="vi"
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    firstDay={1}
                    headerToolbar={{
                        right: "today prev,next",
                        center: "title",
                        left: "dayGridMonth,dayGridWeek,dayGridDay",
                    }}
                    events={events}
                    dayCellClassNames={(arg) => {
                        const isToday = arg.isToday;
                        const isWeekend =
                            arg.date.getDay() === 0 || arg.date.getDay() === 6;
                        if (isToday) {
                            return "bg-blue-50";
                        }
                        if (isWeekend) {
                            return "bg-gray-100 text-gray-500";
                        }
                        return "";
                    }}
                    dayHeaderClassNames={(arg) => {
                        const isWeekend =
                            arg.date.getDay() === 0 || arg.date.getDay() === 6;
                        return isWeekend ? "text-gray-500" : "text-gray-800";
                    }}
                />
            </div>
            {/* add event */}
            <div className="absolute top-[2px] right-[180px]">
                <button
                    onClick={() => setShowPopup((prev) => !prev)}
                    className="px-[18px] py-[7px] bg-green-600 rounded text-white font-medium cursor-pointer"
                >
                    Mới
                </button>
            </div>

            {/* overlay */}
            {showPopup && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-30"
                    onClick={() => setShowPopup((prev) => !prev)}
                ></div>
            )}
            {/* popup content */}
            {showPopup && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white min-w-[550px] min-h-[400px] z-20 rounded-xl shadow-2xl">
                    <CalendarPopup setShowPopup={setShowPopup} />
                </div>
            )}
        </div>
    );
}

export default Calendar;
