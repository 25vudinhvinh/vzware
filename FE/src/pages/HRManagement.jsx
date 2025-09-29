import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png";

function HRManagement() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1));
    const sampleData = [
        { name: "Nguyễn Văn A", days: [1, 3, 5, 10, 15, 20] },
        { name: "Trần Thị B", days: [2, 4, 6, 12, 18] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
        { name: "Lê Văn C", days: [7, 8, 9, 25] },
    ];

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = daysInMonth(year, month);

        // header table
        const headerDays = [];
        for (let i = 1; i <= days; i++) {
            headerDays.push(
                <th
                    key={i}
                    className="text-center text-gray-700 px-4 py-3 select-none"
                >
                    {i}
                </th>
            );
        }

        const rows = sampleData.map((person, index) => {
            const total = person.days.length;
            const cells = [];
            for (let i = 1; i <= days; i++) {
                cells.push(
                    <td key={i} className="text-center h-6 align-middle">
                        {person.days.includes(i) && (
                            <span className="w-1 h-1 bg-blue-400 rounded-full inline-block"></span>
                        )}
                    </td>
                );
            }
            return (
                <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                    <td className="p-2 flex items-center gap-3 min-w-2.5 mr-6 text-gray-700 whitespace-nowrap">
                        <img className="w-10" src={avatar} alt="" />
                        <span className="flex flex-col gap-0.5">
                            <p className="font-bold">{person.name}</p>
                            <p className="text-sm">example.vzcom@gmail.com</p>
                        </span>
                    </td>
                    <td className="text-center p-2">{total}</td>
                    {cells}
                </tr>
            );
        });

        return (
            <div className="max-h-[80vh] overflow-y-auto scroll-auto scrollbar-none">
                {" "}
                {/* Thẻ div chứa bảng */}
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-blue-100 z-10">
                        <tr>
                            <th className="text-gray-700 w-36 py-3">
                                Họ và tên
                            </th>
                            <th className="text-center text-nowrap text-gray-700 px-5 py-3">
                                Tổng số
                            </th>
                            {headerDays}
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    };

    const prevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    return (
        <div className="p-3 mx-auto h-fit">
            <h1 className="text-2xl font-bold mb-4">Quản lý nhân sự</h1>
            <div className="flex items-center mb-4 gap-3">
                <h2 className="text-lg font-semibold mr-4">
                    Tháng {currentDate.getMonth() + 1}/
                    {currentDate.getFullYear()}
                </h2>
                <button
                    onClick={prevMonth}
                    className="p-1 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                    onClick={nextMonth}
                    className="p-1 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            {renderCalendar()}
            <div className="">
                <p className="text-sm text-gray-600">
                    Ghi chú: Thêm thông tin hoặc ghi chú của bạn tại đây.
                </p>
            </div>
        </div>
    );
}

export default HRManagement;
