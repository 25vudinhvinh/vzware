import { useState, useEffect } from "react";

function Attendance() {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [attendanceInfo, setAttendanceInfo] = useState({
        timeIn: "",
        timeOut: "",
    });

    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString("vi-VN", { hour12: false })
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(
                new Date().toLocaleTimeString("vi-VN", { hour12: false })
            );
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleAttendance = () => {
        if (!isCheckedIn) {
            setAttendanceInfo({
                ...attendanceInfo,
                timeIn: new Date().toLocaleTimeString("vi-VN", {
                    hour12: false,
                }),
            });
        } else {
            setAttendanceInfo({
                ...attendanceInfo,
                timeOut: new Date().toLocaleTimeString("vi-VN", {
                    hour12: false,
                }),
            });
        }
        setIsCheckedIn(!isCheckedIn);
    };

    return (
        <div className="w-full h-full bg-white flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-6">
                {/* Phần thông tin chấm công */}
                <div className="lg:w-1/2 space-y-6">
                    <div className="w-full bg-gray-100 border border-gray-300 p-3 rounded-xl">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Thông tin chấm công
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nhân viên
                            </label>
                            <input
                                type="text"
                                value="Vu Dinh Vinh"
                                readOnly
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phòng ban
                            </label>
                            <input
                                type="text"
                                value="IT"
                                readOnly
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Ngày
                            </label>
                            <input
                                type="text"
                                value={new Date().toLocaleDateString()}
                                readOnly
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Hình thức
                            </label>
                            <select
                                name=""
                                id=""
                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer"
                            >
                                <option
                                    value="company"
                                    selected
                                    className="py-2 hover:bg-gray-100"
                                >
                                    Làm việc tại công ty
                                </option>
                                <option
                                    value="wfh"
                                    className="py-2 hover:bg-gray-100"
                                >
                                    Làm việc từ xa
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Địa điểm
                        </label>
                        <input
                            type="text"
                            value="25/D7 Phố Dịch Vọng, Cầu Giấy, Hà Nội"
                            readOnly
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                            Lịch sử hôm nay
                        </h3>
                        <div className="space-y-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Thời gian vào
                                </label>
                                <input
                                    type="text"
                                    value={attendanceInfo.timeIn}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Thời gian ra
                                </label>
                                <input
                                    type="text"
                                    value={attendanceInfo.timeOut}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Phần nút chấm công */}
                <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-4">
                    <button
                        onClick={handleAttendance}
                        className="w-62 h-62 rounded-full p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-4xl font-bold flex items-center justify-center border-10 border-blue-200 shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        {isCheckedIn ? "Chấm công ra" : "Chấm công vào"}
                    </button>
                    <p className="text-6xl mt-2text-gray-700">{currentTime}</p>
                </div>
            </div>
        </div>
    );
}

export default Attendance;
